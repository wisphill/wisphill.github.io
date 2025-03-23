const DOC_VERSION = '0.0.1';
for (const [index, p] of document.querySelectorAll("p").entries()) {
    if (p.textContent.search(/!\[\[(.+)excalidraw(.+)\]\]/) !== -1) {
        const excalidrawFileWithFormat = p.textContent.match(/!\[\[(.+)\]\]/)[1];
        const excalidrawFileName = excalidrawFileWithFormat.toString().split('|')[0];
        const excalidrawFileNameMD = `${excalidrawFileName.trimEnd().trimStart()}.md`;

        var newExcalidrawBlock = document.createElement("div");
        newExcalidrawBlock.setAttribute("id", `excalidraw-${index}`);
        newExcalidrawBlock.setAttribute("class", "excalidraw-canvas-wrapper"); // Set class here
        newExcalidrawBlock.innerHTML = "";
        p.parentNode.replaceChild(newExcalidrawBlock, p);

        let url = `https://cdn.jsdelivr.net/gh/wisphill/yuu_academy@${DOC_VERSION}/Excalidraw/${excalidrawFileNameMD}`;
        fetch(url)
            .then(res => {
                res.text().then(r => {
                    var code = r.toString().match(/```json(.*)```/s)[1];
                    var elements = JSON.parse(code).elements;
                    console.log("Parsed elements:", elements);

                    const App = () => {
                        const [excalidrawAPI, setExcalidrawAPI] = React.useState(null);
                        const [isReady, setIsReady] = React.useState(false);

                        React.useEffect(() => {
                            console.log("useEffect triggered, excalidrawAPI:", excalidrawAPI);
                            if (!excalidrawAPI) {
                                return;
                            }

                            const elm = excalidrawAPI.getSceneElements();
                            console.log("Scene elements:", elm);

                            if (elm.length > 0) {
                                console.log("Calling scrollToContent...");
                                excalidrawAPI.scrollToContent(elm, {
                                    fitToContent: true,
                                    animate: false,
                                });

                                // Simulate a delay to ensure rendering and scrolling are complete
                                setTimeout(() => {
                                    console.log("Setting isReady to true after delay");
                                    setIsReady(true);
                                }, 200); // Increased delay to 200ms for safety
                            } else {
                                // Fallback: If no elements, still set isReady to true to avoid infinite loading
                                console.warn("No scene elements found, setting isReady to true as fallback");
                                setIsReady(true);
                            }
                        }, [excalidrawAPI]);

                        // Fallback: If excalidrawAPI isn't set within a certain time, show the diagram anyway
                        React.useEffect(() => {
                            const fallbackTimer = setTimeout(() => {
                                if (!isReady) {
                                    console.warn("Fallback: excalidrawAPI not set in time, forcing isReady to true");
                                    setIsReady(true);
                                }
                            }, 3000); // 3-second fallback

                            return () => clearTimeout(fallbackTimer); // Cleanup on unmount
                        }, [isReady]);

                        var options = {
                            initialData: {
                                elements,
                                appState: {
                                    viewModeEnabled: true,
                                    viewBackgroundColor: "#FAF8F6FF",
                                },
                            },
                            excalidrawAPI: (api) => {
                                console.log("Setting excalidrawAPI");
                                setExcalidrawAPI(api);
                            },
                        };

                        return React.createElement(
                            React.Fragment,
                            null,
                            React.createElement(
                                "div",
                                {
                                    style: { height: "500px" },
                                    onWheelCapture: (e) => {
                                        e.stopPropagation();
                                    },
                                },
                                !isReady &&
                                    React.createElement(
                                        "div",
                                        {
                                            style: {
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                height: "100%",
                                            },
                                        },
                                        "Loading diagram..."
                                    ),
                                isReady &&
                                    React.createElement(ExcalidrawLib.Excalidraw, options)
                            )
                        );
                    };

                    const excalidrawWrapper = document.getElementById(`excalidraw-${index}`);
                    const root = ReactDOM.createRoot(excalidrawWrapper);
                    root.render(React.createElement(App));
                });
            })
            .then(out => console.log('Fetch completed:', out))
            .catch(err => {
                console.error('Fetch error:', err);
                throw err;
            });
    }
}

// hacked theme
const paragraphs = document.querySelectorAll('.hacked-paragraph');
paragraphs.forEach(paragraph => {
  paragraph.setAttribute('data-text', paragraph.textContent);
});
