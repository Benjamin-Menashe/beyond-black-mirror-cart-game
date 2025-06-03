
import React from 'react';
import { itemDictionary } from '@/data/items';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Star, Brain, Heart } from 'lucide-react';

const ItemsTable: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'recommended':
        return <Star className="w-4 h-4 text-purple-500" />;
      case 'thought-provoking':
        return <Brain className="w-4 h-4 text-purple-600" />;
      case 'personal':
        return <Heart className="w-4 h-4 text-purple-700" />;
      default:
        return null;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'recommended':
        return 'Most Recommended';
      case 'thought-provoking':
        return 'Most Thought-Provoking';
      case 'personal':
        return 'Most Personal';
      default:
        return category;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        📋 All Available Items
      </h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-purple-50">
              <TableHead className="text-purple-800 font-semibold">Category</TableHead>
              <TableHead className="text-purple-800 font-semibold">Item Name</TableHead>
              <TableHead className="text-purple-800 font-semibold text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {itemDictionary.map((item) => (
              <TableRow key={item.id} className="hover:bg-purple-25 border-gray-100">
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(item.category)}
                    <span className="text-gray-700 text-sm">
                      {getCategoryLabel(item.category)}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-800">{item.name}</TableCell>
                <TableCell className="text-right font-semibold text-purple-700">
                  ${item.price.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ItemsTable;
