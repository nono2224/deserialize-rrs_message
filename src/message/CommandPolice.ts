import { BitStreamReader } from "../BitStreamReader";
import Message from "./Message";

export default class CommandPolice extends Message {
    to: number = -1;
    target: number = -1;
    action: string | null = null;
    broadcast: boolean;

    constructor(reader: BitStreamReader) {
        super();

        this.to = reader.getBits(1) === 1 ? reader.getBits(32) : -1;
        this.target = reader.getBits(1) === 1 ? reader.getBits(32) : -1;
        const actionNum = reader.getBits(4);
        this.broadcast = this.to === -1;

        if (actionNum === 0) {
            this.action = "REST";
        } else if (actionNum === 1) {
            this.action = "MOVE";
        } else if (actionNum === 2) {
            this.action = "CLEAR";
        } else if (actionNum === 3) {
            this.action = "AUTONOMY";
        }
    }
}
