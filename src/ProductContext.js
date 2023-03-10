import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProducts() {
            await refreshProducts()
        }
        getProducts()
    }, []);

    function refreshProducts() {
        return axios.get("http://localhost:3001/products")
        .then(response => {
            setProducts(response.data)
        })
    }

    function getProduct(id) {
        return axios.get(`http://localhost:3001/products/${id}`)
            .then(response => 
                new Promise((resolve) => resolve(response.data)))
    }

    function deleteProduct(id) {
        axios.delete(`http://localhost:3001/products/${id}`)
        .then(refreshProducts)
    }

    function addProduct(id) {

    }

    function updateProduct(id) {

    }

    return (
        <ProductContext.Provider
            value={{
                products,
                getProduct,
                deleteProduct,
                addProduct,
                updateProduct
            }}
        >
            {props.children}
        </ProductContext.Provider>
    )
}