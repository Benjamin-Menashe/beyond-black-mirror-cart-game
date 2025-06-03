
export interface Item {
  id: string;
  name: string;
  price: number;
  category: 'recommended' | 'thought-provoking' | 'personal';
}

export const itemDictionary: Item[] = [
  // Most Recommended Items
  { id: 'rec1', name: 'Premium Coffee Beans', price: 8.50, category: 'recommended' },
  { id: 'rec2', name: 'Wireless Earbuds', price: 12.99, category: 'recommended' },
  { id: 'rec3', name: 'Organic Honey', price: 6.75, category: 'recommended' },
  { id: 'rec4', name: 'Bluetooth Speaker', price: 15.00, category: 'recommended' },
  { id: 'rec5', name: 'Plant-Based Protein Bar', price: 3.25, category: 'recommended' },
  { id: 'rec6', name: 'Bamboo Water Bottle', price: 9.99, category: 'recommended' },
  { id: 'rec7', name: 'Artisan Chocolate', price: 7.50, category: 'recommended' },
  { id: 'rec8', name: 'Herbal Tea Set', price: 11.25, category: 'recommended' },

  // Most Thought-Provoking Items
  { id: 'think1', name: 'Philosophy Book', price: 14.99, category: 'thought-provoking' },
  { id: 'think2', name: 'Meditation Cushion', price: 18.00, category: 'thought-provoking' },
  { id: 'think3', name: 'Puzzle Game', price: 9.50, category: 'thought-provoking' },
  { id: 'think4', name: 'Journal & Pen Set', price: 12.75, category: 'thought-provoking' },
  { id: 'think5', name: 'Brain Training Cards', price: 8.99, category: 'thought-provoking' },
  { id: 'think6', name: 'Mindfulness Guide', price: 6.50, category: 'thought-provoking' },
  { id: 'think7', name: 'Abstract Art Print', price: 16.25, category: 'thought-provoking' },
  { id: 'think8', name: 'Science Experiment Kit', price: 13.99, category: 'thought-provoking' },

  // Most Personal Items
  { id: 'personal1', name: 'Custom Photo Frame', price: 11.99, category: 'personal' },
  { id: 'personal2', name: 'Personalized Mug', price: 8.75, category: 'personal' },
  { id: 'personal3', name: 'Handwritten Letter Kit', price: 5.50, category: 'personal' },
  { id: 'personal4', name: 'Memory Scrapbook', price: 13.50, category: 'personal' },
  { id: 'personal5', name: 'Custom Keychain', price: 4.99, category: 'personal' },
  { id: 'personal6', name: 'Personal Care Set', price: 16.99, category: 'personal' },
  { id: 'personal7', name: 'Favorite Snack Bundle', price: 9.25, category: 'personal' },
  { id: 'personal8', name: 'Comfort Blanket', price: 19.99, category: 'personal' },
];

export const getItemsByCategory = (category: Item['category']): Item[] => {
  return itemDictionary.filter(item => item.category === category);
};

export const getItemById = (id: string): Item | undefined => {
  return itemDictionary.find(item => item.id === id);
};
