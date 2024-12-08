export default function loadMenu() {
    const content = document.createElement('div');
  
    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';
  
    const menuList = document.createElement('ul');
    const items = ['Pancakes', 'Omelette', 'French Toast', 'Coffee'];
    items.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      menuList.appendChild(listItem);
    });
  
    content.appendChild(headline);
    content.appendChild(menuList);
  
    return content;
  }
  