// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01 (FEITO)
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alturaUser = prompt('Digite a altura: ')
  const larguraUser = prompt('Digite a largura: ')
  const area = alturaUser * larguraUser
  console.log(area)

}

// EXERCÍCIO 02 (FEITO)
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Digite o ano atual:')
  const anoDeNascimento = prompt('Digite o ano de nascimento: ')
  const idade = anoAtual - anoDeNascimento

  console.log(idade)

}

// EXERCÍCIO 03 (FEITO)
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)

  return imc

}

// EXERCÍCIO 04 (FEITO)
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeUsuario = prompt('Digite seu nome: ')
  const idadeUsuario = Number(prompt('Digite sua idade: '))
  const emailUsuario = prompt('Digite seu email: ')
  
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)

}

// EXERCÍCIO 05 (FEITO)
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFavorita1 = prompt('Qual a cor que voce mais gosta?')
  const corFavorita2 = prompt('Qual a segunda cor que voce mais gosta?')
  const corFavorita3 = prompt('Qual a terceira cor que voce mais gosta?')
  const newArray = []
  // newArray[0] = corFavorita1
  // newArray[1] = corFavorita2
  // newArray[2] = corFavorita3
  newArray.push(corFavorita1)
  newArray.push(corFavorita2)
  newArray.push(corFavorita3)

  console.log(newArray)

}

// EXERCÍCIO 06 (FEITO)
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const recebeString = string
  const stringMaiuscula = recebeString.toUpperCase()
  return stringMaiuscula

}

// EXERCÍCIO 07 (FEITO)
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const calculoPrejuizo = custo / valorIngresso

  return calculoPrejuizo

}

// EXERCÍCIO 08 (FEITO)
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanhoString1 = string1.length
  const tamanhoString2 = string2.length

  // const comparaStrings = tamanhoString1 === tamanhoString2 === true
  // return comparaStrings

  if (tamanhoString1 === tamanhoString2) {
    return true
  } else {
    return false
  }


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const newArray = array
  
  return newArray[0]
  


}

// EXERCÍCIO 10 (FEITO)
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const newArray = array
  const array2 = newArray.pop()

  return array2

}


// EXERCÍCIO 11 (FEITO)
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const meuArray = array
  const primeiroElemento = array.shift() //1
  const ultimoElemento = array.pop() //5
  meuArray.unshift(ultimoElemento)
  meuArray.push(primeiroElemento)
  

  return meuArray

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const compararStrings = string1.toLowerCase() === string2.toLowerCase() === true
  return compararStrings

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite o ano Atual: '))
  const anoDeNascimento = Number(prompt('Digite o ano de nascimento: '))
  const anoDeEmissaoRG = Number(prompt('Digite o ano de emissao do RG: '))

  const funcionaPeloAmorDeDeus = () => {
    if (anoAtual - anoDeNascimento <= 20 && anoAtual - anoDeEmissaoRG === 5) {
      return true
    } else if ((anoAtual - anoDeNascimento >= 20 && anoAtual - anoDeNascimento < 50) && anoAtual - anoDeEmissaoRG >= 10) {
      return true
    } else if (anoAtual - anoDeNascimento === 50 && anoAtual - anoDeEmissaoRG >= 10) {
      return true
    } else if (anoAtual - anoDeNascimento >= 50 && anoAtual - anoDeEmissaoRG >= 15) {
      return true
    } else {
      return false
    }
  }
  console.log(funcionaPeloAmorDeDeus())

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if (ano % 400 === 0) {
    return true 
  } else if (ano % 4 === 0 && ano % 100 !== 0) {
    return true
  } else {
    return false
  }


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorDezoito = prompt('Voce tem mais de 18 anos?')
  const ensinoMedio = prompt('Voce possui ensino medio completo?')
  const disponibilidade = prompt('Voce possui disponibilidade exclusiva durante os horarios do curso?')

  const checarValidade1 = maiorDezoito === 'sim'
  const checarValidade2 = ensinoMedio === 'sim'
  const checarValidade3 = disponibilidade === 'sim'

  const validado = checarValidade1 && checarValidade2 && checarValidade3
  console.log(validado)

}