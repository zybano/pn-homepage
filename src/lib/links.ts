const stripTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const withDefault = (value: unknown, fallback: string) => {
  if (typeof value !== "string" || !value.trim()) {
    return fallback;
  }

  return value.trim();
};

const appBaseUrl = stripTrailingSlash(
  withDefault(import.meta.env.VITE_APP_BASE_URL, "https://app.precisionnote.com"),
);

export const contactEmail = withDefault(
  import.meta.env.VITE_CONTACT_EMAIL,
  "hello@precisionnote.com",
);

export const links = {
  signIn: `${appBaseUrl}/login`,
  signUp: `${appBaseUrl}/signup`,
  demo: withDefault(import.meta.env.VITE_DEMO_URL, "/how-it-works"),
  contact: "/chat",
  pricing: "/pricing",
  integrations: "/integrations",
  documentation: "/#how-it-works",
  blog: "/blog",
  about: "/about",
  privacy: withDefault(import.meta.env.VITE_PRIVACY_URL, "/chat"),
  terms: withDefault(import.meta.env.VITE_TERMS_URL, "/chat"),
  status: withDefault(import.meta.env.VITE_STATUS_URL, "/"),
  careers: withDefault(import.meta.env.VITE_CAREERS_URL, "/about"),
  twitter: withDefault(import.meta.env.VITE_TWITTER_URL, "https://x.com/precisionnote"),
  linkedIn: withDefault(
    import.meta.env.VITE_LINKEDIN_URL,
    "https://www.linkedin.com/company/precisionnote",
  ),
  instagram: withDefault(
    import.meta.env.VITE_INSTAGRAM_URL,
    "https://www.instagram.com/precisionnote",
  ),
  facebook: withDefault(
    import.meta.env.VITE_FACEBOOK_URL,
    "https://www.facebook.com/precisionnote",
  ),
};

export const isExternalLink = (href: string) => /^https?:\/\//i.test(href);
