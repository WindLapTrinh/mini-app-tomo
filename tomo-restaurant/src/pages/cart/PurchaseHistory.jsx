import React, { useState } from "react";
import { Box, Tabs } from "zmp-ui";
import CustomBottomNavigation from "@/components/layout/CustomBottomNavigation";
import SetTitleHeader from "@/pages/shared/hooks/setTitleHeader";
import "../../css/cart/prurchaseHistory.css";

const PurchaseHistory = () => {
  SetTitleHeader({
    title: "Lịch sử của bạn"
  })
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Box className="purchase-history">
      <Box className="history-container">
        <Box className="slider-history bg-white p-4">
          <div className="tabs-wrapper">
            <Tabs className="horizontal-tabs" id="purchase-history-tabs" scrollable="true">
              <Tabs.Tab key="tab1" label="Tất cả đơn hàng">
              </Tabs.Tab>
              <Tabs.Tab key="tab2" label="Đang sử lý">
              </Tabs.Tab>
              <Tabs.Tab key="tab3" label="Đã hủy">
              </Tabs.Tab>
              <Tabs.Tab key="tab4" label="Đang vận chuyển">
              </Tabs.Tab>
              <Tabs.Tab key="tab5" label="Thành công">
              </Tabs.Tab>
            </Tabs>
          </div>
        </Box>
        <CustomBottomNavigation/>
      </Box>
    </Box>
  );
};

export default PurchaseHistory;
