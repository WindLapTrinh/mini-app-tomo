import React from "react";
import { Box, Text, Button, Swiper } from "zmp-ui";
import "../../css/detailhome/product/productDetail.css";

const product = {
  id: 1,
  name: "Sample Product",
  image: "https://via.placeholder.com/300",
  price: "29.99",
  description: "This is a sample product used for testing purposes.",
  relatedProducts: [
    {
      id: 2,
      name: "Related Product 1",
      image: "https://via.placeholder.com/150",
      price: "19.99",
    },
    {
      id: 3,
      name: "Related Product 2",
      image: "https://via.placeholder.com/150",
      price: "24.99",
    },
    {
      id: 4,
      name: "Related Product 3",
      image: "https://via.placeholder.com/150",
      price: "24.99",
    },
    {
      id: 5,
      name: "Related Product 4",
      image: "https://via.placeholder.com/150",
      price: "24.99",
    },
  ],
};

const ProductDetail = () => {
  return (
    <Box className="container-product">
      <Box className="product-image">
          <Swiper className="product-item">
            <Swiper.Slide>
              <img
                className="slide-img"
                src="/images/anh_1.jpg"
                alt="slide-2"
              />
            </Swiper.Slide>
            <Swiper.Slide>
              <img
                className="slide-img"
                src="/images/anh_2.jpg"
                alt="slide-2"
              />
            </Swiper.Slide>
          </Swiper>
        </Box>
      <Box className="product-detail">
        <Box className="product-info">
          <Text className="product-name">{product.name}</Text>
          <Text className="product-price">${product.price}</Text>
          <Text className="product-description">{product.description}</Text>
          <Button className="add-to-cart-button">Add to Cart</Button>
        </Box>
        <Box className="related-products">
          <Text className="related-products-title">Related Products</Text>
          <Box className="related-products-list">
            {product.relatedProducts.map((relatedProduct) => (
              <Box key={relatedProduct.id} className="related-product-item">
                <img src={relatedProduct.image} alt={relatedProduct.name} />
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
    </Box>
  );
};

export default ProductDetail;
