import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://quiet-depths-28219.herokuapp.com/guitars")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.map((product) => (
          <Grid item xs={12} md={6}>
            <Container>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 5,
                    width: 500,
                    height: 570,
                  },
                }}
              >
                <Paper elevation={3}>
                  <img
                    style={{
                      width: "400px",
                      border: "2px solid gray",
                      marginTop: "10px",
                    }}
                    src={product.img}
                    alt=""
                  />
                  <Typography sx={{ fontWeight: "700" }} variant="h5">
                    {product.guitarName}
                  </Typography>
                  <Typography variant="h6">{product.speciality}</Typography>
                  <Typography variant="h5">$ {product.price}</Typography>
                  <Typography variant="body1">{product.desc}</Typography>
                  <Link
                    to={`./purchase/${product._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button sx={{ mt: 2 }} variant="contained">
                      Purchase Now
                    </Button>
                  </Link>
                </Paper>
              </Box>
            </Container>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
