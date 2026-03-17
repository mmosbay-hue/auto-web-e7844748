import React, { useState, useMemo } from 'react';
import GuestFilters from './GuestFilters';
import GuestList from './GuestList';
import { motion } from 'framer-motion';

const initialGuests = [
  { id: 'KH001', name: 'Nguyễn Văn An', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', email: 'an.nguyen@email.com', phone: '0901234567', memberSince: '2022-03-15', totalBookings: 12, totalSpent: 58000000, status: 'VIP' },
  { id: 'KH002', name: 'Trần Thị Bích', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', email: 'bich.tran@email.com', phone: '0912345678', memberSince: '2023-01-20', totalBookings: 5, totalSpent: 21000000, status: 'Thường xuyên' },
  { id: 'KH003', name: 'Lê Hoàng Long', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', email: 'long.le@email.com', phone: '0987654321', memberSince: '2024-06-10', totalBookings: 1, totalSpent: 2100000, status: 'Mới' },
  { id: 'KH004', name: 'Phạm Minh Châu', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', email: 'chau.pham@email.com', phone: '0934567890', memberSince: '2022-11-05', totalBookings: 8, totalSpent: 95000000, status: 'VIP' },
  { id: 'KH005', name: 'Võ Thành Đạt', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', email: 'dat.vo@email.com', phone: '0945678901', memberSince: '2023-08-12', totalBookings: 3, totalSpent: 15000000, status: 'Thường xuyên' },
  { id: 'KH006', name: 'Đặng Thu Hà', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', email: 'ha.dang@email.com', phone: '0967890123', memberSince: '2024-07-01', totalBookings: 1, totalSpent: 5000000, status: 'Mới' },
  { id: 'KH007', name: 'Hoàng Tiến Dũng', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', email: 'dung.hoang@email.com', phone: '0978901234', memberSince: '2021-05-25', totalBookings: 2, totalSpent: 8000000, status: 'Bị chặn' },
];

export default function GuestManagement() {
  const [guests, setGuests] = useState(initialGuests);
  const [filters, setFilters] = useState({
    searchTerm: '',
    status: 'Tất cả',
  });

  const filteredGuests = useMemo(() => {
    return guests.filter(guest => {
      const searchTermLower = filters.searchTerm.toLowerCase();
      const matchesSearch = (
        guest.name.toLowerCase().includes(searchTermLower) ||
        guest.email.toLowerCase().includes(searchTermLower) ||
        guest.phone.includes(filters.searchTerm)
      );
      const matchesStatus = filters.status === 'Tất cả' || guest.status === filters.status;
      return matchesSearch && matchesStatus;
    });
  }, [guests, filters]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GuestFilters filters={filters} setFilters={setFilters} />
      <GuestList guests={filteredGuests} />
    </motion.div>
  );
}
