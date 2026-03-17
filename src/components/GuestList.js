import React from 'react';
import GuestStatusBadge from './GuestStatusBadge';
import { MoreVertical, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GuestList({ guests }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-500">
          <thead className="text-xs text-slate-700 uppercase bg-slate-50">
            <tr>
              <th scope="col" className="px-6 py-3">Khách hàng</th>
              <th scope="col" className="px-6 py-3">Thông tin liên hệ</th>
              <th scope="col" className="px-6 py-3">Thành viên từ</th>
              <th scope="col" className="px-6 py-3 text-center">Lượt đặt</th>
              <th scope="col" className="px-6 py-3">Tổng chi tiêu</th>
              <th scope="col" className="px-6 py-3">Trạng thái</th>
              <th scope="col" className="px-6 py-3"><span className="sr-only">Hành động</span></th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {guests.map((guest, index) => (
                <motion.tr
                  key={guest.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white border-b hover:bg-slate-50"
                >
                  <th scope="row" className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="w-10 h-10 rounded-full" src={guest.avatar} alt={`${guest.name} avatar`} />
                      <div className="pl-3">
                        <div className="text-base font-semibold">{guest.name}</div>
                        <div className="font-normal text-slate-500">{`ID: ${guest.id}`}</div>
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-slate-600">
                      <Mail className="w-4 h-4 mr-2 text-slate-400" />
                      <span>{guest.email}</span>
                    </div>
                    <div className="flex items-center text-slate-600 mt-1">
                      <Phone className="w-4 h-4 mr-2 text-slate-400" />
                      <span>{guest.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{formatDate(guest.memberSince)}</td>
                  <td className="px-6 py-4 text-center">{guest.totalBookings}</td>
                  <td className="px-6 py-4 font-medium text-slate-800">{formatCurrency(guest.totalSpent)}</td>
                  <td className="px-6 py-4">
                    <GuestStatusBadge status={guest.status} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 rounded-full hover:bg-slate-200 text-slate-500">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
      {guests.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          <p>Không tìm thấy khách hàng nào.</p>
        </div>
      )}
    </motion.div>
  );
}
