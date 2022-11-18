const cowsay=require("cowsay");
const inspirationalQuotes=require("inspirational-quotes");

console.log(
    cowsay.say({
        text:inspirationalQuotes.getRandomQuote(),
        e:"moo",
        T:"b",
    })
);