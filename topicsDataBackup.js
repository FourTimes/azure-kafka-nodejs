class topicsData {
  constructor() {
    this.topic = [];
    // this.Error = {};
    // this.CBPR_Validator_Ingress = {};
    // this.MX2MT_Transformer_Ingress = {};
    // this.MT_Builder_Ingress = {};
    // this.MX_Response_Builder_Ingress = {};
    // this.MT2MX_Transformer_Ingress = {};
    // this.MX_Validator_Ingress = {};
    // this.MT_Validator_Ingress = {};
    // this.MT_Response_Builder_Ingress = {};
    // this.MT_Ingestor_Ingress = {};
    // this.ISOConvertor_Response = {};
    // this.MX_Builder_Ingress = {};
    // this.ISOConvertor_MT2MX_Response = {};
  }

  setMessages(topic, offset, message) {
    console.log(
      topic + " => " + offset + " => " + JSON.stringify(JSON.parse(message))
    );
    this.topic.push({
      topic: topic,
      offset: offset,
      message: JSON.stringify(JSON.parse(message)),
    });
  }

  getMessages(topic) {
    return this[topic];
  }
}

module.exports = topicsData;
