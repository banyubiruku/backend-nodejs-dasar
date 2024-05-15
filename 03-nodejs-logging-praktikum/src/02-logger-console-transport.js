import winston from "winston";

const logger = winston.createLogger({
  transports: [new winston.transports.Console({})],
});

logger.log({
  level: "info",
  message: "Hello Logging",
});
