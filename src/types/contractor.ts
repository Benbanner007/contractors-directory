export interface Contractor {
  id: string;
  name: string;
  businessName: string;
  category: string;
  specialties: string[];
  description: string;
  phone: string;
  email: string;
  website?: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  serviceAreas: string[];
  yearsInBusiness: number;
  licensed: boolean;
  insured: boolean;
  certifications: string[];
  rating: number;
  reviewCount: number;
  images: {
    logo?: string;
    portfolio: string[];
  };
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  businessHours: {
    [key: string]: {
      open: string;
      close: string;
      closed?: boolean;
    };
  };
}

export interface ContractorCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  subcategories: string[];
}