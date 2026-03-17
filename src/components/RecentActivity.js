import React from 'react';
import { UserPlus, LogIn, LogOut, BellRing } from 'lucide-react';

const activities = [
  {
    id: 1,
    icon: LogIn,
    color: 'text-green-500',
    bgColor: 'bg-green-100',
    description: 'Khách John Doe đã nhận phòng 201.',
    time: '5 phút trước',
  },
  {
    id: 2,
    icon: UserPlus,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-100',
    description: 'Có đặt phòng mới từ Jane Smith cho phòng 305.',
    time: '15 phút trước',
  },
  {
    id: 3,
    icon: LogOut,
    color: 'text-red-500',
    bgColor: 'bg-red-100',
    description: 'Khách Emily White đã trả phòng 102.',
    time: '1 giờ trước',
  },
  {
    id: 4,
    icon: BellRing,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-100',
    description: 'Yêu cầu dịch vụ phòng từ phòng 410.',
    time: '2 giờ trước',
  },
   {
    id: 5,
    icon: LogIn,
    color: 'text-green-500',
    bgColor: 'bg-green-100',
    description: 'Khách Michael Brown đã nhận phòng 208.',
    time: '3 giờ trước',
  },
];

const ActivityItem = ({ activity }) => (
  <li className="flex items-start space-x-4 py-3">
    <div className={`p-2 rounded-full ${activity.bgColor}`}>
      <activity.icon className={`h-5 w-5 ${activity.color}`} />
    </div>
    <div className="flex-1">
      <p className="text-sm text-slate-700">{activity.description}</p>
      <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
    </div>
  </li>
);

export default function RecentActivity() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg h-full">
      <h3 className="text-lg font-bold text-slate-800 mb-2">Hoạt động gần đây</h3>
      <ul className="divide-y divide-slate-200">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </ul>
      <button className="w-full mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
        Xem tất cả
      </button>
    </div>
  );
}