import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export function getTrendIcon(trend) {
  switch (trend) {
    case 'up':
    case 'increase':
    case 'positive':
      return <TrendingUp className="w-4 h-4 text-green-500" />;
    case 'down':
    case 'decrease':
    case 'negative':
      return <TrendingDown className="w-4 h-4 text-red-500" />;
    default:
      return <Minus className="w-4 h-4 text-gray-400" />;
  }
}

export function trendTextColor(trend) {
  if (trend === 'up' || trend === 'increase' || trend === 'positive') return 'text-green-600';
  if (trend === 'down' || trend === 'decrease' || trend === 'negative') return 'text-red-600';
  return 'text-slate-500';
}
