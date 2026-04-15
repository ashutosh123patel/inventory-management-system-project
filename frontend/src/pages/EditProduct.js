import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function EditProduct() {
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "",
  });

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await API.get(`/products/${id}`);
      setForm(res.data.product);
    } catch (error) {
      alert("Error fetching product");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await API.put(`/products/update/${id}`, form);
      alert("Product updated");
    } catch (error) {
      alert("Error updating product");
    }
  };

  return (
    <div>
      <h2>Edit Product</h2>

      <input name="name" value={form.name} onChange={handleChange} />
      <input name="price" value={form.price} onChange={handleChange} />
      <input name="quantity" value={form.quantity} onChange={handleChange} />
      <input name="category" value={form.category} onChange={handleChange} />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default EditProduct;