for (const p of document.querySelectorAll("p")) {
    if (p.textContent.search(/!\[\[(.+)excalidraw(.+)\]\]/) !== -1) {
        console.log(p.textContent)
        var excalidrawFileWithFormat = p.textContent.match(/!\[\[(.+)\]\]/)[1]
        var excalidrawFileName = excalidrawFileWithFormat.toString().split('|')[0]
        var excalidrawFileNameMD = `${excalidrawFileName.trimEnd().trimStart()}.md`;

        let url = `https://raw.githubusercontent.com/0xzphil/blog/main/academy/Excalidraw/${excalidrawFileNameMD}`;
        fetch(url)
            .then(res => {
                res.text().then(r => {
                    var code = r.toString().match(/```json(.*)```/s)[1];
                    var elements = JSON.parse(code).elements;
                    console.log(elements)


                    const App = () => {
                        var options =  {
                            initialData: {
                                elements
                            }
                        };



                        return React.createElement(
                            React.Fragment,
                            null,
                            React.createElement(
                                "div",
                                {
                                    style: { height: "500px" },
                                },
                                React.createElement(ExcalidrawLib.Excalidraw, options),
                            ),
                        );
                    };

                    const excalidrawWrapper = document.getElementById("app");
                    const root = ReactDOM.createRoot(excalidrawWrapper);
                    root.render(React.createElement(App));

                })
            })
            .then(out =>
                console.log('Checkout this JSON! ', out))
            .catch(err => { throw err });
    }
}
