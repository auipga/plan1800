import ReactGA from "react-ga";

let enabled = undefined

export const initGA = trackingID => {
  ReactGA.initialize(trackingID)
  enabled = true
}

export const disabeTrack = () => {enabled = false}
export const enableTrack = () => {enabled = true}

/**
 * FullEvent - Add custom tracking event.
 * @param {string} category
 * @param {string} action
 * @param {null|string} label
 * @param {number} value
 * @param {boolean} nonInteraction
 * @param {string} transport
 */
const FullEvent = (category, action, label = undefined, value = undefined, nonInteraction = false, transport = undefined) => {
  enabled &&
  ReactGA.event({
    category,
    action,
    label,
    value,
    nonInteraction,
    transport,
  })
}

/**
 * SimpleEvent - Add custom tracking event.
 * @param {string} category
 * @param {string} action
 */
const SimpleEvent = (category, action) => FullEvent(category, action)


// eslint-disable-next-line no-unused-vars
const examples = () => {
  ReactGA.event({
    category: 'User',
    action: 'Created an Account'
  });

  ReactGA.event({
    category: 'Social',
    action: 'Rated an App',
    value: 3
  });

  ReactGA.event({
    category: 'Editing',
    action: 'Deleted Component',
    label: 'Game Widget'
  });

  ReactGA.event({
    category: 'Promotion',
    action: 'Displayed Promotional Widget',
    label: 'Homepage Thing',
    nonInteraction: true
  });
}

/*
started
saved
closed
loaded
deleted
import
export
-
host
join
leave
*/
const view = (action) => SimpleEvent('View', action)
const data = (action) => SimpleEvent('Game data', action)
const navigation = (action, value) => FullEvent('Navigation', action, null, value)
const game = (action) => SimpleEvent('Game', action)
const build = (producerName) => FullEvent('Game', 'Build Producer', producerName)
const coop = (action) => SimpleEvent('Coop', action)
const support = (action, value = undefined) => FullEvent('Support', action, null, value)
// const build = (producerName) => FullEvent('Game', 'Build Producer', producerName)

const track = {game, navigation, build, coop, data, view, support, enable: enableTrack, disable: disabeTrack,}
export default track