const DOC_VERSION = '0.0.1';
for (const [index, p] of document.querySelectorAll("p").entries()) {
    if (p.textContent.search(/!\[\[(.+)excalidraw(.+)\]\]/) !== -1) {
        const excalidrawFileWithFormat = p.textContent.match(/!\[\[(.+)\]\]/)[1]
        const excalidrawFileName = excalidrawFileWithFormat.toString().split('|')[0]
        const excalidrawFileNameMD = `${excalidrawFileName.trimEnd().trimStart()}.md`;

        var newExcalidrawBlock = document.createElement("div");
        newExcalidrawBlock.setAttribute("id", `excalidraw-${index}`);
        newExcalidrawBlock.innerHTML = "";
        p.parentNode.replaceChild(newExcalidrawBlock, p);

        let url = `https://cdn.jsdelivr.net/gh/wisphill/yuu_academy@${DOC_VERSION}/Excalidraw/${excalidrawFileNameMD}`;
        fetch(url)
            .then(res => {
                res.text().then(r => {
                    var code = r.toString().match(/```json(.*)```/s)[1];
                    var elements = JSON.parse(code).elements;
                    console.log(elements)

                    const App = () => {
                        const [excalidrawAPI, setExcalidrawAPI] = React.useState(null);
                        React.useEffect(() => {
                            if (!excalidrawAPI) {
                                return;
                            }
                    
                            const elm = excalidrawAPI.getSceneElements();
                            if (elm.length > 0) {
                                // Perform the scrollToContent operation
                                excalidrawAPI.scrollToContent(elm, {
                                    fitToContent: true,
                                    animate: false, // Disable animation to make it instant
                                });
                    
                                // Simulate a delay to ensure rendering and scrolling are complete
                                // You can adjust the timeout duration if needed
                                setTimeout(() => {
                                    setIsReady(true); // Set ready to true after scrolling is done
                                }, 100); // Small delay to ensure the canvas has settled
                            }
                        }, [excalidrawAPI]);

                        var options =  {
                            initialData: {
                                elements,
                                appState: {
                                    viewModeEnabled: true,
                                    viewBackgroundColor: "#FAF8F6FF"
                                },
                            },
                            excalidrawAPI: (api)=> setExcalidrawAPI(api)
                        };

                        return React.createElement(
                            React.Fragment,
                            null,
                            React.createElement(
                                "div",
                                {
                                    style: { height: "500px" },
                                    onWheelCapture: (e) => {
                                        // Stop Excalidraw from hijacking scroll
                                        e.stopPropagation();
                                    }
                                },
                                React.createElement(ExcalidrawLib.Excalidraw, options),
                            ),
                        );
                    };

                    const excalidrawWrapper = document.getElementById(`excalidraw-${index}`);
                    const root = ReactDOM.createRoot(excalidrawWrapper);
                    root.render(React.createElement(App));
                })
            })
            .then(out =>
                console.log('Checkout this JSON! ', out))
            .catch(err => { throw err });

    }
}
