import React from 'react';
import StatCard from './StatCard';
import QuickActions from './QuickActions';
import RecentActivity from './RecentActivity';
import OccupancyChart from './OccupancyChart';
import UpcomingBookings from './UpcomingBookings';
import { BedDouble, UserCheck, Wind, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  {
    icon: BedDouble,
    title: 'Phòng trống',
    value: '72 / 150',
    change: '+5.2%',
    color: 'text-blue-500',
  },
  {
    icon: UserCheck,
    title: 'Khách đang ở',
    value: '68',
    change: '-1.8%',
    color: 'text-green-500',
  },
  {
    icon: Wind,
    title: 'Phòng cần dọn',
    value: '10',
    change: '+3',
    color: 'text-orange-500',
  },
  {
    icon: DollarSign,
    title: 'Doanh thu hôm nay',
    value: '15.200.000đ',
    change: '+12%',
    color: 'text-indigo-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Dashboard() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <motion.div key={index} variants={itemVariants}>
            <StatCard {...stat} />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <motion.div variants={itemVariants}>
            <OccupancyChart />
          </motion.div>
          <motion.div variants={itemVariants}>
            <UpcomingBookings />
          </motion.div>
        </div>
        <div className="flex flex-col gap-6">
          <motion.div variants={itemVariants}>
            <QuickActions />
          </motion.div>
          <motion.div variants={itemVariants}>
            <RecentActivity />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
