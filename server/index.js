const fastify = require("fastify")({
  logger: true,
});

// Declare a route
fastify.get("/", function (request, reply) {
  reply.send({ status: "ok" });
});

// Start the server
fastify.listen({ port: process.env.PORT ?? 3000 }, function (err) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
