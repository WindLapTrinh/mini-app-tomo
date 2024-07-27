import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  Swiper,
  BottomNavigation,
  Icon,
  Sheet,
  Input,
} from "zmp-ui";
import ProductList from "../home/ProductList.jsx";
import SliderCategory from "./SliderCategory.jsx";
import CustomBottomNavigation from "../../components/layout/CustomBottomNavigation.jsx";
import { BsShop } from "react-icons/bs";
import "../../css/detailhome/product/productDetail.css";

const product = {
  id: 1,
  name: "Gà nướng than",
  image: "/images/product/ga-nuong.jpg",
  price: "20000",
  description:
    "Gà nướng là món ăn được do Wind sáng tạo, được nướng trên than ở Bắc Ninh, hương vị gà ta tuyệt vời kết hợp với mùi than ở Bắc Ning là môt sự kết hợp hoàn hảo",
  relatedProducts: [
    {
      id: 2,
      name: "Gà nướng than",
      image: "/images/product/ga-nuong.jpg",
      price: "20000",
    },
    {
      id: 3,
      name: "Mực nướng",
      image: "/images/product/muc-nuong.jpg",
      price: "15000",
    },
    {
      id: 4,
      name: "Heo quay",
      image: "/images/product/heo-quay.jpg",
      price: "50000",
    },
    {
      id: 5,
      name: "Đậu hủ",
      image: "/images/product/product-1.jpg",
      price: "100000",
    },
  ],
};

const ProductDetail = () => {
  const [actionSheetVisible, setActionSheetVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddCart = () => {
    setActionSheetVisible(true);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  return (
    <Box className="container-product">
      <SliderCategory />
      <Box className="product-detail">
        <Box className="product-info">
          <Text className="product-name">{product.name}</Text>
          <Text className="product-price">${product.price}</Text>
          <Text className="product-description">{product.description}</Text>
          <Button className="add-to-cart-button" onClick={handleAddCart}>
            Thêm vào giỏ
          </Button>
        </Box>
        <Box className="related-products">
          <div className="icon-related-products"><BsShop/></div>
          <Text className="related-products-title">Sản phẩm liên quan</Text>
          <Box className="related-products-list">
            {product.relatedProducts.map((relatedProduct) => (
              <Box key={relatedProduct.id} className="related-product-item">
                <img
                  className="related-product-image"
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                />
                <Text className="related-product-name">
                  {relatedProduct.name}
                </Text>
                <Text className="related-product-price">
                  ${relatedProduct.price}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box mt={2}>
        <ProductList />
      </Box>
      <Box className="navigate-product">
        <CustomBottomNavigation />
      </Box>
      <Sheet
        visible={actionSheetVisible}
        onClose={() => setActionSheetVisible(false)}
        autoHeight
        mask
        handler
        swipeToClose
      >
        <Box p={4} className="custom-bottom-sheet" flex flexDirection="column">
          <Box className="bottom-sheet-header">
            <img className="cart-img" src={product.image} />
            <Text className="bottom-sheet-title" size="large" bold>
              {product.name}
            </Text>
            <Text>
              <span className="cart-price">{product.price} VND</span>
            </Text>
          </Box>
          <Box
            className="bottom-sheet-body"
            flex
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              className="btn-reduce"
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
              className="btn-increased"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </Button>
          </Box>
          <Box my={4} className="bottom-sheet-footer">
            <Button
              fullWidth
              onClick={() => {
                setActionSheetVisible(false);
                // Handle add to cart logic here
              }}
              className="btn-add-cart"
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Sheet>
    </Box>
  );
};

export default ProductDetail;
