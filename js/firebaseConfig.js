const firebaseConfig = {
    apiKey: "AIzaSyCDSgEgK3VMq9kfbzPRCpiiu8R6Tgcz9Js",
    authDomain: "auth-circle-students.firebaseapp.com",
    projectId: "auth-circle-students",
    storageBucket: "auth-circle-students.appspot.com",
    messagingSenderId: "686827094426",
    appId: "1:686827094426:web:f9cfce4f1d024bdd923a23",
    measurementId: "G-8EFTL084D9"
};
firebase.initializeApp(firebaseConfig);
// let privatePages = [
//     '/members/members-home.html',
//     '/members/members-need-storage.html',
//     '/members/members-have-storage.html',
//     '/members/contact.html',
//     '/options/economical.html',
//     '/options/maximum-security.html',
//     '/options/safe.html'
// ]
// let publicPages = [
//     '/login.html',
//     '/storage.html',
//     '/'
// ]
// firebase.auth().onAuthStateChanged((user) => {
//     let currentPath = window.location.pathname
//     if (user) {
//         console.log(`User email: ${user}`)

//     } else {
//         if (privatePages.includes(currentPath)) {
//             window.location.replace('/login.html')
//         } else {
//             console.log('No user is logged in!')
//         }
//     }
// })

if (window.location.href == 'http://circlestudents.co.uk/login.html') {
    window.location.replace('http://www.circlestudents.co.uk/login.html')
}