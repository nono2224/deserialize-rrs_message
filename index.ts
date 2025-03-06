import DeserializeRRSMessage from "./src/DeserializeRRSMessage";

// AK_SPEAKコマンドには，送信したエージェントのエンティティIDと，送信したStep(Time)，送信に使用したチャンネル，送信した生データの4つが含まれます
const entityId: number = 11111111; //送信したエージェントのエンティティID
const step: number = 99; //送信したステップ
const channel: number = 1; //送信に使用したチャンネル
const rawData: string = "G5W+XU5haAtgDMAAMn3A"; //送信した生データ

// 生データとチャンネルと渡すと，メッセージの内容を解読してくれます
const message = new DeserializeRRSMessage(rawData, channel);

console.log(message);
// --出力--
// DeserializeRRSMessage {
//     rawData: 'G5W+XU5haAtgDMAAMn3A', // 送信した生データ
//     channel: 1, // 送信に使用したチャンネル
//     messageType: 3, // メッセージが市民の叫び以外だった場合に格納されるメッセージの種類 詳しくはadf-core-javaのStandardMessageBundle.javaより
//     ttl: -1, // Channelが0だった場合（音声通信）に格納される Time to Live -> ネットワーク内のパケットやレコードが破棄されるまでの時間を表す値
//     message: MessageCivilian { //メッセージの中身 今回はMessageCivilian 市民の叫びの場合はそのまま"Help"とか"Ouch"が入る
//       id: 1924647849, // 市民のエンティティID
//       hp: 9750, // 市民の体力
//       buriedness: 45, // 市民の埋没度
//       damage: 25, // 市民のダメージ
//       position: 51703 // 市民のいる場所 市民のいる建物や道路のエンティティIDが格納される
//     }
//   }

console.log("----------");

console.log(message.getMessage());
// --出力--
// MessageCivilian {
//     id: 1924647849,
//     hp: 9750,
//     buriedness: 45,
//     damage: 25,
//     position: 51703
//   }
