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
        return axios.get("http://localhost/products")
        .then(response => {
            setProduct(response.data)
        })
    }

    function getProduct(id) {
        return products.find(product => product.id === parseInt(id))
    }

    function deleteProduct(id) {

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