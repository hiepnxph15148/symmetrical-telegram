import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders greeting component", () => {
    //Arrange
    render(<Greeting />);

    //Act
    // ... nothing

    //Assert
    const greetingElement = screen.getByText("Hello, World!", { exact: false });
    expect(greetingElement).toBeInTheDocument();
  });
  test("renders good to see if the button was NOT clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("good to see you!", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
  test("renders 'Changed!' if the button was clicked", () => {
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const changedTextElement = screen.getByText("Changed!");
    expect(changedTextElement).toBeInTheDocument();
  });
  test("does not render 'good to see you!' if the button was clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const outputElement = screen.queryByText("good to see you!", { exact: false });
    expect(outputElement).toBeNull();
  });
});
