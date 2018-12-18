for (let i = 0; i < 4; i++) {
    let parameters = localStorage.getItem(`parameter${i}`)
    if (parameters == 1) {
        localStorage.setItem(`parameter${i}`, 1)
        if (i== 0) {
            chrome.storage.local.set({parameter0 : 1}) 
        }
        else if(i== 1){
            chrome.storage.local.set({parameter1 : 1}) 
        }
        else if(i== 2){
            chrome.storage.local.set({parameter2 : 1}) 
        }
        else{
            chrome.storage.local.set({parameter3 : 1}) 
        }
    }
    else{
        localStorage.setItem(`parameter${i}`, 0)
        if (i== 0) {
            chrome.storage.local.set({parameter0 : 0}) 
        }
        else if(i== 1){
            chrome.storage.local.set({parameter1 : 0}) 
        }
        else if(i== 2){
            chrome.storage.local.set({parameter2 : 0}) 
        }
        else{
            chrome.storage.local.set({parameter3 : 0}) 
        }
    }
}


chrome.storage.local.get(['parameter0','parameter1','parameter2','parameter3'], function(result) {
    console.log(result.parameter0)
    console.log(result.parameter1)
    console.log(result.parameter2)
    console.log(result.parameter3)
})