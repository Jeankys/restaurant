// frontend/src/pages/UserPage.js
import React from 'react';
import UserOrders from '../components/UserOrders';

const UserPage = () => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <UserOrders />
    </div>
  );
};

export default UserPage;
