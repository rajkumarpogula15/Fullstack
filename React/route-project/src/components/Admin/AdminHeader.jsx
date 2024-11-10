import React from 'react';
import { useLocation } from 'react-router-dom';

const AdminHeader = () => {
  const location = useLocation();

  // Map the paths to page names
  const pageNames = {
    '/dashboard': 'Dashboard',
    '/settings': 'Settings',
    '/users': 'Users',
    '/reports': 'Reports',
    '/products':'Products'
    // Add more routes and page names as needed
  };

  // Determine the page name based on the current path
  const pageName = pageNames[location.pathname] || 'Products';

  return (
    <header style={{ padding: '10px', fontSize: '24px', backgroundColor: '#f4f4f4' }}>
      {pageName}
    </header>
  );
};

export default AdminHeader;
