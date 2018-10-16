$ (document).ready(function(){
  $ (".clickable").click(function() {
    $ ("#showing").toggle();
    $ ("#hidden").toggle();
  });

  $ (".click").click(function() {
    $ ("#fade").fadeIn();
  });
});
