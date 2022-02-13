import { render, screen } from "@testing-library/react";
import Header from "./Header";

beforeEach(() => {
    render(<Header />);
});

it("should have a title", () => {
    const header = screen.getByRole("heading", { level: 1 });
    expect(header).toBeInTheDocument;
});

it.skip("should have a score", () => {
    const score = screen.getAllByText(/score/i);
    expect(score[0]).toBeInTheDocument();
});

it.skip("should have best score", () => {
    const bestScore = screen.getByText(/best score/i);
    expect(bestScore).toBeInTheDocument();
});
