// Chapter 2. Javascript for REACT - Memento 2

// INDEX
// - Fetch - XMLHttpRequest mandatory line
// - Simple promise with Fetch 
// - Async / Await

// Fetch - XMLHttpRequest mandatory line
    const { rejects } = require("assert");
const fetch = require("node-fetch"); // Allow use of FETCH 
    const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// //  Simple promise with Fetch
//     fetch('https://api.randomuser.me/?nat=BE&results=1')
//     .then(res => res.json())
//     .then(json => json.results)
//     .then(console.log)
//     .catch(console.error);

// //  Async / Await
//     const getFakePerson = async () => {
//         try {
//             let res = await fetch('https://api.randomuser.me/?nat=EU&results=1');
//             let { results } = res.json();
//             console.log(results);
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     getFakePerson();

//  Building Promises
    const getPeople = count =>
        new Promise((resolves, rejects) => {
            const api = `https://api.randomuser.me/?nat=US&results=${count}`;
            const request = new XMLHttpRequest();
            request.open('GET', api);
            request.onload = () =>
                request.status === 200
                    ? resolves(JSON.parse(request.response).results)
                    : reject(Error(request.statusText));
                request.onerror = err => rejects(err);
                request.send();
        });
    getPeople()

    