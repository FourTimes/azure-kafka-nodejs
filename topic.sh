#!/usr/bi/env bash
kafka-topics --create --if-not-exists --zookeeper zookeeper:2181 --partitions 2 --replication-factor 1 --topic  CBPR_Validator_Ingress
kafka-topics --create --if-not-exists --zookeeper zookeeper:2181 --partitions 2 --replication-factor 1 --topic  Error
kafka-topics --create --if-not-exists --zookeeper zookeeper:2181 --partitions 2 --replication-factor 1 --topic  MX2MT_Transformer_Ingress
kafka-topics --create --if-not-exists --zookeeper zookeeper:2181 --partitions 2 --replication-factor 1 --topic  MT_Builder_Ingress
kafka-topics --create --if-not-exists --zookeeper zookeeper:2181 --partitions 2 --replication-factor 1 --topic  MX_Response_Builder_Ingress
kafka-topics --create --if-not-exists --zookeeper zookeeper:2181 --partitions 2 --replication-factor 1 --topic  MT2MX_Transformer_Ingress
kafka-topics --create --if-not-exists --zookeeper zookeeper:2181 --partitions 2 --replication-factor 1 --topic  MX_Validator_Ingress
kafka-topics --create --if-not-exists --zookeeper zookeeper:2181 --partitions 2 --replication-factor 1 --topic  MT_Validator_Ingress
kafka-topics --create --if-not-exists --zookeeper zookeeper:2181 --partitions 2 --replication-factor 1 --topic  MT_Response_Builder_Ingress
kafka-topics --create --if-not-exists --zookeeper zookeeper:2181 --partitions 2 --replication-factor 1 --topic  MT_Ingestor_Ingress
kafka-topics --create --if-not-exists --zookeeper zookeeper:2181 --partitions 2 --replication-factor 1 --topic  ISOConvertor_Response
kafka-topics --create --if-not-exists --zookeeper zookeeper:2181 --partitions 2 --replication-factor 1 --topic  MX_Builder_Ingress
kafka-topics --create --if-not-exists --zookeeper zookeeper:2181 --partitions 2 --replication-factor 1 --topic  ISOConvertor_MT2MX_Response

export topicList='["CBPR_Validator_Ingress",  "MX2MT_Transformer_Ingress","MT_Builder_Ingress", "MX_Response_Builder_Ingress","MT2MX_Transformer_Ingress", "MX_Validator_Ingress", "MT_Validator_Ingress","MT_Response_Builder_Ingress","MT_Ingestor_Ingress", "ISOConvertor_Response",  "MX_Builder_Ingress","ISOConvertor_MT2MX_Response","Error"]'