$(function(){
  $.ajax({
      url: 'https://www.mulesoft.com/markup/get/header?searchbox=false',
      type:'GET',
      async:false,
      success: function(data){
        $('#endpoint-header').html(data);
      }
    });

  $.ajax({
    url: 'https://www.mulesoft.com/markup/get/footer',
    type:'GET',
    async:false,
    success: function(data){
      $('#endpoint-footer').html(data);
    }
  });
});