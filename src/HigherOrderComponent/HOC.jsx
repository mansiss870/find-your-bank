import { Grid } from "@mui/material";
import SideNav from "../Components/SideNav";

export const HOC = ({component}) => {
  return (
    <>
      <Grid item md={2}>
        <SideNav />
      </Grid>
      <Grid item md={9}>
        {component}
      </Grid>
    </>
  );
};
