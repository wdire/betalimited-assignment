import { useAppDispatch } from "@/store";
import { productApi } from "@/store/api";
import { productActions } from "@/store/slices/product.slice";
import { Search } from "@mui/icons-material";
import { Box, Button, InputBase } from "@mui/material";
import React, { useRef } from "react";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>();

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(productActions.setSearchValue(inputRef.current?.value || ""));
    dispatch(
      productApi.searchProduct({
        searchQuery: inputRef.current?.value || "",
      })
    );
  };

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
        component={"form"}
        onSubmit={handleFormSubmit}
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
            inputRef={inputRef}
            placeholder="Searching for..."
          />
        </Box>
        <Button
          variant="contained"
          sx={(theme) => ({
            flexShrink: "0",
            width: "130px",
            padding: "0px",
            borderRadius: "0px 30px 30px 0px",
            [theme.breakpoints.down("sm")]: {
              width: "100px",
            },
          })}
          type="submit"
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default SearchBar;
