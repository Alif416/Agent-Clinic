import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./page";

describe("HomePage", () => {
  it("shows the clinic name", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: "AgentClinic" })).toBeInTheDocument();
  });
});
