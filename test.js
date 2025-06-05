let buy_btn = document.getElementById('buy');
let item = document.getElementById('item');
let form_btn = document.getElementById('frmbtn');
let inputs = document.getElementsByTagName('input');
let form = document.getElementById('form');
let array = [];
let tg = window.Telegram.WebApp;
console.log(inputs);

tg.expand();

buy_btn.addEventListener('click',function() {
    item.style.display = 'none';
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.alignItems = 'center';
});

form_btn.addEventListener('click',function() {
    array = [];
    let name = inputs[0].value;
    let email = inputs[1].value;
    let number = inputs[2].value;
    array.push(name);
    array.push(email);
    array.push(number);
    tg.sendData(JSON.stringify(array));
});