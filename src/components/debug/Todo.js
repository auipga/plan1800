import React from 'react'

import {Button, TabPane} from "reactstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import PopoverWithTabs from "../global/PopoverWithTabs";

const Todo = () => {
  const id = 'Todo'

  const tabs = [
    {
      name: "changelog",
      icon: 'clipboard-check',
      hidden: false
    },
    {
      name: "Todos",
      icon: 'list-ul',
      hidden: false
    },
  ]

  if (tabs.find(t => !t.hidden) === undefined) {
    return <></>
  }

  const check = (checked) => {
    return <input type='checkbox' disabled={true} checked={checked}/>
  }

  return (<div className={'PopoverWithTabsWrap ' + id}>
    <Button id={'popover_' + id} type='button' className='mr-2 px-1 py-0' color='success' outline title="Updates, Changelog, Todo's">
      <FontAwesomeIcon icon='clipboard-list' fixedWidth/>
      <FontAwesomeIcon icon='caret-down' />
    </Button>
    <PopoverWithTabs id={id} tabs={tabs} placement='bottom-start'>
      <TabPane tabId="changelog" style={{width: 450, maxHeight: 400, overflowY: 'scroll'}}>
        <div className='description'>Updates (changelog):</div>

        <div>
          <div className='text-underline'>24.04.20:</div>
          <ul>
            <li>Fix: Geschützfabrik verbraucht Messing statt Stahl</li>
          </ul>
        </div>

        <div className='altes'>
          <div>
            <div className='text-underline'>17.04.20:</div>
            <ul>
              <li>Vierter Item-Slot</li>
            </ul>
          </div>
        <div>
          <div className='text-underline'>11.04.20:</div>
          <ul>
            <li>Fix Erz-Erzbischof Archibald</li>
          </ul>
        </div>
          <div>
            <div className='text-underline'>08.04.20:</div>
            <ul>
              <li>Direktes Upgrade von der alten auf die neue Version<br/>(ohne Export und Import)</li>
              <li>Startseite weiter angepasst</li>
            </ul>
          </div>
        <div>
          <div className='text-underline'>05.04.20:</div>
          <ul>
            <li>Neue Startseite</li>
            <li>Import von Spielständen aus der alten ("stable") Version</li>
          </ul>
        </div>
        <div>
          <div className='text-underline'>03.04.20:</div>
          <ul>
            <li>Kraftwerke, Heizöfen (vorläufig)</li>
            <li>Kultur-Menü übersetzt und (vorläufig) vereinfacht</li>
            <li>Aktive Insel erkennbarer (unterstrichen) <span className='text-primary'>@Dirk</span></li>
            <li>Koop: Verbindungsaufbau vereinfacht + Hinweistexte</li>
          </ul>
        </div>
        <div>
          <div className='text-underline'>31.03.20:</div>
          <ul>
            <li>Arktis: Quartier und Items</li>
            <li>Alle Sessions: Nur noch die Items anzeigen, die einen Einfluss auf die Berechnung haben</li>
          </ul>
        </div>
          <div>
            <div className='text-underline'>30.03.20:</div>
            <ul>
              <li>Englische Texte (alles außer Changelog) - wenn Browser/Betriebssystem von Deutsch abweicht</li>
              <li>Mehr Tooltips / Hilfetexte</li>
              <li>Code cleanup</li>
            </ul>
          </div>
          <div>
            <div className='text-underline'>29.03.20:</div>
            <ul>
              <li>200 neue Items und viele weitere aktualisierte Daten. Danke an Stefan von <a href="http://annolayouts.de/">annolayouts.de</a></li>
              <li>Fruchtbarkeiten (nur Anzeige)</li>
              <li>Bevölkerung umgebaut</li>
              <li>Waren aus anderen Sessions werden wieder bei den Produktionsgebäuden angezeigt (wie im stable)</li>
              <li>Lager entfernt</li>
              <li>Links/Rechts-Klick auf Icons zählt den Wert daneben hoch/runter (Modifikatoren: Strg 5, Shift 10, Strg+Shift 50)</li>
              <li>Elektrizität: nur noch auf kompatible Gebäude anwendbar</li>
              <li>Anpassungen und Verbesserungen auf Startseite, im Koop-Menü, Speichern-Menü</li>
              <li>Erste Vorbereitungen für mobile Ansicht</li>
              <li>Erste Vorbereitungen für Mehrsprachigkeit</li>
              <li>Links zu anderen Inseln im Routen-Menü</li>
              <li>Diverse Fixes im Koop</li>
              <li>Fix: Item <i>Dennis Brammen, Kritiker der Gastronomie</i> fehlt</li>
              <li>Fix: Goldschmelze verbraucht keine Kohle</li>
              <li>PayPal.me-Link hinzugefügt</li>
            </ul>
          </div>
          <div>
            <div className='text-underline'>13.03.20:</div>
            <ul>
              <li>Koop</li>
              <li>Kleinere, optische Anpassungen</li>
            </ul>
          </div>
          <div>
            <div className='text-underline'>10.03.20:</div>
            <ul>
              <li>Dark-Mode ist jetzt optional</li>
              <li>Anpassungen von Farben und Effekten der Highlights bei heller Ansicht</li>
              <li>Routen: Umstellung auf "teilen", ohne Mengenangabe</li>
            </ul>
          </div>
          <div>
            <div className='text-underline'>09.03.20:</div>
            <ul>
              <li>Nur relevante Gebäude anzeigen, restliche ausblenden</li>
            </ul>
          </div>
          <div>
            <div className='text-underline'>08.03.20:</div>
            <ul>
              <li>Highlights: MouseOver auf <span className='help hi-self'>Produzent</span> hebt dessen{' '}
                <span className='help hi-needs'>Zulieferer</span>,{' '}
                <span className='help hi-neededBy'>Verbraucher</span> und {' '}
                <span className='help hi-extraOutput'>Extrawaren</span>{' '}
                hervor</li>
              <li>Effekte: Zusatzversorgung (ohne Überprüfung/Abfrage ob die Bedingung erfüllt ist) (NeedProvideNeedUpgrade)</li>
              <li>Fix: Kombitation aus ReplaceInputs und AdditionalOutput überschreibt sich gegenseitig (z.B. Dario)</li>
            </ul>
          </div>
          <div>
            <div className='text-underline'>07.03.20:</div>
            <ul>
              <li>Import/Export + schneller Wechsel zwischen verschiedenen Spielständen</li>
              <li>Bugfixes</li>
            </ul>
          </div>
          <div>
            <div className='text-underline'>02.03.20:</div>
            <ul>
              <li>Elektrizität: erste Implementation</li>
              <li>Fix: Nähmaschinenfabrik verbraucht Kohle statt Stahl</li>
              <li>Perfermance</li>
              <li>Fix: "Brot geht nicht"{/*SumInput bekommt Insel-Wechsel nicht mit, wenn der Wert identisch ist*/}</li>
            </ul>
          </div>
          <div>
            <div className='text-underline'>01.03.20:</div>
            <ul>
              <li>Routen: erste Implementation</li>
            </ul>
          </div>
          <div>
            <div className='text-underline'>28.02.20:</div>
            <ul>
              <li>Effekte: <strong>Bedarfs-Bonus</strong> durch Kultur-Sets und Feste (<i>Städtischer Karneval, Taigawald</i>)</li>
              <li>Kultur/Pflanzen: 25% Produktivität für Fruchtbarkeits-Sets (<i>Amazonas, Anden, Nahost, Subalpin, Verwunschen</i>)</li>
              <li>Tendenzen werden wieder bei den Produzenten angezeigt (derzeit also doppelt)</li>
            </ul>
          </div>
          <div>
            <div className='text-underline'>23.02.20:</div>
            <ul>
              <li>Effekte: <strong>Bedarfs-Bonus</strong> durch Rathaus-Item</li>
            </ul>
          </div>
          <div>
            <div className='text-underline'>davor:</div>
            <ul>
              <li>Manuell angepasste Produktivität</li>
              <li>Effekte: <strong>Produktivität</strong> durch Kultur und HK</li>
              <li>Effekte: <strong>Ersetzte Ausgangsmaterialien</strong>, <strong>Zusatzwaren</strong> durch Kultur und HK</li>
            </ul>
          </div>
          <div>
            <div className='text-underline'>davor:</div>
            <ul>
              <li>Neuentwicklung der Basis</li>
              <li>Handelskammern (HK), Rathäuser (RH) (nur der Bereich selbst, ohne Items)</li>
              <li>Feste, Kultur-Sets (ohne Effekte)</li>
            </ul>
          </div>
        </div>
      </TabPane>
      <TabPane tabId="Todos" style={{width: 350, maxHeight: 400, overflowY: 'scroll'}}>
        <div className='description'>Auszug aus meinen Todos (unsortiert):</div>

        <div>
          <div className='text-underline'>Alte Funktionen: (siehe <a href="../stable" target='_blank'>hier</a>)</div>
          {check(1)} Elektrizität<br/>
          {check(1)} Routen<br/>
          {check(1)} Import/Export von Spielständen<br/>
          {check(1)} schneller Wechsel zwischen verschiedenen Spielständen<br/>
          {check(1)} Dark-Mode<br/>
          [<span className='text-muted'>~</span>] Fruchtbarkeiten / Resourcen<br/>
          {check(1)} Kraftwerke, Heizöfen<br/>
          {check(1)} Highlights für diverse Zusammenhänge (z.B. Zulieferer)<br/>
          {check(1)} Nicht gebaute Gebäude ausblenden<br/>
          {check(0)} Benötigte Gebäude automatisch einblenden<br/>
          {check(0)} Icons für Routen und Strom<br/>
          {check(0)} Warenverbrauch unterbinden<br/>
          {check(0)} Expeditionen<br/>
        </div>

        <div>
          <div className='text-underline'>Neue Funktionen:</div>
          {check(1)} Englische Sprache<br/>
          {check(1)} Arktis: Quartier und Items<br/>
          {check(1)} Rathaus-Effekt: Zusatzversorgung<br/>
          {check(1)} Gebäude in Rathäus-Bereiche "umsiedeln" / verschieben<br/>
          {check(0)} Inseln, Rathäuser und Handelskammern manuell sortieren <br/>
          {check(0)} Schöner Item-Picker mit Filter<br/>
          {check(0)} Persönliche Notizen<br/>
          {check(0)} Erinnerungen (Notizen mit Timer)<br/>
          {check(0)} Blueprints<br/>
          {check(0)} Wer produziert und verbraucht wie viel von dieser Ware?<br/>
          {check(0)} Neues Chart: Produktion und Verbrauch gegenüberstellen<br/>
          {check(0)} Zeitung<br/>
          {check(1)} <b>Koop</b><br/>
          {check(0)} Buffs: Effekte durch Einfluss<br/>
          {check(0)} Vorschlag/Hinweis, dass x Fischerhütten reichen würden, wenn man die Arbeitsbedingungen entsprechend anpasst<br/>
        </div>

        <div>
          <div className='text-underline'>Vielleicht irgendwann:</div>
          {check(0)} Item-Bestand: wo lagere ich welches Item?<br/>
          {check(0)} Item-Suche: wo gibt es ein Item und mit welcher Wahrscheinlichkeit<br/>
          {check(0)} Einstellungen: NPCs, Seed, Schwierigkeit...<br/>
          {check(0)} Mods<br/>
          {check(0)} öffentliche Gebäude<br/>
          {check(0)} Attraktivität<br/>
          {check(0)} Finanzen (Einkommen, Unterhalt)<br/>
          {check(0)} Einwohner (Anzahl, Zufriedenheit)<br/>
          {check(0)} Arbeitskraft (vorhanden, benötigt, ersetzt, Pendlerkai)<br/>
          {check(0)} Zwischenfallrisiko<br/>
          {check(0)} Besucher<br/>
          {check(0)} Walddichte<br/>
          {check(0)} Baukosten (+Verbrauch wenn regelmäßig, z.B. Investoreninsel hochziehen)<br/>
          {check(0)} Anzahl bebauter Kacheln, Insel-Effizienz<br/>
        </div>

      </TabPane>
    </PopoverWithTabs>
  </div>)
}

export default Todo