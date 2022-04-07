const secureLight = document.getElementById("secure-light")
const secureMed = document.getElementById("secure-medium")
const secureHeavy = document.getElementById("secure-heavy")


secureLight.addEventListener("click", (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            items: [
                { id: 7, quantity: 1 },
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

secureMed.addEventListener("click", (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            items: [
                { id: 8, quantity: 1 },
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

secureHeavy.addEventListener("click", (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            items: [
                { id: 9, quantity: 1 },
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