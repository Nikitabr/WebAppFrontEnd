import type { IFeedback } from "@/domain/IFeedback";
import httpCLient from "@/http-client";
import { BaseService } from "./BaseService";

export class FeedbackService extends BaseService<IFeedback> {
    constructor() {
        super("feedbacks");
    }
}