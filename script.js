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

document.addEventListener('scroll',function(){
    const scrolluphide = document.getElementById('scrolluphide')
})

//head-space-div-inner


// let lastScrollTop = 0;
// const bottomNav = document.getElementById('bottom-nav');
// function checkScroll() {
//     if (window.innerWidth > 744) {
//         bottomNav.style.display = 'none';
//     } else {
//         let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         if (scrollTop > lastScrollTop) {
//             bottomNav.style.display = 'none';
//         } else {
//             bottomNav.style.display = 'block';
//         }
//         if (scrollTop === 0) {
//             bottomNav.style.display = 'block';
//         }
//         lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
//     }
// }
// function checkInitialNavDisplay() {
//     if (window.innerWidth > 744) {
//         bottomNav.style.display = 'none';
//     } else {
//         bottomNav.style.display = 'block';
//     }
// }
// window.addEventListener("scroll", checkScroll);
// window.addEventListener("resize", checkInitialNavDisplay);
// checkScroll();
// checkInitialNavDisplay()