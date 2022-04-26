

const refs = {
  input: document.querySelector('#validation-input'),
  
};




//refs.input.addEventListener('focus', onInputFocus);
refs.input.addEventListener('blur', onInputBlur);


// function onInputFocus() {
//   console.log('Инпут получил фокус - событие focus');
// }

function onInputBlur(event) {
  console.log( event.currentTarget.value.length );
  console.log(event.currentTarget.dataset.length);
  const input = event.currentTarget;
  const requiredLength = Number(input.dataset.length);

  if (requiredLength === input.value.length) {
    console.log("Pівні");
    input.classList.add("valid");
    input.classList.remove("invalid");

  } else {
    console.log("Не рівні");
    input.classList.add("invalid");
    input.classList.remove("valid");
    }

}