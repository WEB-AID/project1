let header = document.querySelector('.header-layout');
let main = document.querySelector('.main-layout');
let sidemenu = document.querySelector('.sidemenu-layout');
let feedback = document.querySelector('.feedback-layout');
let orderCall = document.querySelector('.ordercall-layout');
let bluredHeaderButtons = header.querySelectorAll('.button');
let bluredMainButtons = main.querySelectorAll('.button');
let bluredSidemenuButtons = sidemenu.querySelectorAll('.button');
let burgerButton = document.querySelector('.main-menu__burger-button');
let burgerHideButton = document.querySelector('.sidemenu-header__hideButton');
let feedbackButton = document.querySelectorAll('.button--chat');
let feedbackHideButton = document.querySelector('.feedback-hideButton');
let orderCallButton = document.querySelectorAll('.button--phone');
let orderCallHideButton = document.querySelector('.ordercall-hideButton');

// ------------FUNCTIONS------------- //
let setContentButtonsBlock = function() {
    for (let item of bluredHeaderButtons) {
        item.classList.add('clickBlocking');
    }
    for (let item of bluredMainButtons) {
        item.classList.add('clickBlocking');
    }
}

let removeContentButtonsBlock = function() {
    for (let item of bluredHeaderButtons) {
        item.classList.remove('clickBlocking');
    }
    for (let item of bluredMainButtons) {
        item.classList.remove('clickBlocking');
    }
}

let setSidemenuButtonsBlock = function() {
    for (let item of bluredSidemenuButtons) {
        item.classList.add('clickBlocking');
    }
}

let removeSidemenuButtonsBlock = function() {
    for (let item of bluredSidemenuButtons) {
        item.classList.remove('clickBlocking');
    }
}

let setHeaderMainBlur = function() {
    header.classList.add('blur');
    main.classList.add('blur');
}

let removeHeaderMainBlur = function() {
    header.classList.remove('blur');
    main.classList.remove('blur');
}

let tabletBlurListener = function() {
    sidemenu.style.transform = 'translateX(-600px)';
    feedback.style.transform = 'translateX(600px)';
    orderCall.style.transform = 'translateX(600px)';
    header.classList.remove('blur');
    main.classList.remove('blur');
    sidemenu.classList.remove('blur');

    removeContentButtonsBlock();
    removeSidemenuButtonsBlock();

    header.removeEventListener('click', tabletBlurListener, { once: true })
    main.removeEventListener('click', tabletBlurListener, { once: true })
}

let desktopBlurListener = function() {
    feedback.style.transform = 'translateX(600px)';
    orderCall.style.transform = 'translateX(600px)';
    header.classList.remove('blur');
    main.classList.remove('blur');
    sidemenu.classList.remove('blur');

    removeContentButtonsBlock();
    removeSidemenuButtonsBlock();

    header.removeEventListener('click', desktopBlurListener, { once: true })
    main.removeEventListener('click', desktopBlurListener, { once: true })
    sidemenu.removeEventListener('click', desktopBlurListener, { once: true })
}

let blurListener = function() {
    if (window.innerWidth >= 320 && window.innerWidth < 1440) {
        header.addEventListener('click', tabletBlurListener, { once: true })
        main.addEventListener('click', tabletBlurListener, { once: true })       
    } else if (window.innerWidth >= 1440) {
        header.addEventListener('click', desktopBlurListener, { once: true })
        main.addEventListener('click', desktopBlurListener, { once: true })
        sidemenu.addEventListener('click', desktopBlurListener, { once: true })
    }
}

let removeAllListeners = function() {
    header.removeEventListener('click', tabletBlurListener, { once: true })
    main.removeEventListener('click', tabletBlurListener, { once: true })
    header.removeEventListener('click', desktopBlurListener, { once: true })
    main.removeEventListener('click', desktopBlurListener, { once: true })
    sidemenu.removeEventListener('click', desktopBlurListener, { once: true })
}

let resizeCheckDesktop = function() {
    if (window.innerWidth >= 1440){
        sidemenu.style.transform = 'translateX(0)';

        sidemenu.classList.remove('blur');
        removeContentButtonsBlock();
        removeSidemenuButtonsBlock();
    } else {
        sidemenu.style.transform = 'translateX(-600px)';
    }
    removeHeaderMainBlur();
    removeContentButtonsBlock();
    removeAllListeners();
}

// -----------SIDEMENU---------- //
burgerButton.addEventListener('click', function(evt) {
    evt.stopPropagation();
    sidemenu.style.transform = 'translateX(0)';
  
    setHeaderMainBlur();
    setContentButtonsBlock();
    blurListener();
})
  
burgerHideButton.addEventListener('click', function() {
    sidemenu.style.transform = 'translateX(-600px)';
    
    removeHeaderMainBlur();
    removeContentButtonsBlock();
    removeAllListeners();
})
  
window.addEventListener('resize', resizeCheckDesktop);
resizeCheckDesktop();

// -----------FEEDBACK---------- //
for (let item of feedbackButton) {
    item.addEventListener('click', function(evt) {
        if (window.innerWidth >= 1440) {
            let x = ((window.innerWidth - 1440) / 2) + 'px';
            feedback.style.transform = 'translateX' + `(-${x})`;
        } else {
            sidemenu.style.transform = 'translateX(-600px)';
            feedback.style.transform = 'translateX(0)';
        }
  
        evt.stopPropagation();
        sidemenu.classList.add('blur');
  
        setHeaderMainBlur();
        setContentButtonsBlock();
        setSidemenuButtonsBlock();
        blurListener();
    })
}
  
feedbackHideButton.addEventListener('click', function() {
    feedback.style.transform = 'translateX(600px)';
    sidemenu.classList.remove('blur');
  
    removeHeaderMainBlur();
    removeContentButtonsBlock();
    removeSidemenuButtonsBlock();
    removeAllListeners();
})

// -----------ORDERCALL---------- //
for (let item of orderCallButton) {
    item.addEventListener('click', function(evt) {
        if (window.innerWidth >= 1440) {
            let x = ((window.innerWidth - 1440) / 2) + 'px';
            orderCall.style.transform = 'translateX' + `(-${x})`;
        } else {
            sidemenu.style.transform = 'translateX(-600px)';
            orderCall.style.transform = 'translateX(0)';
        }
  
        evt.stopPropagation();
        sidemenu.classList.add('blur');
  
        setHeaderMainBlur();
        setContentButtonsBlock();
        setSidemenuButtonsBlock();
        blurListener();
    })
}
  
orderCallHideButton.addEventListener('click', function() {
    orderCall.style.transform = 'translateX(600px)';
    sidemenu.classList.remove('blur');
  
    removeHeaderMainBlur();
    removeContentButtonsBlock();
    removeSidemenuButtonsBlock();
    removeAllListeners();
})