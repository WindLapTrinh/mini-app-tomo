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
import CustomBottomNavigation from "../../components/layout/CustomBottomNavigation.jsx";
import "../../css/detailhome/product/productDetail.css";

const product = {
  id: 1,
  name: "Rau cải bẹ",
  image: "/images/product/veg-2.jpg",
  price: "20000",
  description:
    "Dầu ăn ngày nay ngày càng đa dạng phù hợp hơn trong từng nhu cầu sử dụng. Có thể sử dụng được.",
  relatedProducts: [
    {
      id: 2,
      name: "Xà lách thủy tinh",
      image: "/images/product/veg-1.jpg",
      price: "20000",
    },
    {
      id: 3,
      name: "Cải bẹ xanh",
      image: "/images/product/veg-2.jpg",
      price: "15000",
    },
    {
      id: 4,
      name: "Bắp cải trắng",
      image: "/images/product/veg-3.jpg",
      price: "50000",
    },
    {
      id: 5,
      name: "Rau mồng tơi",
      image: "/images/product/veg-4.jpg",
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
      <Box className="product-image">
        <Swiper className="product-item">
          <Swiper.Slide>
            <img
              className="slide-img"
              src="/images/product/veg-detail-1.jpg"
              alt="slide-1"
            />
          </Swiper.Slide>
          <Swiper.Slide>
            <img
              className="slide-img"
              src="/images/product/veg-detail-2.jpg"
              alt="slide-2"
            />
          </Swiper.Slide>
          <Swiper.Slide>
            <img
              className="slide-img"
              src="/images/product/veg-detail-3.jpg"
              alt="slide-3"
            />
          </Swiper.Slide>
        </Swiper>
      </Box>
      <Box className="product-detail">
        <Box className="product-info">
          <Text className="product-name">{product.name}</Text>
          <Text className="product-price">${product.price}</Text>
          <Text className="product-description">{product.description}</Text>
          <Button className="add-to-cart-button" onClick={handleAddCart}>
            Add to Cart
          </Button>
        </Box>
        <Box className="related-products">
          <Text className="related-products-title">Rau cải bẹ</Text>
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
            Số lượng:<Input
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
