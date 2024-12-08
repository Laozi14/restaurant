export default function loadContact() {
    const content = document.createElement('div');
  
    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';
  
    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'Address: 123 Food Street, Flavor Town';
  
    const phone = document.createElement('p');
    phone.textContent = 'Phone: (123) 456-7890';
  
    content.appendChild(headline);
    content.appendChild(contactInfo);
    content.appendChild(phone);
  
    return content;
  }
  