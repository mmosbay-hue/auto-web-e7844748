import React, { useState, useMemo } from 'react';
import BookingFilters from './BookingFilters';
import BookingList from './BookingList';
import { motion } from 'framer-motion';

const initialBookings = [
  { id: 'BK001', guestName: 'Nguyễn Văn An', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', roomNumber: '201', roomType: 'Deluxe', checkIn: '2024-08-01', checkOut: '2024-08-05', status: 'Đã nhận phòng', totalPrice: 4800000 },
  { id: 'BK002', guestName: 'Trần Thị Bích', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', roomNumber: '305', roomType: 'Suite', checkIn: '2024-08-02', checkOut: '2024-08-04', status: 'Đã xác nhận', totalPrice: 7500000 },
  { id: 'BK003', guestName: 'Lê Hoàng Long', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', roomNumber: '102', roomType: 'Standard', checkIn: '2024-07-28', checkOut: '2024-07-31', status: 'Đã trả phòng', totalPrice: 2100000 },
  { id: 'BK004', guestName: 'Phạm Minh Châu', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', roomNumber: '501', roomType: 'Penthouse', checkIn: '2024-08-10', checkOut: '2024-08-15', status: 'Đã hủy', totalPrice: 25000000 },
  { id: 'BK005', guestName: 'Võ Thành Đạt', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', roomNumber: '208', roomType: 'Deluxe', checkIn: '2024-08-03', checkOut: '2024-08-07', status: 'Chờ xác nhận', totalPrice: 4800000 },
  { id: 'BK006', guestName: 'Đặng Thu Hà', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', roomNumber: '412', roomType: 'Suite', checkIn: '2024-08-05', checkOut: '2024-08-10', status: 'Đã xác nhận', totalPrice: 11250000 },
];

export default function BookingManagement() {
  const [bookings, setBookings] = useState(initialBookings);
  const [filters, setFilters] = useState({
    searchTerm: '',
    status: 'Tất cả',
    dateRange: { from: '', to: '' }
  });

  const filteredBookings = useMemo(() => {
    return bookings.filter(booking => {
      const guestNameMatch = booking.guestName.toLowerCase().includes(filters.searchTerm.toLowerCase());
      const statusMatch = filters.status === 'Tất cả' || booking.status === filters.status;
      // A more complex date filtering logic would be implemented here
      return guestNameMatch && statusMatch;
    });
  }, [bookings, filters]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BookingFilters filters={filters} setFilters={setFilters} />
      <BookingList bookings={filteredBookings} />
    </motion.div>
  );
}
