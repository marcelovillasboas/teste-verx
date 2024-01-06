export const validateCpfCnpj = (value: string): boolean => {
  value = value.replace(/[^\d]/g, '')
  const result = value.length === 11 ? validateCpf(value) : validateCnpj(value)

  return result
}

function validateCpf (value: string): boolean {
  let sum = 0
  let remainder = 0

  if (value === '00000000000') return false

  for (let i = 1; i <= 9; i++) {
    sum = sum + Number(value.substring(i - 1, i)) * (11 - i)
  }

  remainder = (sum * 10) % 11

  if ((remainder === 10) || (remainder === 11)) {
    remainder = 0
  }

  if (remainder !== Number(value.substring(9, 10))) return false

  sum = 0

  for (let i = 1; i <= 10; i++) {
    sum = sum + Number(value.substring(i - 1, i)) * (12 - i)
  }

  remainder = (sum * 10) % 11

  if ((remainder === 10) || (remainder === 11)) {
    remainder = 0
  }

  if (remainder !== Number(value.substring(10, 11))) return false

  return true
}

function validateCnpj (cnpj: string): boolean {
  cnpj = cnpj.replace(/[^\d]+/g, '')

  if (cnpj.length !== 14 || cnpj === '00000000000000') return false

  let length = cnpj.length - 2
  let cnpjWithoutDigits = cnpj.substring(0, length)
  const verifyingDigits = cnpj.substring(length)
  let sum = 0
  let pos = length - 7

  for (let i = length; i >= 1; i--) {
    sum += Number(cnpjWithoutDigits.charAt(length - i)) * pos--
    if (pos < 2) { pos = 9 }
  }

  let result = sum % 11 < 2 ? 0 : 11 - sum % 11
  if (result !== Number(verifyingDigits.charAt(0))) return false

  length = length + 1
  cnpjWithoutDigits = cnpj.substring(0, length)
  sum = 0
  pos = length - 7

  for (let i = length; i >= 1; i--) {
    sum += Number(cnpjWithoutDigits.charAt(length - i)) * pos--
    if (pos < 2) { pos = 9 }
  }

  result = sum % 11 < 2 ? 0 : 11 - sum % 11

  if (result !== Number(verifyingDigits.charAt(1))) return false

  return true
}
