const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const forms=$('.modal-form')
const logins=$$('.header-login__regis')
const login1=$('.auth-form__body-nhap')
const registrations1=$('.auth-form__body-ky')
const backs=$$('.auth-form__control .btn-back')
const menu_mobile= $('.list__icon')
const quit_mobile= $('.quit-mobile')
const overlay_mobile= $('.overlayin-quit')


logins[1].onclick=function(){
    forms.style.display="block";
    login1.style.display="block" ;
}

 logins[0].onclick=function(){
    forms.style.display="block";
    registrations1.style.display="block" ;
}

for(var i=0;i<backs.length;i++){
    backs[i].onclick=function(){
    forms.style.display="none";
    login1.style.display="none" ;
    registrations1.style.display="none" ;
 };


}

  menu_mobile.onclick=function(){
        $('.tab-mobile').style.display='block';
}

  quit_mobile.onclick=function(){
        $('.tab-mobile').style.display='none';
}

  overlay_mobile.onclick=function(){
        $('.tab-mobile').style.display='none';
}

function a(){
    let i = 0;
    let a= setInterval(() => {
        document.querySelector('.content2-1000').innerHTML = i+"+";
        i++
        if(i==1001){clearInterval(a);}
    },1);
}
a()

function b(){
    let i = 0;
    let a= setInterval(() => {
        document.querySelector('.content2-50').innerHTML = i+"+";
        i++
        if(i==51){clearInterval(a);}
    },20);
}
b()

function c(){
    let i = 0;
    let a= setInterval(() => {
        document.querySelector('.content2-100').innerHTML = i+"+";
        i++
        if(i==101){clearInterval(a);}
    },20);
}
c()