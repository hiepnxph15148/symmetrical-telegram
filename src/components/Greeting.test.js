import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders greeting component", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const greetingElement = screen.getByText("Hello, World!", { exact: false });

    //Assert
    expect(greetingElement).toBeInTheDocument();
  });
});
