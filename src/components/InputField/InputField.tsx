import React from 'react';
import { cn } from '../../lib/cn';

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
}

export const InputField: React.FC<InputFieldProps> = ({ value, onChange, label, placeholder }) => {
  return (
    <div>
      {label && <label className="block mb-1">{label}</label>}
      <input value={value} onChange={onChange} placeholder={placeholder} className={cn("border p-2 rounded w-full")} />
    </div>
  );
};
