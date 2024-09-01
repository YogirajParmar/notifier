import { DocumentController } from "./documents.controller";
import { InjectCls, TRouter } from "@helpers";

export class DocumentRouter extends TRouter{
  @InjectCls(DocumentController)
  private documentController: DocumentController;

  initRoutes(): void {
    this.router.get("/puc", this.documentController.getDocument);
  }
}
