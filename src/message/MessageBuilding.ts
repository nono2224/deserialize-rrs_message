import { BitStreamReader } from "../BitStreamReader";
import Message from "./Message";

export default class MessageBuilding extends Message {
    id: number = -1;
    brokeness: number = -1;
    fireryness: number = -1;
    temperature: number = -1;

    constructor(reader: BitStreamReader) {
        super();

        this.id = reader.getBits(32);

        this.brokeness = reader.getBits(1) === 1 ? reader.getBits(32) : -1;
        this.fireryness = reader.getBits(1) === 1 ? reader.getBits(32) : -1;
        this.temperature = reader.getBits(1) === 1 ? reader.getBits(32) : -1;
    }
}
