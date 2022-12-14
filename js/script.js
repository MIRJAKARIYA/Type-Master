const getId = (id) => document.getElementById(id)





const triggerAction = (action,e) =>{
    
    if(e.code === "ShiftLeft"|| e.code === "ShiftRight" || e.code === "AltLeft" || e.code === "AltRight" || e.code === "ControlLeft" || e.code === "ControlRight" || e.code === "Enter" || e.code === "Space"){
   
        if(e.code === "ShiftLeft"){
            getId("left-shift").style.backgroundColor = `${action === "keydown"?"rgb(151, 151, 151)":"white"}`

        }
        else if(e.code === "ShiftRight"){
            getId("right-shift").style.backgroundColor = `${action === "keydown"?"rgb(151, 151, 151)":"white"}`

        }
        else if(e.code === "AltLeft"){
            getId("Left-alt").style.backgroundColor = `${action === "keydown"?"rgb(151, 151, 151)":"white"}`

        }
        else if(e.code === "AltRight"){
            getId("Right-alt").style.backgroundColor = `${action === "keydown"?"rgb(151, 151, 151)":"white"}`

        }
        else if(e.code === "ControlLeft"){
            getId("Left-control").style.backgroundColor = `${action === "keydown"?"rgb(151, 151, 151)":"white"}`

        }
        else if(e.code === "ControlRight"){
            getId("Right-control").style.backgroundColor = `${action === "keydown"?"rgb(151, 151, 151)":"white"}`

        }
        else if(e.code === "Enter"){
            getId("enter").style.backgroundColor = `${action === "keydown"?"rgb(151, 151, 151)":"white"}`

        }
        else if(e.code === "Space"){
            getId("space").style.backgroundColor = `${action === "keydown"?"rgb(151, 151, 151)":"white"}`

        }
    }
    else{
        const keyArray = document.getElementsByClassName("key-value");
        for(let i = 0;i<keyArray.length;i++){
            if(keyArray[i].innerText === e.key){
                document.getElementsByClassName("key-value")[i].parentElement.style.backgroundColor = `${action === "keydown"?"rgb(151, 151, 151)":"white"}`
            }
        }
    }
}

// test character

const testCharacter = () =>{
    const textField = getId('text').innerText;
    
}



getId("body").addEventListener("keydown",(e)=>{
    triggerAction("keydown",e)
    testCharacter()
})

getId("body").addEventListener("keyup",(e)=>{
    triggerAction("keyup",e)
})

//generate text button
getId('gen__text__button').addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data => {
        generateRandomText(data)
    })
})





const generateRandomText = (text) =>{
    const sampleTexts = text.map(txt => txt.body)
    const rand = Math.floor(Math.random()*text.length)
    const randText = sampleTexts[rand]
    putRandomTextIntoField(randText)

}

const putRandomTextIntoField = (text) =>{
    const textField = getId("text")
    const textArray = text.split('\n').join('')
    const filteredText = textArray.split('')
    textField.innerHTML=null
    for(let i=0;i<filteredText.length;i++){
        const element = document.createElement('span')
        element.innerText = filteredText[i]
        element.classList.add('charClass')
        textField.appendChild(element)
    }

    // const element = document.createElement('span')
    // element.innerText='k'
    // textField.appendChild(element)
    
    
    // console.log(element)
}




