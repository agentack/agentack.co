import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

/**
 * Validation and delivery messages returned by the contact API.
 * Kept small and separate from the page content so the route handler
 * does not pull in the whole dictionary.
 */
export const formMessages = {
  en: {
    name: "Please enter your name.",
    email: "Please enter a valid work email address.",
    company: "Please enter your company name.",
    role: "Please choose a role from the list.",
    market: "Please choose a market from the list.",
    interest: "Please choose an area from the list.",
    budget: "Please choose a budget range from the list.",
    consent: "Please agree to be contacted about this request.",
    checkFields: "Please check the highlighted fields.",
    tooLarge: "That message is too large to send.",
    unreadable: "We could not read that request. Please try again.",
    tooMany: "Too many requests. Please try again later or email us directly.",
    notConfigured: `The form is not connected yet. Please email ${siteConfig.email} directly.`,
    deliveryFailed: `We could not deliver your message. Please try again or email ${siteConfig.email}.`,
  },
  ar: {
    name: "يرجى إدخال الاسم.",
    email: "يرجى إدخال بريد إلكتروني صحيح للعمل.",
    company: "يرجى إدخال اسم الشركة.",
    role: "يرجى اختيار الدور من القائمة.",
    market: "يرجى اختيار السوق من القائمة.",
    interest: "يرجى اختيار المجال من القائمة.",
    budget: "يرجى اختيار نطاق الميزانية من القائمة.",
    consent: "يرجى الموافقة على التواصل بشأن هذا الطلب.",
    checkFields: "يرجى مراجعة الحقول المحددة.",
    tooLarge: "الرسالة أكبر من الحد المسموح.",
    unreadable: "تعذر قراءة الطلب. يرجى المحاولة مرة أخرى.",
    tooMany: "طلبات كثيرة. يرجى المحاولة لاحقًا أو مراسلتنا مباشرة.",
    notConfigured: `النموذج غير متصل بعد. يرجى مراسلتنا مباشرة على ${siteConfig.email}.`,
    deliveryFailed: `تعذر إرسال رسالتك. يرجى المحاولة مرة أخرى أو مراسلتنا على ${siteConfig.email}.`,
  },
} as const satisfies Record<Locale, Record<string, string>>;

/** Message keys shared by every locale, with the literal types widened. */
export type FormMessages = { [K in keyof typeof formMessages.en]: string };
