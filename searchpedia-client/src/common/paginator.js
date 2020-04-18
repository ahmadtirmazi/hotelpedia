import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Paginator(props) {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    props.onChangePage(value);
  };

  const classes = useStyles();

  const totalRecords = props.totalRecords || 1;
  const limit = props.limit || 10;
  const totalPages = Math.ceil(totalRecords / limit);

  return (
    <div className={classes.root}>
      <Pagination count={totalPages} page={page} onChange={handleChange} />
    </div>
  );
}
