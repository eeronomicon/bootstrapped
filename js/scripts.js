// Back End Code


// Front End Code
$(document).ready (function(){
  $.getJSON('http://hipsterjesus.com/api/?paras=1', function(data) {
            $('#column1').html( data.text );
        });
  $.getJSON('http://hipsterjesus.com/api/?paras=1', function(data) {
            $('#column2').html( data.text );
        });
  $.getJSON('http://hipsterjesus.com/api/?paras=1', function(data) {
            $('#column3').html( data.text );
        });
});
