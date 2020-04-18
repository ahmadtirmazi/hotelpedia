import React from "react";
import User from "./user";
import Paginator from "../../common/paginator";

function UsersList(props) {
  return (
    <div>
      {props.users.map((user) => (
        <User key={user.id} {...user}></User>
      ))}
      <Paginator
        totalRecords={props.totalRecords}
        limit={2}
        onChangePage={props.onChangePage}
      ></Paginator>
    </div>
  );
}

export default UsersList;
