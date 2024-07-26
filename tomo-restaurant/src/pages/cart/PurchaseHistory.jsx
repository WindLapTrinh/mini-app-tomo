import React, { useState } from "react";
import { Box, Tabs } from "zmp-ui";
import CustomBottomNavigation from "@/components/layout/CustomBottomNavigation";
import SetTitleHeader from "@/pages/shared/hooks/setTitleHeader";
import "../../css/cart/prurchaseHistory.css";

const PurchaseHistory = () => {
  SetTitleHeader({
    title: "Purchase history"
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
              <Tabs.Tab key="tab1" label="All Purchases">
              </Tabs.Tab>
              <Tabs.Tab key="tab2" label="Pending">
              </Tabs.Tab>
              <Tabs.Tab key="tab3" label="Delivering">
              </Tabs.Tab>
              <Tabs.Tab key="tab4" label="Completed">
              </Tabs.Tab>
              <Tabs.Tab key="tab5" label="Cancelled">
              </Tabs.Tab>
              <Tabs.Tab key="tab6" label="Returns">
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
