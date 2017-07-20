const express = require('express')

module.exports = function(server) {

  // Define a base da API Routers
  const router = express.Router()
  server.use('/api', router)

  //Rotas da API e aplicação em si
  const billinCyclesService = require('../api/billingCycle/billingCyclesService')
  billinCyclesService.register(router, '/billingCycles')

  const billingSummaryService = require('../api/billingSummary/billingSummaryService')
  router.route('/billingSummary').get(billingSummaryService.getSummary)
}
