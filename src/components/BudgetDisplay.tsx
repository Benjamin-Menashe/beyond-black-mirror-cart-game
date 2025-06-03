
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
    <div className="bg-gray-800/80 border border-gray-600 rounded-xl shadow-lg p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-purple-300" />
          מעקב תקציב
        </h2>
        <div className="text-sm text-gray-400">
          תקציב כולל: ${totalBudget.toFixed(2)}
        </div>
      </div>

      <div className="space-y-4">
        {/* Progress Bar */}
        <div className="relative">
          <div className="w-full bg-gray-700 rounded-full h-3">
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
          <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-300">הוצא</span>
              <TrendingUp className="w-4 h-4 text-purple-300" />
            </div>
            <div className="text-xl font-bold text-white mt-1">
              ${spent.toFixed(2)}
            </div>
          </div>

          <div className={`rounded-lg p-4 border ${isOverBudget ? 'bg-red-900/50 border-red-600' : 'bg-gray-700/50 border-gray-600'}`}>
            <div className="flex items-center justify-between">
              <span className={`text-sm font-medium ${isOverBudget ? 'text-red-300' : 'text-gray-300'}`}>
                נותר
              </span>
              <TrendingDown className={`w-4 h-4 ${isOverBudget ? 'text-red-400' : 'text-gray-400'}`} />
            </div>
            <div className={`text-xl font-bold mt-1 ${isOverBudget ? 'text-red-200' : 'text-white'}`}>
              ${remaining.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Status Message */}
        {isOverBudget && (
          <div className="bg-red-900/50 border border-red-600 rounded-lg p-3">
            <p className="text-red-200 text-sm font-medium">
              ⚠️ חרגתם מהתקציב ב ${Math.abs(remaining).toFixed(2)}
            </p>
          </div>
        )}

        {remaining > 0 && remaining < 5 && (
          <div className="bg-yellow-900/50 border border-yellow-600 rounded-lg p-3">
            <p className="text-yellow-200 text-sm font-medium">
              💡 נותרו לכם ${remaining.toFixed(2)} להוצאה
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetDisplay;
