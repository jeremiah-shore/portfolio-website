// When the user scrolls down 20px from the top of the document, show the button
var btt = '#back-to-top';
var btt_button = $(btt)[0];

btt_button.style.cursor = 'pointer';
btt_button.style.opacity = '0'; // this is a workaround to using disply:none, as the materlize icon doesn't load until it's displayed

window.onscroll = () => {
  setButtonDisplay();
  btt_button.style.opacity = 1;
};

function setButtonDisplay() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    $(btt).fadeIn();
    btt_button.style.display = "block";
  } else {
    $(btt).fadeOut();
  }
}

btt_button.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
