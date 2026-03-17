import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, Search, Filter } from 'lucide-react';
import ServiceList from './ServiceList';
import ServiceModal from './ServiceModal';

const initialServices = [
  { id: 'DV001', name: 'Bữa sáng tại phòng', description: 'Thực đơn bữa sáng đa dạng được phục vụ tận phòng.', price: 250000, category: 'Ẩm thực', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', status: 'Đang hoạt động' },
  { id: 'DV002', name: 'Dịch vụ giặt ủi', description: 'Dịch vụ giặt, sấy và ủi quần áo nhanh chóng.', price: 150000, category: 'Giặt ủi', image: 'https://images.unsplash.com/photo-1626806819282-2c1dc016545e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', status: 'Đang hoạt động' },
  { id: 'DV003', name: 'Massage thư giãn', description: 'Liệu trình massage toàn thân giúp giảm căng thẳng.', price: 800000, category: 'Spa & Sức khỏe', image: 'https://images.unsplash.com/photo-1598623323426-a09e019553b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', status: 'Đang hoạt động' },
  { id: 'DV004', name: 'Đưa đón sân bay', description: 'Xe riêng đưa đón khách từ sân bay đến khách sạn.', price: 500000, category: 'Di chuyển', image: 'https://images.unsplash.com/photo-1571891284285-a83aa3a55a61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', status: 'Đang hoạt động' },
  { id: 'DV005', name: 'Tour tham quan thành phố', description: 'Khám phá các địa điểm nổi tiếng của thành phố.', price: 1200000, category: 'Giải trí', image: 'https://images.unsplash.com/photo-1523486379934-75b5a45cacaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', status: 'Ngừng hoạt động' },
  { id: 'DV006', name: 'Thuê xe máy', description: 'Dịch vụ cho thuê xe máy tự lái khám phá.', price: 200000, category: 'Di chuyển', image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', status: 'Đang hoạt động' },
  { id: 'DV007', name: 'Lớp học nấu ăn', description: 'Trải nghiệm văn hóa ẩm thực địa phương.', price: 750000, category: 'Giải trí', image: 'https://images.unsplash.com/photo-1556910110-a5a637d53c6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', status: 'Đang hoạt động' },
  { id: 'DV008', name: 'Chăm sóc da mặt', description: 'Liệu trình chăm sóc da chuyên sâu tại spa.', price: 950000, category: 'Spa & Sức khỏe', image: 'https://images.unsplash.com/photo-1616394584738-FC6e6fb3e193?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', status: 'Đang hoạt động' },
];

const categories = ['Tất cả', 'Ẩm thực', 'Giặt ủi', 'Spa & Sức khỏe', 'Di chuyển', 'Giải trí'];

export default function ServiceManagement() {
  const [services, setServices] = useState(initialServices);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serviceToEdit, setServiceToEdit] = useState(null);
  const [filters, setFilters] = useState({ searchTerm: '', category: 'Tất cả' });

  const handleOpenModal = (service = null) => {
    setServiceToEdit(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setServiceToEdit(null);
  };

  const handleSaveService = (serviceData) => {
    if (serviceData.id) {
      // Update
      setServices(services.map(s => s.id === serviceData.id ? serviceData : s));
    } else {
      // Add new
      const newService = { ...serviceData, id: `DV${String(services.length + 1).padStart(3, '0')}` };
      setServices([newService, ...services]);
    }
  };

  const handleDeleteService = (serviceId) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa dịch vụ này?')) {
      setServices(services.filter(s => s.id !== serviceId));
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
      const matchesCategory = filters.category === 'Tất cả' || service.category === filters.category;
      return matchesSearch && matchesCategory;
    });
  }, [services, filters]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-full md:w-auto flex-grow">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                name="searchTerm"
                placeholder="Tìm kiếm dịch vụ..."
                value={filters.searchTerm}
                onChange={handleFilterChange}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="w-full md:w-auto flex-shrink-0">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 appearance-none"
              >
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="w-full md:w-auto flex-shrink-0 flex items-center justify-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
          >
            <PlusCircle size={20} className="mr-2" />
            Thêm Dịch vụ
          </button>
        </div>
      </div>

      <ServiceList services={filteredServices} onEdit={handleOpenModal} onDelete={handleDeleteService} />

      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveService}
        serviceToEdit={serviceToEdit}
      />
    </motion.div>
  );
}
