$ (document).ready(function(){
  $ (".clickable").click(function() {
    $ ("#showing").slideToggle();
    $ ("#hidden").slideToggle();
    // $ ("#fade").toggle();
  });

  $ (".click").click(function() {
    $ ("#hero-leaves").fadeToggle();
    $ ("#hero-arrives").fadeToggle();
  });
});
