function loadHomepage() {
    const content = document.getElementById('content');
  
    // Create headline
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant';
  
    // Create image
    const image = document.createElement('img');
    image.src = 'https://via.placeholder.com/600x300';
    image.alt = 'Restaurant Image';
  
    // Create description paragraph
    const description = document.createElement('p');
    description.textContent = `Experience the best dining with us! Our restaurant offers a unique blend of flavors, 
    a cozy atmosphere, and top-notch service. Come indulge in our delicious dishes and make memories that last a lifetime!`;
  
    // Append elements to the content div
    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(description);
  }
  
  export default loadHomepage;
  