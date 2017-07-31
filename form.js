$(function() {
    $('form input[type=submit]').click(sendForm);
})


function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/tarassito@gmail.com", 
        method: "POST",
        data: {
            name: $('#name').val(),
            comment: $('#comment').val()
        },
        dataType: "json"
    })
     .done(function() {
         $('form')[0].reset();
         $('#form-result').html('<p>Thank you!</p>');
     })
     .fail(function(e){
         $('#form-result').html(`<p>Sorry, there is an error: ${e}</p>`);
     });
}