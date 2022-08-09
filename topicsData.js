class topicsData {
  constructor() {
    this.topic = [];
  }

  setMessages(topic, offset, message) {
    console.log(
      topic + " => " + offset + " => " + JSON.stringify(JSON.parse(message))
    );
    this.topic.push({
      topic,
      offset,
      message: JSON.parse(message),
    });
  }

  getMessages(topic) {
    return this.topic.filter((data) => data.topic == topic);
  }

  getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === key);
  }

  getTopics() {
    return this.getKeyByValue(this.topic, "topic");
  }
}

module.exports = topicsData;
