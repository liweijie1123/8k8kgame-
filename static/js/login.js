let getEle = (e, all = false) => { return (all) ? document.querySelectorAll(`${e}`) : document.querySelector(`${e}`) }
let addClEvt = (el, cb) => { el.addEventListener('click', cb) }
let addKeyEvt = (cb)=>{addEventListener('keydown',cb)}


var register = getEle('.registe')
var login = getEle('.jumlogin')

addClEvt(register,()=>{
    location.href = '/register'
});

