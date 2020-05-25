// https://stackoverflow.com/a/51215842/816362
export const exportToFile = (state) => {
  const data = JSON.stringify(state, null, " ")
  const filename = "plan1800-DEV_"+getFormattedTime()+"_"+(state.personal.nameOfMatch||'unbenannt').replace(" ","_")+".json"
  const contentType = "application/json;charset=utf-8;"
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    const blob = new Blob([decodeURIComponent(encodeURI(data))], {type: contentType})
    navigator.msSaveOrOpenBlob(blob, filename)
  } else {
    const a = document.createElement('a')
    a.download = filename
    a.href = 'data:' + contentType + ',' + encodeURIComponent(data)
    a.target = '_blank'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
}

// https://stackoverflow.com/a/56607553/816362
export const loadFromFile = (callback) => {
  const el = window._protected_reference = document.createElement("INPUT")
  el.type = "file"
  el.accept = "application/json"

  // (cancel will not trigger 'change')
  el.addEventListener('change', function (ev2) {

    // https://stackoverflow.com/a/754398/816362
    const reader = new FileReader()
    reader.readAsText(el.files[0], "UTF-8")
    reader.onload = function (evt) {
      const fileContent = evt.target.result
      // const jsonObj = JSON.parse(fileContent)
      // callback(jsonObj)
      // callback(JSON.parse(fileContent))
      callback(fileContent)
    }
    reader.onerror = function (evt) {
      console.log(evt)
      alert('error. see console.')
    }
  })

  el.click(); // open
}

// https://stackoverflow.com/a/44485468/816362
function getFormattedTime() {
  const now = new Date()
  const y = now.getFullYear()
  const M = now.getMonth() + 1 // months are 0-based
  const d = now.getDate()
  const h = now.getHours()
  const m = now.getMinutes()
  const s = now.getSeconds()
  return "" + y
            + (M < 10 ? '0'+M : M)
            + (d < 10 ? '0'+d : d)
            + "_"
            + (h < 10 ? '0'+h : h)
            + (m < 10 ? '0'+m : m)
            + (s < 10 ? '0'+s : s)
}
