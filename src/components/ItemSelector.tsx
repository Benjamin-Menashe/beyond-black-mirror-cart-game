
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
    <div className="bg-white border border-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        {categoryIcon}
        <div>
          <h3 className="text-lg font-semibold text-black">{categoryLabel}</h3>
          <p className="text-sm text-gray-700">בחרו פרק אחד מהקטגוריה הזאת</p>
        </div>
      </div>

      <Select value={selectedItemId || 'no-selection'} onValueChange={handleValueChange}>
        <SelectTrigger className="w-full h-12 text-left bg-gray-100 border-black hover:bg-purple-50 transition-colors text-black">
          <SelectValue placeholder="בחירת פרק...">
            {selectedItem && (
              <div className="flex items-center justify-between w-full">
                <span className="font-medium">{selectedItem.name}</span>
                <span className="text-black font-semibold">${selectedItem.price.toFixed(2)}</span>
              </div>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent 
          className="bg-white border border-black shadow-xl z-50 max-h-60" 
          side="bottom"
          align="start"
          sideOffset={4}
        >
          <SelectItem value="no-selection" className="text-gray-600 hover:bg-purple-50 focus:bg-purple-50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              לא נבחר פרק
            </div>
          </SelectItem>
          {items.map((item) => (
            <SelectItem 
              key={item.id} 
              value={item.id}
              className="hover:bg-purple-50 focus:bg-purple-50 cursor-pointer py-3 text-black"
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-medium">{item.name}</span>
                <span className="text-black font-semibold ml-4">${item.price.toFixed(2)}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ItemSelector;
