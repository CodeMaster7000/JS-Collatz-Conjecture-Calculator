function Calculate() {
  var prevTerm = input.innerHTML
  var nextTerm = 0
  var string = ""
  list.classList.remove("hidden")
  while (list.hasChildNodes()) {
    list.removeChild(list.lastChild)
  }
  while (prevTerm != 1) {
    if (prevTerm % 2 == 0) {
      nextTerm = prevTerm / 2
      string = "Even: " + prevTerm + " ÷ 2 = "
    }
    else {
      nextTerm = prevTerm * 3 + 1
      string = "Odd: " + prevTerm + " × 3 + 1 = "
    }
    string += nextTerm.toString()
    Push(string)
    prevTerm = nextTerm
  }  
}
function Push(string) {
  var newdiv = document.createElement("div")
  newdiv.classList.add("block", "bg-indigo-50", "rounded-xl", "px-3", "py-1")
  newdiv.innerHTML = string
  list.appendChild(newdiv)
}
