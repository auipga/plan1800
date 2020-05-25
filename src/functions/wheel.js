export const modifier = (event) => {
  // event.preventDefault()
  let step = 1
  if (event.ctrlKey)  { step *= 5  }
  if (event.shiftKey) { step *= 10 }
  // if (event.altKey)   { step *= 5  }
  return step
}

export const wheelDirection = (event) => {
  event.preventDefault()
  return -Math.sign(event.deltaY)
}
const wheel = (event) => {
  event.preventDefault()
  return wheelDirection(event) * modifier(event)
}


export const arrowDirection = (event) => {
  if (event.key === "ArrowUp") {
    event.preventDefault()
    return +1
  }
  if (event.key === "ArrowDown") {
    event.preventDefault()
    return -1
  }
}
export const arrow = (event) => {
  return arrowDirection(event) * modifier(event)
}

export default wheel
