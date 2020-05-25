import React from 'react'
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";

import * as itemCollectionSlice from "../../features/itemCollectionSlice";


const ItemSelect = (props) => {
  const activeIslandId = useSelector(state => state.personal.islandId)

  const {slot, items, usageIn} = props
  let {area, areaId} = props
  if (!area) {
    area = {id:areaId}
  }

  const item = useSelector(state => state.itemCollections.find(a => a.areaId === area.id && a.slot === slot))
  const otherItemsInArea = useSelector(state => state.itemCollections.filter(a => a.areaId === area.id && a.slot !== slot))

  const dispatch = useDispatch()
  const handleChangeItem = (e, slot) => {
    const areaId = area.id
    const value = parseInt(e.target.value)

    if (isNaN(value)) {
      dispatch(itemCollectionSlice.removeItem({areaId, slot}))
    } else {
      dispatch(itemCollectionSlice.setItem({islandId: activeIslandId, areaId, usageIn, slot, GUID: value}))
    }
  }


  return (<div className='ItemSelect'>
    <select
      value={item ? ''+item.GUID : ""}
      onChange={(e) => handleChangeItem(e, slot)}
    >
      <option value=""></option>
      {items.map((i, key) => (
        <option key={key} value={i.GUID}
                disabled={otherItemsInArea.map(i => i.GUID).includes(i.GUID)}
          /*style={{backgroundColor:'#ff0000'}}*/ >
          {i.translation}
        </option>
      ))}
    </select>
  </div>)
}

ItemSelect.propTypes = {
  items: PropTypes.array.isRequired,
  area: PropTypes.object,//.isRequired,
  areaId: PropTypes.number,//.isRequired,
  slot: PropTypes.number.isRequired,
  usageIn: PropTypes.oneOf(["TownHall", "TradeUnion", "HarbourMasters"]).isRequired,
}

export default ItemSelect
