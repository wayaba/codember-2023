function compile(code) {
  let value = 0
  let compiledCode = ''

  const operators = {
    '#': () => value++,
    '@': () => value--,
    '*': () => (value *= value),
    '&': () => (compiledCode += value.toString())
  }

  code.split('').forEach((char) => {
    if (operators[char]) operators[char]()
  })

  return compiledCode
}
console.log(
  compile(
    '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'
  )
)
