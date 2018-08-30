(() => {
  let stop = document.getElementById("stopButton")
  let slow = document.getElementById("slowButton")
  let go = document.getElementById("goButton")

  addListeners(stop)
  addListeners(slow)
  addListeners(go)

  function addListeners(light) {
    light.addEventListener("click", toggleLight)
    light.addEventListener("mouseenter", logMouseEnter)
    light.addEventListener("mouseleave", logMouseLeave)
  }

  function logMouseEnter(e) {
    console.log(`Entered ${e.target.textContent} button`)
  }

  function logMouseLeave(e) {
    console.log(`Left ${e.target.textContent} button`)
  }

  function toggleLight(e) {
    let { target } = e
    let bulb
    switch (target) {
      case stop:
        bulb = document.querySelector('#stopLight')
        bulb.classList.toggle('stop')
        break
      case slow:
        bulb = document.querySelector('#slowLight')
        bulb.classList.toggle('slow')
        break
      case go:
        bulb = document.querySelector('#goLight')
        bulb.classList.toggle('go')
        break
      default:
        break
    }
  }
})()
