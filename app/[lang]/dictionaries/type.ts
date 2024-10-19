export type DataType = {
  header: {
    siteName: string;
    menu: Array<{
      id: string;
      name: string;
    }>;
  };
  hero: {
    headline: string;
    description: string;
    primary_cta: string;
    secondary_cta: string;
  };
  features: {
    id: string;
    title: string;
    featureList: { name: string; description: string; id: string }[];
  };
  pricing: {
    title: string;
    description: string;
    plans: Array<{
      id: string;
      name: string;
      monthlyPrice: string;
      description: string;
      features: string[];
      buttonText: string;
      buttonVariant: string;
      mostPopular?: boolean;
    }>;
  };
  footer: {
    about: {
      title: string;
      description: string;
    };
    links: {
      title: string;
      links: Array<{
        id: string;
        name: string;
      }>;
    };
    contact: {
      title: string;
      email: { name: string; address: string };
      phone: { name: string; number: string };
    };
    social: {
      title: string;
      links: Array<{ id: string; link: string }>;
    };
  };
};
