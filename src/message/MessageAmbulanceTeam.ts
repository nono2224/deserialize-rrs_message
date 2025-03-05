import { BitStreamReader } from "../BitStreamReader";
import Message from "./Message";

export default class MessageAmbulanceTeam extends Message {
    id: number = -1;
    hp: number = -1;
    buriedness: number = -1;
    damage: number = -1;
    position: number = -1;
    target: number = -1;
    action: string | null = null;

    constructor(reader: BitStreamReader) {
        super();

        this.id = reader.getBits(32);

        this.hp = reader.getBits(1) === 1 ? reader.getBits(14) : -1;
        this.buriedness = reader.getBits(1) === 1 ? reader.getBits(13) : -1;
        this.damage = reader.getBits(1) === 1 ? reader.getBits(14) : -1;
        this.position = reader.getBits(1) === 1 ? reader.getBits(32) : -1;
        this.target = reader.getBits(1) === 1 ? reader.getBits(32) : -1;
        const actionNum = reader.getBits(4);

        if (actionNum === 0) {
            this.action = "REST";
        } else if (actionNum === 1) {
            this.action = "MOVE";
        } else if (actionNum === 2) {
            this.action = "RESCUE";
        } else if (actionNum === 3) {
            this.action = "LOAD";
        } else if (actionNum === 4) {
            this.action = "UNLOAD";
        }
    }
}
