import React from "react";
import { Box, Text } from "zmp-ui";
import ProductItem from "@/pages/home/ProductItem"; // Correct import path
import "../../css/detailhome/product/listProduct.css"

const sampleProducts = [
  { id: 1, name: "Product 1", image: "/images/product1.jpg", price: 100, sold:"20" },
  { id: 2, name: "Product 2", image: "/images/product2.jpg", price: 200, sold:"230" },
  { id: 3, name: "Product 3", image: "/images/product3.jpg", price: 30, sold:"40" },
  { id: 4, name: "Product 4", image: "/images/product4.jpg", price: 400, sold:"16" },
  { id: 5, name: "Product 5", image: "/images/product5.jpg", price: 500,sold:"24" },
  { id: 6, name: "Product 6", image: "/images/product1.jpg", price: 600, sold:"18" },
  { id: 7, name: "Product 7", image: "/images/product2.jpg", price: 700, sold:"32" },
  { id: 8, name: "Product 8", image: "/images/product3.jpg", price: 800, sold:"12" },
  { id: 9, name: "Product 9", image: "/images/product4.jpg", price: 900, sold:"14" },
  { id: 10, name: "Product 10", image: "/images/product5.jpg", price: 1000, sold:"26" },
];

const ProductList = () => {
  return (
    <Box className="list-product">
      <Text.Title>Hot products</Text.Title>
      <Box mt={2} className="grid grid-cols-2 gap-4">
        {sampleProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;
