import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController {
  async handle(req: Request, res: Response) {
    const { message } = req.body;
    const { user_id } = res.locals;
    const service = new CreateMessageService();

    try {
      const result = await service.execute(message, user_id);

      return res.json(result);
    } catch (error) {
      if (!message) {
        return res.status(400).json({ error: "Message field not found" });
      }

      return res.status(400).json({ error: { error } });
    }
  }
}

export { CreateMessageController };
