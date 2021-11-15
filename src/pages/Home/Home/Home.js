import { Button, Card, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Faq from "../Faq/Faq";
import HomeBanner from "../HomeBanner/HomeBanner";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  const [watchs, setwatchs] = useState([]);

  useEffect(() => {
    fetch("https://powerful-caverns-66360.herokuapp.com/watchs")
      .then((res) => res.json())
      .then((data) => {
        setwatchs(data);
      });
  }, []);
  return (
    <div>
      <HomeBanner></HomeBanner>
      <h2 className="m-3 p-3 border-bottom">WATCH GALLERY____</h2>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {watchs.slice(0, 6).map((watch) => (
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    maxWidth: 400,
                    height: 550,
                  },
                }}
              >
                <Card elevation={3}>
                  <img
                    style={{
                      maxWidth: "300px",
                      border: "2px solid gray",
                      marginTop: "10px",
                    }}
                    src={watch.img}
                    alt=""
                  />
                  <Typography sx={{ fontWeight: "700" }} variant="h6">
                    {watch.watchName}
                  </Typography>
                  <Typography variant="body1">{watch.speciality}</Typography>
                  <Typography variant="h5">$ {watch.price}</Typography>
                  <Typography variant="body1">
                    {watch.desc.slice(0, 140)}
                  </Typography>
                  <Link
                    to={`./purchase/${watch._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button sx={{ mt: 1 }} variant="contained">
                      Purchase Now
                    </Button>
                  </Link>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Reviews></Reviews>
      <Faq></Faq>
    </div>
  );
};

export default Home;
