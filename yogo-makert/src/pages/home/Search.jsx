import React from "react";
import { Box, Input } from "zmp-ui";
import "../../css/detailHome.css";

const Search = ({ placeholder = "search product", size = "small" }) => {
  return (
    <Box mt={2} mb={2}>
      <Input.Search placeholder={placeholder} size={size} />
    </Box>
  );
};

export default Search;
