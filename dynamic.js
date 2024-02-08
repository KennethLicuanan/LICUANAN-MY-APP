const searchInput = document.getElementById('search-input');
const resultList = document.getElementById('result-list');

// Sample data
const data = [
    'Apple',
    'Banana',
    'Orange',
    'Grapes',
    'Mango',
    'Strawberry',
    'Watermelon',
    'Pineapple'
];

function filterResults() {
    const searchTerm = searchInput.value.toLowerCase();
    resultList.innerHTML = '';

    const filteredData = data.filter(item => item.toLowerCase().includes(searchTerm));

    filteredData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'result-item';
        listItem.textContent = item;
        resultList.appendChild(listItem);
    });
}

function goToMainPage() {
    // Replace this with the URL of your main page
    window.location.href = 'index.html';
}

searchInput.addEventListener('input', filterResults);