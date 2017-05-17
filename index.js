const alarmList = []

setInterval(() => {
  const date = new Date()
  const text = timeText(date)
  document.getElementById('time').textContent = text

  if (alarmList.includes(text)) {
    alarm()
    removeAlarm(text)
  }
}, 1000)

function timeText (date) {
  const mins = zeroPadding(date.getMinutes())
  const seconds = zeroPadding(date.getSeconds())
  const hours = date.getHours() < 12 ? date.getHours() : date.getHours() - 12

  return `${hours}:${mins}:${seconds}`

  function zeroPadding (value) {
    return value < 10 ? `0${value}` : value
  }
}

function addAlarm () {
  const selectHour = document.getElementById('hour')
  const selectMin = document.getElementById('min')
  const hour = selectHour.options[selectHour.selectedIndex].text
  const min = selectMin.options[selectMin.selectedIndex].text

  const date = new Date()
  date.setHours(hour)
  date.setMinutes(min)
  date.setSeconds(0)

  alarmList.push(timeText(date))

  updateAlarmList()
}

function removeAlarm (alarm) {
  const index = alarmList.indexOf(alarm)
  alarmList.splice(index, 1)
  updateAlarmList()
}

function snooze () {
  const snooze = new Date()
  snooze.setMinutes(snooze.getMinutes() + 10)
  alarmList.push(timeText(snooze))
  updateAlarmList()
}

function updateAlarmList () {
    document.getElementById('alarms').innerHTML = alarmList.map(alarm => `<p>${alarm}<span class="remove" onclick="removeAlarm('${alarm}')">x</span></p>`).join('')
}

function alarm() {
  document.getElementById('rooster').play()
}
