import uuid from "uuid";

export const autoincrement = (arr) => arr.length ? Math.max(...arr.map(item => item.id))+1 : 1
export const addID = (obj, id) => ({id, ...obj})
// export const addID = (obj, id) => ({...obj, id})
// export const addUUID = (obj) => ({uuid: uuid(), ...obj})
export const addUUID = (obj) => ({...obj, uuid: uuid()})
export const push = (arr, ...item) => [...arr, ...item]
export const pushWithID = (arr, item) => push(arr, addID(item, autoincrement(arr)))
export const pushWithUUID = (arr, item) => push(arr, addUUID(item))

// export const timestamp = () => (new Date()).toLocaleTimeString("de")
export const timestamp = () => new Date()

// export const update = (elem, attrs) => ({...elem, ...attrs, z_updated: timestamp()})
export const update = (elem, attrs) => ({...elem, ...attrs})
export const updateAssign = (source, target) => Object.assign(target, source, {z_updated: timestamp()})



