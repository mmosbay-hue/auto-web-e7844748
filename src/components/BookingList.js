import React from 'react';
import BookingStatusBadge from './BookingStatusBadge';
import { MoreVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingList({ bookings }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-500">
          <thead className="text-xs text-slate-700 uppercase bg-slate-50">
            <tr>
              <th scope="col" className="px-6 py-3">Khách hàng</th>
              <th scope="col" className="px-6 py-3">Phòng</th>
              <th scope="col" className="px-6 py-3">Ngày</th>
              <th scope="col" className="px-6 py-3">Tổng tiền</th>
              <th scope="col" className="px-6 py-3">Trạng thái</th>
              <th scope="col" className="px-6 py-3 text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {bookings.map((booking, index) => (
                <motion.tr
                  key={booking.id}
                  className="bg-white border-b hover:bg-slate-50 transition-colors duration-200"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <td className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="w-10 h-10 rounded-full object-cover" src={booking.avatar} alt={booking.guestName} />
                      <div className="pl-3">
                        <div className="text-base font-semibold">{booking.guestName}</div>
                        <div className="font-normal text-slate-500">ID: {booking.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium">Phòng {booking.roomNumber}</div>
                    <div className="text-xs text-slate-500">{booking.roomType}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div>Nhận: {formatDate(booking.checkIn)}</div>
                    <div>Trả: {formatDate(booking.checkOut)}</div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-slate-800">
                    {formatCurrency(booking.totalPrice)}
                  </td>
                  <td className="px-6 py-4">
                    <BookingStatusBadge status={booking.status} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="relative inline-block">
                      <button className="p-2 rounded-full hover:bg-slate-200 transition-colors">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
        {bookings.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-slate-500"
          >
            <p className="font-semibold">Không tìm thấy đặt phòng nào.</p>
            <p className="text-sm mt-1">Hãy thử thay đổi bộ lọc hoặc tìm kiếm.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
