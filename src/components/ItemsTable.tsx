
import React from 'react';
import { itemDictionary } from '@/data/items';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ItemsTable: React.FC = () => {
  return (
    <div className="bg-gray-800 border border-purple-600 rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        📋 כל הפרקים הזמינים
      </h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-purple-900/50 border-purple-600">
              <TableHead className="text-purple-200 font-semibold">שם הפרק</TableHead>
              <TableHead className="text-purple-200 font-semibold text-right">מחיר</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {itemDictionary.map((item) => (
              <TableRow key={item.id} className="hover:bg-purple-900/30 border-gray-700">
                <TableCell className="text-white">{item.name}</TableCell>
                <TableCell className="text-right font-semibold text-purple-200">
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
