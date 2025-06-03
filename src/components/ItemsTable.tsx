
import React from 'react';
import { itemDictionary } from '@/data/items';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ItemsTable: React.FC = () => {
  return (
    <div className="bg-white border border-black rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-black mb-4 flex items-center gap-2">
        📋 כל הפרקים הזמינים
      </h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 border-black">
              <TableHead className="text-black font-semibold border-r border-black">שם הפרק</TableHead>
              <TableHead className="text-black font-semibold text-right">מחיר</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {itemDictionary.map((item) => (
              <TableRow key={item.id} className="hover:bg-purple-50 border-b border-gray-300">
                <TableCell className="text-black border-r border-gray-300">{item.name}</TableCell>
                <TableCell className="text-right font-semibold text-black">
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
