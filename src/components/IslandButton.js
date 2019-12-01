import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import {Button} from "reactstrap";

export default class IslandButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }
  }

  render() {
    const { island, activeIsland, onClick, fnSetIslandName } = this.props;

    const handleContextMenu = (e) => {
      e.preventDefault()
      this.setState({edit: true}, () => {
        document.getElementById('iname_'+island.id).focus()
        document.execCommand('selectAll',false,null)
      })
    }
    const saveName = (e) => {
      const newName = e.target.innerText;
      fnSetIslandName(island.id, newName ? newName : 'undefined')
      this.setState({edit: false})
    }
    const handleKey = (e) => {
      const element = e.target

      if (e.key === "Escape")  {
        element.innerText = island.name
        this.setState({edit: false}, () => element.blur())
      }
      if (e.key === "Enter")  {
        element.blur()
      }
    }

    return (
      <Button title={island.name + " (" + island.id + ")"}
              className={'mr-2 '}
              active={activeIsland === island.id}
              onClick={() => !this.state.edit ? onClick(island.id) : null}
              onContextMenu={(e) => !this.state.edit ? handleContextMenu(e) : null}
      >
        <span contentEditable={this.state.edit} id={'iname_'+island.id}
              onBlur={(e) => this.state.edit ? saveName(e) : null}
              onKeyDown={e => handleKey(e)}
        >{island.name}</span>
      </Button>
    )
  }
}

IslandButton.propTypes = {
  island: PropTypes.object.isRequired,
  activeIsland: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  fnSetIslandName: PropTypes.func.isRequired,
};

