import React, {} from 'react';
import PropTypes from 'prop-types';
import {Media} from "reactstrap";
import {text_anno} from "../../../../data/translation/texts";

const ProductMediaObject = (props) => {
  const {product} = props

  const name = text_anno(product.GUID)

  return (
    <Media object
      src={"./allicons/" + product.FileName}
      className={((props.className||'') + ' ProductMediaObject').trim()}
      alt={name}
      title={name}
    />
  )
}

ProductMediaObject.propTypes = {
  product: PropTypes.object,
  className: PropTypes.string,
}

export default ProductMediaObject