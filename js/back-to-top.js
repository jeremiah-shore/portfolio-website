var btt = '#back-to-top';
var btt_button = $(btt)[0];

btt_button.style.cursor = 'pointer';

window.onscroll = () => {
  setButtonDisplay();
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
  $('#home')[0].scrollIntoView({behavior: "smooth"});
});
