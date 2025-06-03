
import React, { useState, useMemo } from 'react';
import { getItemsByCategory, getItemById } from '@/data/items';
import ItemSelector from './ItemSelector';
import BudgetDisplay from './BudgetDisplay';
import ItemsTable from './ItemsTable';
import { Star, Brain, Heart, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BudgetCalculator: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<{
    recommended: string | null;
    'thought-provoking': string | null;
    personal: string | null;
  }>({
    recommended: null,
    'thought-provoking': null,
    personal: null,
  });

  const TOTAL_BUDGET = 24;

  const handleItemSelect = (category: keyof typeof selectedItems, itemId: string | null) => {
    setSelectedItems(prev => ({
      ...prev,
      [category]: itemId,
    }));
  };

  const { totalSpent, remainingBudget, selectedItemsDetails } = useMemo(() => {
    const items = [
      selectedItems.recommended ? getItemById(selectedItems.recommended) : null,
      selectedItems['thought-provoking'] ? getItemById(selectedItems['thought-provoking']) : null,
      selectedItems.personal ? getItemById(selectedItems.personal) : null,
    ].filter(Boolean);

    const spent = items.reduce((sum, item) => sum + (item?.price || 0), 0);
    const remaining = TOTAL_BUDGET - spent;

    return {
      totalSpent: spent,
      remainingBudget: remaining,
      selectedItemsDetails: items,
    };
  }, [selectedItems]);

  const resetSelections = () => {
    setSelectedItems({
      recommended: null,
      'thought-provoking': null,
      personal: null,
    });
  };

  const recommendedItems = getItemsByCategory('recommended');
  const thoughtProvokingItems = getItemsByCategory('thought-provoking');
  const personalItems = getItemsByCategory('personal');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-gray-50 to-purple-200 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with Logo Space */}
        <div className="text-center mb-8">
          <div className="mb-6">
            {/* Logo placeholder - replace src with your logo */}
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-purple-800 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                LOGO
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Smart Budget Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select three items from different categories while staying within your $24 budget. 
            Make thoughtful choices that balance recommendation, reflection, and personal preference.
          </p>
        </div>

        {/* Budget Display */}
        <div className="mb-8">
          <BudgetDisplay 
            totalBudget={TOTAL_BUDGET}
            spent={totalSpent}
            remaining={remainingBudget}
          />
        </div>

        {/* Item Selectors */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <ItemSelector
            category="recommended"
            items={recommendedItems}
            selectedItemId={selectedItems.recommended}
            onItemSelect={(itemId) => handleItemSelect('recommended', itemId)}
            categoryLabel="Most Recommended"
            categoryIcon={<Star className="w-6 h-6 text-purple-700" />}
          />

          <ItemSelector
            category="thought-provoking"
            items={thoughtProvokingItems}
            selectedItemId={selectedItems['thought-provoking']}
            onItemSelect={(itemId) => handleItemSelect('thought-provoking', itemId)}
            categoryLabel="Most Thought-Provoking"
            categoryIcon={<Brain className="w-6 h-6 text-purple-800" />}
          />

          <ItemSelector
            category="personal"
            items={personalItems}
            selectedItemId={selectedItems.personal}
            onItemSelect={(itemId) => handleItemSelect('personal', itemId)}
            categoryLabel="Most Personal"
            categoryIcon={<Heart className="w-6 h-6 text-purple-900" />}
          />
        </div>

        {/* Summary and Reset */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Selection Summary</h3>
            <Button 
              onClick={resetSelections}
              variant="outline"
              className="flex items-center gap-2 hover:bg-purple-100 border-purple-400 text-purple-800"
            >
              <RefreshCw className="w-4 h-4" />
              Reset All
            </Button>
          </div>

          {selectedItemsDetails.length > 0 ? (
            <div className="space-y-3">
              {selectedItemsDetails.map((item, index) => (
                <div key={item!.id} className="flex items-center justify-between p-3 bg-purple-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      index === 0 ? 'bg-purple-700' : 
                      index === 1 ? 'bg-purple-800' : 'bg-purple-900'
                    }`} />
                    <span className="font-medium text-gray-800">{item!.name}</span>
                  </div>
                  <span className="font-semibold text-purple-800">${item!.price.toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-3 mt-3">
                <div className="flex items-center justify-between font-bold text-lg">
                  <span className="text-gray-800">Total:</span>
                  <span className={totalSpent > TOTAL_BUDGET ? 'text-red-600' : 'text-purple-800'}>
                    ${totalSpent.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">
              No items selected yet. Choose one item from each category above.
            </p>
          )}
        </div>

        {/* Items Table */}
        <ItemsTable />

        {/* User Session Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Each user session is independent. Multiple users can make selections simultaneously.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;
