import { Alert, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const AddReview = () => {
  const [addReview, setAddReview] = useState([]);
  const [addReviewSuccess, setAddReviewSuccess] = useState(false);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...addReview };
    newInfo[field] = value;
    setAddReview(newInfo);
    console.log(newInfo);
  };
  const handleReviewSubmit = (e) => {
    setAddReviewSuccess(false);

    const Review = {
      ...addReview,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setAddReviewSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <Typography
        variant="h4"
        style={{ color: "Orange", fontWeight: 600, margin: "6rem" }}
      >
        Apply your satisfaction
      </Typography>
      {addReviewSuccess && (
        <Alert severity="success">
          Review Added on Home page successfully!
        </Alert>
      )}
      <form onSubmit={handleReviewSubmit}>
        <TextField
          sx={{ width: "90%", m: 1 }}
          required
          id="outlined-required"
          name="ratings"
          onBlur={handleOnBlur}
          placeholder="Give Your Ratings by put a number within 0-5"
        />
        <TextField
          sx={{ width: "90%", m: 1 }}
          required
          id="outlined-required"
          name="review"
          onBlur={handleOnBlur}
          placeholder="write your experience "
        />
        <TextField
          sx={{ width: "90%", m: 1 }}
          required
          id="outlined-required"
          name="name"
          onBlur={handleOnBlur}
          placeholder="Your Name "
        />
        <TextField
          sx={{ width: "90%", m: 1 }}
          required
          id="outlined-required"
          name="prof"
          onBlur={handleOnBlur}
          placeholder="write your profession "
        />

        <br />
        <Button type="submit" variant="contained">
          Add Review
        </Button>
      </form>
    </div>
  );
};

export default AddReview;
