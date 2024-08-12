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
  name: "iPhone 15 ProMax 256 GB",
  image: "/images/product/iphone_15_pro_max.png",
  price: "24.490.000",
  description:
    "iPhone luôn là sự lừa chọn hàng đầu của giới trẻ ngày nay đặt biệt là thế hệ GenZ, iPhone mang tính sang chảnh, thiết kế tinh sảo, và độ bảo mật cao.",
  relatedProducts: [
    {
      id: 2,
      name: "iPhone 11 128 GB",
      image: "/images/product/iphone_11.jpg",
      price: "10.190.000",
    },
    {
      id: 3,
      name: "iPhone 14 Pluslus 512 GB",
      image: "/images/product/iphone_14_pluspng.png",
      price: "24.990.000",
    },
    {
      id: 4,
      name: "iPhone 13 ProMax",
      image: "/images/product/iphone-13.jpg",
      price: "13.990.000",
    },
    {
      id: 5,
      name: "iPhone 15 ProMax 256 GB",
      image: "/images/product/iphone_15_pro_max.png",
      price: "24.490.000",
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
          <Text className="related-products-title">Danh sản phẩm liên quan</Text>
          <Box className="related-products-list">
            {product.relatedProducts.map((relatedProduct) => (
              <Box key={relatedProduct.id} className="related-product-item">
                <img
                  className="related-product-image"
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                />
                <Text className="related-product-name">
                  {relatedProduct.name.length > 18 ? `${relatedProduct.name.substring(0, 18)}..`: relatedProduct.name}
                </Text>
                <Text className="related-product-price">
                  {relatedProduct.price} đ
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
