import { Alert, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import WatchShow from "../../../images/watchShow.jpg";

const AddProducts = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...newProducts };
    newInfo[field] = value;
    setNewProducts(newInfo);
    console.log(newInfo);
  };

  const handleProductsAdd = (e) => {
    setPurchaseSuccess(false);

    const products = {
      ...newProducts,
    };
    fetch("https://quiet-depths-28219.herokuapp.com/guitars", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setPurchaseSuccess(true);
        }
      });

    e.preventDefault();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <img style={{ width: "100%" }} src={WatchShow} alt="" />
      </Grid>
      <Grid item xs={12} md={8}>
        {purchaseSuccess && (
          <Alert severity="success">Added successfully!</Alert>
        )}
        <form onSubmit={handleProductsAdd}>
          <TextField
            sx={{ width: "90%", m: 1 }}
            required
            id="outlined-required"
            type="url"
            name="img"
            onBlur={handleOnBlur}
            defaultValue="Guitar image?"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            required
            id="outlined-required"
            name="guitarName"
            onBlur={handleOnBlur}
            defaultValue="Guitar Name?"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            required
            id="outlined-required"
            name="speciality"
            onBlur={handleOnBlur}
            defaultValue="Guitar Speciality?"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            required
            id="outlined-required"
            name="price"
            onBlur={handleOnBlur}
            defaultValue="Guitar price"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            required
            id="outlined-required"
            name="desc"
            onBlur={handleOnBlur}
            defaultValue="Guitar Description?"
          />

          <Button type="submit" variant="contained">
            ADD
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default AddProducts;
