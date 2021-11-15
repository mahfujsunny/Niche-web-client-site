import { Grid } from "@mui/material";
import React from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import faq from "../../../images/faq.png";

const Faq = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <img style={{ width: "75%", paddingTop: "8rem" }} src={faq} alt="" />
      </Grid>
      <Grid item xs={12} md={8}>
        <div>
          <div className="container card shadow my-5 py-5 get-in-touch">
            <h2 className="fw-bold text-center">Get in Touch with US...</h2>
            <form class="row g-3 mt-3 px-3">
              <div class="col-md-4">
                <label for="validationDefault01" class="form-label">
                  First name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationDefault01"
                  placeholder=""
                  required
                />
              </div>
              <div class="col-md-4">
                <label for="validationDefault02" class="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationDefault02"
                  placeholder=""
                  required
                />
              </div>
              <div class="col-md-4">
                <label for="validationDefaultUsername" class="form-label">
                  Username
                </label>
                <div class="input-group">
                  <span class="input-group-text" id="inputGroupPrepend2">
                    @
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefaultUsername"
                    aria-describedby="inputGroupPrepend2"
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <label for="validationDefault03" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationDefault03"
                  required
                />
              </div>

              <div class="col-md-3">
                <label for="validationDefault05" class="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationDefault05"
                  required
                />
              </div>
              <div className="col-md-12">
                <label for="validationDefault05" class="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="validationDefault06"
                  placeholder="@gmail.com"
                  required
                />
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck2"
                    required
                  />
                  <label class="form-check-label" for="invalidCheck2">
                    Agree to terms and conditions
                  </label>
                </div>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Faq;
