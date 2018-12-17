for (let i = 0; i < 3; i++) {
    let parameters = localStorage.getItem(`parameter${i}`)
    if (parameters == 1) {
        localStorage.setItem(`parameter${i}`, 1)
        if (i== 0) {
            chrome.storage.local.set({parameter0 : 1}, function() {}) 
        }
        else if(i== 1){
            chrome.storage.local.set({parameter1 : 1}, function() {}) 
        }
        else{
            chrome.storage.local.set({parameter2 : 1}, function() {}) 
        }
    }
    else{
        localStorage.setItem(`parameter${i}`, 0)
        if (i== 0) {
            chrome.storage.local.set({parameter0 : 0}, function() {}) 
        }
        else if(i== 1){
            chrome.storage.local.set({parameter1 : 0}, function() {}) 
        }
        else{
            chrome.storage.local.set({parameter2 : 0}, function() {}) 
        }
    }
    console.log(parameters)
}





chrome.storage.local.get(['parameter0','parameter1'], function(result) {
    console.log(result.parameter0)
    console.log(result.parameter1)
})