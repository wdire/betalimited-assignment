import { Search } from "@mui/icons-material";
import { Box, Button, InputBase } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",

          width: "100%",
          height: "45px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            border: "1px solid #aaa",
            borderRight: "none",
            borderRadius: "30px 0px 0px 30px",
            width: "100%",
            paddingLeft: "10px",
          }}
        >
          <Search
            sx={{
              fontSize: "22px",
              alignSelf: "center",
              color: "#707070",
              position: "absolute",
              left: "12px",
            }}
          />
          <InputBase
            sx={{
              flex: 1,
              input: {
                padding: "0px 0px 0px 32px",
                height: "100%",
              },
            }}
            placeholder="Searching for..."
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            flexShrink: "0",
            width: "130px",
            padding: "0px",
            borderRadius: "0px 30px 30px 0px",
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default SearchBar;
