import React from 'react';

export default function RoomStatusBadge({ status }) {
  const statusStyles = {
    'Trống': 'bg-green-100 text-green-800',
    'Đang ở': 'bg-blue-100 text-blue-800',
    'Đang dọn': 'bg-yellow-100 text-yellow-800',
    'Bảo trì': 'bg-red-100 text-red-800',
  };

  const style = statusStyles[status] || 'bg-gray-100 text-gray-800';

  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full inline-flex items-center ${style}`}>
      <span className={`h-2 w-2 mr-2 rounded-full ${style.replace('text-', 'bg-').replace('-100', '-500')}`}></span>
      {status}
    </span>
  );
}
