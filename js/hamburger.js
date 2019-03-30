var selector = 'header nav ul li:not(#personal-brand)';
var menuItems = $('header nav ul li:not(#personal-brand)').get();

setItemVisibilityOnSize(); //intially called

$(window).resize(() => {
  setItemVisibilityOnSize();
});

function setItemVisibilityOnSize() {
  if($(window).width() > 600) {
    $('#hamburger-menu')[0].style.display = 'none';
    for(let i = 0; i < menuItems.length; i++) {
      menuItems[i].style.display = 'inline-block'; //this avoids a slideDown() animation on resize
    }
  } else {
    $('#hamburger-menu')[0].style.display = 'inline-block';
    for(let i = 0; i < menuItems.length; i++) {
      menuItems[i].style.display = 'none'; //this avoids a slideUp() animation on resize
    }
  }
}

$('#hamburger-menu')[0].addEventListener('click', () => {
  var visible = menuItems[0].style.display != 'none';
  if(!visible) {
    toggleVisibility(true);
  } else {
    toggleVisibility(false);
  }
});

function toggleVisibility(bool) {
  for(let i = 0; i < menuItems.length; i++) {
    if(bool) {
      $(selector).slideDown();
    } else {
      $(selector).slideUp();
    }
  }
}
