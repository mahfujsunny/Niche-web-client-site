import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import admin from "../../../images/admin.png";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("https://quiet-depths-28219.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://quiet-depths-28219.herokuapp.com/cancelOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        if (result.deletedCount) {
          let isBoss = prompt("Write 'Yes' to cancel this order");
          if (isBoss == "yes") {
            alert("succesfully Deleted");
            const remaining = allOrders.filter((pd) => pd._id !== id);
            setAllOrders(remaining);
          }
        }
      });
  };
  console.log(status);
  const handleReceive = (id) => {
    const newStatus = "Approved";

    setStatus(newStatus);
    console.log(status);
    fetch(`https://quiet-depths-28219.herokuapp.com/statusUpdate/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          // setSuccess(true)
        }
      });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <img style={{ width: "100%", marginTop: "10rem" }} src={admin} alt="" />
      </Grid>
      <Grid item xs={12} md={9}>
        <h1 className="mb-5">Customers Orders</h1>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Condition</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allOrders.map((allOrder) => (
                <TableRow
                  key={allOrder._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{allOrder.email}</TableCell>
                  <TableCell>{allOrder.purchaserPhoneNumber}</TableCell>
                  <TableCell>{allOrder.status}</TableCell>
                  <TableCell align="right">{allOrder.Address}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      sx={{ mr: 2 }}
                      onClick={() => handleDelete(allOrder._id)}
                    >
                      Cancel
                    </Button>
                    <Button
                      onBlur={() => handleReceive(allOrder._id)}
                      variant="contained"
                    >
                      Receive
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default AllOrders;
