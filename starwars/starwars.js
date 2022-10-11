//let baseURl = 'https://swapi.dev/api/people/1/';
let person = document.getElementById('app');

//Change the number in the URL for different characters
fetch("https://swapi.dev/api/people/1/").then(response => response.json())
.then(json => {
    console.log(json)
    person.innerHTML = `<h1>${json.name}</h1>`

})
