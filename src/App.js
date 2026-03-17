import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import BookingManagement from './components/BookingManagement';
import GuestManagement from './components/GuestManagement';
import RoomManagement from './components/RoomManagement';
import ServiceManagement from './components/ServiceManagement';

export default function App() {
  const [activeView, setActiveView] = useState('Bảng điều khiển');

  const renderContent = () => {
    switch (activeView) {
      case 'Đặt phòng':
        return <BookingManagement />;
      case 'Khách hàng':
        return <GuestManagement />;
      case 'Phòng':
        return <RoomManagement />;
      case 'Dịch vụ':
        return <ServiceManagement />;
      case 'Bảng điều khiển':
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header activeView={activeView} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100">
          <div className="container mx-auto px-6 py-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
