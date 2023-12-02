const TOKEN = "6839101586:AAEAQad_515f4lhz49c3I1kX0jLCnrO5D8Q"
const CHAT_ID = "-1001862459483"
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`

document.getElementById('tg').addEventListener('submit', function(e){
    e.preventDefault()

let message = `<b> Заявка с сайта !</b>\n`
message += `<b> Отправитель: </b> ${ this.name.value }\n`
message += `<b> Почта: </b> ${ this.email.value }\n`


axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html', 
    text:  message,
})

})