function calcPercent() {
  var percentage = document.getElementById('percent').value
  var num = document.getElementById('num').value

  document.getElementById('answer').innerText = (num / 100) * percentage
}
