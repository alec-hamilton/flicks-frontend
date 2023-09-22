import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavSearchButton from "@/components/pageLayout/Navbar/components/NavSearchButton/NavSearchButton";

it("opens the modal when the button is clicked", async () => {
  render(<NavSearchButton />);

  const searchButton = screen.getByLabelText("Search");

  await userEvent.click(searchButton);

  expect(screen.getByText("Search the catalogue")).toBeInTheDocument();
});
