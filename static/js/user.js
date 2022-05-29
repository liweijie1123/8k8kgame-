let getEle = (e, all = false) => { return (all) ? document.querySelectorAll(`${e}`) : document.querySelector(`${e}`) }
let addClEvt = (el, cb) => { el.addEventListener('click', cb) }
let addKeyEvt = (cb)=>{addEventListener('keydown',cb)}
var returnhome = getEle('.returnhome');
addClEvt(returnhome,()=>{
    window.history.back();
})