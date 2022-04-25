import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Cities } from "../../Components/Cities/Cities";
import Categories from "../../Components/Categories";
import Search from "../../Components/Search/Search";
import CircularProgress from '@mui/material/CircularProgress'
import { cities, categories } from "../../Utils";

const Banks = ({
  label,
  rows,
  columns,
  city,
  loading,
  category,
  searchText,
  handleOnCityChange,
  handleOnCategoryChange,
  handleOnCellClick,
  handleOnSearch
}) => {
  return (
    <>
      <Grid container justifyContent="space-between" item md={12}>
        <Grid item md={5} style={{
          marginTop: "1%",
          fontWeight: "bold"
        }}>
          {label}
        </Grid>

        <Grid item md={2}>
          <Cities
            cities={cities}
            currentCity={city}
            handleOnCityChange={handleOnCityChange}
          />
        </Grid>

        <Grid item md={2}>
          <Categories
            categories={categories}
            currentCategory={category}
            handleOnCategoryChange={handleOnCategoryChange}
            //style={classes.filter}
          />
        </Grid>

        <Grid item md={2}>
          <Search
            disabled={loading}
            handleOnSearch={handleOnSearch}
            searchText={searchText}
          />
        </Grid>
      </Grid>

      <Grid item md={12}>
        {!loading && (
          <DataGrid
            style={{
              marginTop: "1vh"
            }}
            autoHeight
            rows={rows}
            columns={columns}
            pageSize={10}
            rowHeight={70}
            rowsPerPageOptions={[10]}
            getRowId={(row) => row.ifsc}
            onCellClick={handleOnCellClick}
          ></DataGrid>
        )}
        {loading && <CircularProgress style={{
          marginTop: "25%",
          marginLeft: "50%",
          color: "grey"
        }} />}
      </Grid>

    </>
  );
};

export default Banks;
