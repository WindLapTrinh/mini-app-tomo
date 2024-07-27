import React from "react";
import { Box, Text, Input } from "zmp-ui";
import ProductItem from "@/pages/home/ProductItem";
import "../../css/detailhome/product/listProduct.css";
import HeaderListProduct from "./HeaderListProduct";

const sampleProducts = [
  {
    id: 1,
    name: "Bông cải xanh",
    image: "/images/product/bong-cai-xanh.jpg",
    price: 100,
    sold: "20",
  },
  {
    id: 2,
    name: "Đậu hủ",
    image: "/images/product/dau-hu.jpg",
    price: 200,
    sold: "230",
  },
  {
    id: 3,
    name: "Gà nướng",
    image: "/images/product/ga-nuong.jpg",
    price: 30,
    sold: "40",
  },
  {
    id: 4,
    name: "Mì kho",
    image: "/images/product/mi-kho.jpg",
    price: 400,
    sold: "16",
  },
  {
    id: 5,
    name: "Tỏi hấp",
    image: "/images/product/toi-hap.jpg",
    price: 500,
    sold: "24",
  },
  {
    id: 6,
    name: "Cam ép",
    image: "/images/product/cam-ep.jpg",
    price: 600,
    sold: "18",
  },
  {
    id: 7,
    name: "Mực nướng",
    image: "/images/product/muc-nuong.jpg",
    price: 700,
    sold: "32",
  },
  {
    id: 8,
    name: "Heo quay",
    image: "/images/product/tam-bao.jpg",
    price: 800,
    sold: "12",
  },
  {
    id: 9,
    name: "Hải cảo",
    image: "/images/product/hai-cao.jpg",
    price: 900,
    sold: "14",
  },
  {
    id: 10,
    name: "Đậu hủ",
    image: "/images/product/product-1.jpg",
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
