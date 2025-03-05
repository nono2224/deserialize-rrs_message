import { BitStreamReader } from "../BitStreamReader";
import Message from "./Message";

export default class MessageRoad extends Message {
    id: number = -1;
    blockadeId: number = -1;
    cost: number = -1;
    x: number = -1;
    y: number = -1;
    passable: number = -1;

    constructor(reader: BitStreamReader) {
        super();

        this.id = reader.getBits(32);

        this.blockadeId = reader.getBits(1) === 1 ? reader.getBits(32) : -1;
        this.cost = reader.getBits(1) === 1 ? reader.getBits(32) : -1;
        this.x = reader.getBits(1) === 1 ? reader.getBits(32) : null;
        this.y = reader.getBits(1) === 1 ? reader.getBits(32) : null;
        this.passable = reader.getBits(1) === 1 ? reader.getBits(1) : null;
    }
}
