import React, {Component} from 'react'
import PropTypes from 'prop-types/'
import {trans} from "../functions/translation";
import classNames from "classnames";
import {Button} from "reactstrap";
import GoodItem from "./GoodItem";

export default class BuildingButton extends Component {
  render() {
    const {producer, isUnlocked, fnEnable } = this.props

    return (
      <Button
        className={'p-0 mr-0 ' + GoodItem.classes(producer)} color={'link'}
        onClick={e => fnEnable(e.ctrlKey ? -1 : e.shiftKey ? 1 : 0)}
        disabled={!isUnlocked}
        onMouseEnter={(e) => GoodItem.highlight(producer, e.ctrlKey)}
        onMouseLeave={() => GoodItem.highlight(null)}
      >
        <img src={"./icons/goods/" + producer.key + ".png"}
             alt={trans(producer)} title={trans(producer)}
             style={{height: 24, width: 24}}
             className={'producer '+classNames({"locked": !isUnlocked})}
        />
      </Button>
    )
  }
}

BuildingButton.propTypes = {
  producer: PropTypes.object.isRequired,
  isUnlocked: PropTypes.bool.isRequired,
  fnEnable: PropTypes.func,
}
