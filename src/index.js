async function fetchJokes() {
  // code here :
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  const jsonResponce = await response.json();
  return jsonResponce;
}

async function displayJokes() {
  // code here :

  const jokes = await fetchJokes();
  console.log(jokes);
  const jokeElement = document.createElement("p");
  jokeElement.innerHTML = jokes.setup + " " + jokes.punchline;
  const jokeContainer = document.getElementById("joke-container");
  jokeContainer.appendChild(jokeElement);
}

// don't forget to invoke the function :
displayJokes();
