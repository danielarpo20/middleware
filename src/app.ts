import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { getOrdersController } from "./controllers/getOrders";
import { authMiddleware } from "./middleare/auth";
import { createOrdersController } from "./controllers/createOrders";
import { sanitizeMiddleware } from "./middleare/sanitize";
import { forceProtectMiddleware } from "./middleare/forceProtect";
import { cacheMiddleware } from "./middleare/cache";

const port = 3000;
const app: express.Application = express();

app.use(cors());
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get(
  "/api/test-all",
  authMiddleware,
  sanitizeMiddleware,
  forceProtectMiddleware,
  cacheMiddleware
);

app.get("/api/orders/", authMiddleware, getOrdersController);

app.post("/api/orders/create", authMiddleware, createOrdersController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
