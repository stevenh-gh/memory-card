import { render, screen } from "@testing-library/react";
import Header from "./Header";

beforeEach(() => {
    render(<Header />);
});

it.skip("should have a score", () => {
    const score = screen.getByLabelText(/score/i);
    expect(score).toBeInTheDocument();
});

it.skip("should have best score", () => {
    const bestScore = screen.getByLabelText(/best score/i);
    expect(bestScore).toBeInTheDocument();
});
