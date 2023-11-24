"use client";

import { AppBar, Container, Grid, Toolbar, styled } from "@mui/material";
import IconButtons from "./IconButtons";
import SearchBar from "./SearchBar";
import Image from "next/image";

const HeaderWrapperGrid = styled(Grid)(({ theme }) => ({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "77px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "row",
    height: 150,
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

const LogoWrapperGrid = styled(Grid)(({ theme }) => ({
  img: {
    display: "block",
    maxWidth: "100%",
    height: "52px",
    objectFit: "contain",
    objectPosition: "left",
    [theme.breakpoints.down("sm")]: {
      height: "48px",
      width: "auto",
    },
  },
}));

const TopHeaderGrid = styled(Grid)(({ theme }) => ({
  flexWrap: "nowrap",
  [theme.breakpoints.down("md")]: {
    justifyContent: "space-between",
  },
}));

const Header = () => {
  return (
    <AppBar
      position="sticky"
      color="default"
      sx={{
        background: "#fff",
        boxShadow: "0 0 15px 0px rgba(0,0,0,.1)",
      }}
    >
      <Toolbar>
        <Container sx={{ padding: 0 }}>
          <HeaderWrapperGrid container>
            <TopHeaderGrid container item>
              <LogoWrapperGrid item md={3.5}>
                <Image
                  src={"/assets/images/logo.png"}
                  width={200}
                  height={56}
                  alt="Betalimited Logo"
                  priority
                />
              </LogoWrapperGrid>
              <Grid
                item
                md={6}
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                })}
              >
                <SearchBar />
              </Grid>
              <Grid item md={2.5} flexShrink={0}>
                <IconButtons />
              </Grid>
            </TopHeaderGrid>
            <Grid
              sx={(theme) => ({
                width: "100%",
                [theme.breakpoints.up("md")]: {
                  display: "none",
                },
              })}
            >
              <SearchBar />
            </Grid>
          </HeaderWrapperGrid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
