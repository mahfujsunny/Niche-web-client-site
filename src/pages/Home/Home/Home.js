import {
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../../shared/Navigation/Navigation";
import Faq from "../Faq/Faq";
import HomeBanner from "../HomeBanner/HomeBanner";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  const [guitars, setGuitars] = useState([]);

  useEffect(() => {
    fetch("https://quiet-depths-28219.herokuapp.com/guitars")
      .then((res) => res.json())
      .then((data) => {
        setGuitars(data);
      });
  }, []);
  return (
    <div>
      <HomeBanner></HomeBanner>
      <h2>GUITAR'S ARE ON TRENDING</h2>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {guitars.slice(0, 6).map((guitar) => (
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 5,
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
                    src={guitar.img}
                    alt=""
                  />
                  <Typography sx={{ fontWeight: "700" }} variant="h6">
                    {guitar.guitarName}
                  </Typography>
                  <Typography variant="body1">{guitar.speciality}</Typography>
                  <Typography variant="h5">$ {guitar.price}</Typography>
                  <Typography variant="body1">
                    {guitar.desc.slice(0, 180)}
                  </Typography>
                  <Link
                    to={`./purchase/${guitar._id}`}
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
