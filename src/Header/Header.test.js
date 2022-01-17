import { render, screen } from "@testing-library/react";
import Header from "./Header";

beforeEach(() => {
    render(<Header />);
});

it.skip("should have a score", () => {
    const score = screen.getByLabelText(/score/i);
    expect(score).toBeInTheDocument();
});

it("should have a score", () => {
    const score = screen.getAllByText(/score/i);
    expect(score[0]).toBeInTheDocument();
});

it("should have best score", () => {
    const bestScore = screen.getByText(/best score/i);
    expect(bestScore).toBeInTheDocument();
});
