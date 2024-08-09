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
  name: "Tour thái lan",
  image: "/images/product/thai-lan.jpg",
  price: "20000",
  description:
    "Trãi nghiệm ẩm thực tại thái lan và văn hóa tại đất nước này.",
  relatedProducts: [
    {
      id: 2,
      name: "Vũng tàu",
      image: "/images/product/vung-tau.jpg",
      price: "20000",
    },
    {
      id: 3,
      name: "Đại lý TQ",
      image: "/images/product/dai-ly.jpg",
      price: "15000",
    },
    {
      id: 4,
      name: "Tây ninh",
      image: "/images/product/tay-ninh.jpg",
      price: "50000",
    },
    {
      id: 5,
      name: "Phú Quốc",
      image: "/images/product/phu-quoc.jpg",
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
            Đặt tour
          </Button>
        </Box>
        <Box className="related-products">
          <div className="icon-related-products"><BsShop/></div>
          <Text className="related-products-title">Danh sách tour liên quan</Text>
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
    </Box>
  );
};

export default ProductDetail;
