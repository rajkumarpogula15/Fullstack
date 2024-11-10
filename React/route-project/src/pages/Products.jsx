import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../api/api';
import { Loader2, TriangleAlert } from 'lucide-react';

const Products = () => {
    const [products, setProducts] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [priceFilter, setPriceFilter] = useState('');

    // Fetching data from the API
    async function fetchData() {
        try {
            const res = await getProducts();
            if (res.status === 200) {
                setProducts(res.data);
                setFilteredProducts(res.data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    // Filter products based on search query and price range
    useEffect(() => {
        let filtered = products;

        if (searchQuery) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (priceFilter) {
            if (priceFilter === 'low') {
                filtered = filtered.filter(product => product.price < 500);
            } else if (priceFilter === 'high') {
                filtered = filtered.filter(product => product.price >= 500);
            }
        }

        setFilteredProducts(filtered);
    }, [searchQuery, priceFilter, products]);

    // Loading State
    if (loading) {
        return (
            <div className="w-screen h-[90vh] flex flex-col justify-center items-center">
                <Loader2 className="text-purple-500 h-14 w-14 animate-spin" />
            </div>
        );
    }

    // No Products Available State
    if (!filteredProducts || filteredProducts.length === 0) {
        return (
            <div className="w-screen h-[90vh] flex flex-col justify-center items-center">
                <TriangleAlert className="text-orange-400 h-12 w-12" />
                <p>No Products Available!</p>
            </div>
        );
    }

    return (
        <div className="w-screen h-full px-6 mt-14 mb-12">
            {/* Search Bar and Filters Section */}
            <div className="flex flex-col sm:flex-row justify-center items-center mb-8 gap-6 w-full">
                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search Products"
                    className="w-full sm:w-[40%] md:w-[30%] lg:w-[20%] p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-600 transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* Filters Section */}
                <div className="flex gap-4 items-center">
                    <select
                        className="p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-600"
                        value={priceFilter}
                        onChange={(e) => setPriceFilter(e.target.value)}
                    >
                        <option value="">Filter by Price</option>
                        <option value="low">Below ₹500</option>
                        <option value="high">Above ₹500</option>
                    </select>
                </div>
            </div>

            {/* Product Cards Display */}
            <div className="w-screen h-full flex justify-start items-start flex-row flex-wrap gap-y-20 gap-x-2">
                {filteredProducts.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        img={product.img}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
