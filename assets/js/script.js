var enviado=0;
$("#enviar").click(function(){
  if(enviado==0){
    alert("Nos pondremos en contacto contigo pronto.");
    enviado=enviado+1
  }
  else{
    alert("Ya has enviado tu mensaje, recarga si quieres mandar otro.");
  }
});

$(function () {
  $("li>a").click(function(event){
    if(this.hash !=""){
      event.preventDefault();

      var desp=  this.hash;
      $("html,body").animate({
        scrollTop: $(desp).offset().top
      },800,function(){
        window.location.hash=desp;
      });
    }
  });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
