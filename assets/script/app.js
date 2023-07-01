const input = document.querySelector('.inpt')
const btn = document.querySelector('.btn')
const output = document.querySelector('.result')

const arr1 = [1000, 100, 10, 1]
const arr2 = [
  'jump&#129462',
  'close your eyes &#128522',
  'double blink &#128516',
  'wink &#128521'
]
const map = {}

btn.addEventListener('click', function () {
  handshake()
})

function handshake () {
  const num = parseInt(input.value).toString(2)
  let rslt = num
  const arr3 = []
  console.log(num)

  if (num > 0) {
    if (rslt - 10000 >= 0) {
      rslt -= 10000
    }
    for (let i = 0; i < arr1.length; i++) {
      if (map[arr1[i]] === undefined) {
        map[arr1[i]] = arr2[i]
      }
      if (num === arr1[i]) {
        arr3.push(map[arr1[i]])
        break
      } else {
        if (rslt - arr1[i] >= 0) {
          rslt -= arr1[i]
          arr3.push(map[arr1[i]])
          if (num >= 10000) {
            arr3.reverse()
          }
        }
      }
    }
    output.style.visibility = 'visible'
    output.innerHTML = arr3
  } else {
    window.alert('Please enter a number greater than 0')
    input.value = ''
  }
}
