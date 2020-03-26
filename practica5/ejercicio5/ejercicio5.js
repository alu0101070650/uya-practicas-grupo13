const page = document.querySelector('#page');

const paragraphs = page.querySelectorAll('p');
const links = page.querySelectorAll('a');
const headers = page.querySelectorAll('h1, h2, h3, h4, h5, h6');

const paragraphsCounter = document.querySelector('#paragraph');
const linksCounter = document.querySelector('#links');
const headersCounter = document.querySelector('#headers');

paragraphsCounter.textContent = paragraphs.length;
linksCounter.textContent = links.length;
headersCounter.textContent = headers.length;
