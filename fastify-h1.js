'use strict'

const fastify = require('../fastify')({
})

fastify
  .get('/', function (req, reply) {
    reply.send({})
  })

fastify.listen(3000, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
