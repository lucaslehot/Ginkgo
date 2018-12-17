for (let i = 0; i < 3; i++) {
    let parameters = localStorage.getItem(`parameter${i}`)
    if (parameters == 1) {
        localStorage.setItem(`parameter${i}`, 1)
    }
    else{
        localStorage.setItem(`parameter${i}`, 0)
    }
}