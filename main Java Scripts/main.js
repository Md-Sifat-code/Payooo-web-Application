document.getElementById('login_button').addEventListener('click',function(event){
    event.preventDefault();
    const phnNumber = document.getElementById('number').value;
    const pin_number = document.getElementById('pin').value;
    if(phnNumber === '01762746646' && pin_number === '3250'){
        window.location.href = "home.html";
    }else{
        alert('Wrong Phone Number or Pin');
    }
})