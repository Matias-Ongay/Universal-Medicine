/*Listado de productos*/ 
const products = [
    {
      name: 'Inyectables',
      image: '../imagenes/jeringa.png',
      descripcion:''
    },
    {
      name: 'Ambulancia',
      image: '../imagenes/ambulancia.png',
      descripcion:'Traslados,Eventos ,Alquiler para obras.Ambulancias 4x2 y 4x4'
    },
    {
      name: 'Medicos',
      image: '../imagenes/medico.png',
      descripcion:'Clinico , Pediatra , Traumatologo , Cardiologo , Ecografista , Psiquiatra , Dermatologo , Ginecologo , Neurologo , Oftanmologo'
    },
    {
      name: 'Radiologos ',
      image: '../imagenes/rayos.png',
      descripcion:''
    },
    {
      name: 'Enfermeros',
      image: '../imagenes/enfermeros.png',
      descripcion:''
    },
    {
      name: 'Material',
      image: '../imagenes/materiales.png',
      descripcion:'Tubos de oxigeno,Concentradores de oxigeno,Nebulizadores,Camas ortopedicas,Sillas de Ruedas'
    },
    {
      name: 'Odontologia',
      image: '../imagenes/diente.png',
      descripcion:'Odontologia de Urgencia'
    },
    {
      name: 'Bioquimicos',
      image: '../imagenes/bioquimico.png',
      descripcion:''
    },
    {
      name: 'Electro',
      image: '../imagenes/electro.png',
      descripcion:'Electrocardiogramas'
    },
    {
      name: 'Podologo',
      image: '../imagenes/pies.png',
      descripcion:'Electrocardiogramas'
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
  /*Contendedor de fomularios y mensaje a whatsapp*/ 


  const pop=document.getElementById('pop');
  function showProductDetails(product) {
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');
  
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
  
    const closeButton = document.createElement('button');
    closeButton.classList.add('popup-close');
    closeButton.innerHTML = 'CERRAR';
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
    const descripcion=document.createElement('p');
    descripcion.textContent=product.descripcion;
    descripcion.classList.add('descripcion');
    popupContent.appendChild(popupContainerImage);
    popupContainerImage.appendChild(indication);
    popupContainerImage.appendChild(image);
    const popDescription=document.createElement('div');
    popupContent.appendChild(popDescription);
    popDescription.classList.add('descripcionConteiner');
    popDescription.appendChild(descripcion);
    const name = document.createElement('p');
    name.classList.add('popup-name'); 
    name.textContent = product.name;
    popDescription.appendChild(name);
  
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
      <div class="input-container">
        <label for="message">Descripcion del servicio que necesita,materiales o tipo de medico:</label>
        <textarea id="message2" name="message"></textarea>
      </div>
    `;
    const contratarFinal=document.createElement('button');
    contratarFinal.classList.add('contratar-final');
    contratarFinal.innerText="Contratar"

    popupContent.appendChild(form); 
    popupContent.appendChild(contratarFinal);
    popupContainer.appendChild(closeButton);
    popupContainer.appendChild(popupContent);
  
    pop.appendChild(popupContainer);
    contratarFinal.addEventListener('click', () => {
      const nameValue = document.getElementById('name').value;
      const emailValue = document.getElementById('email').value;
      const padecimientoValue = document.getElementById('message').value;
      const descripcionValue = document.getElementById('message2').value;
      const whatsappMessage = `Hola, mi nombre es ${nameValue} y mi dirección es ${emailValue}. Me gustaría contratar el servicio de ${product.name}. Tengo el siguiente padecimiento: ${padecimientoValue}. Necesitaria lo siguiente: ${descripcionValue}.  ¿Podrías Confirmar el servicio?`;
      const whatsappLink = `https://api.whatsapp.com/send?phone=+542616731229&text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappLink, '_blank');
    });
  }