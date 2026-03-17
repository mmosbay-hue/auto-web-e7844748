import React from 'react';
import { Search, Filter, UserPlus } from 'lucide-react';

const statusOptions = ['Tất cả', 'VIP', 'Thường xuyên', 'Mới', 'Bị chặn'];

export default function GuestFilters({ filters, setFilters }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
        <div className="relative lg:col-span-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            name="searchTerm"
            placeholder="Tìm kiếm theo tên, email, SĐT..."
            value={filters.searchTerm}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>
        
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <select
            name="status"
            value={filters.status}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg appearance-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition bg-white"
          >
            {statusOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <button className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg">
          <UserPlus className="h-5 w-5 mr-2" />
          Thêm khách hàng
        </button>
      </div>
    </div>
  );
}
