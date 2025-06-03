
export interface Item {
  id: string;
  name: string;
  price: number;
  category: 'recommended' | 'thought-provoking' | 'personal';
}

export const itemDictionary: Item[] = [
  // All items can be selected in any category
  { id: 'item1', name: 'ההמנון הלאומי', price: 7.60, category: 'recommended' },
  { id: 'item2', name: '15 מיליון נקודות', price: 8.00, category: 'recommended' },
  { id: 'item3', name: 'תולדות חייך', price: 8.50, category: 'recommended' },
  { id: 'item4', name: 'תכף אשוב', price: 7.90, category: 'recommended' },
  { id: 'item5', name: 'דב לבן', price: 8.00, category: 'recommended' },
  { id: 'item6', name: 'הרגע של וולדו', price: 6.50, category: 'recommended' },
  { id: 'item7', name: 'חג מולד לבן', price: 9.10, category: 'recommended' },
  { id: 'item8', name: 'תגובת שרשרת', price: 8.30, category: 'recommended' },
  { id: 'item9', name: 'נסיעת מבחן', price: 8.00, category: 'recommended' },
  { id: 'item10', name: 'שתוק ותרקוד', price: 8.40, category: 'recommended' },
  { id: 'item11', name: 'סאן ג\'וניפרו', price: 8.50, category: 'recommended' },
  { id: 'item12', name: 'משחקים באש', price: 7.50, category: 'recommended' },
  { id: 'item13', name: 'השנואים במדינה', price: 8.40, category: 'recommended' },
  { id: 'item14', name: 'החללית קאליסטר', price: 8.30, category: 'recommended' },
  { id: 'item15', name: 'ארקאנג\'ל', price: 7.30, category: 'recommended' },
  { id: 'item16', name: 'קרוקודיל', price: 7.30, category: 'recommended' },
  { id: 'item17', name: 'Hang the DJ', price: 8.70, category: 'recommended' },
  { id: 'item18', name: 'מטאלהד', price: 6.60, category: 'recommended' },
  { id: 'item19', name: 'מוזיאון שחור', price: 8.60, category: 'recommended' },
  { id: 'item20', name: 'בנדרסנאץ\'', price: 7.10, category: 'recommended' },
  { id: 'item21', name: 'סטרייקינג וייפרס', price: 6.80, category: 'recommended' },
  { id: 'item22', name: 'סמית\'רינס', price: 7.50, category: 'recommended' },
  { id: 'item23', name: 'רייצ\'ל ג\'ק ואשלי טו', price: 6.10, category: 'recommended' },
  { id: 'item24', name: 'ג\'ואן פשוט איומה', price: 7.40, category: 'recommended' },
  { id: 'item25', name: 'לוך הנרי', price: 7.30, category: 'recommended' },
  { id: 'item26', name: 'מעבר לים', price: 7.40, category: 'recommended' },
  { id: 'item27', name: 'מייזי דיי', price: 5.30, category: 'recommended' },
  { id: 'item28', name: 'שטן 79', price: 6.70, category: 'recommended' },
  { id: 'item29', name: 'אנשים פשוטים', price: 8.10, category: 'recommended' },
  { id: 'item30', name: 'בט נואר', price: 7.20, category: 'recommended' },
  { id: 'item31', name: 'מלון ריברי', price: 6.70, category: 'recommended' },
  { id: 'item32', name: 'צעצוע', price: 7.10, category: 'recommended' },
  { id: 'item33', name: 'הספד', price: 8.10, category: 'recommended' },
  { id: 'item34', name: 'חללית קליסטר 2', price: 8.10, category: 'recommended' },
];

export const getItemsByCategory = (category: Item['category']): Item[] => {
  // Return all items since any item can be selected in any category
  return itemDictionary;
};

export const getItemById = (id: string): Item | undefined => {
  return itemDictionary.find(item => item.id === id);
};
