let url = 'https://raw.githubusercontent.com/0xzphil/blog/main/collections/Excalidraw/Drawing%202023-03-03%2017.25.53.excalidraw.md';

var s = "hahahahaha" +
    "" +
    "" +
    "```json" +
    "   console.log()```Hello";

var code = s.match(/```json(.*)```/)[1]
console.log(code)
fetch(url)
    .then(res => {
        res.text().then(r => {
            var code = r.toString().match(/```json(.*)```/s)[1];
            var elements = JSON.parse(code).elements;
            console.log(elements)
        })
    })
    .then(out =>
        console.log('Checkout this JSON! ', out))
    .catch(err => { throw err });
