import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  Swiper,
  BottomNavigation,
  Icon,
  Sheet,
} from "zmp-ui";
import "../../css/detailhome/product/productDetail.css";
import ProductList from "../home/ProductList.jsx";
import CustomBottomNavigation from "../../components/layout/CustomBottomNavigation.jsx";

const product = {
  id: 1,
  name: "Sample Product",
  image: "https://via.placeholder.com/300",
  price: "29.99",
  description:
    "Dầu ăn ngày nay ngày càng đa dạng phù hợp hơn trong từng nhu cầu sử dụng. Đặc biệt với thương hiệu nhiều năm uy tín trong lòng người tiêu dùng Việt, dầu đậu nành 100% nguyên chất Tường An can 2 lít của dầu ăn Tường An luôn luôn làm khách hàng hài lòng với sự lựa chọn của mình.100% hạt đậu nành tự nhiên Dầu đậu nành được chiết xuất hoàn toàn từ hạt đậu nành tự nhiên, không chứa bất kỳ chất bảo quản, chất tạo màu nào. Đặc biệt, không Cholesterol và axit béo cấu hình Trans.Giàu dinh dưỡng Bên cạnh thành phần an toàn, dầu đậu nành có chứa hàm lượng lớn các axit béo không bão hòa đơn và axit béo không bão hòa đa, như acid oleic làm tăng hàm lượng “Cholesterol tốt” (hay còn gọi là HDL) và giảm “Cholesterol xấu” (LDL). Trong dầu đậu nành giúp bổ sung Omega 3, 6, 9 có lợi cho sức khỏe và sự phát triển của não bộ.Sử dụng tiện lợi Sản phẩm có thể được sử dụng trong việc chế biến thành nhiều món ăn khác nhau từ chiên, xào, trộn salad, làm bánh, làm nước sốt chấm,... Đặc biệt, những người ăn chay hoặc ăn kiêng hoàn toàn có thể sử dụng được.",
  relatedProducts: [
    {
      id: 2,
      name: "Related Product 1",
      image: "/images/product/veg-1.jpg",
      price: "20000",
    },
    {
      id: 3,
      name: "Related Product 2",
      image: "/images/product/veg-2.jpg",
      price: "15000 ",
    },
    {
      id: 4,
      name: "Related Product 3",
      image: "/images/product/veg-3.jpg",
      price: "50000 ",
    },
    {
      id: 5,
      name: "Related Product 4",
      image: "/images/product/veg-4.jpg",
      price: "100000",
    },
  ],
};

const sampleProducts = [
  { id: 1, name: "Product 1", image: "/images/product1.jpg", price: 100 },
  { id: 2, name: "Product 2", image: "/images/product2.jpg", price: 200 },
  { id: 3, name: "Product 3", image: "/images/product3.jpg", price: 300 },
  { id: 4, name: "Product 4", image: "/images/product4.jpg", price: 400 },
  { id: 5, name: "Product 5", image: "/images/product5.jpg", price: 500 },
  { id: 6, name: "Product 6", image: "/images/product1.jpg", price: 600 },
  { id: 7, name: "Product 7", image: "/images/product2.jpg", price: 700 },
  { id: 8, name: "Product 8", image: "/images/product3.jpg", price: 800 },
  { id: 9, name: "Product 9", image: "/images/product4.jpg", price: 900 },
  { id: 10, name: "Product 10", image: "/images/product5.jpg", price: 1000 },
];

const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState("chat");
  const [actionSheetVisible, setActionSheetVisible] = useState(false);
  const [actionSheetAcount, setActionSheetAcount] = useState(false);
  const openChatScreen = () => {
    console.log("Open Chat Screen");
  };
  return (
    <Box className="container-product">
      <Box className="product-image">
        <Swiper className="product-item">
          <Swiper.Slide>
            <img className="slide-img" src="/images/anh_1.jpg" alt="slide-2" />
          </Swiper.Slide>
          <Swiper.Slide>
            <img className="slide-img" src="/images/anh_2.jpg" alt="slide-2" />
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
      <Box mt={2}>
        <ProductList />
      </Box>
      <Box className="navigate-product">
       <CustomBottomNavigation/>
      </Box>
    </Box>
  );
};

export default ProductDetail;
