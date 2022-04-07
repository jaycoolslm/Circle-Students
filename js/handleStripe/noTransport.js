// connecting button with stripe api
const economicLight = document.getElementById("economic-light")
const economicMed = document.getElementById("economic-medium")
const economicHeavy = document.getElementById("economic-heavy")





economicLight.addEventListener("click", (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            items: [
                { id: 1, quantity: 1 },
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

economicMed.addEventListener("click", (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            items: [
                { id: 2, quantity: 1 },
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

economicHeavy.addEventListener("click", (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            items: [
                { id: 3, quantity: 1 },
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
