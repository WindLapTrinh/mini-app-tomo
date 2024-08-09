import { useEffect } from 'react';
import { configAppView } from "zmp-sdk/apis";

const SetTitleHeader = ({ title, headerColor, statusBarColor, headerTextColor }) => {
  useEffect(() => {
    configAppView({
      headerColor: headerColor || "#a81e1e",
      statusBarColor: statusBarColor || "#a81e1e",
      headerTextColor: headerTextColor || "white",
      hideAndroidBottomNavigationBar: true,
      hideIOSSafeAreaBottom: true,
      actionBar: {
        title: title || "SLK Restaurant",
        leftButton: "back",
      },
      success: (res) => {
        console.log("Gọi thành công");
      },
      fail: (error) => {
        console.log(error);
      },
    });
  }, [title, headerColor, statusBarColor, headerTextColor]);
};

export default SetTitleHeader;
