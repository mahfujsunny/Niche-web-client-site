import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const handleDelete = (id) => {
    fetch(`https://powerful-caverns-66360.herokuapp.com/cancelOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        if (result.deletedCount) {
          let isBoss = prompt("Write 'Yes' to cancel this order");
          if (isBoss == "yes") {
            alert("succesfully Deleted");
            const remaining = orders.filter((pd) => pd._id !== id);
            setOrders(remaining);
          }
        }
      });
  };

  useEffect(() => {
    fetch(
      `https://powerful-caverns-66360.herokuapp.com/purchaser?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  return (
    <>
      <h1 className="mb-5">Your Orders</h1>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Prdouct key</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Condition</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {order._id}
                </TableCell>
                <TableCell>{order.email}</TableCell>
                <TableCell>{order.purchaserPhoneNumber}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell align="right">{order.Address}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleDelete(order._id)}>
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MyOrders;
