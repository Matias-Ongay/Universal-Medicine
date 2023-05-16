/*Listado de productos*/ 
let num =0;
const products = [
  {
    name: 'Ambulancia',
    image: '../imagenes/ambulancia.jpg',
    descripcion:'Traslados,Eventos ,Alquiler para obras.Ambulancias 4x2 y 4x4'
  },
  {
    name: 'Medicos',
    image: '../imagenes/medico.jpg',
    descripcion:'Clinico , Pediatra , Traumatologo , Cardiologo , Ecografista , Psiquiatra , Dermatologo , Ginecologo , Neurologo , Oftanmologo'
  }, 
  {
      name: 'Inyectables',
      image: '../imagenes/jeringa.jpg',
      descripcion:'Indique qué medicación se aplicará y el horario en que se necesita'
    },
    {
      name: 'Enfermeros',
      image: '../imagenes/enfermeros.jpg',
      descripcion:'Puede solicitar diversas prestaciones como sueros, curaciones, control de signos vitales, sondas, medición de glucemia, extracción de secreciones, nebulizaciones, entre otras'
    },
    {
      name: 'Electro',
      image: '../imagenes/electro.jpg',
      descripcion:'Por favor, indique si el electro es para control o cirujia '
    },
    {
      name: 'Oxigenoterapia',
      image: '../imagenes/oxigeno.jpg',
      descripcion:'Por favor, indique si necesita tubo o concentrador de oxigeno '
    },
    {
      name: 'Bioquimicos',
      image: '../imagenes/bioquimico.jpg',
      descripcion:'Recuerde enviar la imagen de la orden medica luego de enviarnos el mensaje'
    },
    {
      name: 'Radiologos',
      image: '../imagenes/rayos.jpg',
      descripcion:'Recuerde enviar la imagen de la orden medica luego de enviarnos el mensaje'
    },
   
    {
      name: 'Equipo medico',
      image: '../imagenes/materiales.jpg',
      descripcion:'Tubos de oxigeno,Concentradores de oxigeno,Nebulizadores,Camas ortopedicas,Sillas de Ruedas'
    },
    {
      name: 'Odontologia',
      image: '../imagenes/diente.jpg',
      descripcion:'Por favor, indique cuál es su problema, necesidad o urgencia. '
    },
    
    {
      name: 'Fonoaudiólogo',
      image: '../imagenes/fono.jpg',
      descripcion:'Recuerde enviar la imagen de la orden medica luego de enviarnos el mensaje'
    },
    {
      name: 'Masoterapeuta',
      image: '../imagenes/maso.jpg',
      descripcion:'Recuerde enviar la imagen de la orden medica luego de enviarnos el mensaje'
    },
    {
      name: 'Psicólogo',
      image: '../imagenes/psico.jpg',
      descripcion:'Recuerde enviar la imagen de la orden medica luego de enviarnos el mensaje'
    },
    {
      name: 'Kinesiólogo',
      image: '../imagenes/kine.jpg',
      descripcion:'Recuerde enviar la imagen de la orden medica luego de enviarnos el mensaje'
    },
    
    {
      name: 'Podologo',
      image: '../imagenes/pies.jpg',
      descripcion:''
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
    indication.innerText="Por favor ingrese los siguientes datos para contratar el servicio,luego presione Contratar. ";
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
    
    const name = document.createElement('p');
    name.classList.add('popup-name'); 
    name.textContent = product.name;
    popDescription.appendChild(name);
    popDescription.appendChild(descripcion);
    const form = document.createElement('form');
    form.classList.add('popup-form');
    if(product.name==="Medicos" || product.name==="Radiologos" || product.name==="Ecografista"|| product.name==="Enfermeros" || product.name==="Quimicos"  || product.name==="Odontologia" || product.name==="Kinesiologo" || product.name==="Fonoaudiólogo" || product.name==="Psicólogo" || product.name==="Masoterapeuta"|| product.name==="Kinesiólogo" ){
      num =1;
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
        <label for="message">Diagnostico del paciente:</label>
        <textarea id="message" name="message"></textarea>
      </div>
      <div class="input-container">
        <label for="message">Indicaciones:</label>
        <textarea id="message2" name="message"></textarea>
      </div>
    `;

    }else{
      num=2;
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
        <label for="message">Indicaciones:</label>
        <textarea id="message2" name="message"></textarea>
      </div>
    `;
    }
   
    const contratarFinal=document.createElement('button');
    contratarFinal.classList.add('contratar-final');
    contratarFinal.innerText="Contratar"

    popupContent.appendChild(form); 
    popupContent.appendChild(contratarFinal);
    popupContainer.appendChild(closeButton);
    popupContainer.appendChild(popupContent);
  
    pop.appendChild(popupContainer);
    if(num==1){
      contratarFinal.addEventListener('click', () => {
        const nameValue = document.getElementById('name').value;
        const emailValue = document.getElementById('email').value;
        const padecimientoValue = document.getElementById('message').value;
        const descripcionValue = document.getElementById('message2').value;
        const whatsappMessage = `Hola, mi nombre es ${nameValue} y mi dirección es ${emailValue}. Me gustaría contratar el servicio de ${product.name}. Mi diagnostico: ${padecimientoValue}. Necesitaria lo siguiente: ${descripcionValue}.  ¿Podrías Confirmar el servicio?`;
        const whatsappLink = `https://api.whatsapp.com/send?phone=+542617799999&text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, '_blank');
      });

    }else{
      contratarFinal.addEventListener('click', () => {
        const nameValue = document.getElementById('name').value;
        const emailValue = document.getElementById('email').value;
        const descripcionValue = document.getElementById('message2').value;
        const whatsappMessage = `Hola, mi nombre es ${nameValue} y mi dirección es ${emailValue}. Me gustaría contratar el servicio de ${product.name}.Necesitaria lo siguiente:${descripcionValue}.  ¿Podrías Confirmar el servicio?`;
        const whatsappLink = `https://api.whatsapp.com/send?phone=+542617799999&text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, '_blank');
      });

    }
    
  }