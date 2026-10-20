import { describe, expect, it } from "vitest";
import { CLINIC_NAME } from "./index";

describe("shared constants", () => {
  it("exports the clinic name", () => {
    expect(CLINIC_NAME).toBe("AgentClinic");
  });
});
