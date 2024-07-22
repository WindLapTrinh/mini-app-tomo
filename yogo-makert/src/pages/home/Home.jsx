import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import {
  BottomNavigation,
  Box,
  Icon,
  Page,
  Sheet,
  Swiper,
  Text,
  Input,
} from "zmp-ui";
import "../../css/detailHome.css";
import CategoryProduct from "@/pages/home/CategoryProduct";
import ProductList from "@/pages/home/ProductList";

const categories = [
  { id: 1, name: "Sản phẩm 1", icon: "/images/banner-1.jpg" },
  { id: 2, name: "Sản phẩm 2", icon: "/images/banner-2.webp" },
  { id: 3, name: "Sản phẩm 3", icon: "/images/banner-3.webp" },
  { id: 4, name: "Sản phẩm 4", icon: "/images/banner-4.webp" },
];

const products = [
  { id: 1, name: "Product 1", image: "/images/product-1.jpg" },
  { id: 2, name: "Product 2", image: "/images/product-2.jpg" },
  { id: 3, name: "Product 3", image: "/images/product-3.jpg" },
  { id: 4, name: "Product 4", image: "/images/product-4.jpg" },
  { id: 5, name: "Product 5", image: "/images/product-5.jpg" },
  { id: 6, name: "Product 6", image: "/images/product-6.jpg" },
  { id: 7, name: "Product 7", image: "/images/product-7.jpg" },
  { id: 8, name: "Product 8", image: "/images/product-8.jpg" },
  { id: 9, name: "Product 9", image: "/images/product-9.jpg" },
  { id: 10, name: "Product 10", image: "/images/product-10.jpg" },
];

const gotoCategory = (id) => {
  console.log("Chuyển đến danh mục:", id);
};

const Home = (props) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("chat");
  const [actionSheetVisible, setActionSheetVisible] = useState(false);
  const [actionSheetAcount, setActionSheetAcount] = useState(false);

  const openChatScreen = () => {
    console.log("Open Chat Screen");
  };
  const handleCategory = () => {
    navigate("/categoryByProduct");
  };

  return (
    <Page className="">
      <Box className="header-home">
        <Box mt={2} flex justifyContent="center" alignItems="center">
          <Swiper>
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
        <Box mt={2} mb={2}>
          <Input.Search placeholder="search product" size="small" />
        </Box>
        <Box mt={2} className="service-store">
          <Box className="slider-container bg-white p-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="slider-item flex flex-col space-y-2 items-center"
                onClick={handleCategory}
              >
                <img
                  className="w-12 h-12 boder-image"
                  src={product.image}
                  alt={product.name}
                />
                <Text size="xxSmall" className="text-gray">
                  {product.name}
                </Text>
              </div>
            ))}
          </Box>
        </Box>
        <CategoryProduct categories={categories} gotoCategory={gotoCategory} />
      </Box>
      <hr />
      <Box>
        <ProductList />
      </Box>

      <BottomNavigation
        fixed
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
        style={{ marginTop: "56px" }}
      >
        <BottomNavigation.Item
          key="chat"
          label="Tin Nhắn"
          icon={<Icon icon="zi-chat" />}
          activeIcon={<Icon icon="zi-chat-solid" />}
          onClick={openChatScreen}
        />
        <BottomNavigation.Item
          label="Thông báo"
          key="contact"
          icon={
            <div className="accounting-icon-wrapper">
              <Icon icon="zi-clock-1" />
            </div>
          }
          activeIcon={<Icon icon="zi-clock-1-solid" />}
        />
        <BottomNavigation.Item
          key="timeline"
          label="Giỏ hàng"
          icon={
            <div className="accounting-icon-wrapper">
              <Icon icon="zi-calendar" />
            </div>
          }
          activeIcon={
            <div className="accounting-icon-wrapper">
              <Icon icon="zi-calendar-solid" />
            </div>
          }
          onClick={() => {
            setActionSheetAcount(true);
          }}
        />
        <BottomNavigation.Item
          key="me"
          label="Cá nhân"
          icon={
            <div className="accounting-icon-wrapper">
              <Icon icon="zi-user" />
            </div>
          }
          activeIcon={
            <div className="accounting-icon-wrapper">
              <Icon icon="zi-user-solid" />
            </div>
          }
          onClick={() => {
            setActionSheetVisible(true);
          }}
        />
      </BottomNavigation>
      <Sheet.Actions
        mask
        visible={actionSheetVisible}
        title="Phụ huynh có thể vào đây xem thông tin học sinh"
        onClose={() => setActionSheetVisible(false)}
        swipeToClose
        actions={[
          [
            {
              text: (
                <div className="accounting-icon-wrapper">
                  <span>Thời khóa biểu</span>
                </div>
              ),
              onClick: () => navigate("/TimeTable"),
            },
            {
              text: (
                <div className="accounting-icon-wrapper">
                  <span>Bảng điểm</span>
                </div>
              ),
              onClick: () => navigate("/transcript"),
            },
            {
              text: (
                <div className="accounting-icon-wrapper">
                  <span>Điểm danh</span>
                </div>
              ),
              onClick: () => navigate("/dayscorses"),
            },
            {
              text: (
                <div className="accounting-icon-wrapper">
                  <span>Lộ trình học tập</span>
                </div>
              ),
              onClick: () => navigate("/routerstudent"),
            },
          ],
          [{ text: "Thoát", close: true }],
        ]}
      />
      <Sheet.Actions
        mask
        visible={actionSheetAcount}
        title="Vào đây xem thông tin thiếu đăng ký và học phí"
        onClose={() => setActionSheetAcount(false)}
        swipeToClose
        actions={[
          [
            {
              text: (
                <div className="accounting-icon-wrapper">
                  <span>Phiếu thu học phí</span>
                </div>
              ),
              onClick: () => navigate("/account"),
            },
            {
              text: (
                <div className="accounting-icon-wrapper">
                  <span>Hóa đơn tài chính</span>
                </div>
              ),
              onClick: () => navigate("/finanial"),
            },
          ],
          [{ text: "Thoát", close: true }],
        ]}
      />
    </Page>
  );
};

export default Home;
