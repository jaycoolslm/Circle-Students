const safeLight = document.getElementById("safe-light")
const safeMed = document.getElementById("safe-medium")
const safeHeavy = document.getElementById("safe-heavy")

safeLight.addEventListener("click", (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            items: [
                { id: 4, quantity: 1 },
            ]
        })
    }).then(response => {
        if (response.ok) return response.json()
        return response.json().then(json => Promise.reject(json)) //throwing error if fetch failss
    }).then(({ url }) => {
        window.location = url
    }).catch(e => {
        console.error(e.error)
    })
})

safeMed.addEventListener("click", (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            items: [
                { id: 5, quantity: 1 },
            ]
        })
    }).then(response => {
        if (response.ok) return response.json()
        return response.json().then(json => Promise.reject(json)) //throwing error if fetch failss
    }).then(({ url }) => {
        window.location = url
    }).catch(e => {
        console.error(e.error)
    })
})

safeHeavy.addEventListener("click", (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            items: [
                { id: 6, quantity: 1 },
            ]
        })
    }).then(response => {
        if (response.ok) return response.json()
        return response.json().then(json => Promise.reject(json)) //throwing error if fetch failss
    }).then(({ url }) => {
        window.location = url
    }).catch(e => {
        console.error(e.error)
    })
})