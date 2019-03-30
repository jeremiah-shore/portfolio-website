window.addEventListener('DOMContentLoaded', (event) => {

  var images = document.querySelectorAll('.card img');
  for(let i = 0; i < images.length; i++) {
    var card = images[i].parentNode;
    card.style.backgroundImage = 'url(' + images[i].src + ')';
    card.style.cursor = 'pointer'
    card.removeChild(images[i]);

    var href = card.children[0].href;
  }

  var gallery = document.getElementById('content-wrapper');
  gallery.addEventListener('click', (e) => {
    if(e.target.className == 'card') {
      var link = e.target.getElementsByTagName('a')[0];
      window.open(link.href, link.target);
    }
  });

});
