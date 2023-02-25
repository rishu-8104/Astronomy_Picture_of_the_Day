const apiKey = "wIaaeoqPtAEJ9UGWdJtbb1axZjlQumWBiEr2Na4q";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

const apodImage = document.getElementById("apod-image");
const apodTitle = document.getElementById("apod-title");
const apodDate = document.getElementById("apod-date");
const apodExplanation = document.getElementById("apod-explanation");

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const body = document.querySelector('body');
    body.style.backgroundImage = `url(${data.hdurl})`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
    body.style.backgroundRepeat = 'no-repeat';

    apodImage.src = data.url;
    apodTitle.textContent = data.title;
    apodDate.textContent = `Date: ${data.date}`;
    apodExplanation.textContent = data.explanation;
  })
  .catch(error => console.log(error));
