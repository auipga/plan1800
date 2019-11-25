import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import classNames from 'classnames';

export default class NeedSwitch extends Component {
  constructor(props) {
    super(props);
    const {need, nIndex} = this.props

    this.title = need.key + "\n\u25B2" + need.influx[nIndex] + " | $" + need.income[nIndex] + " | \u263B" + need.happiness[nIndex]
  }

  render() {
    const {need: {key: needKey}, needed, prohibitedNeeds, fnSetIslandProhibitedNeeds} = this.props

    const enabled = !prohibitedNeeds.includes(needKey)

    const toggle = () => {
      if (!enabled) {
        fnSetIslandProhibitedNeeds(prohibitedNeeds.filter(f => f !== needKey))
      } else {
        fnSetIslandProhibitedNeeds([...prohibitedNeeds, needKey]) // hint: .add() does not work
      }
    }

    return (
      <img src={"./icons/goods/" + needKey + ".png"} alt={needKey} title={this.title}
           className={'mr-1 need ' + classNames({"prohibited": !enabled, "locked": !needed})}
           onClick={toggle}
      />
    )
  }
}

NeedSwitch.propTypes = {
  need: PropTypes.object.isRequired,
  nIndex: PropTypes.number.isRequired,
  needed: PropTypes.bool.isRequired,
  prohibitedNeeds: PropTypes.array.isRequired,
  fnSetIslandProhibitedNeeds: PropTypes.func.isRequired,
};
