import uuid from "uuid";

export const orDefault = (variable, defaultValue = undefined) => variable === undefined ? defaultValue : variable

export const forceSign = number => number > 0 ? '+' + number : number
export const sum = array => array.reduce((pv, cv) => pv + cv, 0);
export const sumBy = (array, key) => array.reduce((all, next) => all + next[key], 0);

// Array.prototype.max = function() {
//   return Math.max.apply(null, this);
// };
//
// Array.prototype.min = function() {
//   return Math.min.apply(null, this);
// };

export const findMax = arr => arr.length ? Math.max.apply(null, arr) : undefined
export const findMin = arr => arr.length ? Math.min.apply(null, arr) : undefined
export const ensureMinMax = (number, min, max) => Math.max(min, max === undefined ? number : Math.min(max, number))


export const sortByNumberField = (field, ascending = true) => (a, b) => (ascending ? 1 : -1) * (a[field] - b[field])
export const sortByStringField = (field, ascending = true) => (a, b) => (ascending ? 1 : -1) * (a[field].localeCompare(b[field]))
export const sort = (a, b) => a - b
export const sortDown = (a, b) => b - a

export const blur = e => e.currentTarget.blur()

export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const uuidPiece = (length = undefined) => uuid().slice(0, length)
export const nth = (n, key) => !!(key && !(key % n))