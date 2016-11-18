$(document).ready(function() {
    var quote;
    var author;

    function getQuote() {
        $.ajax({
            url: 'http://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp'
            },
                success: function(response) {
                quote = response.quoteText;
                author = response.quoteAuthor;
                $('#quote').text(quote);
                if (author) {
                    $('#author').text('- ' + author);
                } else {
                    $('#author').text('- unknown');
                }
                var text = quote + ' - ' + author;
                $('.twitter').attr('href', "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text));
            }


        });
    }
    getQuote();
    $('.get_quote').on('click', function(event) {
        event.preventDefault();
        getQuote();
    });


});
