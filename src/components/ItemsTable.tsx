
import React from 'react';
import { itemDictionary } from '@/data/items';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ItemsTable: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        📋 כל הפרקים הזמינים
      </h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-purple-100">
              <TableHead className="text-purple-900 font-semibold">שם הפרק</TableHead>
              <TableHead className="text-purple-900 font-semibold text-right">מחיר</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {itemDictionary.map((item) => (
              <TableRow key={item.id} className="hover:bg-purple-50 border-gray-100">
                <TableCell className="text-gray-800">{item.name}</TableCell>
                <TableCell className="text-right font-semibold text-purple-900">
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
