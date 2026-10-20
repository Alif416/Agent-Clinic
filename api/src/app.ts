import express from "express";
import { CLINIC_NAME } from "@agent-clinic/shared";

export function createApp() {
  const app = express();

  app.get("/health", (_req, res) => {
    res.json({ status: "ok", service: CLINIC_NAME });
  });

  return app;
}
