import React, { useState } from 'react';
import { AnnouncementCard, Pagination } from '@ui';


const fakeData = Array.from({ length: 45 }, (_, i) => ({
  id: i + 1,
  title: `ASX Announcement ${i + 1}`,
  date: `2025-07-${(i % 30) + 1}`
}));

export default function App() {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.ceil(fakeData.length / pageSize);
  const currentData = fakeData.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div style={{ padding: 32 }}>
      <h1>ASX Announcements</h1>
      {currentData.map(item => (
        <AnnouncementCard key={item.id} title={item.title} date={item.date} />
      ))}
      <Pagination totalPages={totalPages} currentPage={page} onPageChange={setPage} />
    </div>
  );
}
