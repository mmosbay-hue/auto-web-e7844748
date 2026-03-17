import React from 'react';
import { PlusCircle, LogIn, LogOut, BedDouble } from 'lucide-react';

const actions = [
  { icon: PlusCircle, label: 'Thêm đặt phòng', color: 'bg-indigo-500 hover:bg-indigo-600' },
  { icon: LogIn, label: 'Nhận phòng', color: 'bg-green-500 hover:bg-green-600' },
  { icon: LogOut, label: 'Trả phòng', color: 'bg-red-500 hover:bg-red-600' },
  { icon: BedDouble, label: 'Quản lý phòng', color: 'bg-blue-500 hover:bg-blue-600' },
];

const ActionButton = ({ action }) => (
  <button className={`flex items-center justify-center w-full p-4 rounded-xl text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${action.color}`}>
    <action.icon className="h-5 w-5 mr-2" />
    <span>{action.label}</span>
  </button>
);

export default function QuickActions() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg h-full">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Tác vụ nhanh</h3>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <ActionButton key={index} action={action} />
        ))}
      </div>
    </div>
  );
}