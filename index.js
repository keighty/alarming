setText()
const alarmList = []

setInterval(() => {
  setText()
}, 1000)

function setText () {
  const time = document.getElementById('time')
  const d = new Date()
  const mins = zeroPadding(d.getMinutes())
  const seconds = zeroPadding(d.getSeconds())
  time.textContent = `${d.getHours()}:${mins}:${seconds}`
}

function zeroPadding (value) {
  return value < 10 ? `0${value}` : value
}

function addAlarm() {

  const selectHour = document.getElementById('hour')
  const selectMin = document.getElementById('min')
  const hour = selectHour.options[selectHour.selectedIndex].text
  const min = selectMin.options[selectMin.selectedIndex].text

  console.log(hour, min)
  // add to alarm list
}
