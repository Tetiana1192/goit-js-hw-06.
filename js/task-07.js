
const refs = {
  input: document.querySelector('input#font-size-control'),
  nameLabel: document.querySelector('span#text'),
  
};

 refs.nameLabel.style.fontSize = `${refs.input.value}px`;

refs.input.addEventListener('input', (event) => {
    console.log(event.currentTarget.value);
   refs.nameLabel.style.fontSize = `${event.currentTarget.value}px`;
})







const clients = ["Mango", "Poly", "Ajax"];

for (let i = 0; i < clients.length; i += 1){
   // console.log(clients[i]);
    
}
console.log(clients.pop());
console.log(clients);

clients.unshift("Kiwi");
console.log(clients);