$(document).ready(function() {
  $("#first>img").click(function() {
      $("#first").toggle();
      $("#design").toggle();
  });
  $("#second>img").click(function() {
      $("#second").toggle();
      $("#development").toggle();
  });
  $("#third>img").click(function() {
      $("#third").toggle();
      $("#product").toggle();
  });

});
$(document).ready(function() {
  $('.portfolio').hover(function(){
      $('.port-text',this).slideToggle('fast');
      
}, function(){
      $('.port-text',this).slideToggle('fast');
  });
});
$(document).ready(function() {
  $("#contact form").submit(function() {
      var userInput = $("input#username").val();
      alert(userInput+",We have received your message.Thank you for reaching out to us");   
  });
});