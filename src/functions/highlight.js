import {producersNeededPerTier} from "../data/needsOfProducts";

const classname = {needs: 'hi-needs', neededBy: 'hi-neededBy', self: 'hi-self', extraOutput: 'hi-extraOutput'}
const allHiClasses = Object.values(classname)
const allHiSelector = allHiClasses.map(classname => `.${classname}`).join(', ')

export const ioClasses = (producer, relevantGoods) => (' main-output-'+producer.OutputProduct
  + relevantGoods.provided.reduce((classNames, good) => classNames+' output-'+good, '')
  + relevantGoods.needed.reduce((classNames, good) => classNames+' input-'+good, '')
)

const workforceGUIDs = [1010052, 1010115, 1010116, 1010117, 1010366, 1010367, 112653, 112654]
export const workforceClasses = (producer) => {
  const workforceId = producer.Maintenance.find(m => workforceGUIDs.includes(m.Product))?.Product
  return workforceId ? (' workforce-'+workforceId) : ''
}
export const neederClasses = (producer) => producersNeededPerTier
  .filter(n => n.producerGUIDs.includes(producer.GUID))
  .map(pNPT => (' neededBy-'+pNPT.GUID)).join(' ')


export const relevantGoodsBasic = (producer) => ({provided: [producer.OutputProduct], needed: producer.InputProducts})
export const relevantGoodsAdvanced = (producers) => ({
  needed:   Array.from(new Set(producers.reduce((all, p) => [...all, ...p.io.filter(io => io.Cycle < 0).map(io=>io.good)], []))),
  provided: Array.from(new Set(producers.reduce((all, p) => [...all, ...p.io.filter(io => io.Cycle > 0).map(io=>io.good)], []))),
})
// const relevantBuildings = {
//   needer:   useSelector(state => state.producers.filter(x => x.islandId === activeIslandId && x.io.find(io => relevantGoods.provided.includes(io.good) && io.Cycle < 0)), shallowEqual),
//   provider: useSelector(state => state.producers.filter(x => x.islandId === activeIslandId && x.io.find(io =>   relevantGoods.needed.includes(io.good) && io.Cycle > 0)), shallowEqual),
// }

const addClass = (classname, selector) => selector.length && document.querySelectorAll(selector).forEach(elem => elem.classList.add(classname))

export const highlight = (producer, relevantGoods) => {
  // remove
  document.querySelectorAll(allHiSelector).forEach(elem => elem.classList.remove(...allHiClasses))

  if (producer === null) return

  // 4* add ...

  // (stock:) self / blau
  addClass(classname.self, `#prod${producer.GUID}`)
  if (producer.GUID === 1010304) addClass(classname.self, '#prod1010298') // Kohlemine -> Köhlerei
  if (producer.GUID === 1010298) addClass(classname.self, '#prod1010304') // Köhlerei -> Kohlemine

  // needs / rot
  addClass(classname.needs, relevantGoods.needed?.map(gGUID => `.output-${gGUID}`).join(', '))
  // neededBy / grün
  addClass(classname.neededBy, relevantGoods.provided?.map(gGUID => `.input-${gGUID}`).join(', '))
  // extraOutput / blub
  addClass(classname.extraOutput, relevantGoods.provided?.filter(gGUID=>gGUID!==producer.OutputProduct).map(gGUID => `.main-output-${gGUID}`).join(', '))

  /*
     // stock: needs / rot
     producer.InputProducts.length > 0 && document.querySelectorAll('.output-' + producer.InputProducts[0]).forEach(elem => elem.classList.add('hi-needs'))
     producer.InputProducts.length > 1 && document.querySelectorAll('.output-' + producer.InputProducts[1]).forEach(elem => elem.classList.add('hi-needs'))
     // stock: neededBy / grün
     document.querySelectorAll(`.input-${producer.OutputProduct}`).forEach(elem => elem.classList.add('hi-neededBy'))
   */
  /*
    // alter Ansatz
    console.log(relevantGoods.provided);
    console.log(relevantGoods.provided.filter(gGUID=>gGUID!==producer.OutputProduct));
    console.log(relevantBuildings);

    // needs / rot
    relevantGoods.provided.forEach(gGUID => document.querySelectorAll(`#good${gGUID}`).forEach(elem => elem.classList.add('hi-neededBy')))
    relevantBuildings.needer.forEach(p => document.querySelectorAll(`#prod${p.GUID}`).forEach(elem => elem.classList.add('hi-neededBy')))
    relevantBuildings.provider.forEach(p => document.querySelectorAll(`#prod${p.GUID}`).forEach(elem => elem.classList.add('hi-needs')))

    // neededBy / grün
  */

}
export const highlight_ = (producer, relevantSuppliers, relevantProducers) => {
  // remove
  document.querySelectorAll('.hi-needs, .hi-neededBy, .hi-self').forEach(elem => {elem.classList.remove('hi-needs','hi-neededBy','hi-self')})

  if (producer === null) return

  // add
  // self - producer
  document.querySelectorAll(`#good${producer.OutputProduct}, #prod${producer.GUID} `).forEach(elem => elem.classList.add('hi-self'))

  // needs
  relevantSuppliers.forEach(p => document.querySelectorAll(`#prod${p.GUID}`).forEach(elem => elem.classList.add('hi-needs')))

  // neededBy
  relevantProducers.forEach(p => document.querySelectorAll(`#prod${p.GUID}`).forEach(elem => elem.classList.add('hi-neededBy')))
}
