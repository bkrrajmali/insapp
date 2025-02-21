import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'fraud-detection-service',
  brokers: process.env.KAFKA_BROKERS?.split(',') || []
});

const consumer = kafka.consumer({ groupId: 'fraud-detection-group' });

export const startClaimEventConsumer = async () => {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic: 'claim-events', fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const claimEvent = JSON.parse(message.value?.toString() || '');
        // Process claim event for fraud detection
        await analyzeClaim(claimEvent);
      },
    });
  } catch (error) {
    console.error('Error consuming claim events:', error);
    throw error;
  }
};

async function analyzeClaim(claim: any) {
  // Implement fraud detection logic
  console.log('Analyzing claim for fraud:', claim);
}