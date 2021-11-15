import {
  Alert,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PurchaseOrder = () => {
  const { id } = useParams();
  const [singleproducts, setSingleProducts] = useState([]);
  const { user } = useAuth();
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const initialInfo = {
    email: user.email,
    name: user.displayName,
    purchaserPhoneNumber: "",
  };
  const [purchaseInfo, setPurchaseInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...purchaseInfo };
    newInfo[field] = value;
    setPurchaseInfo(newInfo);
    console.log(newInfo);
  };
  useEffect(() => {
    fetch("https://powerful-caverns-66360.herokuapp.com/watchs")
      .then((res) => res.json())
      .then((data) => {
        setSingleProducts(data);
      });
  }, []);
  // const disease = data.filter(find => find.id === details)
  const filterProduct = singleproducts.filter((find) => find?._id === id);

  const handlePurchaseSubmit = (e) => {
    setPurchaseSuccess(false);

    const purchase = {
      ...purchaseInfo,
      status: "Pending",
    };
    fetch("https://powerful-caverns-66360.herokuapp.com/purchaser", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(purchase),
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
    <div>
      <h1>Order Confirmation</h1>

      {filterProduct.map((pd) => (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 550 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="340"
                  image={pd.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                  ></Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Paper
              style={{ justifyContent: "left" }}
              sx={{ maxWidth: 550 }}
              elevation={3}
            >
              <Typography variant="h5" style={{ fontWeight: "700" }}>
                Exclusive: {pd.watchName}
              </Typography>
              <Typography variant="h6" style={{ fontWeight: "700" }}>
                Speciality: {pd.speciality}
              </Typography>
              <Typography variant="h6">Body: {pd.body}</Typography>
              <Typography variant="h6">
                FingerBoard: {pd.Fingerboard}
              </Typography>
              <Typography style={{ fontWeight: "700" }} variant="caption">
                Price: ${pd.price}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            {purchaseSuccess && (
              <Alert severity="success">Ordered successfully!</Alert>
            )}
            <form onSubmit={handlePurchaseSubmit}>
              <TextField
                sx={{ width: "90%", m: 1 }}
                disabled
                required
                id="outlined-required"
                name="orderId"
                onBlur={handleOnBlur}
                defaultValue={`Order_id: ${pd._id}`}
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                required
                id="outlined-required"
                name="email"
                onBlur={handleOnBlur}
                defaultValue={user.email}
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                required
                id="outlined-required"
                name="name"
                onBlur={handleOnBlur}
                defaultValue={user.displayName}
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                required
                id="outlined-required"
                name="purchaserPhoneNumber"
                onBlur={handleOnBlur}
                placeholder="Phone Number"
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                required
                id="outlined-required"
                onBlur={handleOnBlur}
                name="Address"
                placeholder="Your Address"
              />
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default PurchaseOrder;
