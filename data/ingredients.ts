
import { Ingredient } from '../types';

export const INITIAL_INGREDIENTS: Ingredient[] = [
  {
    id: 'gelatin',
    name: 'Gelatin',
    vegetarian: 'No',
    vegan: 'No',
    halal: 'No',
    description: 'A protein obtained by boiling skin, tendons, ligaments, and/or bones with water.',
    whyAvoid: 'It is derived from animals, typically pigs or cows, making it unsuitable for vegetarians, vegans, and often those following Halal diets unless certified bovine/fish source.',
    whereFound: ['Gummy candies', 'Marshmallows', 'Yogurts', 'Capsules'],
    alternatives: ['Agar Agar', 'Pectin', 'Carrageenan', 'Guar Gum'],
    similarIngredients: ['Isinglass', 'Animal Collagen']
  },
  {
    id: 'e471',
    name: 'E471 (Mono- and diglycerides)',
    vegetarian: 'Depends',
    vegan: 'Depends',
    halal: 'Depends',
    description: 'A common food additive used as an emulsifier to blend oil and water.',
    whyAvoid: 'It can be derived from either animal fats (pork or beef) or plant oils (soybean or palm). Without certification, its origin is unclear.',
    whereFound: ['Bread', 'Ice cream', 'Margarine', 'Cake mixes'],
    alternatives: ['Soy Lecithin', 'Plant-based Emulsifiers'],
    similarIngredients: ['E472', 'Glycerol']
  },
  {
    id: 'whey',
    name: 'Whey',
    vegetarian: 'Yes',
    vegan: 'No',
    halal: 'Yes',
    description: 'The liquid remaining after milk has been curdled and strained.',
    whyAvoid: 'Vegans avoid it because it is a dairy byproduct. Some vegetarians check the enzyme used in curdling (rennet).',
    whereFound: ['Protein powder', 'Ricotta cheese', 'Baked goods', 'Crackers'],
    alternatives: ['Pea Protein', 'Soy Protein', 'Hemp Protein'],
    similarIngredients: ['Casein', 'Lactose']
  },
  {
    id: 'carmine',
    name: 'Carmine (E120)',
    vegetarian: 'No',
    vegan: 'No',
    halal: 'No',
    description: 'A bright red pigment obtained from crushed cochineal insects.',
    whyAvoid: 'It is made from insects, which disqualifies it from vegetarian, vegan, and most Halal definitions.',
    whereFound: ['Red candies', 'Fruit juices', 'Lipstick', 'Yogurt'],
    alternatives: ['Beet juice', 'Anthocyanins', 'Lycopene'],
    similarIngredients: ['Natural Red 4', 'Cochineal Extract']
  },
  {
    id: 'lecithin',
    name: 'Lecithin (E322)',
    vegetarian: 'Yes',
    vegan: 'Depends',
    halal: 'Yes',
    description: 'A fatty substance naturally occurring in plant and animal tissues.',
    whyAvoid: 'Most commercial lecithin is from soy, but it can sometimes come from egg yolks.',
    whereFound: ['Chocolate', 'Salad dressings', 'Instant foods'],
    alternatives: ['Sunflower Lecithin'],
    similarIngredients: ['E322']
  },
  {
    id: 'glycerin',
    name: 'Glycerin (Glycerol)',
    vegetarian: 'Depends',
    vegan: 'Depends',
    halal: 'Depends',
    description: 'A simple polyol compound used as a sweetener and humectant.',
    whyAvoid: 'Can be sourced from animal tallow or vegetable oils.',
    whereFound: ['Toothpaste', 'Low-fat foods', 'Baked goods'],
    alternatives: ['Vegetable Glycerin'],
    similarIngredients: ['Glycerol', 'E422']
  },
  {
    id: 'rennet',
    name: 'Rennet',
    vegetarian: 'No',
    vegan: 'No',
    halal: 'Depends',
    description: 'A complex set of enzymes used to curdle milk for cheese.',
    whyAvoid: 'Traditionally extracted from the stomachs of young calves.',
    whereFound: ['Hard cheeses', 'Parmesan', 'Cheddar'],
    alternatives: ['Microbial Rennet', 'FPC (Fermentation Produced Chymosin)'],
    similarIngredients: ['Pepsin']
  },
  {
    id: 'casein',
    name: 'Casein',
    vegetarian: 'Yes',
    vegan: 'No',
    halal: 'Yes',
    description: 'The main protein found in milk and cheese.',
    whyAvoid: 'Derived from dairy, so it is strictly not vegan.',
    whereFound: ['Cheese', 'Paint', 'Glue', 'Protein bars'],
    alternatives: ['Soy Protein', 'Almond Milk'],
    similarIngredients: ['Sodium Caseinate']
  },
  {
    id: 'natural-flavors',
    name: 'Natural Flavors',
    vegetarian: 'Depends',
    vegan: 'Depends',
    halal: 'Depends',
    description: 'Broad term for flavors derived from plant or animal sources.',
    whyAvoid: 'Vague labeling makes it impossible to know if it includes castoreum, dairy, or meat extracts.',
    whereFound: ['Almost all processed foods', 'Beverages'],
    alternatives: ['Organic flavors', 'Spices'],
    similarIngredients: ['Artificial Flavors']
  },
  {
    id: 'enzymes',
    name: 'Enzymes',
    vegetarian: 'Depends',
    vegan: 'Depends',
    halal: 'Depends',
    description: 'Biological catalysts used in food processing.',
    whyAvoid: 'Sources range from bacteria and fungi to animal organs.',
    whereFound: ['Bread', 'Cheese', 'Juice clarification'],
    alternatives: ['Microbial enzymes'],
    similarIngredients: ['Protease', 'Lipase']
  }
];
