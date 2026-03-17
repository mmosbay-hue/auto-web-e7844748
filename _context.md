### Design Tokens
- **Primary Color**: Indigo (`#4f46e5`)
- **Font**: Inter, sans-serif
- **Border Radius**: `rounded-xl` (12px)
- **Shadow Style**: `shadow-lg`

### Components Created
- `src/App.js`: Main layout container, now with view routing.
- `src/components/Sidebar.js`: Navigation sidebar for main modules.
- `src/components/Header.js`: Top header, now with dynamic titles.
- `src/components/Dashboard.js`: Main dashboard content area.
- `src/components/StatCard.js`: Reusable card for displaying key metrics.
- `src/components/QuickActions.js`: Section for common task buttons.
- `src/components/RecentActivity.js`: Section to display a log of recent events.
- `src/components/OccupancyChart.js`: Bar chart for weekly occupancy forecast.
- `src/components/UpcomingBookings.js`: List of upcoming check-ins/check-outs.
- `src/components/BookingManagement.js`: Main component for booking management module.
- `src/components/BookingFilters.js`: Search, filter, and action controls for bookings.
- `src/components/BookingList.js`: Table view for displaying booking information.
- `src/components/BookingStatusBadge.js`: Reusable badge for booking status.
- `src/components/GuestManagement.js`: Main component for guest management module.
- `src/components/GuestFilters.js`: Search, filter, and action controls for guests.
- `src/components/GuestList.js`: Table view for displaying guest information.
- `src/components/GuestStatusBadge.js`: Reusable badge for guest status (e.g., VIP).
- `src/components/RoomManagement.js`: Main component for room management module with tabs.
- `src/components/RoomList.js`: Grid view for displaying room information cards.
- `src/components/RoomTypeManager.js`: Component to manage room types (list and add form).
- `src/components/RoomStatusBadge.js`: Reusable badge for room status.
- `src/components/ServiceManagement.js`: Main component for service management.
- `src/components/ServiceList.js`: Grid view for displaying services.
- `src/components/ServiceModal.js`: Modal form for adding/editing services.

### Shared Data Shapes
- `stat: { icon, title, value, change, color }`
- `activity: { id, icon, description, time }`
- `booking: { id, guestName, avatar, roomNumber, roomType, checkIn, checkOut, status, totalPrice }`
- `guest: { id, name, avatar, email, phone, memberSince, totalBookings, totalSpent, status }`
- `room: { id, number, type, status, price, amenities, image }`
- `roomType: { id, name, price, capacity, description, image }`
- `service: { id, name, description, price, category, image, status }`
- `chartData: { day, occupancy }`

### Routing Structure
- `/`: Bảng điều khiển (Dashboard)
- `/bookings`: Đặt phòng (Bookings)
- `/guests`: Khách hàng (Guests)
- `/rooms`: Phòng (Rooms)
- `/services`: Dịch vụ (Services)
- `/reports`: Báo cáo (Reports)
- `/settings`: Cài đặt (Settings)
