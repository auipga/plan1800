calculateBuffs = (good, island) => {
  const tradesWithIsland =  this.state.trades.filter(t => t.good === good && (island.id === t.from || island.id === t.to))
  // regionalResources: world.regionalResources.reduce((obj,res) => ({...obj, [res]:debugEnabled ? 5 : 0}), {}),
  const affectedIslandIDs = tradesWithIsland.reduce((all, t) => ({...all, [t.from]:1, [t.to]:1}), {})
  // console.log(affectedIslandIDs);
  const islands = this.state.islands.filter(i => affectedIslandIDs.hasOwnProperty(i.id))

  return islands.reduce((sum, that) => sum + this.localBalance(good, that), 0)
}

getGetters = (good, from) => {
  let tradesWithGetterIslands = this.state.trades.filter(t => t.good === good && from === t.to)
  tradesWithGetterIslands.forEach()


}
getGivers = (good, to) => {
  const tradesWithGiverIslands  = this.state.trades.filter(t => t.good === good && to === t.to)
  tradesWithGiverIslands.forEach()

}

// consumer needs
calculateTradeGive = (good, island) => {
  return this.state.trades.filter(t => t.good === good && island.id === t.from)
  .reduce((sum, that) => {
    const islandFrom = this.state.islands.find(i => i.id === that.to);
    return sum + Math.max(0, -this.localBalance(good, islandFrom))
  }, 0)
}
// producer buffers
calculateTradeGet = (good, island) => {
  return this.state.trades.filter(t => t.good === good && island.id === t.to)
  .reduce((sum, that) => {
    const islandFrom = this.state.islands.find(i => i.id === that.from);
    return sum + Math.max(0, this.localBalance(good, islandFrom)) //+ this.calculateTradeGet(good, islandFrom)
  }, 0)
}

calculateSynced
calculateTradeBalance = (good, island) => {
  if (this.state.trades === undefined || this.state.trades === null) {
    return 0
  }
  const trades = this.state.trades.filter(t => t.good === good);
  const loading  = trades.filter(t => t.from === island.id && t.to   !== null).reduce((sum, that) => sum + that.amount, 0);
  const dropping = trades.filter(t => t.to   === island.id && t.from !== null).reduce((sum, that) => sum + that.amount, 0);
  return dropping - loading
}
