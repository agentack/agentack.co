import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "lg" | "md" | "sm";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

type AsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type AsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

const base =
  "inline-flex items-center justify-center gap-2 rounded-control font-semibold " +
  "transition-colors duration-[var(--dur-fast)] ease-[var(--ease-out)] " +
  "disabled:pointer-events-none disabled:opacity-40";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--button-bg)] text-[var(--button-text)] hover:bg-[var(--button-bg-hover)] active:bg-[var(--button-bg-active)]",
  secondary:
    "border-[1.5px] border-[var(--headline)] bg-transparent text-[var(--headline)] hover:bg-[var(--soft)]",
  ghost: "bg-transparent text-[var(--headline)] hover:text-[var(--gold-text)]",
};

/** Small is 44px on purpose: the brand's own touch-target minimum. */
const sizes: Record<ButtonSize, string> = {
  lg: "h-[52px] px-7 text-[1rem]",
  md: "h-11 px-5 text-[0.9375rem]",
  sm: "h-11 px-4 text-[0.875rem]",
};

export function Button(props: AsButton | AsLink) {
  const {
    variant = "primary",
    size = "md",
    fullWidth = false,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className,
  );

  if ("href" in rest && rest.href) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    const { href, ...anchorRest } = anchorProps;
    // Internal routes get client-side navigation; hashes and external URLs stay plain anchors.
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes} {...anchorRest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
