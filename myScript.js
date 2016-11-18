$(document).ready(function() {
    var quote;
    var author;

    function getQuote() {
        $.ajax({
            /*url: 'http://api.forismatic.com/api/1.0/',
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
            }*/
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous',
            type: 'POST',
            data: {},
            dataType: 'json',
            success: function(response) {
                quote = response.quote;
                author = response.author;
                $("#quote").text(quote);
                if (author) {
                    $("#author").text("- " + author);
                } else {
                    $('#author').text('- unknown');
                }
                var text = quote + ' - ' + author;
                $('.twitter').attr('href', "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text));
            },
            error: function(err) {
                alert(err);
            },
            beforeSend: function(xhr) {
                    xhr.setRequestHeader("X-Mashape-Authorization", "7gJkAqfrmwmshnurHj5r6g8fXuUkp1E5TapjsnCC3Ndy7fFFju");
                } // Enter here your Mashape key

        });
    }
    getQuote();
    $('.get_quote').on('click', function(event) {
        event.preventDefault();
        getQuote();
    });


});
