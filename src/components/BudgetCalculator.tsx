
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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with Logo */}
        <div className="text-center mb-8">
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              <img 
                src="/lovable-uploads/ffffe944-ea09-41fa-bc10-43132dded8f3.png" 
                alt="מבעד למראה השחורה לוגו" 
                className="w-20 h-20 rounded-lg object-contain" 
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            מבעד למראה השחורה - משחק בחירת הפרקים
          </h1>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            בחרו 3 פרקים כך שאתם עומדים בתקציב של 24$. נשמח לשמוע מה בחרתם
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

        {/* Item Selectors - Reversed Order */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <ItemSelector
            category="personal"
            items={personalItems}
            selectedItemId={selectedItems.personal}
            onItemSelect={(itemId) => handleItemSelect('personal', itemId)}
            categoryLabel="פרק עם חיבור אישי"
            categoryIcon={<Heart className="w-6 h-6 text-purple-400" />}
          />

          <ItemSelector
            category="thought-provoking"
            items={thoughtProvokingItems}
            selectedItemId={selectedItems['thought-provoking']}
            onItemSelect={(itemId) => handleItemSelect('thought-provoking', itemId)}
            categoryLabel="פרק מעורר מחשבה"
            categoryIcon={<Brain className="w-6 h-6 text-purple-300" />}
          />

          <ItemSelector
            category="recommended"
            items={recommendedItems}
            selectedItemId={selectedItems.recommended}
            onItemSelect={(itemId) => handleItemSelect('recommended', itemId)}
            categoryLabel="פרק מומלץ"
            categoryIcon={<Star className="w-6 h-6 text-purple-200" />}
          />
        </div>

        {/* Summary and Reset */}
        <div className="bg-gray-800 border border-purple-600 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white">סיכום הבחירה</h3>
            <Button 
              onClick={resetSelections}
              variant="outline"
              className="flex items-center gap-2 hover:bg-purple-900 border-purple-400 text-purple-300 hover:text-white"
            >
              <RefreshCw className="w-4 h-4" />
              איפוס הכל
            </Button>
          </div>

          {selectedItemsDetails.length > 0 ? (
            <div className="space-y-3">
              {selectedItemsDetails.map((item, index) => (
                <div key={item!.id} className="flex items-center justify-between p-3 bg-purple-900/50 border border-purple-600 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      index === 0 ? 'bg-purple-400' : 
                      index === 1 ? 'bg-purple-300' : 'bg-purple-200'
                    }`} />
                    <span className="font-medium text-white">{item!.name}</span>
                  </div>
                  <span className="font-semibold text-purple-200">${item!.price.toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-purple-600 pt-3 mt-3">
                <div className="flex items-center justify-between font-bold text-lg">
                  <span className="text-white">סה"כ:</span>
                  <span className={totalSpent > TOTAL_BUDGET ? 'text-red-400' : 'text-purple-200'}>
                    ${totalSpent.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-400 text-center py-8">
              עדיין לא נבחרו פרקים. בחרו פרק אחד מכל קטגוריה למעלה.
            </p>
          )}
        </div>

        {/* Items Table */}
        <ItemsTable />

        {/* Attribution */}
        <div className="mt-6 text-center">
          <p className="text-sm text-purple-300">
            made by Benja and Gilad
          </p>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;
