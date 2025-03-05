import DeserializeRRSMessage from "./src/DeserializeRRSMessage";

// AK_SPEAKコマンドには，送信したエージェントのエンティティIDと，送信したStep(Time)，送信に使用したチャンネル，送信した生データの4つが含まれます
const entityId: number = 11111111;
const step: number = 99;
const channel: number = 1;
const rawData: string = "G5W+XU5haAtgDMAAMn3A";

// 生データとチャンネルと渡すと，メッセージの内容を解読してくれます
const message = new DeserializeRRSMessage(rawData, channel);

console.log(message);
