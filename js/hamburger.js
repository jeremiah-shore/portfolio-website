var menuItems = $('header nav ul li:not(#personal-brand)').get();

setItemVisibility(); //intially called

$(window).resize(() => {
  setItemVisibility();
});

function setItemVisibility() {
  if($(window).width() > 600) {
    for(let i = 0; i < menuItems.length; i++) {
      menuItems[i].style.display = 'inline-block';
    }
  } else {
    for(let i = 0; i < menuItems.length; i++) {
      menuItems[i].style.display = 'none';
    }
  }
}
