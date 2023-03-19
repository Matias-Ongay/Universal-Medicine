const products = [
    {
      name: 'Inyectables',
      image: '../imagenes/jeringa.png',
      
    },
    {
      name: 'Ambulancia',
      image: '../imagenes/ambulancia.png',
      
    },
    {
      name: 'Medicos',
      image: '../imagenes/medico.png',
      
    },
    {
      name: 'Rayos ',
      image: '../imagenes/rayos.png',
      
    },
    {
      name: 'Enfermeros',
      image: '../imagenes/enfermeros.png',
      
    },
    {
      name: 'Enfermeros',
      image: '../imagenes/enfermeros.png',
      
    },
  ];
  
  const productList = document.getElementById('container');
  
  products.forEach((product) => {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const image = document.createElement('img');
    image.classList.add('blanco');
    image.setAttribute('src', product.image);
    image.setAttribute('alt', product.name);
    card.appendChild(image);
  
    const name = document.createElement('h2');
    name.textContent = product.name;
    card.appendChild(name);
  
    const contratar = document.createElement('button');
    contratar.textContent = 'Contratar';
    contratar.classList.add('contratar');
    contratar.addEventListener('click', () => {
      showProductDetails(product);
    });
    card.appendChild(contratar);
  
    productList.appendChild(card);
  });
  
  function showProductDetails(product) {
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');
  
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
  
    const closeButton = document.createElement('button');
    closeButton.classList.add('popup-close');
    closeButton.innerHTML = 'X';
    closeButton.addEventListener('click', () => {
      popupContainer.remove();
    });
    const popupContainerImage=document.createElement('div');
    popupContainerImage.classList.add('containerImage');

    const indication=document.createElement('p');
    indication.innerText="Por favor ingrese los siguientes datos para contratar el servicio";
    indication.classList.add('indication');
    const image = document.createElement('img');
    image.classList.add('popup-image');
    image.setAttribute('src', product.image);
    image.setAttribute('alt', product.name);
    popupContent.appendChild(popupContainerImage);
    popupContainerImage.appendChild(indication);
    popupContainerImage.appendChild(image);
  
    const name = document.createElement('p');
    name.classList.add('popup-name');
    name.textContent = product.name;
    popupContent.appendChild(name);
  
    const form = document.createElement('form');
    form.classList.add('popup-form');
    form.innerHTML = `
      <div class="input-container">
        <label for="name">Nombre y Apellido:</label>
        <input type="text" id="name" name="name">
      </div>
      <div class="input-container">
        <label for="email">Direccion:</label>
        <input type="email" id="email" name="email">
      </div>
      <div class="input-container">
        <label for="message">Padecimiento:</label>
        <textarea id="message" name="message"></textarea>
      </div>
      
    `;
    const contratarFinal=document.createElement('button');
    contratarFinal.classList.add('contratar-final');
    contratarFinal.innerText="Contratar"

    popupContent.appendChild(form); 
    popupContent.appendChild(contratarFinal);
    popupContainer.appendChild(closeButton);
    popupContainer.appendChild(popupContent);
  
    document.body.appendChild(popupContainer);
  }