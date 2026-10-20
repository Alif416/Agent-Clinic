import { describe, expect, it } from "vitest";
import { viewport } from "./layout";

describe("root layout", () => {
  it("declares a responsive viewport", () => {
    expect(viewport).toMatchObject({ width: "device-width", initialScale: 1 });
  });
});
