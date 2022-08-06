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
            // // console.log(e.key)
            // console.log(keyArray[i].innerText)
            if(keyArray[i].innerText === e.key){
                document.getElementsByClassName("key-value")[i].parentElement.style.backgroundColor = `${action === "keydown"?"rgb(151, 151, 151)":"white"}`
            }
        }
    }
}


getId("body").addEventListener("keydown",(e)=>{
    triggerAction("keydown",e)
})

getId("body").addEventListener("keyup",(e)=>{
    triggerAction("keyup",e)
})



