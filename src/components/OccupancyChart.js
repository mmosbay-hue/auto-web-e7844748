import React from 'react';
import { TrendingUp, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const chartData = [
  { day: 'T2', occupancy: 75 },
  { day: 'T3', occupancy: 82 },
  { day: 'T4', occupancy: 78 },
  { day: 'T5', occupancy: 90 },
  { day: 'T6', occupancy: 95 },
  { day: 'CN', occupancy: 98 },
  { day: 'T2', occupancy: 85 },
];

const ChartBar = ({ day, occupancy, index }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="w-full h-40 flex items-end justify-center">
        <motion.div
          className="w-8 bg-indigo-400 rounded-t-lg hover:bg-indigo-500 transition-colors"
          style={{ height: `${occupancy}%` }}
          initial={{ height: 0 }}
          animate={{ height: `${occupancy}%` }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        ></motion.div>
      </div>
      <span className="text-xs font-medium text-slate-500">{day}</span>
    </div>
  );
};

export default function OccupancyChart() {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-800">Tỷ lệ lấp đầy</h3>
          <p className="text-sm text-slate-500">Dự báo 7 ngày tới</p>
        </div>
        <div className="flex items-center text-sm text-indigo-600 font-semibold">
          <Calendar className="h-4 w-4 mr-1" />
          <span>Tuần này</span>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-4">
        {chartData.map((data, index) => (
          <ChartBar key={index} day={data.day} occupancy={data.occupancy} index={index} />
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-sm">
        <div className="text-slate-600">Tỷ lệ trung bình: <span className="font-bold text-slate-800">86.4%</span></div>
        <div className="flex items-center text-green-500 font-semibold">
          <TrendingUp className="h-4 w-4 mr-1" />
          <span>+3.2% so với tuần trước</span>
        </div>
      </div>
    </motion.div>
  );
}
