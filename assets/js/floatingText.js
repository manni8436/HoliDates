
var quotes = [
    "We just loved Bruges, our weekend away was magical!",
    "Everyone says it constantly rains in Ireland - they couldn't be more wrong!",
    "Venice was a dream come true, we couldn't have hoped for a better honeymoon!",
    "I couldn't believe how smelly Paris was...definitely not going back there!",
    "The highlight in Rome for me was the Colosseum - it was breathtaking!"
];

textSequence(0);
function textSequence(i) {

    if (quotes.length > i) {
        setTimeout(function () {
            document.getElementById("quotes").innerHTML = `
            <p class="fade-text">"...${quotes[i]}..."</p>
            `;
            textSequence(++i);
        }, 8000);

    } else if (quotes.length == i) {
        textSequence(0);
    }

}
