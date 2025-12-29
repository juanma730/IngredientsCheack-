
import React from 'react';
import { Status } from '../types';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';

interface StatusBadgeProps {
  label: string;
  status: Status;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ label, status }) => {
  const getStyles = () => {
    switch (status) {
      case 'Yes':
        return {
          bg: 'bg-emerald-500/10',
          border: 'border-emerald-500/30',
          text: 'text-emerald-400',
          icon: <CheckCircle className="w-5 h-5 mr-2" />
        };
      case 'No':
        return {
          bg: 'bg-rose-500/10',
          border: 'border-rose-500/30',
          text: 'text-rose-400',
          icon: <XCircle className="w-5 h-5 mr-2" />
        };
      case 'Depends':
        return {
          bg: 'bg-amber-500/10',
          border: 'border-amber-500/30',
          text: 'text-amber-400',
          icon: <HelpCircle className="w-5 h-5 mr-2" />
        };
      default:
        return {
          bg: 'bg-gray-500/10',
          border: 'border-gray-500/30',
          text: 'text-gray-400',
          icon: <HelpCircle className="w-5 h-5 mr-2" />
        };
    }
  };

  const { bg, border, text, icon } = getStyles();

  return (
    <div className={`${bg} ${border} border rounded-2xl p-4 flex flex-col items-center justify-center transition-all duration-300`}>
      <span className="text-xs uppercase font-semibold text-gray-400 mb-2">{label}</span>
      <div className={`flex items-center text-lg font-bold ${text}`}>
        {icon}
        {status}
      </div>
    </div>
  );
};

export default StatusBadge;
