import { Alert, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import makeadmin from "../../../../images/makeAdmin.png";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleformSubmit = (e) => {
    const user = { email };
    fetch(`https://quiet-depths-28219.herokuapp.com/users/admin`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <img style={{ width: "100%" }} src={makeadmin} alt="" />
      </Grid>
      <Grid item xs={12} md={4}>
        <form onSubmit={handleformSubmit}>
          <TextField type="email" label="email" onBlur={handleOnBlur} />
          <br />
          <Button sx={{ my: 3 }} variant="contained" type="submit">
            Make Admin
          </Button>
        </form>
        {success && <Alert severity="success">Made admin successfully!</Alert>}
      </Grid>
    </Grid>
  );
};

export default MakeAdmin;
