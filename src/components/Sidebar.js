import React, { useState } from 'react';
import { LayoutDashboard, BedDouble, Users, Calendar, Utensils, BarChart2, Settings, ChevronLeft, ChevronRight, Hotel } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { icon: LayoutDashboard, label: 'Bảng điều khiển' },
  { icon: Calendar, label: 'Đặt phòng' },
  { icon: Users, label: 'Khách hàng' },
  { icon: BedDouble, label: 'Phòng' },
  { icon: Utensils, label: 'Dịch vụ' },
  { icon: BarChart2, label: 'Báo cáo' },
  { icon: Settings, label: 'Cài đặt' },
];

const NavItem = ({ item, active, collapsed, onClick }) => (
  <li
    onClick={onClick}
    className={`flex items-center p-3 my-1 font-medium rounded-lg cursor-pointer transition-colors ${
      active
        ? 'bg-indigo-600 text-white shadow-lg'
        : 'text-slate-600 hover:bg-slate-200'
    }`}
  >
    <item.icon className="h-6 w-6" />
    {!collapsed && <span className="ml-4 whitespace-nowrap">{item.label}</span>}
  </li>
);

export default function Sidebar({ activeView, setActiveView }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.nav 
      className="bg-white shadow-xl flex flex-col justify-between z-10"
      animate={{ width: collapsed ? '5rem' : '16rem' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div>
        <div className="flex items-center justify-center p-4 border-b-2 border-slate-200 h-[89px]">
          <Hotel className={`h-10 w-10 text-indigo-600 transition-transform duration-300`} />
          {!collapsed && <h1 className="text-2xl font-bold text-slate-800 ml-2 whitespace-nowrap">StayEase</h1>}
        </div>
        <ul className="mt-4 px-3">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              active={activeView === item.label}
              collapsed={collapsed}
              onClick={() => setActiveView(item.label)}
            />
          ))}
        </ul>
      </div>
      <div className="p-3 border-t-2 border-slate-200">
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="w-full flex items-center justify-center p-3 font-medium rounded-lg cursor-pointer transition-colors text-slate-600 hover:bg-slate-200"
        >
          {collapsed ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
          {!collapsed && <span className="ml-4 whitespace-nowrap">Thu gọn</span>}
        </button>
      </div>
    </motion.nav>
  );
}
