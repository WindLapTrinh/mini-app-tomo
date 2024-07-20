import React from "react";
import { Box, Text, Button } from "zmp-ui";

const CategoryProduct = ({ categories, gotoCategory }) => {
  return (
    <Box className="category-product">
    <Text.Title size="small">Danh mục sản phẩm</Text.Title>
    <Box mt={4}>
        <img
          variant="secondary"
          fullWidth
          onClick={() => {
            setDialogVisible(true);
          }}
          src="/images/logo.png"
        />
          
      </Box>
    </Box>
  );
};

export default CategoryProduct;
