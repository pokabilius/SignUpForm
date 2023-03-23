const pwd = document.querySelector('#pwd')
const confirmpwd = document.querySelector('#confirmpwd')
const form = document.querySelector('form')
const msg = document.querySelector('.message')



function checkpasswords(event) {
    console.log(pwd.value)
    console.log(confirmpwd.value)
    if (pwd.value=== confirmpwd.value){
        return
    }else{
        msg.textContent = "The passwords don't match"
    }
    event.preventDefault();
}



form.addEventListener('submit', checkpasswords);


