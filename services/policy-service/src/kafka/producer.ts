import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'policy-service',
  brokers: process.env.KAFKA_BROKERS?.split(',') || []
});

const producer = kafka.producer();

export const publishPolicyEvent = async (topic: string, message: any) => {
  try {
    await producer.connect();
    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }]
    });
  } catch (error) {
    console.error('Error publishing policy event:', error);
    throw error;
  }
};