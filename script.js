$(document).ready(function() {
    var randomNum;
    var randomQuote;
    var randomAuthor;
    var url = 'quotes.json';

    function getQuote() {
        $.getJSON(url, function(data) {
            randomNum = Math.floor((Math.random() * data.quotes.length));
            randomQuote = data.quotes[randomNum];
            randomAuthor = data.authors[randomNum];
            $("#quote").text('"' + randomQuote + '"');
            $("#author").text(randomAuthor);
            var text = randomQuote + ' - ' + randomAuthor;
            $('.twitter').attr('href', "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text));
        });
    }
    getQuote();
    $('.get_quote').on('click', function(event) {
        event.preventDefault();
        getQuote();
    });
});
