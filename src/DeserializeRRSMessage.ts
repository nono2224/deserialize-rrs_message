import { BitStreamReader } from "./BitStreamReader";
import CommandPolice from "./message/CommandPolice";
import Message from "./message/Message";
import MessageAmbulanceTeam from "./message/MessageAmbulanceTeam";
import MessageBuilding from "./message/MessageBuilding";
import MessageCivilian from "./message/MessageCivilian";
import MessageFireBrigade from "./message/MessageFireBrigade";
import MessagePoliceForce from "./message/MessagePoliceForce";
import MessageRoad from "./message/MessageRoad";
import ShoutCivilian from "./message/ShoutCivilian";

export default class DeserializeRRSMessage {
    rawData: string | null = null;
    channel: number = -1;
    messageType: number = -1;
    ttl: number = -1;
    message: Message | null = null;

    constructor(rawData: string, channel: number) {
        this.rawData = rawData;
        this.channel = channel;

        this.deserialize();
    }

    deserialize(): void {
        if (this.rawData === null || this.channel === -1) return;

        const message = atob(this.rawData);

        if (message.toLowerCase() === "help" || message.toLowerCase() === "ouch") {
            this.message = new ShoutCivilian(message);
        } else {
            try {
                const messageLength = message.length;
                const bytes = new Uint8Array(messageLength);

                for (let i = 0; i < messageLength; i++) {
                    bytes[i] = message.charCodeAt(i);
                }

                const reader = new BitStreamReader(bytes.buffer);

                this.messageType = reader.getBits(5);

                if (this.channel === 0) {
                    this.ttl === reader.getBits(3);
                }

                switch (this.messageType) {
                    case 1:
                        this.message = new MessageAmbulanceTeam(reader);
                        break;
                    case 2:
                        this.message = new MessageBuilding(reader);
                        break;
                    case 3:
                        this.message = new MessageCivilian(reader);
                        break;
                    case 4:
                        this.message = new MessageFireBrigade(reader);
                        break;
                    case 5:
                        this.message = new MessagePoliceForce(reader);
                        break;
                    case 6:
                        this.message = new MessageRoad(reader);
                        break;
                    case 7:
                        break;
                    case 8:
                        break;
                    case 9:
                        this.message = new CommandPolice(reader);
                        break;
                    case 10:
                        break;
                    case 11:
                        break;
                }
            } catch (e) {
                console.error("えらー", e);
            }
        }
    }

    getRawData(): string | null {
        return this.rawData;
    }

    getChannel(): number {
        return this.channel;
    }

    getMessageType(): number {
        return this.messageType;
    }

    getTtl(): number {
        return this.ttl;
    }

    getMessage(): Message | null {
        return this.message;
    }
}
