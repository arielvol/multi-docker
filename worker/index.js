const keys = require("./keys");
const redis = require("redis");

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});

const subscriptionRedisClient = redisClient.duplicate();

function calculateFib(index) {
  if (index < 2) {
    return 1;
  } else {
    return calculateFib(index - 1) + calculateFib(index - 2);
  }
}

subscriptionRedisClient.on("message", (channel, message) => {
    redisClient.hset('values', message, calculateFib(parseInt(message)));
});
subscriptionRedisClient.subscribe('insert');