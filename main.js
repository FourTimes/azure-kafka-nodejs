"use strict";
const express = require("express");
const { Kafka } = require("kafkajs");
const topicsData = require("./topicsData");
const topicReader = new topicsData();
const topicLookupFromList = require("./topicLookupFromList");

var topicList = [
  "CBPR_Validator_Ingress",
  "MX2MT_Transformer_Ingress",
  "MT_Builder_Ingress",
  "MX_Response_Builder_Ingress",
  "MT2MX_Transformer_Ingress",
  "MX_Validator_Ingress",
  "MT_Validator_Ingress",
  "MT_Response_Builder_Ingress",
  "MT_Ingestor_Ingress",
  "ISOConvertor_Response",
  "MX_Builder_Ingress",
  "ISOConvertor_MT2MX_Response",
  "Error",
];

let KAFKA_HOST = ["localhost:9092"];
// let KAFKA_HOST = ["10.42.60.7:9092", "10.42.60.5:9092", "10.42.60.6:9092"];

const app = express();
app.use(express.json());

const kafkaTopic = async (topic) => {
  const kafka = new Kafka({ brokers: KAFKA_HOST });
  const consumer = kafka.consumer({ groupId: topic + Date.now() });
  await consumer.connect();
  await consumer.subscribe({ topic: topic, fromBeginning: true });
  await consumer.run({
    eachMessage: async (data) => {
      var topicData = data.message.value.toString();
      topicReader.setMessages(data.topic, data.message.offset, topicData);
    },
  });
};

app.get("/kafka", async (req, res) => {
  console.log(topicReader);
  res.json({
    statusCode: statusCode,
    message: "Kafka Application",
  });
});

app.get("/kafka/topics/", (req, res) => {
  console.log(topicReader.getTopics());
  res.send(topicReader);
});

app.get("/kafka/topic/:topic", (req, res) => {
  let topic = req.params.topic;
  let pathRouteTopic = topicLookupFromList(topicList, topic);
  if (pathRouteTopic === undefined)
    res.json({ status: "topic not found", statusCode: 404 });
  else res.json(topicReader.getMessages(topic));
});

app.listen(9000, () => {
  topicList.forEach((tp) => {
    kafkaTopic(tp);
  });
});
