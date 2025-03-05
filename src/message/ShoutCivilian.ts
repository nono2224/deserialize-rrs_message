import Message from "./Message";

export default class ShoutCivilian extends Message {
    shout: string | null = null;

    constructor(shout: string) {
        super();

        this.shout = shout;
    }

    getShout(): string {
        return this.shout;
    }
}
