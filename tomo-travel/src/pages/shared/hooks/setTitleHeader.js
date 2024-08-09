import { useEffect } from 'react';
import { configAppView } from "zmp-sdk/apis";

const SetTitleHeader = ({ title, headerColor, statusBarColor, headerTextColor }) => {
  useEffect(() => {
    configAppView({
      headerColor: headerColor || "#0075bd",
      statusBarColor: statusBarColor || "#0075bd",
      headerTextColor: headerTextColor || "white",
      hideAndroidBottomNavigationBar: true,
      hideIOSSafeAreaBottom: true,
      actionBar: {
        title: title || "Wind Travel",
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
