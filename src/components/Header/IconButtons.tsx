"use client";

import { Person2Outlined, ShoppingBagOutlined } from "@mui/icons-material";
import { Avatar, Badge, Grid, styled } from "@mui/material";
import React from "react";

export const AvatarStyled = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  transition: theme.transitions.create(["background-color"]),
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.grey[300],
  },
  "&:active": {
    backgroundColor: theme.palette.grey[400],
  },
  width: "45px",
  height: "45px",
}));

export const IconStyled = styled("div")(({ theme }) => ({
  color: theme.palette.grey[600],
}));

const IconButtons = () => {
  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"end"}
      gap={"10px"}
      height={"100%"}
    >
      <AvatarStyled>
        <IconStyled as={Person2Outlined} />
      </AvatarStyled>
      <Badge badgeContent={5} color="primary">
        <AvatarStyled>
          <IconStyled as={ShoppingBagOutlined} />
        </AvatarStyled>
      </Badge>
    </Grid>
  );
};

export default IconButtons;
