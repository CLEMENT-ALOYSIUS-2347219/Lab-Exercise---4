const jokeTextElement = document.getElementById('joke-text');
const getJokeButton = document.getElementById('get-joke-button');

function fetchRandomJoke() {
    // API URL
    const apiUrl = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

    // Fetch the joke from the API
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.type === 'twopart') {
                jokeTextElement.innerHTML = `${data.setup}<br>${data.delivery}`;
            } else {
                jokeTextElement.textContent = data.joke;
            }
        })
        .catch((error) => {
            jokeTextElement.textContent = 'Failed to fetch joke. Please try again later.';
            console.error(error);
        });
}

getJokeButton.addEventListener('click', fetchRandomJoke);

// Initial joke fetch when the page loads
fetchRandomJoke();
