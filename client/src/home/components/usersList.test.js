import React from "react";
import { render, getByText } from "@testing-library/react";
import UsersList from "./usersList";

test("renders users list", () => {
  const container = render(<UsersList users={[]} />);
  expect(container).toBeDefined();
});

test("displays message if no users are found", () => {
  const { getByText } = render(<UsersList users={[]} />);
  const noUsersFoundMsg = getByText(/No users found!/i);
  expect(noUsersFoundMsg).toBeInTheDocument();
});
