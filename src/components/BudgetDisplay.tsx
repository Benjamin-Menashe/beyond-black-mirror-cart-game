
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
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-blue-600" />
          Budget Tracker
        </h2>
        <div className="text-sm text-gray-500">
          Total Budget: ${totalBudget.toFixed(2)}
        </div>
      </div>

      <div className="space-y-4">
        {/* Progress Bar */}
        <div className="relative">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ${
                isOverBudget ? 'bg-red-500' : percentageUsed > 80 ? 'bg-yellow-500' : 'bg-green-500'
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
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-blue-700">Spent</span>
              <TrendingUp className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-xl font-bold text-blue-800 mt-1">
              ${spent.toFixed(2)}
            </div>
          </div>

          <div className={`rounded-lg p-4 ${isOverBudget ? 'bg-red-50' : 'bg-green-50'}`}>
            <div className="flex items-center justify-between">
              <span className={`text-sm font-medium ${isOverBudget ? 'text-red-700' : 'text-green-700'}`}>
                Remaining
              </span>
              <TrendingDown className={`w-4 h-4 ${isOverBudget ? 'text-red-600' : 'text-green-600'}`} />
            </div>
            <div className={`text-xl font-bold mt-1 ${isOverBudget ? 'text-red-800' : 'text-green-800'}`}>
              ${remaining.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Status Message */}
        {isOverBudget && (
          <div className="bg-red-100 border border-red-300 rounded-lg p-3">
            <p className="text-red-800 text-sm font-medium">
              ⚠️ You're over budget by ${Math.abs(remaining).toFixed(2)}
            </p>
          </div>
        )}

        {remaining > 0 && remaining < 5 && (
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3">
            <p className="text-yellow-800 text-sm font-medium">
              💡 You have ${remaining.toFixed(2)} left to spend
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetDisplay;
