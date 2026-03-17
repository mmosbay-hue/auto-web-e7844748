import React from 'react';

export default function GuestStatusBadge({ status }) {
  const statusStyles = {
    'VIP': 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    'Thường xuyên': 'bg-green-100 text-green-800 border border-green-300',
    'Mới': 'bg-blue-100 text-blue-800 border border-blue-300',
    'Bị chặn': 'bg-red-100 text-red-800 border border-red-300',
  };

  const style = statusStyles[status] || 'bg-gray-100 text-gray-800 border border-gray-300';

  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full inline-flex items-center ${style}`}>
      {status}
    </span>
  );
}
