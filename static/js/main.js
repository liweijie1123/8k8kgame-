

// const fs = require('fs');
let getEle = (e, all = false) => { return (all) ? document.querySelectorAll(`${e}`) : document.querySelector(`${e}`) }
let addClEvt = (el, cb) => { el.addEventListener('click', cb) }
let addKeyEvt = (cb)=>{addEventListener('keydown',cb)}
// 模糊搜索
let searcher = () => {
    
    var datas = input.value;
    var url = '/api/search?value='+datas;
    // alert(url);
    location.href = url;
 
}
let reload = () => {
    location.reload();
}
let allgame = () => {
    box.style.display = 'none';
    $.getJSON("data.json", function (data) {
        var allGame = template('allGame', data);
        box2.innerHTML = allGame;
    });
}
let keydown = (e)=>{
    if(e.keyCode==13){
        searcher();
    }
}
var box = getEle(".m-some_game");
var box2 = getEle(".m-all_game")
var search = getEle(".m-search-button");
var input = getEle(".in");
var logo = getEle(".m-logo");
var meun = getEle(".m-meun");
var more = getEle(".more");
var login = getEle('login');
var userCenter = getEle('.userCenter');
var usermane = getEle('.usermane');

addClEvt(search, searcher);
addClEvt(logo, reload);
addClEvt(meun, allgame);
addKeyEvt(keydown);
setTimeout(addClEvt(more,reload),1000);
addClEvt(userCenter,()=>{
    var user = usermane.innerHTML;
    var url = '/userCenter?value='+user;
    location.href = url;
})




