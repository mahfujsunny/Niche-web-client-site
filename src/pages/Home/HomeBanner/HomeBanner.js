import { Button, Grid } from "@mui/material";
import { textAlign } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import BannerWatch from "../../../images/BannerWatch.jpg";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <Grid container spacing={2} className="banner mt-2">
      <Grid item xs={12} md={8}>
        <img
          style={{ width: "75%", marginTop: "50px" }}
          className="banner-img"
          src={BannerWatch}
          alt=""
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <div style={{ width: "100%", marginTop: "50px" }}>
          <h2
            style={{
              color: "black",
              fontWeight: "900",
              padding: "10px",
              textAlign: "left",
            }}
          >
            Watch______
          </h2>
          <h5
            style={{
              color: "black",
              fontWeight: "400",
              padding: "10px",
              textAlign: "left",
            }}
          >
            "A watch is a portable timepiece intended to be carried or worn by a
            person. ... During most of its history the watch was a mechanical
            device, driven by clockwork, powered by winding a mainspring, and
            keeping time with an oscillating balance wheel. These are called
            mechanical watches."
          </h5>
        </div>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <Button variant="contained">Explore More And More</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default HomeBanner;
