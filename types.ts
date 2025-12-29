
export type Status = 'Yes' | 'No' | 'Depends' | 'Unknown';

export interface Ingredient {
  id: string;
  name: string;
  vegetarian: Status;
  vegan: Status;
  halal: Status;
  description: string;
  whyAvoid: string;
  whereFound: string[];
  alternatives: string[];
  similarIngredients?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
