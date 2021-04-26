import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Button, Drawer, List} from "@material-ui/core";
import { headerData } from '../data/HeaderData'
import "./style.css" 

// Get Navigator left menu list from headerData
const getNavButton = () => {

    return headerData.map(({ label, href }) => {
        return (
        <Button
            {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            }}
        >
            {label}
        </Button>
        );
    });

};

export default function Header() {

    // Use React Hook to set state for navigator anchor
    const [state, setState] = React.useState({
        left: false,
      });

    // Set Navigator anchor as left, so menu shows on left side
    const anchor = "left"

    // Call back function on menu button click 
    const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    setState({ ...state, [anchor]: open });
    };
    
    // UI components: list, Navigator
    const list = (anchor) => (
        <div
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {getNavButton()}
          </List>
        </div>
      );

    const Nav = () => {
        return (
        <Toolbar>
            <Button onClick={toggleDrawer(anchor, true)}>Left Menu Navigator</Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
            </Drawer>

        </Toolbar>)
    };

    // Render the whole header component 
    return (
        <header>
          <AppBar className="header">{Nav()}</AppBar>
        </header>
      );

}
