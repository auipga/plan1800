import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types/'
import {Button, Popover, PopoverBody} from "reactstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// const allThemes = ["default", "cerulean", "cosmo", "cyborg", "darkly", "flatly", "journal", "litera", "lumen", "lux", "materia", "minty", "pulse", "sandstone", "simplex", "sketchy", "slate", "solar", "spacelab", "superhero", "united", "yeti"]
const themes = {
  light: [
    "default",
    "cosmo",
    "sandstone",
    "spacelab",
    "united",
    "yeti",
  ],
  dark: [
    "cyborg",
    "darkly",
    "slate",
  ],
  other: [
    "sketchy",
  ],
  disabled: [
    "superhero",
    "cerulean",
    "flatly",
    "journal",
    "minty",
    "pulse",
    "simplex",
    "litera",
    "lumen",
    "lux",
    "materia",
    "solar",
  ],
}

const Settings = (props) => {
  const [opened, setOpened] = useState(false)
  const toggle = () => setOpened(!opened)

  let theme1 = localStorage.getItem('theme')
  const [theme, setTheme] = useState(theme1 ? theme1 : 'default')
  useEffect(() => localStorage.setItem("theme", theme), [theme]);


  return (<>
      <link rel='stylesheet' href={'./themes/'+theme+'/bootstrap.css'}/>
      <Button type='button' id='popover_settings' className={''}>
        {/*<FontAwesomeIcon icon={'cogs'}/>*/}
        {/*<FontAwesomeIcon icon={'bars'}/>*/}
        <FontAwesomeIcon icon={'ellipsis-v'} />
      </Button>
      <Popover placement="bottom-end" trigger='legacy' isOpen={opened} target='popover_settings' toggle={toggle}>
        <PopoverBody style={{minHeight:80}}>
          <p className='font-italic font-weight-bold badge-warning'>Work in progress <br/> may break your session!!</p>

          {props.children}

          <p>
            <FontAwesomeIcon icon={'palette'}/>
            <select onChange={event => setTheme(event.target.value)} value={theme}>
              {Object.keys(themes).filter(type => type !== "disabled").map(type => (<>
                <option disabled className='text-capitalize'>{type.toUpperCase()}</option>
                {themes[type].map(t => <option value={t} className='text-capitalize'>{t}</option>)}
              </>))}
            </select>
          </p>
        </PopoverBody>
      </Popover>
    </>
  )
}

Settings.propTypes = {
  layout: PropTypes.oneOf(["tabs", "buttons"]),
}

export default Settings