// frontend/src/pages/AdminPage.js
import React from 'react';
import ProductList from '../components/ProductList';
import AddProduct from '../components/AddProduct';

const AdminPage = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AddProduct />
      <ProductList />
    </div>
  );
};

export default AdminPage;
