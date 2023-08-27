// import { NotificationType } from "./enum";

export class NotificatioMessage {
    message!: string;
    type!:NotificationType
}

export enum NotificationType {
    success = 0,
    warning = 1,
    error = 2,
    info = 3
}