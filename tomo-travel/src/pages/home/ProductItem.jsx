import React, { useState } from "react";
import { Box, Text, Icon, Sheet, Button, Input } from "zmp-ui";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const [actionSheetVisible, setActionSheetVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleDetailProduct = () => {
    navigate("/detailProduct");
  };
  
  const handleAddTour = () => {
    setActionSheetVisible(true);
  };

  const handleQuantityChange = (delta) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + delta));
  };

  return (
    <div className="space-y-2 product-index">
      <div onClick={handleDetailProduct}>
        <Box className="w-full aspect-square relative">
          <img
            loading="lazy"
            src={product.image}
            className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
            alt={product.name}
          />
        </Box>
        <Text className="product-name-item">{product.name}</Text>
      </div>
      <Text size="xxSmall" className="text-gray pb-2">
        <span className="product-price">{product.price} đ</span>
        <span onClick={handleAddTour}>
          <Icon className="product-icon" icon={product.icon} />
        </span>
      </Text>
      <Sheet
        visible={actionSheetVisible}
        onClose={() => setActionSheetVisible(false)}
        autoHeight
        mask
        handler
        swipeToClose
      >
        <Box p={4} className="custom-product-item" flex flexDirection="column">
          <Box className="sheet-header-product">
            <img className="sheet-img-product" src={product.image} />
            <Text className="sheet-title-product" size="large" bold>
              {product.name}
            </Text>
            <Text>
              <span className="sheet-price-product">{product.price} đ</span>
            </Text>
          </Box>
          <Box
            className="sheet-body-product"
            flex
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            mt={2}
          >
            <Button
              className="btn-sheet-product"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </Button>
            Số lượng:
            <Input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              style={{ width: "40px", height: "40px", textAlign: "center" }}
            />
            <Button
              className="btn-sheet-increased"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </Button>
          </Box>
          <Box
            my={4}
            className="sheet-footer-product"
            flex
            flexDirection="row"
            justifyContent="space-between"
          >
            <Button
              onClick={() => setActionSheetVisible(false)}
              className="btn-sheet-cart"
            >
              Thêm vào giỏ hàng
            </Button>
            <Button
              onClick={() => setActionSheetVisible(false)}
              className="btn-sheet-payment"
            >
              Mua ngay
            </Button>
          </Box>
        </Box>
      </Sheet>
    </div>
  );
};

export default ProductItem;
