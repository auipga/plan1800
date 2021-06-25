import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import ReactGA from "react-ga";

import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {sum} from "../../functions/helpers";
import * as debugSlice from "../../features/debugSlice";
import track from "../../functions/tracking";


const hours = sum([/*ab 1.4.20:*/23+41/60, 497+0/60, 15+20/60, 12+8/60, 4+16/60])

const paypalLink = (amount, text) => (<li>
  <ReactGA.OutboundLink
    eventLabel={amount.toString()}
    to={'https://paypal.me/transfeld/'+amount} rel="noopener noreferrer" target="_blank"
    className='paypale'
  >{text}{amount && ` (${amount} €)`}</ReactGA.OutboundLink>
  {/*<a className='paypale' href={'https://paypal.me/transfeld/'+amount} rel="noopener noreferrer" target='_blank'
     title={text}
  >{text}{amount && ` (${amount} €)`}</a>*/}
</li>)

const Paypal = () => {
  const timeFactor = 60 * 1000 // /60
  const donated = useSelector(state => state.debug).includes('donated')

  const [timeout, setTimeout] = useState(undefined)
  const startTimer = (time = 30) => {
    setTimeout(
      window.setTimeout(() => {
        track.support('Open Popup via Timeout', time)
        setModal(1)
      }, time * timeFactor)
    )
    track.support('Start Timer', time)
    console.log('donation reminder will pop up in', time, 'minutes')
  }
  const pauseTimer = () => {
    // noinspection JSCheckFunctionSignatures
    track.support('Pause timer')
    typeof timeout === 'number' && clearTimeout(timeout)
  }
  const later = (time) => {
    track.support('Later', time)
    toggle()
    startTimer(time)
  }

  const [modal, setModal] = useState(null)
  const toggle = () => {
    setModal(!modal)
    track.support('Toggle popup via Click')
  }

  const dispatch = useDispatch()
  const setDonated = e => {
    e.preventDefault()
    console.log('Thank you for your donation!')
    dispatch(debugSlice.add('donated'))
    track.support('Set donated')
  }
  const clearDonation = e => {
    e.preventDefault()
    dispatch(debugSlice.destroy('donated'))
    track.support('Clear donated')
  }

  useEffect(() => {
    if (!donated) {
      startTimer()
    } else {
      console.log('Thank you for your donation!')
    }
    return () => {
      pauseTimer()
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (<>
    <Button color="primary" onClick={toggle} className='mr-2 px-1 py-0' outline>
      <FontAwesomeIcon icon='hand-holding-heart' size={'sm'} fixedWidth />
      {!donated && <>
        <span className='font-weight-bold ml-1'>unterstütze plan1800</span>
        <FontAwesomeIcon icon='hand-holding-heart' size={'sm'} fixedWidth className='ml-1' />
      </>}
    </Button>
    <Modal isOpen={modal} toggle={toggle} onOpened={pauseTimer}
           className='Paypal-modal'
           size='md'
           centered={true}
           scrollable={true}
           backdrop={donated || modal!==1 ? true : 'static'}
           keyboard={donated || modal!==1}
           returnFocusAfterClose={!donated}
    >
      <ModalHeader toggle={donated || modal !== 1 ? toggle : undefined}>
        <FontAwesomeIcon icon='thumbs-up' fixedWidth className='mr-4' onClick={clearDonation}/>
        Bitte unterstütze dieses Projekt
        <FontAwesomeIcon icon='thumbs-up' fixedWidth className='ml-4' onClick={setDonated}/>
      </ModalHeader>

      <ModalBody>
        <p className='text-center'>
          In <strong>plan1800</strong> sind bislang <span className='text-underline font-weight-bold' title={hours}>{Math.floor(hours)} Stunden</span> an Zeit geflossen
        </p>

        {/*<figure className='mb-0 forDark'><embed src="https://wakatime.com/share/@28b6c5ac-c77e-4d52-aa8d-5b38ca372172/0f342d4b-1599-4e33-b30c-f9174f397017.svg"></embed></figure>*/}
        {/*<figure className='mb-0 forLight'><embed src="https://wakatime.com/share/@28b6c5ac-c77e-4d52-aa8d-5b38ca372172/4f3804b0-9ad8-41eb-8c3c-3f2df3278c2a.svg"></embed></figure>*/}
        {/*<sub className='text-muted float-right'>letzte 30 Tage</sub>*/}

        <p className='mt-2'>
          Um <strong>plan1800</strong> auch zukünfig weiter entwickeln und betreiben zu können, bitte ich um deine Unterstützung!
        </p>
        <p>
          Die Betriebskosten sind minimal.
          Es ist viel mehr die Zeit, die ich hier reinstecke, anstatt etwas zu arbeiten, das Geld bringt.
          Aber ich habe eben Freude daran. Du hoffentlich auch!
        </p>
        <div>
          <span className='text-underline'>So kannst du mich unterstützen:</span>
          <ul>
            <li><strong>teile</strong> plan1800</li>
            <li>äußere <strong>Feedback</strong>
              <ReactGA.OutboundLink eventLabel='Telegram'
                to="https://t.me/plan1800" rel="noopener noreferrer" target="_blank"
              >hier <FontAwesomeIcon icon='external-link-alt'/></ReactGA.OutboundLink>
              {/*<a href="https://t.me/plan1800">hier <FontAwesomeIcon icon='external-link-alt'/></a>*/}
              (Telegram-Gruppe)</li>
            <li><strong>spende</strong> per PayPal</li>
            <li>sende mir deine Überproduktion an Luxusgütern</li>
            <li>oder eine Kombination aus allen Punkten</li>
          </ul>
        </div>

        <div>
          PayPal:{' '}
          {/*<FontAwesomeIcon icon={['fab', 'paypal']} size={'sm'} fixedWidth />*/}
          <ul>
            {paypalLink(5,  '1 Bier, 1 Tiefkühlpizza')}
            {paypalLink(15, '1 leckeres Schnitzel mit Getränk')}
            {paypalLink(25, '2 leckere Schnitzel mit Getränk')}
            {paypalLink('', 'ich möchte den Betrag selbst wählen')}
            {paypalLink('', 'ich möchte einen anderen Zweck wählen')}
          </ul>
        </div>

        {!donated
          ? <div>
            Erinnere mich in
            <Button color="link" size='sm' onClick={() => later(4*60)}>4 Stunden</Button>
            <Button color="link" size='sm' onClick={() => later(24*60)}>24 Stunden</Button>
            erneut.
            {/*<br/>*/}
            {/*<span className='text-muted small'>(wenn die Seite nicht neu geladen wird)</span>*/}
          </div>
          : <div className='font-weight-bold alert alert-success text-center'>Danke für deinen Beitrag!</div>}
      </ModalBody>

      <ModalFooter>
        {!donated
          ? <Button color="link" size='sm' onClick={() => later(120)} title='2 Stunden'>Später</Button>
          : <Button color="secondary" size='sm' onClick={toggle}>Schließen</Button>
        }
      </ModalFooter>
    </Modal>
  </>)
}

export default Paypal