var ealert = document.querySelector('.alert')
var ebox = document.querySelector('.box')
var eresult = document.querySelector('.result')
var ekey = document.querySelector('.key p:last-child ')
var elocation = document.querySelector('.location p:last-child')
var ewhich = document.querySelector('.which p:last-child')
var ecode = document.querySelector('.code p:last-child')
document.onkeydown = function(events){
    console.log(events)
   ekey.innerHTML = events.key
   ecode.innerHTML = events.code
   elocation.innerHTML = events.location
   ewhich.innerHTML = events.which
   eresult.innerHTML = events.code
    ealert.classList.add('hidden')
    ebox.classList.remove('hidden')
    eresult.classList.remove('hidden')
}