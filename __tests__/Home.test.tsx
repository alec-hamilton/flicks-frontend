import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("<Home />", () => {
  it("renders without crashing", () => {
    render(<Home />);
  });

  it("displays the booking button", () => {
    render(<Home />);

    const element = screen.getByText("Book a cinema");

    expect(element).toBeInTheDocument();
  });
});
