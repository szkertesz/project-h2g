import { Description } from "./Description.interface";

export interface Alert {
    id: string;
    header?: object;
    description: Description;
}
