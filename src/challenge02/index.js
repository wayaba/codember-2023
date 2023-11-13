const operators = {
  '#': (op) => {
    return op + 1
  },
  '@': (op) => {
    return op - 1
  },
  '*': (op) => {
    return op * op
  },
  '&': (op) => {
    return op
  }
}

function compile(code) {
  let value = 0
  let compiledCode = ''
  code.split('').forEach((char) => {
    if (char === '&') compiledCode += value
    else value = operators[char](value)
  })
  return compiledCode
}

console.log(
  compile(
    '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'
  )
)
