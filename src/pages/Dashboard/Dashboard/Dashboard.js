import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import {
    Route,

    useRouteMatch
} from "react-router-dom";
import Payment from '../Payment/Payment';
import MyOrders from '../MyOrders/MyOrders';
import useAuth from '../../../Hooks/useAuth';
import AllOrders from '../AllOrders/AllOrders';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageProducts from './ManageProducts/ManageProducts';
import AddReview from './AddReview/AddReview';
import AdminRoute from '../../PrivateRoute/AdminRoute/AdminRoute';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { logout, admin } = useAuth()
    let { path, url } = useRouteMatch()
    console.log(admin)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{

                    ml: { sm: ${drawerWidth}px },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        DASHBOARD
                    </Typography>
                    <Link to='/home' style={{ textDecoration: 'none', marginLeft: '10rem' }}><Button style={{ color: 'white', fontSize: 13 }}>Home</Button></Link>
                    {!admin ? <Box>
                        <Link to={`${url}/payment`} style={{ textDecoration: 'none' }}><Button style={{ color: 'white', fontSize: 13 }}>PayMent</Button></Link>
                        <Link to={path} style={{ textDecoration: 'none' }}><Button style={{ color: 'white', fontSize: 13 }}>My Orders</Button></Link>
                        <Link to={`${url}/addReview`} style={{ textDecoration: 'none' }}><Button style={{ color: 'white', fontSize: 13 }}>Add a Review</Button></Link>

                    </Box> :
                        <Box><Link to={path} style={{ textDecoration: 'none' }}><Button style={{ color: 'white', fontSize: 13 }}>Manage all orders</Button></Link>
                            <Link to={`${url}/addproducts`} style={{ textDecoration: 'none' }}><Button style={{ color: 'white', fontSize: 13 }}>Add a products</Button></Link>
                            <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none' }}><Button style={{ color: 'white', fontSize: 13 }}>Make Admin</Button></Link>
                            <Link to={`${url}/manageProducts`} style={{ textDecoration: 'none' }}><Button style={{ color: 'white', fontSize: 13 }}>Manage Products</Button></Link></Box>}
                    <Link to='/home'><Button onClick={logout} style={{ color: 'white', textDecoration: 'none', fontSize: 18 }}>LogOut</Button></Link>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                {/*  */}
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: calc(100% - ${drawerWidth}px) } }}
            >
                <Toolbar />
                <Route exact path={`${url}/payment`}>
                    <Payment></Payment>
                </Route>
                <AdminRoute path={`${url}/manageProducts`}>
                    <ManageProducts></ManageProducts>
                </AdminRoute>
                <Route path={`${url}/addReview`}>
                    <AddReview></AddReview>
                </Route>
                <AdminRoute path={`${url}/addproducts`}>
                    <AddProducts></AddProducts>
                </AdminRoute>
                <AdminRoute path={`${url}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>
                {!admin ? <Route exact path={path}>
                    <MyOrders></MyOrders>
                </Route> :
                    <Route exact path={path}>
                        <AllOrders></AllOrders>
                    </Route>
                }


            </Box>
        </Box>
        </>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;