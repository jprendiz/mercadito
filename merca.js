

 let servicios = []

 servicios.push({
     id: 'electricidad',
     name: 'Electricidad',
     img: 'https://besvc.capacitateparaelempleo.org/coursesImages/d8283606-6a08-4904-9a9c-155f7d396358.png'
 })
 servicios.push({
     id: 'construccion',
     name: 'Construcción',
     img: 'https://besvc.capacitateparaelempleo.org/coursesImages/9e660492-7442-4a03-b962-189a295022b0.png'
 })
 servicios.push({
     id: 'carpinteria',
     name: 'Carpintería',
     img: 'https://besvc.capacitateparaelempleo.org/coursesImages/848910f2-a898-4499-9536-9a59149ddac3.png'
 })
 servicios.push({
     id: 'soldadura',
     name: 'Soldadura',
     img: 'https://besvc.capacitateparaelempleo.org/coursesImages/53961d39-d252-4766-a3d6-6ce434477d63.png'
 })
 servicios.push({
     id: 'fontaneria',
     name: 'Fontanería',
     img: 'https://besvc.capacitateparaelempleo.org/coursesImages/db2c2fb1-dc82-4827-b9bd-d33bb7349f9b.png'
 })
 servicios.push({
     id: 'pintura',
     name: 'Pintura',
     img: 'https://besvc.capacitateparaelempleo.org/coursesImages/5f958b4e-ea2b-460e-a144-1fe94d80a988.png'
 })
 servicios.push({
     id: 'aire_acondicionado',
     name: 'Aire acondicionado',
     img: 'https://besvc.capacitateparaelempleo.org/coursesImages/f85f3e2a-cb5c-485a-ad67-7af75d5cf014.png'
 })
 servicios.push({
     id: 'jardineria',
     name: 'Jardinería',
     img: 'https://besvc.capacitateparaelempleo.org/coursesImages/6dc5ea3b-1f7f-4880-af08-13d6ab05f2e2.png'
 })
 servicios.push({
     id: 'instalacion_de_ceramica',
     name: 'Cerámicas',
     img: 'https://besvc.capacitateparaelempleo.org/coursesImages/d5a1087b-42b2-425b-8652-88262081a7a3.png'
 })
 servicios.push({
     id: 'mesero_bartender',
     name: 'Mesero - bartender',
     img: 'https://besvc.capacitateparaelempleo.org/coursesImages/6225c655-3877-4079-beed-55acbfcf01e2.png'
 })
 servicios.push({
     id: 'reparacion_de_computadoras',
     name: 'Reparación de pc',
     img: 'https://besvc.capacitateparaelempleo.org/coursesImages/329999cb-df73-4f59-8df5-c72c32a47cc7.png'
 })
 servicios.push({
     id: 'Instalacion_de_paneles_de_yeso',
     name: 'Yeso',
     img: 'https://besvc.capacitateparaelempleo.org/coursesImages/3502edd8-c937-4a78-9180-4b9d069838ef.png'
 })
 servicios.push({
     id: 'enfermeria',  
     name: 'Servicios médicos',
     img: 'https://besvc.capacitateparaelempleo.org/coursesImages/a1202d27-48b2-4970-9c04-7a6868b8adb4.png'
 })
 servicios.push({
     id: 'constureria',
     name: 'Costurería',
     img: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600'
 })

 const cardsContainer = document.querySelector('.cards-container')

 function renderService(arr) {

     for (const servicio of servicios) {
 
         // Creamos el contenedor principal
         const serviceCard = document.createElement('div')
         serviceCard.classList.add('service-card')
         
         // Creamos el div con servicio info
         const serviceInfo = document.createElement('div')
         serviceInfo.classList.add('service-info')
         
         const serviceLabel = document.createElement('label')
        //  serviceLabel.innerText = servicio.name 
         serviceLabel.setAttribute('for', servicio.id)
         
         // Creamos la img
         const imageCard = document.createElement('img')
         imageCard.setAttribute('src', servicio.img)

         // Contenedor con pie de imagen
        const serviceName = document.createElement('div')
        serviceName.setAttribute('class', 'service-info-pie')

        // Creamos un p o spam
        const txt = document.createElement('p')
        txt.innerText = servicio.name

         // Creamos el input checkbox
         const inputCheck = document.createElement('input')
         inputCheck.setAttribute('type', 'checkbox')
         inputCheck.setAttribute('id', servicio.id)

         //Estructuramos el html

         serviceName.append(txt, inputCheck) // Agregamos checkbox y nombre del servicio

         serviceLabel.append(imageCard, serviceName)  

         serviceInfo.appendChild(serviceLabel)

         serviceCard.appendChild(serviceInfo)    // Agregamos la imagen y service-info al contenedor principal
 
         cardsContainer.appendChild(serviceCard)  // agregamos al contenedor de html
     }

 }

 renderService(servicios)