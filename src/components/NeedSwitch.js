import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import classNames from 'classnames';

export default class NeedSwitch extends Component {
  render() {
    const {needKey, needed, prohibitedNeeds, fnSetIslandProhibitedNeeds} = this.props

    const enabled = !prohibitedNeeds.includes(needKey)

    const toggle = () => {
      if (!enabled) {
        fnSetIslandProhibitedNeeds(prohibitedNeeds.filter(f => f !== needKey))
      } else {
        fnSetIslandProhibitedNeeds([...prohibitedNeeds, needKey]) // hint: .add() does not work
      }
    }

    return (
      <img src={"./icons/goods/" + needKey + ".png"} alt={needKey} title={needKey}
           className={'mr-1 need ' + classNames({"prohibited": !enabled, "locked": !needed})}
           onClick={toggle}
      />
    )
  }
}

NeedSwitch.propTypes = {
  needKey: PropTypes.string.isRequired,
  needed: PropTypes.bool.isRequired,
  prohibitedNeeds: PropTypes.array.isRequired,
  fnSetIslandProhibitedNeeds: PropTypes.func.isRequired,
};
