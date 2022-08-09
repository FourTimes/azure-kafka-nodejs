const { Kafka } = require("kafkajs");

async function run() {
  const kafka = new Kafka({ brokers: ["localhost:9092"] });

  const producer = kafka.producer();
  await producer.connect();
  let data = {
    name: "jn",
    age: 789,
  };
  await producer.send({
    topic: "ISOConvertor_Response",
    messages: [{ value: JSON.stringify(data) }],
  });
}

run().then(
  () => console.log("Done"),
  (err) => console.log(err)
);
