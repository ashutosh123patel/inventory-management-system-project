import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get token from localStorage
  const getToken = () => {
    return localStorage.getItem('token');
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = getToken();

      if (!token) {
        setError('No authentication token found. Please login first.');
        setLoading(false);
        return;
      }

      const response = await fetch('http://localhost:5000/api/products', {
        method: 'GET',
        headers: {
          'Authorization': `${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }

      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching products');
      setLoading(false);
      console.error('Error fetching products:', err);
    }
  };

  // Render loading state
  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading">
          <h2>Loading products...</h2>
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="dashboard-container">
        <div className="error">
          <h2>Error: {error}</h2>
          <button onClick={fetchProducts}>Retry</button>
        </div>
      </div>
    );
  }

  // Render products
  return (
    <div className="dashboard-container">
      <h1>Product Dashboard</h1>
      
      {products.length === 0 ? (
        <p className="no-products">No products available</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <div className="product-card-header">
                <h3>{product.name}</h3>
              </div>
              <div className="product-card-body">
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Price:</strong> ₹{product.price}</p>
                <p><strong>Quantity:</strong> {product.quantity} units</p>
              </div>
              <div className="product-card-footer">
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Alternative Table View */}
      {false && (
        <table className="products-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>₹{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button className="btn-edit">Edit</button>
                  <button className="btn-delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
