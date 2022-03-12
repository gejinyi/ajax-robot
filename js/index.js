let input = document.getElementById('search');
function init () {

    if (input.value) {
        render('mine',input.value)
        ajax({
            method:'get',
            url:'https://developer.duyiedu.com/edu/turing/chat',
            isAsync: false,
            data:{
                text:input.value
            },
            success:function (resp) {
             
                render ('rabot',resp.text)
            }
        });
        input.value = '';
    }

}
let content = document.getElementsByClassName('content')[0];
function render (who,text) {
    
    let img = document.createElement('img');
    let whoDiv  = document.createElement('div');
    let textDiv  = document.createElement('div');
    if (who == 'rabot') {
       whoDiv.className = 'rabot';
        img.src = './img/rabot.jfif';
        
    }else{
        whoDiv.className = 'mine';
        img.src = './img/mine.jfif';
    }
    textDiv.className = 'text';
    textDiv.innerText = text;
    whoDiv.appendChild(img);
    whoDiv.appendChild(textDiv);
    content.appendChild(whoDiv);
    content.scrollTop = content.scrollHeight - content.offsetHeight;
}
let button = document.getElementById('submitBtn');
button.onclick = function () {
    init()
}
input.onkeydown = function (e) {
    if (e.keyCode === 13) {
        button.click();
    }
}
