import React from 'react'
import PropTypes from 'prop-types';
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import ProductMediaObject from "./stock/ProductMediaObject";
import Icon from "../../Icon";

// import worlds from "../../../data/worlds";
import worldTypes from "../../../data/worldTypes";
import {producers} from "../../../data/worldGeneration/buildings";
import {text_anno, text_plan_ucf} from "../../../data/translation/texts";
import {blur} from "../../../functions/helpers";
import * as personalSlice from "../../../features/personalSlice";
import needsOfProducts from "../../../data/needsOfProducts";
import * as hl from "../../../functions/highlight";


const ProductionHeader = (props) => {
  // get island & world
  const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))

  const show_highlights = useSelector(state => state.debug).includes('show_highlights')
  const collapsed = useSelector(state => state.personal.collapsed)
  const c = 'Production'
  const dispatch = useDispatch()
  const handleToggle = (e) => {
    blur(e)
    const key = e.currentTarget.id.replace('toggle_', '');
    collapsed.includes(key) /*refactor: add/remove/toggle within a list*/
      ? dispatch(personalSlice.upsert({collapsed: collapsed.filter(x => x !== key)}))
      : dispatch(personalSlice.upsert({collapsed: [...collapsed, key]}))
  }

  const producersOfWorld = producers.filter(p => p.hasOwnProperty('worldTypeIds') && p.worldTypeIds.includes(worldType.id))
  const sums = useSelector(state => state.producerSums.filter(x => x.islandId === activeIslandId), shallowEqual)

  // const cleanable = !!document.querySelectorAll('.trash-button').length
  const clean = e => {
    blur(e)
    document.querySelectorAll('.trash-button').forEach(elem => elem.click())
  }
  const buildAll = e => {
    blur(e)
    document.querySelectorAll('.BuildingButton').forEach(elem => elem.click())
  }
  const buildPreset = (e, preset) => {
    blur(e)
    document.querySelectorAll('.BuildingButton'+preset).forEach(elem => elem.click())
  }
  const handleMouseEnter = (populaGUID) => show_highlights &&
    hl.highlight({GUID: populaGUID}, {
      needed: needsOfProducts.find(n => n.GUID === populaGUID).Inputs.map(i => i.GUID),
      provided: []
    })
  const handleMouseLeave = () => show_highlights && hl.highlight(null)


  return (
    <div className="ProductionHeader">
      <Button id={'toggle_' + c} size='sm' className='sm mr-2' active={!collapsed.includes(c)} onClick={handleToggle}>
        {/*<FontAwesomeIcon icon={props.isExpanded ? 'plus-square' : 'minus-square'} />*/}
        {/*<FontAwesomeIcon icon={!props.isExpanded ? 'eye' : 'eye-slash'} fixedWidth/>*/}
        <FontAwesomeIcon icon={!props.isExpanded ? 'caret-right' : 'caret-down'} fixedWidth  size='2x' />
        <Icon icon='Production' style={{verticalAlign: '-0.325em'}}/>
      </Button>

      {props.isExpanded ? <span className='float-right'>
        {worldType.popResGUIDs.map((populaGUID, key) => (
          <Button
            key={populaGUID}
            className='sm mr-1' onClick={e => buildPreset(e, '.neededBy-'+populaGUID)}
            title={text_anno(worldType.populaGUIDs[key])}
            onMouseEnter={e=>handleMouseEnter(populaGUID)}
            onMouseLeave={e=>handleMouseLeave()}
          >
            <img src={"./icons/population/Workforce_" + worldType.socialClassIDs[key] + ".png"} alt='' className='i21'/>
          </Button>
        ))}

        <Button className='sm mr-1' onClick={buildAll}>all</Button>
        <Button className='sm mr-1' onClick={clean} title={text_plan_ucf('cleanup-buildings')}><FontAwesomeIcon icon='broom'/></Button>

      </span> : <>
        {producersOfWorld.filter(p => sums.find(x => x.GUID === p.GUID)?.number).slice(0,200).map(p =>
          <ProductMediaObject key={p.GUID} product={p} className='i24'/>
        )}
      </>}
    </div>
  )
}

ProductionHeader.propTypes = {
  // island: PropTypes.object.isRequired,
  isExpanded: PropTypes.bool.isRequired,
}

export default ProductionHeader