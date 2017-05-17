function generatePicker (id, range) {
  let options = ""
  for(let i = 1; i <= range; i++) {
    options += `<option value=${i}>${i}</option>`
  }
  document.getElementById(id).innerHTML = options
}

generatePicker('hour', 12)
generatePicker('min', 60)

// TODO: set appropriate defaults for the alarm
