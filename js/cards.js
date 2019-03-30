window.addEventListener('DOMContentLoaded', (event) => {

  var images = document.querySelectorAll('.card img');
  for(let i = 0; i < images.length; i++) {
    var card = images[i].parentNode;
    var src = images[i].src;
    var output = 'url(' + src + ')';
    card.style.backgroundImage = output;
    card.removeChild(images[i]);
  }

});
