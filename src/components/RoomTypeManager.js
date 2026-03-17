import React from 'react';
import { DollarSign, Users, Edit, Trash2, PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RoomTypeManager({ roomTypes }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  return (
    <motion.div 
      className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="lg:col-span-2">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">Danh sách loại phòng</h3>
        <div className="space-y-4">
          {roomTypes.map((type, index) => (
            <motion.div
              key={type.id}
              className="bg-white p-4 rounded-xl shadow-lg flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img src={type.image} alt={type.name} className="w-32 h-24 object-cover rounded-lg" />
              <div className="flex-grow">
                <h4 className="text-lg font-bold text-slate-800">{type.name}</h4>
                <p className="text-sm text-slate-500 mt-1 line-clamp-2">{type.description}</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-slate-600">
                  <div className="flex items-center">
                    <DollarSign size={14} className="mr-1 text-green-500" />
                    <span>{formatCurrency(type.price)}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={14} className="mr-1 text-blue-500" />
                    <span>Tối đa {type.capacity} người</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <button className="p-2 text-slate-500 hover:bg-slate-100 hover:text-indigo-600 rounded-full transition-colors">
                  <Edit size={18} />
                </button>
                <button className="p-2 text-slate-500 hover:bg-slate-100 hover:text-red-600 rounded-full transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-1">
        <div className="bg-white p-6 rounded-xl shadow-lg sticky top-8">
          <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
            <PlusCircle size={22} className="mr-2 text-indigo-600" />
            Thêm loại phòng mới
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="typeName" className="block text-sm font-medium text-slate-700">Tên loại phòng</label>
              <input type="text" id="typeName" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="VD: Deluxe" />
            </div>
            <div>
              <label htmlFor="typePrice" className="block text-sm font-medium text-slate-700">Giá (VND)</label>
              <input type="number" id="typePrice" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="3000000" />
            </div>
            <div>
              <label htmlFor="typeCapacity" className="block text-sm font-medium text-slate-700">Sức chứa</label>
              <input type="number" id="typeCapacity" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="2" />
            </div>
            <div>
              <label htmlFor="typeDescription" className="block text-sm font-medium text-slate-700">Mô tả</label>
              <textarea id="typeDescription" rows="3" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="Mô tả ngắn về loại phòng..."></textarea>
            </div>
            <div>
              <label htmlFor="typeImage" className="block text-sm font-medium text-slate-700">URL Hình ảnh</label>
              <input type="text" id="typeImage" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="https://images.unsplash.com/..." />
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center">
              <PlusCircle size={18} className="mr-2" />
              Thêm loại phòng
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
