const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

getData();

filter.addEventListener('input', (e) => filterData(e.target.value));

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50');

    const { results } = await res.json();

    result.innerHTML = '';

    results.forEach( user => {
        const li = document.createElement('li');

        listItems.push(li);

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        
        result.appendChild(li);
    });
}

function filterData(searchTerm) {
    const searchString = searchTerm.toLowerCase();
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchString)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}