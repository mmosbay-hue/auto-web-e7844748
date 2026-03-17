import React from 'react';

export default function BookingStatusBadge({ status }) {
  const statusStyles = {
    'Đã xác nhận': 'bg-blue-100 text-blue-800',
    'Đã nhận phòng': 'bg-green-100 text-green-800',
    'Đã trả phòng': 'bg-slate-200 text-slate-800',
    'Đã hủy': 'bg-red-100 text-red-800',
    'Chờ xác nhận': 'bg-yellow-100 text-yellow-800',
  };

  const style = statusStyles[status] || 'bg-gray-100 text-gray-800';

  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full inline-flex items-center ${style}`}>
      {status}
    </span>
  );
}
