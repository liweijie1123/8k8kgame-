
let getEle = (e, all = false) => { return (all) ? document.querySelectorAll(`${e}`) : document.querySelector(`${e}`) }
let addClEvt = (el, cb) => { el.addEventListener('click', cb) }
// 模糊搜索
let searcher = () => {
    $.getJSON("data.json", function (data) {
        var txt = input.value;
        var reg = new RegExp(txt);
        let _val = data.allGame.filter(item => {
            if (reg.test(item.name)) {
                return item;
            }
        })
        box.style.display = 'none';
        console.log({ allGame: _val });
        var allGame = template('allGame', { allGame: _val });
        box2.innerHTML = allGame;
    })
}
// 模板加载
let load = () => {
    $.getJSON("data.json", function (data) {
        var someGame = template('someGame', data);
        box.innerHTML = someGame;
        var allGame = template('allGame', data);
        box2.innerHTML = allGame;

    });
}
let reload  =()=>{
    location.reload();
}
var box = getEle(".m-some_game");
var box2 = getEle(".m-all_game")
var search = getEle(".m-search-button");
var input = getEle(".in");
var logo = getEle(".m-logo");

load();
addClEvt(search, searcher);
addClEvt(logo,reload);

