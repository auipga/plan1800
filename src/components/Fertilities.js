import React, {Component} from 'react';
import {Badge, Button} from "reactstrap";
import PropTypes from 'prop-types/';
import worlds from "../data/worlds";
import ResourceBadge from "./ResourceBadge";
import FertilitySwitch from "./FertilitySwitch";

export default class Fertilities extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: this.props.forceEdit }
  }

  toggleEdit = () => {
    this.setState({edit: !this.state.edit})
  }

  render() {
    const {island, forceEdit, fnSetFertilities, fnChangeResourceCount} = this.props;

    const world = worlds.find(w => w.id === island.worldId);
    const possibleFertilities = world.fertilities
    const possibleResources = world.regionalResources

    return (
      <span onContextMenu={e => { e.preventDefault(); if (!this.state.edit) {this.toggleEdit();}  }}>
        {this.state.edit
          ? <>
            {possibleFertilities.map(fertility => (
              <FertilitySwitch
                key={fertility}
                fertility={fertility}
                islandFertilities={island.fertilities}
                fnSetFertilities={(fertilities) => fnSetFertilities(island, fertilities)}
              />
            ))}

            {possibleResources.map(resource => (
              <ResourceBadge
                key={resource}
                resource={resource}
                count={island.regionalResources[resource]}
                fnChangeResourceCount={(count) => fnChangeResourceCount(island, resource, count)}
              />
            ))}
            <Button
              disabled={forceEdit}
              className={'py-1 mr-1'}
              color={'info'}
              onClick={this.toggleEdit}
            >&#10004;{/*icon-check*/}</Button>
          </>
          : <>
            <Badge color={'secondary'} className={'mr-2 px-2'}>
            {possibleFertilities.filter(key => island.fertilities.includes(key)).map(fertility => (<React.Fragment key={fertility}>
              <img src={"./icons/goods/" + fertility + ".png"} alt={fertility} title={fertility} style={{width: 22, height: 22}} className={'mx-1'}/>
            </React.Fragment>))}
            </Badge>

            {possibleResources.filter(key => island.regionalResources[key]).map(resource => (
              <ResourceBadge
                key={resource}
                resource={resource}
                count={island.regionalResources[resource]}
              />
            ))}
            <Button className={'p-0 mr-1'} color={'transparent'} onClick={this.toggleEdit}>&#9999;{/*icon-edit/pencil*/}</Button>
          </>
        }
      </span>
    )
  }
}

Fertilities.propTypes = {
  island: PropTypes.object.isRequired,
  forceEdit: PropTypes.bool,
  fnSetFertilities: PropTypes.func.isRequired,
  fnChangeResourceCount: PropTypes.func.isRequired,
};
