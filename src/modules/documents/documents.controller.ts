import { TRequest, TResponse } from "@types";
import { PUC, Users } from "@entities";

export class DocumentController {
    constructor() {};

    public getDocument = async (req: TRequest, res: TResponse) => {
        const user = req.me;

        const findExistingUser = await Users.findByPk(user.id);

        if(!findExistingUser){
            return res.status(404).json({error: "User not found"});
        };

        const userDocuments = await PUC.findAll({ where: { userId: user.id}})
        if(!userDocuments.length){
            return res.status(404).json({error: "No documents found"});
        }

        return res.json(userDocuments);
    }
}