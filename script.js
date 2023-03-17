const products = [
    {
      name: 'Inyectables',
      image: 'https://via.placeholder.com/150x150',
      
    },
    {
      name: 'Producto 2',
      image: 'https://via.placeholder.com/150x150',
      
    },
    {
      name: 'Producto 3',
      image: 'https://via.placeholder.com/150x150',
      
    }
  ];
  
  const productList = document.getElementById('container');
  
  products.forEach((product) => {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const image = document.createElement('img');
    image.setAttribute('src', product.image);
    image.setAttribute('alt', product.name);
    card.appendChild(image);
  
    const name = document.createElement('h2');
    name.textContent = product.name;
    card.appendChild(name);
  
    
  
    productList.appendChild(card);
  });
  