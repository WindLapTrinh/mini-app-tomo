import React from "react";
import { Box, Text } from "zmp-ui";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  const handleDetailProduct = () => {
    navigate("/detailProduct");
  };

  return (
    <div className="space-y-2 product-index" onClick={handleDetailProduct}>
      <Box className="w-full aspect-square relative">
        <img
          loading="lazy"
          src={product.image}
          className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
          alt={product.name}
        />
      </Box>
      <Text>{product.name}</Text>
      <Text size="xxSmall" className="text-gray pb-2">
        <span className="product-price">{product.price} VND</span>
        <span className="product-sold">Đã bán {product.sold}</span>
      </Text>
    </div>
  );
};

export default ProductItem;
