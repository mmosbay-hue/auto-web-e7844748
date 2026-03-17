import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, DollarSign, Tag, Image, FileText } from 'lucide-react';

const categories = ['Ẩm thực', 'Giặt ủi', 'Spa & Sức khỏe', 'Di chuyển', 'Giải trí'];

export default function ServiceModal({ isOpen, onClose, onSave, serviceToEdit }) {
  const [service, setService] = useState({
    name: '',
    description: '',
    price: '',
    category: categories[0],
    image: '',
    status: 'Đang hoạt động',
  });

  useEffect(() => {
    if (serviceToEdit) {
      setService(serviceToEdit);
    } else {
      setService({
        name: '',
        description: '',
        price: '',
        category: categories[0],
        image: '',
        status: 'Đang hoạt động',
      });
    }
  }, [serviceToEdit, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...service, price: parseFloat(service.price) });
    onClose();
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.2 } },
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={backdropVariants}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-slate-200 sticky top-0 bg-white z-10">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-800">{serviceToEdit ? 'Chỉnh sửa Dịch vụ' : 'Thêm Dịch vụ mới'}</h2>
              <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
                <X size={24} />
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Tên dịch vụ</label>
                <div className="relative">
                  <input type="text" id="name" name="name" value={service.name} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" />
                  <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                </div>
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-slate-700 mb-1">Giá (VND)</label>
                <div className="relative">
                  <input type="number" id="price" name="price" value={service.price} onChange={handleChange} required min="0" className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" />
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-1">Danh mục</label>
              <div className="relative">
                <select id="category" name="category" value={service.category} onChange={handleChange} className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 appearance-none">
                  {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              </div>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">Mô tả</label>
              <textarea id="description" name="description" value={service.description} onChange={handleChange} rows="3" className="w-full p-2 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"></textarea>
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-slate-700 mb-1">URL Hình ảnh</label>
              <div className="relative">
                <input type="text" id="image" name="image" value={service.image} onChange={handleChange} className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" />
                <Image className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Trạng thái</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="status" value="Đang hoạt động" checked={service.status === 'Đang hoạt động'} onChange={handleChange} className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" />
                  <span className="ml-2 text-sm text-slate-700">Đang hoạt động</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="status" value="Ngừng hoạt động" checked={service.status === 'Ngừng hoạt động'} onChange={handleChange} className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" />
                  <span className="ml-2 text-sm text-slate-700">Ngừng hoạt động</span>
                </label>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-200 flex justify-end space-x-3">
              <button type="button" onClick={onClose} className="px-6 py-2 bg-white border border-slate-300 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">Hủy</button>
              <button type="submit" className="px-6 py-2 bg-indigo-600 border border-transparent rounded-lg text-sm font-semibold text-white hover:bg-indigo-700 transition-colors">Lưu thay đổi</button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
