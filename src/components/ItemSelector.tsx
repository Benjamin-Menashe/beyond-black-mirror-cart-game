
import React from 'react';
import { Item } from '@/data/items';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShoppingBag } from 'lucide-react';

interface ItemSelectorProps {
  category: 'recommended' | 'thought-provoking' | 'personal';
  items: Item[];
  selectedItemId: string | null;
  onItemSelect: (itemId: string | null) => void;
  categoryLabel: string;
  categoryIcon: React.ReactNode;
}

const ItemSelector: React.FC<ItemSelectorProps> = ({
  category,
  items,
  selectedItemId,
  onItemSelect,
  categoryLabel,
  categoryIcon,
}) => {
  const selectedItem = items.find(item => item.id === selectedItemId);

  const handleValueChange = (value: string) => {
    if (value === 'no-selection') {
      onItemSelect(null);
    } else {
      onItemSelect(value);
    }
  };

  return (
    <div className="bg-gray-800 border border-purple-600 rounded-xl shadow-lg p-6 hover:shadow-xl hover:border-purple-500 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        {categoryIcon}
        <div>
          <h3 className="text-lg font-semibold text-white">{categoryLabel}</h3>
          <p className="text-sm text-gray-400">בחרו פרק אחד מהקטגוריה הזאת</p>
        </div>
      </div>

      <Select value={selectedItemId || 'no-selection'} onValueChange={handleValueChange}>
        <SelectTrigger className="w-full h-12 text-left bg-purple-900/50 border-purple-600 hover:bg-purple-900/70 transition-colors text-white">
          <SelectValue placeholder="בחירת פרק...">
            {selectedItem && (
              <div className="flex items-center justify-between w-full">
                <span className="font-medium">{selectedItem.name}</span>
                <span className="text-purple-200 font-semibold">${selectedItem.price.toFixed(2)}</span>
              </div>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-gray-800 border border-purple-600 shadow-xl z-50">
          <SelectItem value="no-selection" className="text-gray-400 hover:bg-purple-900/50 focus:bg-purple-900/50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              לא נבחר פרק
            </div>
          </SelectItem>
          {items.map((item) => (
            <SelectItem 
              key={item.id} 
              value={item.id}
              className="hover:bg-purple-900/50 focus:bg-purple-900/50 cursor-pointer py-3 text-white"
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-medium">{item.name}</span>
                <span className="text-purple-200 font-semibold ml-4">${item.price.toFixed(2)}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedItem && (
        <div className="mt-3 p-3 bg-purple-900/50 border border-purple-600 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-purple-300">נבחר:</span>
            <span className="text-sm font-bold text-purple-200">${selectedItem.price.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemSelector;
