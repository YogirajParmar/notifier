import Routes from "../../routes";
import { DocumentController } from "./documents.controller";

export class DocumentRouter extends Routes {
  private documentController: DocumentController;

  constructor() {
    super();
    this.documentController = new DocumentController();
    this.initializeRoutes(); 
  }

  protected initializeRoutes(): void {
    this.router.get("/puc", this.documentController.getDocument);
  }
}
