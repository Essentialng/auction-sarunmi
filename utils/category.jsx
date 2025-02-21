import { useState } from 'react';
import { axiosInstance } from '@/package/axios';


const useFetchProducts = () => {
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async (categoryId) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`products?categoryId=${categoryId}`);
      if (response.status === 200) {
        const itemData = response.data.model.flatMap((model) => model.items);
        setFilter(itemData);
      }
    } catch (err) {
      setError(err);
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  return { filter, loading, error, fetchProducts };
};

export default useFetchProducts;
