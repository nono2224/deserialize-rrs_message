import { BitStreamReader } from "../BitStreamReader";
import Message from "./Message";

export default class MessageCivilian extends Message {
    id: number = -1;
    hp: number = -1;
    buriedness: number = -1;
    damage: number = -1;
    position: number = -1;

    constructor(reader: BitStreamReader) {
        super();

        this.id = reader.getBits(32);

        this.hp = reader.getBits(1) === 1 ? reader.getBits(14) : -1;
        this.buriedness = reader.getBits(1) === 1 ? reader.getBits(13) : -1;
        this.damage = reader.getBits(1) === 1 ? reader.getBits(14) : -1;
        this.position = reader.getBits(1) === 1 ? reader.getBits(32) : -1;
    }
}
