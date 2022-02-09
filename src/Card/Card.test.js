import { render, screen } from "@testing-library/react";
import Card from "./Card";

beforeEach(() => {
    render(<Card />);
});

it("is an image", () => {
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
});

it("has a src for the image", () => {
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src");
});
