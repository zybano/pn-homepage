const API_BASE_URL = import.meta.env.VITE_API_BASE ?? "/api";

const resolveApiUrl = (path: string) =>
  /^https?:\/\//i.test(path) ? path : `${API_BASE_URL}${path}`;

export type BillingInterval = "MONTH" | "YEAR" | string;

export type PublicPlanPrice = {
  id: string;
  currency?: string | null;
  amountCents?: number | null;
  billingInterval?: BillingInterval | null;
  countryCode?: string | null;
  isDefault?: boolean | null;
};

export type PublicPlan = {
  id: string;
  name: string;
  description?: string | null;
  isDefault?: boolean | null;
  publicName?: string | null;
  summary?: string | null;
  badge?: string | null;
  ctaLabel?: string | null;
  featureBullets?: string[] | null;
  displayPrice?: string | null;
  sortOrder?: number | null;
  prices?: PublicPlanPrice[] | null;
};

const unwrapData = <T,>(payload: any): T => (payload?.data ?? payload) as T;

export const landingApi = {
  async getPublicB2cPlans(countryCode?: string) {
    const query = countryCode
      ? `?${new URLSearchParams({ country: countryCode }).toString()}`
      : "";
    const response = await fetch(resolveApiUrl(`/billing/plans/b2c${query}`), {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Unable to load pricing plans (${response.status})`);
    }

    return unwrapData<PublicPlan[]>(await response.json());
  },
};
