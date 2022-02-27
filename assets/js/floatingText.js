
var quotes = [
    "hello i am the first title",
    "whats up, i am the second title",
    "add here any extra quotes you want"
];

textSequence(0);
function textSequence(i) {

    if (quotes.length > i) {
        setTimeout(function () {
            document.getElementById("quotes").innerHTML = `
            <p class="fade-text">"...${quotes[i]}..."</p>
            `;
            textSequence(++i);
        }, 5000);

    } else if (quotes.length == i) {
        textSequence(0);
    }

}
