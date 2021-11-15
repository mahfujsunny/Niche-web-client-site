import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { fontSize } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ marginTop: " 7rem" }} class="container-fluid bg-dark py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-6 ">
                <div class="logo-part">
                  <Typography
                    sx={{ fontWeight: 600, color: "red" }}
                    variant="h4"
                  >
                    Guitar's Factory
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 300, marginTop: "1rem", color: "white" }}
                    variant="h6"
                  >
                    7637 Laurel Dr. King Of Prussia, PA 19406
                  </Typography>
                </div>
              </div>
              <div class="col-md-6 px-4">
                <Typography
                  sx={{ fontWeight: 600, color: "white" }}
                  variant="overline"
                >
                  {" "}
                  About Company
                </Typography>
                <p className="text-white">
                  We are distributing the best guitars in the country
                </p>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "green",
                    fontSize: 20,
                  }}
                  to="/"
                  class="btn-footer"
                >
                  {" "}
                  More Info{" "}
                </Link>{" "}
                <br />
                <Link
                  style={{
                    textDecoration: "none",
                    color: "green",
                    fontSize: 20,
                  }}
                  to="/"
                  class="btn-footer"
                >
                  {" "}
                  Contact Us{" "}
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-6 px-4">
                <h6 className="text-white"> Help us</h6>
                <div class="row ">
                  <div class="col-md-6">
                    <ul>
                      <li>
                        {" "}
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "green",
                            fontSize: 15,
                          }}
                          to="/"
                          class="btn-footer"
                        >
                          {" "}
                          Home{" "}
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "green",
                            fontSize: 15,
                          }}
                          to="/"
                          class="btn-footer"
                        >
                          {" "}
                          About{" "}
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "green",
                            fontSize: 15,
                          }}
                          to="/"
                          class="btn-footer"
                        >
                          {" "}
                          Service{" "}
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "green",
                            fontSize: 15,
                          }}
                          to="/"
                          class="btn-footer"
                        >
                          {" "}
                          Team{" "}
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "green",
                            fontSize: 15,
                          }}
                          to="/"
                          class="btn-footer"
                        >
                          {" "}
                          Help{" "}
                        </Link>{" "}
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6 px-4">
                    <ul>
                      <li>
                        {" "}
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "green",
                            fontSize: 15,
                          }}
                          to="/"
                          class="btn-footer"
                        >
                          {" "}
                          Cab Facility{" "}
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "green",
                            fontSize: 15,
                          }}
                          to="/"
                          class="btn-footer"
                        >
                          {" "}
                          Fax{" "}
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "green",
                            fontSize: 15,
                          }}
                          to="/"
                          class="btn-footer"
                        >
                          {" "}
                          Terms{" "}
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "green",
                            fontSize: 18,
                          }}
                          to="/"
                          class="btn-footer"
                        >
                          {" "}
                          Privacy{" "}
                        </Link>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6 ">
                <h6 className="text-white"> Newsletter</h6>
                <div class="social">
                  <a href="#">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
                <form class="form-footer my-3">
                  <input
                    type="text"
                    placeholder="search here...."
                    name="search"
                  />
                  <input type="button" value="Go" />
                </form>
                <p className="text-white">
                  That's technology limitation of LCD monitors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
