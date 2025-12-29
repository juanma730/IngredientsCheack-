
import React from 'react';

interface AdPlaceholderProps {
  label?: string;
  className?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ label = "Advertisement", className = "" }) => {
  return (
    <div className={`w-full flex flex-col items-center my-8 ${className}`}>
      <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">{label}</span>
      <div className="w-full max-w-[728px] h-[90px] md:h-[250px] bg-white/5 border border-dashed border-white/20 rounded-lg flex items-center justify-center text-gray-400 italic text-sm">
        Ad Slot
      </div>
    </div>
  );
};

export default AdPlaceholder;
