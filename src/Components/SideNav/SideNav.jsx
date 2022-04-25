import { List, ListItem, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div style={{
      border: '1px solid rgba(0, 0, 0, 0.12)',
      height: "90vh",
      borderRadius: "2%"
    }}>
      <List>
        <ListItem>
          <Link to="/all-banks" style={{
            textDecoration: "none",
            color: "black"
          }} >All Banks</Link>
        </ListItem>
        <Divider />
        <ListItem>
          <Link to="/favorites" style={{
            textDecoration: "none",
            color: "black"
          }}>Favorites</Link>
        </ListItem>
        <Divider />
      </List>
    </div>
  );
};

export default SideNav;
