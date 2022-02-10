import { render, screen } from "@testing-library/react";
import Card from "./Card";

beforeEach(() => {
    const obj = { url: "https://picsum.photos/200/300", name: "random-img" };
    render(<Card char={obj} />);
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
    const div = screen.getByRole("img").parentNode;
    expect(div).toHaveClass("inline-block");
});
