// https://stackoverflow.com/a/51215842/816362
export const exportToFile = (state) => {
  const data = JSON.stringify(state, null, " ")
  const filename = "plan1800_"+getFormattedTime()+"_"+state.gameName+".json"
  const contentType = "application/json;charset=utf-8;"
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    var blob = new Blob([decodeURIComponent(encodeURI(data))], {type: contentType})
    navigator.msSaveOrOpenBlob(blob, filename)
  } else {
    var a = document.createElement('a')
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
      callback(fileContent)
    }
    reader.onerror = function (evt) {
      alert('error. see console.')
      console.log(evt)
    }
  })

  el.click(); // open
}

// https://stackoverflow.com/a/44485468/816362
function getFormattedTime() {
  var now = new Date()
  var y = now.getFullYear()
  // JavaScript months are 0-based.
  var m = now.getMonth() + 1
  var d = now.getDate()
  var h = now.getHours()
  var mi = now.getMinutes()
  var s = now.getSeconds()
  return "" + y + m + d + "_" + h + mi + s
}