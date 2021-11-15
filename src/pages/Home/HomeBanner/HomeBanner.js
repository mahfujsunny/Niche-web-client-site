import { Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import BannerWatch from "../../../images/BannerWatch.jpg";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <img
          style={{ width: "75%", marginTop: "50px" }}
          src={BannerWatch}
          alt=""
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <div style={{ width: "100%", marginTop: "50px" }}>
          <h2 style={{ color: "blue", fontWeight: "900", padding: "10px" }}>
            "Neglected now is the old guitar And moldering into decay; Fretted
            with many a rift and scar That the dull dust hides away,"
          </h2>
        </div>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <Button variant="contained">Explore More And More</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default HomeBanner;
