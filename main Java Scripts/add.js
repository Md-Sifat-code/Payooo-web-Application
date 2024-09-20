document.getElementById('btn-logout').addEventListener('click',function(){
    window.location.href = "index.html";
})
// add money
document.getElementById('add_money').addEventListener('click',function(){
    console.log("Hi");
    const acc_number = document.getElementById('account').value;
    console.log(acc_number);
    
    const pin = document.getElementById('pin').value;
    console.log(pin);
    if(acc_number == '01123300461' && pin == '3250' ){
        
        const amount1 = document.getElementById('amount').value;
        const taka1 = document.getElementById('taka').innerText;
        const x = parseFloat(taka1);
        const z = parseFloat(amount1);
        const sum = x+z;
        
        document.getElementById('taka').innerText = sum;
    }
})
let u = document.getElementById('banks').value
