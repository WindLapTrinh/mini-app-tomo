import React from "react";
import { Box, Text, Input } from "zmp-ui";
import ProductItem from "@/pages/home/ProductItem";
import "../../css/detailhome/product/listProduct.css";
import HeaderListProduct from "./HeaderListProduct";

const sampleProducts = [
  {
    id: 1,
    name: "Xà lách thủy tinh",
    image: "/images/product/veg-1.jpg",
    price: 100,
    sold: "20",
  },
  {
    id: 2,
    name: "Cải bẹ xanh",
    image: "/images/product/veg-2.jpg",
    price: 200,
    sold: "230",
  },
  {
    id: 3,
    name: "Bắp cải trắng",
    image: "/images/product/veg-3.jpg",
    price: 30,
    sold: "40",
  },
  {
    id: 4,
    name: "Rau mồng tơi",
    image: "/images/product/veg-4.jpg",
    price: 400,
    sold: "16",
  },
  {
    id: 5,
    name: "Rau dền",
    image: "/images/product/veg-5.jpg",
    price: 500,
    sold: "24",
  },
  {
    id: 6,
    name: "Cải bẹ dún",
    image: "/images/product/veg-6.jpg",
    price: 600,
    sold: "18",
  },
  {
    id: 7,
    name: "Cải ngồng",
    image: "/images/product/veg-7.jpg",
    price: 700,
    sold: "32",
  },
  {
    id: 8,
    name: "Rau đắng",
    image: "/images/product/veg-8.jpg",
    price: 800,
    sold: "12",
  },
  {
    id: 9,
    name: "Xu hào xanh",
    image: "/images/product/veg-9.jpg",
    price: 900,
    sold: "14",
  },
  {
    id: 10,
    name: "Chanh không hạt",
    image: "/images/product/veg-10.jpg",
    price: 1000,
    sold: "26",
  },
];

const ProductList = () => {
  return (
    <Box className="list-product">
      <HeaderListProduct/>
      <Box mt={2} className="grid grid-cols-2 gap-4">
        {sampleProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;
