import { render, screen } from "@testing-library/react";
import Card from "./Card";

beforeEach(() => {
    render(<Card url="example-link" />);
});

it("is an image", () => {
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
});

it("has a src for the image", () => {
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src");
});

it("is inline block", () => {
    const image = screen.getByRole("img");
    expect(image).toHaveClass("inline-block");
});
