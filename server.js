const express = require('express')
const bodyParser = require('body-parser');
const fs = require('fs');
const util = require('./util');
const req = require('express/lib/request');
const path = require('path');
const tem = require('art-template');

const app = express()
const port = 3000
app.use(express.json())
// 设置静态资源路径
app.use('/static',express.static(__dirname+'/static'))
app.engine('html',require('express-art-template'))
app.set('views',path.join(__dirname,'page'))
app.set('view engine','html');
var jsonarry = {};
var f = 0;
var q = 0;
var searchdata;

app.get('/', async (req, resp) => {
    fs.readFile('data/gamedata.json',(err,data)=>{
        if(!err){
            let gamedata = data.toString();
            gamedata = JSON.parse(gamedata);
            resp.render('index',gamedata)
        }
        else{
            console.log(err);
        }
    })
})
app.get('/user', async (req, resp) => {
    fs.readFile('data/gamedata.json',(err,data)=>{
        if(!err){
            var userdata
            let gamedata = data.toString();
            fs.readFile('data/data.json',(err,datas)=>{
                userdata   = datas.toString();
                userdata = JSON.parse(userdata);
                gamedata = JSON.parse(gamedata);
                for(var i = 0;i<userdata.data.length;i++){
                    if(userdata.data[i].username===req.query.value){
                      gamedata.User = {data:userdata.data[i]};
                    }
                }             
                resp.render('user',gamedata)
            })

        }
        else{
            console.log(err);
        }
    })
})
app.get('/userCenter', async (req, resp) => {
    fs.readFile('data/gamedata.json',(err,data)=>{
        if(!err){
            var userdata;
            let gamedata = data.toString();
            fs.readFile('data/data.json',(err,datas)=>{
                userdata   = datas.toString();
                userdata = JSON.parse(userdata);
                gamedata = JSON.parse(gamedata);
                for(var i = 0;i<userdata.data.length;i++){
                    if(userdata.data[i].username===req.query.value){
                      gamedata.User = {data:userdata.data[i]};
                    }
                }             
                // console.log(gamedata)
                resp.render('userCenter',gamedata)
            })

        }
        else{
            console.log(err);
        }
    })
})
app.get('/login', async (req, resp) => {
    const data = await util.read('page/login.html');
    resp.end(data);
})
app.get('/img', async (req, resp) => {
    const data = await util.read('page/img.html');
    resp.end(data);
})
app.get('/register', async (req, resp) => {
    const data = await util.read('page/register.html');
    resp.end(data);
})

app.post('/api/register', async (req, res) => {
    await fs.readFile('data/data.json',(err, data) => {
        let use = data.toString();
        console.log('shoudao');
        use = JSON.parse(use);
        for (var i = 0; i < use.data.length; i++) {
            if (use.data[i].username === req.body.username) {
                f = 1;
                res.send({code:2000,msg:"用户已存在，请直接登录"})
                break;
            }
        }
        if (f == 0) {
            var n  = Math.round(Math.random()*4+0);
            req.body.headimg='/static/img/headimg/'+n+'.jpeg'
            use.data.push(req.body);
            // console.log(req.body);
            // console.log(use);
            fs.writeFile('data/data.json', (JSON.stringify(use)), () => {
                res.send({code:5000,msg:"注册成功"});
            })
        }
    })

})
app.post('/api/login',  (req, res) => {
    // console.log(req.body);
    fs.readFile('data/data.json', (err, data) => {
        let use = data.toString();
        use = JSON.parse(use);
        for (var i = 0; i < use.data.length; i++) {
            if (use.data[i].username === req.body.username &&use.data[i].password ===req.body.password) {
                q = 1;
                var Nickname = use.data[i].nickname
                res.send({code:2000,msg:"登录成功",user: req.body.username,nickname: Nickname});
                break;
            }
        }
        if (q == 0) {
            res.send({code:5000,msg:"用户名或者密码错误"})
        }
    })

})


app.get('/api/search', (req, res) => {
    // console.log(req.query);
    fs.readFile('data/gamedata.json', (err, data) => {
        let use = data.toString();
        use = JSON.parse(use);
        // console.log(req.query.value);
        var reg = new RegExp(req.query.value);
        var _val = use.allGame.filter(item => {
            if (reg.test(item.name)) {
                return item;
            }
        })
        // console.log({ allGame: _val }); 
        res.render('search',{allGame: _val})
    })

})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})



