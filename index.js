// function submitData(name, email) {
//     return fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//         body: JSON.stringify({
//             name: name,
//             email: email,
//         }),
//     })  
//     .then((resp) => resp.json())
//     .then((user) => handleNewId(user))
//     .catch((error) => {errorMessage(error)})
// };

// function handleNewId(user) {
//     const body = document.querySelector('body');
//     const newId = user.id;
//     const p = document.createElement('p');
//     p.textContent = newId;
//     body.appendChild(p);
//     // console.log(body);
// };

// function errorMessage(error) {
//     const body = document.querySelector('body');
//     const message = error.message
//     const p = document.createElement('p');
//     p.textContent = message;
//     body.appendChild(p);
//     console.log(error);
// }
    
// submitData("Steve", "steve@steve.com");

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then((resp) => resp.json())
    .then((user) => handleNewId(user))
    .catch((error) => errorMessage(error))
}

function handleNewId(user) {
    const body = document.querySelector('body');
    const p = document.createElement('p');
    const newId = user.id;
    p.textContent = newId;
    body.appendChild(p);
};

function errorMessage(error) {
    const body = document.querySelector('body');
    const p = document.createElement('p');
    const msg = error.message;
    p.textContent = msg;
    body.appendChild(p);
}