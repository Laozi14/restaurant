export default function loadHome() {
  const content = document.createElement('div');

  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to Our Restaurant';

  const image = document.createElement('img');
  image.src = 'https://via.placeholder.com/600x300'; // Replace with your image URL
  image.alt = 'Restaurant';

  const description = document.createElement('p');
  description.textContent =
    'Experience the best dining with us! Our restaurant offers a unique blend of flavors, a cozy atmosphere, and top-notch service.';

  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(description);

  return content;
}
