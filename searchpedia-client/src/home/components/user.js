import React from "react";
import Paper from "@material-ui/core/Paper";

function User(props) {
  return (
    <div>
      <Paper elevation={3} key={props.id}>
        {props.name}
      </Paper>
    </div>
  );
}

export default User;
