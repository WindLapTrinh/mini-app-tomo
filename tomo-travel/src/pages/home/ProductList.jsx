import React from "react";
import { Box, Text } from "zmp-ui";
import ProductItem from "@/pages/home/ProductItem";
import "../../css/detailhome/product/listProduct.css";
import HeaderListProduct from "./HeaderListProduct";

const sampleProducts = [
  {
    id: 1,
    name: "Bang kok",
    image: "/images/product/bangkok.jpg",
    category: "Tour Ngoài Nước",
    price: "10.000.000",
    icon: "zi-plus-circle-solid",
  },
  {
    id: 2,
    name: "Tour Bình lập",
    image: "/images/product/binh-lap.jpg",
    category: "Tour Trong Nước",
    price: "20.000.000",
    icon: "zi-plus-circle-solid",
  },
  {
    id: 3,
    name: "Đại lý TQ",
    image: "/images/product/dai-ly.jpg",
    category: "Tour Ngoài Nước",
    price: "30.000.000",
    icon: "zi-plus-circle-solid",
  },
  {
    id: 4,
    name: "Tây ninh",
    image: "/images/product/tay-ninh.jpg",
    category: "Tour Trong Nước",
    price: "40.000.000",
    icon: "zi-plus-circle-solid",
  },
  {
    id: 5,
    name: "Thái lan",
    image: "/images/product/thai-lan.jpg",
    category: "Tour Ngoài Nước",
    price: "35.000.000",
    icon: "zi-plus-circle-solid",
  },
  {
    id: 6,
    name: "Vũng tàu",
    image: "/images/product/vung-tau.jpg",
    category: "Tour Trong Nước",
    price: "17.000.000",
    icon: "zi-plus-circle-solid",
  },
  {
    id: 9,
    name: "Tây ninh",
    image: "/images/product/tay-ninh.jpg",
    category: "Tour Trong Nước",
    price: "3.000.000",
    icon: "zi-plus-circle-solid",
  },
  {
    id: 10,
    name: "Thái lan",
    image: "/images/product/thai-lan.jpg",
    category: "Tour Ngoài Nước",
    price: "25.000.000",
    icon: "zi-plus-circle-solid",
  },
];

const ProductList = () => {
  // Nhóm sản phẩm theo danh mục
  const groupedProducts = sampleProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <Box className="list-product">
      <HeaderListProduct />
      {Object.entries(groupedProducts).map(([category, products]) => (
        <Box key={category} mt={4}>
          <Box
            className="title-category"
            flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Text fontWeight="bold" className="title-category-product" fontSize="lg">
              {category}
            </Text>
            <Text className="all-product" fontSize="sm" color="blue" cursor="pointer">
              Tất cả
            </Text>
          </Box>
          <Box className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ProductList;
