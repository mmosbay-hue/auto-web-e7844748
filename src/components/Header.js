import React from 'react';
import { Search, Bell, User } from 'lucide-react';

export default function Header({ activeView }) {
  const subtitles = {
    'Bảng điều khiển': 'Chào mừng trở lại, Admin!',
    'Đặt phòng': 'Quản lý và xem tất cả các đặt phòng',
    'Khách hàng': 'Quản lý thông tin khách hàng',
    'Phòng': 'Quản lý trạng thái và thông tin phòng',
    'Dịch vụ': 'Quản lý các dịch vụ của khách sạn',
    'Báo cáo': 'Xem và xuất các báo cáo kinh doanh',
    'Cài đặt': 'Thiết lập hệ thống',
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b-2 border-slate-200 h-[89px] flex-shrink-0">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">{activeView}</h1>
        <p className="text-sm text-slate-500">{subtitles[activeView] || 'Quản lý khách sạn'}</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Tìm kiếm..." 
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>
        <button className="relative p-2 rounded-full hover:bg-slate-100 text-slate-500">
          <Bell className="h-6 w-6" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-2">
          <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Admin avatar"/>
          <div className='hidden sm:block'>
            <p className="font-semibold text-sm text-slate-700">Admin</p>
            <p className="text-xs text-slate-500">Quản trị viên</p>
          </div>
        </div>
      </div>
    </header>
  );
}
