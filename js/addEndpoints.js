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

    var p = window.location.pathname;

    if (p.length === 0 || p === "/" || p.match(/^\/?index/)) {
        jQuery('.whats-new-row').css('display', 'block');

        jQuery(document).ready(function() {
            jQuery('.copy-container .close-button').click(function(){
                jQuery('.panels-flexible-row.whats-new-row').css('display', 'none');
            });
        });
    }


});