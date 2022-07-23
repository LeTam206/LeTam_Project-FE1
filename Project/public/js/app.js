function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    const startTime = performance.now()
    function updateNumber(currentTime) {
      const elapsedTime = currentTime - startTime
      if (elapsedTime > duration) {
        callback(finalNumber)
      } else {
        const rate = elapsedTime / duration
        const currentNumber = Math.round(rate * finalNumber)
        callback(currentNumber)
        requestAnimationFrame(updateNumber)
      }
    }
    requestAnimationFrame(updateNumber)
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    animateNumber(25, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('workers').innerText = formattedNumber
    })
    
    animateNumber(46, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('types-of-jobs').innerText = formattedNumber
    })
    
    animateNumber(301, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('projects').innerText = formattedNumber
    })
    animateNumber(350, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('happy-customers').innerText = formattedNumber
    })
  })