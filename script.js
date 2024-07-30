let lastScrollTop = 0;

document.addEventListener('scroll',function(){
    const navigatorid = document.getElementById('navigatorid');
    if(window.innerWidth > 743){
        navigatorid.style.display = 'none';
    }
    else{
        let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
        if(scrollTop > lastScrollTop){
            navigatorid.style.display = 'none'
        }
        else{
            navigatorid.style.display = 'flex';
        }
        if(scrollTop == 0){
            navigatorid.style.display = 'flex';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
})

//////////////////////////

document.addEventListener('scroll',function(){
    const scrolluphide = document.getElementById('scrolluphide');
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if(scrollTop > 100){
        scrolluphide.style.display = 'none';
    }
    else{
        scrolluphide.style.display = 'block'
    }
})

//////////////////////////

document.addEventListener('scroll',function(){
    const scrolldownhide = document.getElementById('scrolldownhide');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop < 100){
        scrolldownhide.style.display = 'none';
    }
    else{
        scrolldownhide.style.display = 'block'
    }
})

/////////////////////////

document.addEventListener('scroll',function(){
    const needtofix = document.getElementById('needtofix');
    const needtoadjust = document.getElementById('needtoadjust');
    const needtowhite = document.getElementById('needtowhite');
    const needtopad = document.getElementById('needtopad');
    const needtoright = document.getElementById('needtoright');
    const needtoadjustbottom = document.getElementById('needtoadjustbottom')
    const fixedhr = document.getElementById('fixedhr');


    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > 100){
        needtofix.style.position = "fixed";
        needtofix.style.top = "78px";
        if(window.innerWidth < 1440){
            needtofix.style.marginRight = '30px';
        }
        needtowhite.style.background = "white";
        needtowhite.style.paddingRight = "50px";
        needtopad.style.paddingRight = "100px";
        needtoright.style.right = "80px";
        needtoright.style.width = "100px";
        needtoright.style.height = "63px";
        needtoadjustbottom.style.marginBottom = 0;
        needtoadjustbottom.style.paddingBottom = 0;
        fixedhr.style.display = "block";
        if(window.innerWidth > 744){
            needtoadjust.style.marginTop = "200px";
        }
        if(window.innerWidth > 1439){
            needtowhite.style.paddingRight = "100px";
            needtopad.style.paddingRight = "100px";
            needtofix.style.right = "-80px";
            needtofix.style.left = "80px";
            needtofix.style.paddingInlineEnd = "80px";
            needtoright.style.right = "160px";
        }
        
        
    }
    else{
        needtofix.style.position = "static";
        needtofix.style.top = 0;
        needtowhite.style.background = "none";
        needtopad.style.paddingRight = "25px";
        needtoright.style.width = "78px";
        fixedhr.style.display = "none";
    }
})


