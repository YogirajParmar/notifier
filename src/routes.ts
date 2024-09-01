import { Router } from "express";
import { DocumentRouter } from "@modules/documents";

export default class Routes {
  protected router: Router;

  constructor() {
    this.router = Router();
  }

  protected initializeRoutes(): void {
  }

  public configure() {
    this.initializeRoutes();
    this.router.use("/docs", new DocumentRouter().router);
    return this.router;
  }
}
