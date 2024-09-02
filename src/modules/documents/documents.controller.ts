import { TRequest, TResponse } from "@types";
import { PUC, User } from "@entities";
import { CreatePUCDto } from "./dto";

export class DocumentController {
    constructor() {};

    public addDocument = async (req: TRequest<CreatePUCDto>, res: TResponse) => {
        const user = req.me;
        const dto = req.dto
        const findExistingUser = await User.findByPk(user.id);

        if(!findExistingUser){
            return res.status(404).json({error: "User not found"});
        };

        const newDocument = await PUC.create({
            dto,
            userId: user.id,
        });

        return res.json(newDocument);
    }

    public getDocument = async (req: TRequest, res: TResponse) => {
        const user = req.me;

        const findExistingUser = await User.findByPk(user.id);

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