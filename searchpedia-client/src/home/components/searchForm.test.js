import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import SearchForm from "./searchForm";

test("renders search form and input field", () => {
  const container = render(<SearchForm />);

  const { getByLabelText } = container;
  const searchByNameInput = getByLabelText(/Search by name/i);
  expect(searchByNameInput).toBeInTheDocument();
});

test("fire change event when user types query", () => {
  const { getByLabelText } = render(<SearchForm />);
  const searchByNameInput = getByLabelText(/Search by name/i);

  fireEvent.change(searchByNameInput, { target: { value: "a" } });
  expect(searchByNameInput.value).toBe("a");

  fireEvent.change(searchByNameInput, { target: { value: "" } });
  expect(searchByNameInput.value).toBe("");
});

test("submit handler is called on submitting the form", () => {
  const onQuerySubmit = jest.fn();
  const { container } = render(<SearchForm onQuerySubmit={onQuerySubmit} />);

  const form = getByTestId(container, "search-form");
  fireEvent.submit(form, {});

  expect(onQuerySubmit.mock.calls.length).toBe(1);
});
