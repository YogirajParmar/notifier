import { TRequest, TResponse } from "@types";
import { PUC, Users } from "@entities";

export class DocumentController {
    constructor() {};

    public addDocument = async (req: TRequest, res: TResponse) => {
        const user = req.me;
        user.id = 1;
        const findExistingUser = await Users.findByPk(user.id);

        if(!findExistingUser){
            return res.status(404).json({error: "User not found"});
        };

        const newDocument = await PUC.create({
            vehicleNumber: req.dto.vehicleNumber,
            vehicleType: req.dto.vehicleType,
            issueDate: req.dto.issueDate,
            expirationDate: req.dto.expirationDate,
            userId: user.id,
        });

        return res.json(newDocument);
    }

    public getDocument = async (req: TRequest, res: TResponse) => {
        const user = req.me;
        const userId = 1;
        const findExistingUser = await Users.findByPk(userId);

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