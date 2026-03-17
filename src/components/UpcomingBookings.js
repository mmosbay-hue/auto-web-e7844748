import React from 'react';
import { ArrowRight, BedDouble } from 'lucide-react';
import { motion } from 'framer-motion';

const bookings = [
  {
    id: 1,
    guest: 'Nguyễn Văn An',
    roomType: 'Phòng Deluxe',
    status: 'Sắp đến',
    statusColor: 'bg-blue-100 text-blue-800',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 2,
    guest: 'Trần Thị Bích',
    roomType: 'Phòng Suite',
    status: 'Sắp đến',
    statusColor: 'bg-blue-100 text-blue-800',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 3,
    guest: 'Lê Hoàng Cường',
    roomType: 'Phòng Standard',
    status: 'Sắp trả phòng',
    statusColor: 'bg-orange-100 text-orange-800',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  },
];

const BookingItem = ({ booking, index }) => (
  <motion.li 
    className="flex items-center justify-between py-3"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
  >
    <div className="flex items-center">
      <img src={booking.avatar} alt={booking.guest} className="h-10 w-10 rounded-full object-cover mr-4" />
      <div>
        <p className="font-semibold text-slate-800">{booking.guest}</p>
        <p className="text-sm text-slate-500 flex items-center">
          <BedDouble className="h-4 w-4 mr-1.5" />
          {booking.roomType}
        </p>
      </div>
    </div>
    <span className={`px-2 py-1 text-xs font-medium rounded-full ${booking.statusColor}`}>
      {booking.status}
    </span>
  </motion.li>
);

export default function UpcomingBookings() {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-800">Hoạt động sắp tới</h3>
        <button className="flex items-center text-sm text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
          Xem tất cả <ArrowRight className="h-4 w-4 ml-1" />
        </button>
      </div>
      <ul className="divide-y divide-slate-200">
        {bookings.map((booking, index) => (
          <BookingItem key={booking.id} booking={booking} index={index} />
        ))}
      </ul>
    </motion.div>
  );
}
