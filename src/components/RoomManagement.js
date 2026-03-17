import React, { useState } from 'react';
import RoomList from './RoomList';
import RoomTypeManager from './RoomTypeManager';
import { Bed, LayoutGrid, PlusCircle, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const initialRooms = [
  { id: 'P101', number: '101', type: 'Standard', status: 'Đang ở', price: 1200000, amenities: ['Wi-Fi', 'TV'], image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
  { id: 'P102', number: '102', type: 'Standard', status: 'Trống', price: 1200000, amenities: ['Wi-Fi', 'TV'], image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
  { id: 'P201', number: '201', type: 'Deluxe', status: 'Đang dọn', price: 1800000, amenities: ['Wi-Fi', 'TV', 'Máy lạnh'], image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
  { id: 'P202', number: '202', type: 'Deluxe', status: 'Trống', price: 1800000, amenities: ['Wi-Fi', 'TV', 'Máy lạnh'], image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
  { id: 'P301', number: '301', type: 'Suite', status: 'Bảo trì', price: 2500000, amenities: ['Wi-Fi', 'TV', 'Máy lạnh'], image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
  { id: 'P302', number: '302', type: 'Suite', status: 'Đang ở', price: 2500000, amenities: ['Wi-Fi', 'TV', 'Máy lạnh'], image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
  { id: 'P401', number: '401', type: 'Penthouse', status: 'Trống', price: 5000000, amenities: ['Wi-Fi', 'TV', 'Máy lạnh'], image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
];

const initialRoomTypes = [
  { id: 'standard', name: 'Standard', price: 1200000, capacity: 2, description: 'Phòng tiêu chuẩn với giường đôi hoặc 2 giường đơn, phù hợp cho các cặp đôi hoặc bạn bè.', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
  { id: 'deluxe', name: 'Deluxe', price: 1800000, capacity: 2, description: 'Phòng Deluxe rộng rãi hơn với tầm nhìn đẹp, được trang bị thêm các tiện nghi cao cấp.', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
  { id: 'suite', name: 'Suite', price: 2500000, capacity: 4, description: 'Phòng Suite có phòng khách riêng, ban công và các dịch vụ đặc biệt, lý tưởng cho gia đình.', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
  { id: 'penthouse', name: 'Penthouse', price: 5000000, capacity: 4, description: 'Căn hộ Penthouse sang trọng nhất với không gian rộng lớn, tầm nhìn toàn cảnh và tiện nghi đỉnh cao.', image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
];

const TabButton = ({ active, onClick, children, icon: Icon }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
      active
        ? 'bg-indigo-600 text-white shadow'
        : 'text-slate-600 hover:bg-slate-200'
    }`}
  >
    <Icon size={18} className="mr-2" />
    {children}
  </button>
);

export default function RoomManagement() {
  const [activeTab, setActiveTab] = useState('rooms');
  const [rooms, setRooms] = useState(initialRooms);
  const [roomTypes, setRoomTypes] = useState(initialRoomTypes);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center bg-slate-100 p-1 rounded-lg">
            <TabButton active={activeTab === 'rooms'} onClick={() => setActiveTab('rooms')} icon={LayoutGrid}>
              Quản lý phòng
            </TabButton>
            <TabButton active={activeTab === 'roomTypes'} onClick={() => setActiveTab('roomTypes')} icon={Bed}>
              Quản lý loại phòng
            </TabButton>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative flex-grow sm:flex-grow-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Tìm kiếm phòng..."
                className="w-full sm:w-64 pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
            <button className="flex items-center justify-center bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow">
              <PlusCircle size={20} className="mr-2" />
              <span>{activeTab === 'rooms' ? 'Thêm phòng' : 'Thêm loại phòng'}</span>
            </button>
          </div>
        </div>
      </div>

      <div>
        {activeTab === 'rooms' && <RoomList rooms={rooms} />}
        {activeTab === 'roomTypes' && <RoomTypeManager roomTypes={roomTypes} />}
      </div>
    </motion.div>
  );
}
