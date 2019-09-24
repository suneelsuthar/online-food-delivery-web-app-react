import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AddProduct from "./textfield"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { MdMessage } from "react-icons/md";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import DeleteIcon from '@material-ui/icons/Delete';
import CategoryIcon from '@material-ui/icons/Category';
import Badge from '@material-ui/core/Badge';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',

        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,

    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (

        <div style={{ backgroundColor: "rgb(7, 177, 196)" }} >
            <div className={classes.toolbar} />

            <Divider />
            <List style={{ backgroundColor: "white" }}  >
                <List className="list" onClick={() => alert("dfd")} style={{textAlign:"center"}}>
                    <AccountCircleIcon style={{fontSize:"40px"}} />
                    <p>Suneel kumar</p>
                </List>
            </List>
            <Divider />

            <Divider />
            <List style={{ backgroundColor: "white" }}  >
                <List className="list" onClick={() => alert("dfd")}>
                    <CategoryIcon fontSize="30px" />
                    <label style={{ fontSize: "17px", marginLeft: "30px" }}>Add Category</label>
                </List>
            </List>
            <Divider />

            <Divider />
            <List style={{ backgroundColor: "white" }}  >
                <List className="list" onClick={() => alert("dfd")}>
                    <EmojiFoodBeverageIcon fontSize="30px" />
                    <label style={{ fontSize: "17px", marginLeft: "30px" }}>Add product</label>
                </List>
            </List>
            <Divider />

            <Divider />
            <List style={{ backgroundColor: "white" }}  >
                <List className="list" onClick={() => alert("dfd")}>
                    <DeleteIcon fontSize="30px" />
                    <label style={{ fontSize: "17px", marginLeft: "30px" }}>Delete product</label>                </List>
            </List>
            <Divider />

            <Divider />
            <List style={{ backgroundColor: "white" }}  >
                <List className="list" onClick={() => alert("dfd")}>
                    <Badge badgeContent={99} color="primary">
                        <MdMessage fontSize="30px" />
                    </Badge>
                    <label style={{ fontSize: "17px", marginLeft: "30px" }}>Messages</label>
                </List>
            </List>
            <Divider />

        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar} position="fixed" style={{ backgroundColor: "rgb(7, 177, 196)" }}>
                
                
                            
                <Toolbar>
                
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Dashboard
          </Typography>
          <p style={{width:"90%",float:"left",textAlign:"right",paddingTop:"10px"}}>
                <ExitToAppIcon style={{fontSize:"35px",marginRight:"2%"}} /> 
                <AccountCircleIcon style={{fontSize:"35px",marginRight:"2%"}}/>
                </p>
                </Toolbar>
            </AppBar>
            }
      <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css" >

                    <Drawer

                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}

                    </Drawer>

                </Hidden>

            </nav>

            <AddProduct />
            <main className={classes.content}>
                <div className={classes.toolbar} />

            </main>

        </div>
    );
}

ResponsiveDrawer.propTypes = {

    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;