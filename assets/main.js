$(document).ready(function() {

    $('.btnjoin').click(function(){

        var fullname = $('#fullname').val();
        var email = $('#email').val();
        var companyname = $('#companyname').val();

        $.post('https://hooks.zapier.com/hooks/catch/6092/ogugvdf/',{fullname:fullname,email:email,companyname:companyname},function(response){
            $('#formbody').hide();
            $('#thankyoubox').show();    
        })     
    })

})