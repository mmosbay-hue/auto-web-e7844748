import React from 'react';
import { motion } from 'framer-motion';
import { Edit, Trash2, DollarSign, Tag } from 'lucide-react';

const ServiceStatusBadge = ({ status }) => {
  const isActive = status === 'Đang hoạt động';
  return (
    <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full inline-flex items-center ${isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
      <span className={`h-2 w-2 mr-2 rounded-full ${isActive ? 'bg-green-500' : 'bg-red-500'}`}></span>
      {status}
    </span>
  );
};

export default function ServiceList({ services, onEdit, onDelete }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {services.map(service => (
        <motion.div
          key={service.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="relative">
            <img src={service.image || 'https://placehold.co/400x250/e2e8f0/64748b?text=Dịch+vụ'} alt={service.name} className="w-full h-48 object-cover" />
            <ServiceStatusBadge status={service.status} />
          </div>
          <div className="p-5 flex-grow flex flex-col">
            <h3 className="text-lg font-bold text-slate-800 mb-1 truncate">{service.name}</h3>
            <div className="flex items-center text-sm text-slate-500 mb-3 space-x-4">
              <div className="flex items-center">
                <Tag size={14} className="mr-1.5" />
                <span>{service.category}</span>
              </div>
              <div className="flex items-center">
                <DollarSign size={14} className="mr-1.5" />
                <span className="font-semibold text-indigo-600">{formatCurrency(service.price)}</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 flex-grow mb-4 line-clamp-3">{service.description}</p>
            <div className="mt-auto pt-4 border-t border-slate-200 flex justify-end space-x-2">
              <button onClick={() => onEdit(service)} className="p-2 text-slate-500 hover:bg-slate-100 hover:text-indigo-600 rounded-full transition-colors">
                <Edit size={18} />
              </button>
              <button onClick={() => onDelete(service.id)} className="p-2 text-slate-500 hover:bg-slate-100 hover:text-red-600 rounded-full transition-colors">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
