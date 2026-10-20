import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp } from "./app";

describe("API routing", () => {
  it("returns JSON from /health", async () => {
    const res = await request(createApp()).get("/health");

    expect(res.headers["content-type"]).toMatch(/application\/json/);
  });

  it("returns 404 for unknown routes", async () => {
    const res = await request(createApp()).get("/does-not-exist");

    expect(res.status).toBe(404);
  });

  it("does not allow POST on /health", async () => {
    const res = await request(createApp()).post("/health");

    expect(res.status).toBe(404);
  });
});
