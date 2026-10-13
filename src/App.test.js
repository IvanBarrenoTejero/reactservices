import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders the home route and navigation", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /home component/i })).toBeInTheDocument();

  userEvent.click(screen.getByRole("link", { name: /tabla multiplicar/i }));
  expect(
    screen.getByRole("heading", { name: /tabla multiplicar routing/i }),
  ).toBeInTheDocument();
});
