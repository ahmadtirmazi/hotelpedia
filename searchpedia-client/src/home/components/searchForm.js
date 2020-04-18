import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

function SearchForm(props) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onQuerySubmit(query);
  };

  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="search-term-text"
          label="Search by name"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchForm;
