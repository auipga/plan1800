import React from 'react';
import PropTypes from 'prop-types'

import {Badge} from "reactstrap"


const ResourceBadge = (props) => {
    const {resource, count} = props;

    return (
      <Badge className='mr-2' color='secondary' pill>
        {count}
        &times;
        <img src={"./icons/goods/" + resource + ".png"} alt={resource} title={resource} className='i24'/>
      </Badge>
    )
}

ResourceBadge.propTypes = {
  count: PropTypes.number,
  resource: PropTypes.string.isRequired,
}

export default ResourceBadge