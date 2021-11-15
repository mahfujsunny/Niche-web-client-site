import { ReviewsSharp, ReviewsTwoTone } from "@mui/icons-material";
import { Card, Grid, Paper, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://quiet-depths-28219.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <section className="happy-client text-center my-bg-color my-5">
        <div className="container">
          <h1 className="my-5">
            Our{" "}
            <span style={{ color: "Blue", fontWeight: 700 }}>
              Visitors Says
            </span>
          </h1>
          <div className="row gy-2 row-cols-1 row-cols-md-2 row-cols-lg-3 col-sm-12 my-4">
            {reviews.map((review) => (
              <div className="col">
                <div className="card h-100 pb-3 rounded-3 shadow py-3">
                  <div className="card-body">
                    <h5 className="card-title text-danger fw-bolder">
                      {review.name}
                    </h5>
                    <p className="card-text">"{review.review}"</p>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={review.ratings}
                      readOnly
                    />
                  </div>
                  <a
                    href="#"
                    className="text-primary fw-bold"
                    style={{ textDecoration: "none" }}
                  >
                    {review.prof}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
