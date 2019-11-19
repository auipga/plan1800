export default class TieredMap extends Map {
  constructor(tierIDs, initialValue) {
    // [ [1,0], [2,0], ... ]
    let reduceToArray
    if (Array.isArray(initialValue) && initialValue.length === tierIDs.length) {
      // set own value to each key
      reduceToArray = (arr, socialClassID, index) => [...arr, [parseInt(socialClassID), initialValue[index]]];
    } else {
      // set same value to all keys
      reduceToArray = (arr, socialClassID, index) => [...arr, [parseInt(socialClassID), initialValue]];
    }

    // noinspection JSCheckFunctionSignatures
    super(tierIDs.reduce(reduceToArray, []))
  }

  static createFromJson(json) {
    let tierIDs=[], values=[]
    for (let key in json) {
      if (json.hasOwnProperty(key)) {
        tierIDs.push(key)
        values.push(json[key])
      }
    }
    return new TieredMap(tierIDs, values)
  }
}

TieredMap.prototype.toJSON = function() {
  let obj={}
  this.forEach((value, key) => {obj[key] = value})
  return obj
}
TieredMap.prototype.sum = function() {
  return this.all().reduce((sum, entry) => sum += entry, 0)
}
TieredMap.prototype.all = function() {
  return Array.from(this.values())
}
TieredMap.prototype.ofTier = function(tierId) {
  return this.get(tierId)
}
TieredMap.prototype.sumAbove = function(tierId) {
  let sum = 0
  this.forEach((entry, id) => {
    if (id > tierId) {
      sum += entry
    }
  })
  return sum
}
TieredMap.prototype.gte = function(tierId, value) {
  return this.has(tierId) && this.ofTier(tierId) > value
}
TieredMap.prototype.present = function(tierId) {
  return this.gte(tierId, 0)
}
TieredMap.prototype.add = function(tierId, value) {
  const newValue = this.get(tierId) + value
  const newValueButMinimum0 = Math.max(newValue, 0);
  const overflow = newValue - newValueButMinimum0;
  this.set(tierId, newValueButMinimum0)
  return overflow
}
TieredMap.prototype.sub = function(tierId, value) {
  return this.add(tierId, -value)
}
TieredMap.prototype.move = function(tierIdFrom, tierIdTo, number) {
  let overflow = this.sub(tierIdFrom, number)
  this.add(tierIdTo, number + overflow)
}
TieredMap.prototype.upgrade = function(tierId, number) {
  this.move(tierId, tierId+1, number)
}
TieredMap.prototype.downgrade = function(tierId, number) {
  this.move(tierId, tierId-1, number)
}