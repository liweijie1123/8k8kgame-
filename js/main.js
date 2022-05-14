


$.getJSON("data.json", function(data) {
    var someGame = template('someGame', data);
    // 5.将拼接好的html字符串添加到页面中。
    var box = document.querySelector(".m-some_game")
    box.innerHTML = someGame;
    var allGame = template('allGame',data);
    var box2 = document.querySelector(".m-all_game")
    box2.innerHTML=allGame;
});


