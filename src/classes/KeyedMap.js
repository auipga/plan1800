export default class KeyedMap extends Map {
  constructor(keys = [], initialValue = []) {
    // [ [1,0], [2,0], ... ]
    let reduceToArray
    if (Array.isArray(initialValue) && initialValue.length === keys.length) {
      // set own value to each key
      reduceToArray = (arr, key, index) => [...arr, [key, initialValue[index]]];
    } else {
      // set same value to all keys
      reduceToArray = (arr, key, index) => [...arr, [key, initialValue]];
    }

    // noinspection JSCheckFunctionSignatures
    super(keys.reduce(reduceToArray, []))
  }

  static createFromJson(json) {
    let keys=[], values=[]
    for (let key in json) {
      if (json.hasOwnProperty(key)) {
        keys.push(key)
        values.push(json[key])
      }
    }
    return new KeyedMap(keys, values)
  }
}

KeyedMap.prototype.toJSON = function() {
  let obj={}
  this.forEach((value, key) => {obj[key] = value})
  return obj
}
KeyedMap.prototype.getDefault = function(key, defaultValue) {
  const oldValue = this.get(key)
  return oldValue !== undefined ? oldValue : defaultValue
}
KeyedMap.prototype.getKeys = function() {
  return Array.from(this.keys())
}
KeyedMap.prototype.key = function(index = 0) {
  return this.keys()[index]
}
KeyedMap.prototype.firstKey = function() {
  return this.keys()[0]
}
KeyedMap.prototype.lastKey = function() {
  const keys = this.keys()
  return keys[keys.length-1]
}
KeyedMap.prototype.sum = function() {
  return this.all().reduce((sum, entry) => sum += entry, 0)
}
KeyedMap.prototype.all = function() {
  return Array.from(this.values())
}
KeyedMap.prototype.gte = function(key, value) {
  return this.has(key) && this.get(key) > value
}
KeyedMap.prototype.present = function(key) {
  return this.gte(key, 0)
}
KeyedMap.prototype.plus = function(key, value, allowNegative = false) {
  const oldValue = this.get(key)
  const newValue = oldValue + value
  const newValueButMinimum0 = allowNegative ? newValue : Math.max(newValue, 0);
  const overflow = newValue - newValueButMinimum0;
  this.set(key, newValueButMinimum0)
  return overflow
}
KeyedMap.prototype.add = function(key, value, unique = false) {
  const oldValue = this.getDefault(key, [])
  // oldValue.filter((item, index) => oldValue.indexOf(item) !== index)
  // oldValue.filter((item, index) => item === value)
  // const oldValue = unique ? Array.from(new Set(this.get(key))) : this.get(key)
  if (unique) {
    alert('not implemented: unique')
    console.log('not implemented: unique')
  //   this.get(key).find()
  //   this.set(key, [...oldValue, value])
    return false
  }
  this.set(key, [...oldValue, value])
  return true
}
KeyedMap.prototype.remove = function(key, value) {
  const oldValue = this.get(key)
  const newValue = oldValue.filter(f => f !== value);
  this.set(key, newValue)
  return newValue
}
KeyedMap.prototype.sub = function(key, value) {
  return this.plus(key, -value)
}
