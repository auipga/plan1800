const fnBalance = (productGUID, relevantProducers = [], relevantResidences = []) => {
  const balance = relevantProducers
  .reduce((sum, x) => sum +
    x.number * Math.max(0, x.Productivity)/100 * 60/x.CycleTime
    * x.io.filter(io => io.good === productGUID).reduce((cycles, io) => cycles + 1/io.Cycle, 0)
    , 0)

  const balance_needs = relevantResidences
  .reduce((sum, x) => sum +
    x.number * x.needs.find(need => need.good === productGUID).amount * 60 * Math.max(0, x.needs.find(need => need.good === productGUID).factor)
    , 0)
  // .reduce((prev, next, i) => prev + island.residences.ofTier(next) * need.consumption[i] * 60, 0)
  return balance-balance_needs
}

export default fnBalance