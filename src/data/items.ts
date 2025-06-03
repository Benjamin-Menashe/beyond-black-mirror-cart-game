
export interface Item {
  id: string;
  name: string;
  nameEnglish: string;
  price: number;
  category: 'recommended' | 'thought-provoking' | 'personal';
  season: number | null;
  episode: number | string;
}

export const itemDictionary: Item[] = [
  // All items can be selected in any category
  { id: 'item1', name: 'ההמנון הלאומי', nameEnglish: 'The National Anthem', price: 7.60, category: 'recommended', season: 1, episode: 1 },
  { id: 'item2', name: '15 מיליון נקודות', nameEnglish: 'Fifteen Million Merits', price: 8.00, category: 'recommended', season: 2, episode: 1 },
  { id: 'item3', name: 'תולדות חייך', nameEnglish: 'The Entire History of You', price: 8.50, category: 'recommended', season: 3, episode: 1 },
  { id: 'item4', name: 'תכף אשוב', nameEnglish: 'Be Right Back', price: 7.90, category: 'recommended', season: 1, episode: 2 },
  { id: 'item5', name: 'דב לבן', nameEnglish: 'White Bear', price: 8.00, category: 'recommended', season: 2, episode: 2 },
  { id: 'item6', name: 'הרגע של וולדו', nameEnglish: 'The Waldo Moment', price: 6.50, category: 'recommended', season: 3, episode: 2 },
  { id: 'item7', name: 'חג מולד לבן', nameEnglish: 'White Christmas', price: 9.10, category: 'recommended', season: null, episode: 'Sp' },
  { id: 'item8', name: 'תגובת שרשרת', nameEnglish: 'Nosedive', price: 8.30, category: 'recommended', season: 1, episode: 3 },
  { id: 'item9', name: 'נסיעת מבחן', nameEnglish: 'Playtest', price: 8.00, category: 'recommended', season: 2, episode: 3 },
  { id: 'item10', name: 'שתוק ותרקוד', nameEnglish: 'Shut Up and Dance', price: 8.40, category: 'recommended', season: 3, episode: 3 },
  { id: 'item11', name: 'סאן ג\'וניפרו', nameEnglish: 'San Junipero', price: 8.50, category: 'recommended', season: 4, episode: 3 },
  { id: 'item12', name: 'משחקים באש', nameEnglish: 'Men Against Fire', price: 7.50, category: 'recommended', season: 5, episode: 3 },
  { id: 'item13', name: 'השנואים במדינה', nameEnglish: 'Hated in the Nation', price: 8.40, category: 'recommended', season: 6, episode: 3 },
  { id: 'item14', name: 'החללית קאליסטר', nameEnglish: 'USS Callister', price: 8.30, category: 'recommended', season: 1, episode: 4 },
  { id: 'item15', name: 'ארקאנג\'ל', nameEnglish: 'Arkangel', price: 7.30, category: 'recommended', season: 2, episode: 4 },
  { id: 'item16', name: 'קרוקודיל', nameEnglish: 'Crocodile', price: 7.30, category: 'recommended', season: 3, episode: 4 },
  { id: 'item17', name: 'Hang the DJ', nameEnglish: 'Hang the DJ', price: 8.70, category: 'recommended', season: 4, episode: 4 },
  { id: 'item18', name: 'מטאלהד', nameEnglish: 'Metalhead', price: 6.60, category: 'recommended', season: 5, episode: 4 },
  { id: 'item19', name: 'מוזיאון שחור', nameEnglish: 'Black Museum', price: 8.60, category: 'recommended', season: 6, episode: 4 },
  { id: 'item20', name: 'בנדרסנאץ\'', nameEnglish: 'Bandersnatch', price: 7.10, category: 'recommended', season: null, episode: 'Sp' },
  { id: 'item21', name: 'סטרייקינג וייפרס', nameEnglish: 'Striking Vipers', price: 6.80, category: 'recommended', season: 1, episode: 5 },
  { id: 'item22', name: 'סמית\'רינס', nameEnglish: 'Smithereens', price: 7.50, category: 'recommended', season: 2, episode: 5 },
  { id: 'item23', name: 'רייצ\'ל ג\'ק ואשלי טו', nameEnglish: 'Rachel, Jack and Ashley Too', price: 6.10, category: 'recommended', season: 3, episode: 5 },
  { id: 'item24', name: 'ג\'ואן פשוט איומה', nameEnglish: 'Joan Is Awful', price: 7.40, category: 'recommended', season: 1, episode: 6 },
  { id: 'item25', name: 'לוך הנרי', nameEnglish: 'Loch Henry', price: 7.30, category: 'recommended', season: 2, episode: 6 },
  { id: 'item26', name: 'מעבר לים', nameEnglish: 'Beyond the Sea', price: 7.40, category: 'recommended', season: 3, episode: 6 },
  { id: 'item27', name: 'מייזי דיי', nameEnglish: 'Mazey Day', price: 5.30, category: 'recommended', season: 4, episode: 6 },
  { id: 'item28', name: 'שטן 79', nameEnglish: 'Demon 79', price: 6.70, category: 'recommended', season: 5, episode: 6 },
  { id: 'item29', name: 'אנשים פשוטים', nameEnglish: 'USS Callister', price: 8.10, category: 'recommended', season: 1, episode: 7 },
  { id: 'item30', name: 'בט נואר', nameEnglish: 'USS Callister', price: 7.20, category: 'recommended', season: 2, episode: 7 },
  { id: 'item31', name: 'מלון ריברי', nameEnglish: 'USS Callister', price: 6.70, category: 'recommended', season: 3, episode: 7 },
  { id: 'item32', name: 'צעצוע', nameEnglish: 'USS Callister', price: 7.10, category: 'recommended', season: 4, episode: 7 },
  { id: 'item33', name: 'הספד', nameEnglish: 'USS Callister', price: 8.10, category: 'recommended', season: 5, episode: 7 },
  { id: 'item34', name: 'חללית קליסטר 2', nameEnglish: 'USS Callister 2', price: 8.10, category: 'recommended', season: 6, episode: 7 },
];

export const getItemsByCategory = (category: Item['category']): Item[] => {
  // Return all items since any item can be selected in any category
  return itemDictionary;
};

export const getItemById = (id: string): Item | undefined => {
  return itemDictionary.find(item => item.id === id);
};
