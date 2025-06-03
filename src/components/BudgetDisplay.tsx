
import React from 'react';
import { DollarSign, TrendingDown, TrendingUp } from 'lucide-react';

interface BudgetDisplayProps {
  totalBudget: number;
  spent: number;
  remaining: number;
}

const BudgetDisplay: React.FC<BudgetDisplayProps> = ({ totalBudget, spent, remaining }) => {
  const isOverBudget = remaining < 0;
  const percentageUsed = (spent / totalBudget) * 100;

  return (
    <div className="bg-white border border-black rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-black flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-purple-600" />
          מעקב תקציב
        </h2>
        <div className="text-sm text-gray-700">
          תקציב כולל: <span className="text-black font-semibold">${totalBudget.toFixed(2)}</span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Progress Bar */}
        <div className="relative">
          <div className="w-full bg-gray-300 border border-black rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ${
                isOverBudget ? 'bg-red-500' : percentageUsed > 80 ? 'bg-yellow-500' : 'bg-purple-500'
              }`}
              style={{ width: `${Math.min(percentageUsed, 100)}%` }}
            />
          </div>
          {isOverBudget && (
            <div className="absolute -top-1 right-0 w-2 h-5 bg-red-500 rounded-full" />
          )}
        </div>

        {/* Budget Details */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 border border-black rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-black">הוצא</span>
              <TrendingUp className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-xl font-bold text-black mt-1">
              ${spent.toFixed(2)}
            </div>
          </div>

          <div className={`rounded-lg p-4 border border-black ${isOverBudget ? 'bg-red-100' : 'bg-gray-100'}`}>
            <div className="flex items-center justify-between">
              <span className={`text-sm font-medium ${isOverBudget ? 'text-red-600' : 'text-black'}`}>
                נותר
              </span>
              <TrendingDown className={`w-4 h-4 ${isOverBudget ? 'text-red-600' : 'text-gray-600'}`} />
            </div>
            <div className={`text-xl font-bold mt-1 ${isOverBudget ? 'text-red-600' : 'text-black'}`}>
              ${remaining.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Status Message */}
        {isOverBudget && (
          <div className="bg-red-100 border border-red-600 rounded-lg p-3">
            <p className="text-red-600 text-sm font-medium">
              ⚠️ חרגתם מהתקציב ב <span className="text-black">${Math.abs(remaining).toFixed(2)}</span>
            </p>
          </div>
        )}

        {remaining > 0 && spent > 0 && (
          <div className="bg-yellow-100 border border-yellow-600 rounded-lg p-3">
            <p className="text-yellow-700 text-sm font-medium">
              🪙 נותרו לכם <span className="text-black">${remaining.toFixed(2)}</span> לצדקה
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetDisplay;
