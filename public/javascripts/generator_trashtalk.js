const translateCH = {
    engineer: "工程師",
    designer: "設計師",
    entrepreneur: "創業家",
}

const task = {
    engineer: ['加個按鈕','加個新功能','切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']  
  }
  
const phrase = ['很簡單','很容易','很快','很正常']

const emoji = ['😉','🤡','🥴','🙄']

// const arr = { occupation: 'engineer' }

function randomGenerator(arr){
    return arr[Math.floor(Math.random()*arr.length)]
}

function trashtalkGenerator(option){
    let userChoose = option.occupation
    if(!userChoose){
        return '請選擇一種職業'
    }

    let sentence = `${translateCH[userChoose]} ${randomGenerator(task[userChoose])} ${randomGenerator(phrase)} ${randomGenerator(emoji)}`

    // console.log('sentence', sentence)

    return sentence
}

// generator(arr)

module.exports = trashtalkGenerator