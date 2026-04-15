import { useState } from "react";
import API from "../services/api";

function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await API.post("/products/add", form);
      alert("Product added successfully");
    } catch (error) {
      alert("Error adding product");
    }
  };

  return (
    <div>
      <h2>Add Product</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="price" placeholder="Price" onChange={handleChange} />
      <input name="quantity" placeholder="Quantity" onChange={handleChange} />
      <input name="category" placeholder="Category" onChange={handleChange} />

      <button onClick={handleSubmit}>Add Product</button>
    </div>
  );
}

export default AddProduct;