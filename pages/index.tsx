import { Box, Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Features from "../src/components/Pages/Home/Features";
import Header from "../src/components/Pages/Home/Header";

const Home: NextPage = () => {
  return (
    <Box component={"main"}>
      <Header />
      <Features />
    </Box>
  );
};

export default Home;
