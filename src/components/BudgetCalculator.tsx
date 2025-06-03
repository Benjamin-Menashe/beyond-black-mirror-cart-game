import React, { useState, useMemo } from 'react';
import { getItemsByCategory, getItemById } from '@/data/items';
import ItemSelector from './ItemSelector';
import BudgetDisplay from './BudgetDisplay';
import ItemsTable from './ItemsTable';
import { Star, Brain, Heart, RefreshCw, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

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

  const categoryLabels = {
    recommended: 'פרק מומלץ',
    'thought-provoking': 'פרק מעורר מחשבה',
    personal: 'פרק עם חיבור אישי'
  };

  const categoryIcons = {
    recommended: <Star className="w-4 h-4 text-purple-600" />,
    'thought-provoking': <Brain className="w-4 h-4 text-purple-600" />,
    personal: <Heart className="w-4 h-4 text-purple-600" />
  };

  const { toast } = useToast();

  const { totalSpent, remainingBudget, selectedItemsDetails, selectedItemsWithCategories } = useMemo(() => {
    const itemsWithCategories = [
      selectedItems.personal ? { item: getItemById(selectedItems.personal), category: 'personal' as const } : null,
      selectedItems['thought-provoking'] ? { item: getItemById(selectedItems['thought-provoking']), category: 'thought-provoking' as const } : null,
      selectedItems.recommended ? { item: getItemById(selectedItems.recommended), category: 'recommended' as const } : null,
    ].filter(Boolean);

    const items = itemsWithCategories.map(item => item!.item).filter(Boolean);
    const spent = items.reduce((sum, item) => sum + (item?.price || 0), 0);
    const remaining = TOTAL_BUDGET - spent;

    return {
      totalSpent: spent,
      remainingBudget: remaining,
      selectedItemsDetails: items,
      selectedItemsWithCategories: itemsWithCategories,
    };
  }, [selectedItems]);

  const copySelectionToClipboard = () => {
    if (selectedItemsWithCategories.length === 0) {
      toast({
        title: "אין בחירות להעתיק",
        description: "בחרו פרקים תחילה",
        variant: "destructive",
      });
      return;
    }

    // Reorder for copy: recommended first, then thought-provoking, then personal
    const orderedItems = [
      selectedItems.recommended ? { item: getItemById(selectedItems.recommended), category: 'recommended' as const } : null,
      selectedItems['thought-provoking'] ? { item: getItemById(selectedItems['thought-provoking']), category: 'thought-provoking' as const } : null,
      selectedItems.personal ? { item: getItemById(selectedItems.personal), category: 'personal' as const } : null,
    ].filter(Boolean);

    const summaryText = `${orderedItems.map(({ item, category }) => 
      `${categoryLabels[category]}: ${item!.name} - $${item!.price.toFixed(2)}`
    ).join('\n')}

סה"כ: $${totalSpent.toFixed(2)}
תקציב שנותר: $${remainingBudget.toFixed(2)}`;

    navigator.clipboard.writeText(summaryText).then(() => {
      toast({
        title: "הועתק בהצלחה!",
        description: "סיכום הבחירה הועתק ללוח",
      });
    }).catch(() => {
      toast({
        title: "שגיאה בהעתקה",
        description: "לא ניתן להעתיק ללוח כרגע",
        variant: "destructive",
      });
    });
  };

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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 p-4">
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
          <h1 className="text-4xl font-bold text-black mb-4">
            מבעד למראה השחורה - משחק בחירת הפרקים
          </h1>
          <p className="text-lg text-black max-w-2xl mx-auto">
            בחרו 3 פרקים כך שאתם עומדים בתקציב של 24$. נשמח לשמוע מה בחרתם
          </p>
        </div>

        {/* Item Selectors - Different order for mobile vs desktop */}
        {/* Mobile Layout (vertical stack) - Recommended first */}
        <div className="lg:hidden space-y-6 mb-8">
          <ItemSelector
            category="recommended"
            items={recommendedItems}
            selectedItemId={selectedItems.recommended}
            onItemSelect={(itemId) => handleItemSelect('recommended', itemId)}
            categoryLabel="פרק מומלץ"
            categoryIcon={<Star className="w-6 h-6 text-purple-600" />}
          />

          <ItemSelector
            category="thought-provoking"
            items={thoughtProvokingItems}
            selectedItemId={selectedItems['thought-provoking']}
            onItemSelect={(itemId) => handleItemSelect('thought-provoking', itemId)}
            categoryLabel="פרק מעורר מחשבה"
            categoryIcon={<Brain className="w-6 h-6 text-purple-600" />}
          />

          <ItemSelector
            category="personal"
            items={personalItems}
            selectedItemId={selectedItems.personal}
            onItemSelect={(itemId) => handleItemSelect('personal', itemId)}
            categoryLabel="פרק עם חיבור אישי"
            categoryIcon={<Heart className="w-6 h-6 text-purple-600" />}
          />
        </div>

        {/* Desktop Layout (grid) - Personal, Thought-provoking, Recommended */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-8">
          <ItemSelector
            category="personal"
            items={personalItems}
            selectedItemId={selectedItems.personal}
            onItemSelect={(itemId) => handleItemSelect('personal', itemId)}
            categoryLabel="פרק עם חיבור אישי"
            categoryIcon={<Heart className="w-6 h-6 text-purple-600" />}
          />

          <ItemSelector
            category="thought-provoking"
            items={thoughtProvokingItems}
            selectedItemId={selectedItems['thought-provoking']}
            onItemSelect={(itemId) => handleItemSelect('thought-provoking', itemId)}
            categoryLabel="פרק מעורר מחשבה"
            categoryIcon={<Brain className="w-6 h-6 text-purple-600" />}
          />

          <ItemSelector
            category="recommended"
            items={recommendedItems}
            selectedItemId={selectedItems.recommended}
            onItemSelect={(itemId) => handleItemSelect('recommended', itemId)}
            categoryLabel="פרק מומלץ"
            categoryIcon={<Star className="w-6 h-6 text-purple-600" />}
          />
        </div>

        {/* Budget Display - Below Selectors */}
        <div className="mb-8">
          <BudgetDisplay 
            totalBudget={TOTAL_BUDGET}
            spent={totalSpent}
            remaining={remainingBudget}
          />
        </div>

        {/* Summary and Reset */}
        <div className="bg-gray-100 border border-black rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-black">סיכום הבחירה</h3>
            <div className="flex gap-2">
              <Button 
                onClick={copySelectionToClipboard}
                variant="outline"
                className="flex items-center gap-2 hover:bg-purple-50 border-black text-black hover:text-black"
                disabled={selectedItemsWithCategories.length === 0}
              >
                <Copy className="w-4 h-4" />
                העתק
              </Button>
              <Button 
                onClick={resetSelections}
                variant="outline"
                className="flex items-center gap-2 hover:bg-purple-50 border-black text-black hover:text-black"
              >
                <RefreshCw className="w-4 h-4" />
                איפוס הכל
              </Button>
            </div>
          </div>

          {selectedItemsWithCategories.length > 0 ? (
            <div className="space-y-3">
              {selectedItemsWithCategories.map(({ item, category }) => (
                <div key={`${category}-${item!.id}`} className="flex items-center justify-between p-3 bg-white border border-black rounded-lg">
                  <div className="flex items-center gap-3">
                    {categoryIcons[category]}
                    <div>
                      <div className="text-sm text-gray-600">{categoryLabels[category]}</div>
                      <span className="font-medium text-black">{item!.name}</span>
                    </div>
                  </div>
                  <span className="font-semibold text-black">${item!.price.toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-black pt-3 mt-3">
                <div className="flex items-center justify-between font-bold text-lg">
                  <span className="text-black">סה"כ:</span>
                  <span className={totalSpent > TOTAL_BUDGET ? 'text-red-600' : 'text-black'}>
                    ${totalSpent.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-600 text-center py-8">
              עדיין לא נבחרו פרקים. בחרו פרק אחד מכל קטגוריה למעלה.
            </p>
          )}
        </div>

        {/* Items Table */}
        <ItemsTable />

        {/* Attribution */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            made by Benja and Gilad
          </p>
          <p className="text-sm text-gray-600 mt-1">
            <a 
              href="https://open.spotify.com/show/43JmkztYcLZxuCU7D4NtfL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 underline"
            >
              https://open.spotify.com/show/43JmkztYcLZxuCU7D4NtfL
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;
