import React from 'react';
import RoomStatusBadge from './RoomStatusBadge';
import { BedDouble, Wifi, Wind, Tv, DollarSign, Edit, MoreVertical } from 'lucide-react';
import { motion } from 'framer-motion';

const amenityIcons = {
  'Wi-Fi': <Wifi size={16} className="text-slate-500" />,
  'TV': <Tv size={16} className="text-slate-500" />,
  'Máy lạnh': <Wind size={16} className="text-slate-500" />,
};

export default function RoomList({ rooms }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {rooms.map((room, index) => (
        <motion.div
          key={room.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <div className="relative">
            <img src={room.image} alt={`Phòng ${room.number}`} className="w-full h-48 object-cover" />
            <div className="absolute top-3 right-3">
              <RoomStatusBadge status={room.status} />
            </div>
          </div>
          <div className="p-4 flex-grow flex flex-col">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-indigo-600 font-semibold">{room.type}</p>
                <h3 className="text-xl font-bold text-slate-800">Phòng {room.number}</h3>
              </div>
              <button className="text-slate-400 hover:text-indigo-600 p-1">
                <MoreVertical size={20} />
              </button>
            </div>
            <div className="flex items-center space-x-3 my-4">
              {room.amenities.map(amenity => (
                <div key={amenity} className="flex items-center space-x-1" title={amenity}>
                  {amenityIcons[amenity]}
                </div>
              ))}
            </div>
            <div className="mt-auto pt-4 border-t border-slate-200 flex justify-between items-center">
              <div className="flex items-center text-indigo-600">
                <DollarSign size={18} className="mr-1" />
                <span className="text-lg font-bold">{formatCurrency(room.price).replace('₫', '')}</span>
                <span className="text-sm text-slate-500 ml-1">/đêm</span>
              </div>
              <button className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                Chi tiết
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
