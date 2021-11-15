import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const ManageProducts = () => {
  const [myProducts, setMyProducts] = useState([]);

  const handleDelete = (id) => {
    console.log("clicked", id);
    fetch(`https://quiet-depths-28219.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        if (result.deletedCount) {
          let isBoss = prompt("Write 'Yes' to cancel this order");
          if (isBoss == "yes") {
            alert("succesfully Deleted");
            const remaining = myProducts.filter((pd) => pd._id !== id);
            setMyProducts(remaining);
          }
        }
      });
  };
  useEffect(() => {
    fetch("https://quiet-depths-28219.herokuapp.com/guitars")
      .then((res) => res.json())
      .then((data) => {
        setMyProducts(data);
      });
  }, []);

  return (
    <>
      {myProducts.map((myProduct) => (
        <Grid style={{ border: "2px solid gray" }} container spacing={2}>
          <Grid item xs={4}>
            <img style={{ width: "100%" }} src={myProduct.img} alt="" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" sx={{ fontWeight: 600, color: "blue" }}>
              {myProduct.guitarName}
            </Typography>
            <br />
            <Typography sx={{ fontWeight: 600, color: "purple" }}>
              {myProduct.speciality}
            </Typography>
            <br />
            <Typography sx={{ fontWeight: 400, color: "purple" }}>
              {myProduct.price}
            </Typography>
            <br />
            <Button
              onClick={() => handleDelete(myProduct._id)}
              sx={{ mb: 3 }}
              variant="outlined"
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default ManageProducts;
