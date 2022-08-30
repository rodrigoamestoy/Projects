document.addEventListener('DOMContentLoaded', () => {

   const redbtn = document.createElement('button')
   const whitebtn = document.createElement('button')
   const myDiv = document.getElementById('container')

   redbtn.innerHTML = 'PINTAME DE ROJO';
   redbtn.classList.add('btn');
   redbtn.type = 'submit';

   whitebtn.innerHTML = 'DEVUELVEME MI COLOR';
   whitebtn.classList.add('btn');
   whitebtn.type = 'submit';

   myDiv.appendChild(redbtn);
   myDiv.appendChild(whitebtn);

   redbtn.addEventListener('click', () => {
      myDiv.style.background = 'red'
   })

   whitebtn.addEventListener('click', () => {
      myDiv.style.background = 'rgb(120, 220, 180)';
   })




})