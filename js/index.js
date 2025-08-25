const DOC_VERSION = '0.0.1';

document.querySelectorAll('.excalidraw-canvas-wrapper').forEach((div, index) => {
    const excalidrawFileName = div.getAttribute('data-excalidraw');
    if (!excalidrawFileName) return;
    const excalidrawFileNameMD = `${excalidrawFileName.trim()}.md`;

    let url = `https://cdn.jsdelivr.net/gh/wisphill/yuu_academy@${DOC_VERSION}/Excalidraw/${excalidrawFileNameMD}`;
    fetch(url)
        .then(res => res.text())
        .then(r => {
            var code = r.toString().match(/```json(.*)```/s)[1];
            var elements = JSON.parse(code).elements;

            const App = () => {
                const [excalidrawAPI, setExcalidrawAPI] = React.useState(null);
                const [isReady, setIsReady] = React.useState(false);

                React.useEffect(() => {
                    if (!excalidrawAPI) return;
                    const elm = excalidrawAPI.getSceneElements();
                    if (elm.length > 0) {
                        excalidrawAPI.scrollToContent(elm, {
                            fitToContent: true,
                            animate: false,
                        });
                        setTimeout(() => setIsReady(true), 200);
                    } else {
                        setIsReady(true);
                    }
                }, [excalidrawAPI]);

                React.useEffect(() => {
                    const fallbackTimer = setTimeout(() => {
                        if (!isReady) setIsReady(true);
                    }, 3000);
                    return () => clearTimeout(fallbackTimer);
                }, [isReady]);

                var options = {
                    initialData: {
                        elements,
                        appState: {
                            viewModeEnabled: true,
                            viewBackgroundColor: "#FAF8F6FF",
                        },
                    },
                    excalidrawAPI: (api) => setExcalidrawAPI(api),
                };

                return React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(
                        "div",
                        {
                            style: { height: "500px" },
                            onWheelCapture: (e) => e.stopPropagation(),
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

            const root = ReactDOM.createRoot(div);
            root.render(React.createElement(App));
        })
        .catch(err => {
            console.error('Fetch error:', err);
        });
});


// hacked theme
const paragraphs = document.querySelectorAll('.hacked-paragraph');
paragraphs.forEach(paragraph => {
    paragraph.setAttribute('data-text', paragraph.textContent);
});

const texts = document.querySelectorAll('.hero');
texts.forEach(text => {
    text.setAttribute('data-text', text.textContent);
});

// loading animation
function updateAnimation() {
    const h1 = document.querySelector('.hack h1');
    const textLength = h1.textContent.length;
    const animationDuration = textLength / 2;

    // Generate keyframes
    let keyframes = '@keyframes processing {\n';
    for (let i = 0; i <= textLength; i++) {
        const percentage = i === 0 ? 0 : (i / textLength) * 100;
        const equalSigns = '='.repeat(i);
        keyframes += `    ${percentage}% { content: "${equalSigns}"; }\n`;
    }
    keyframes += '}';

    // Add animation rule
    const animationRule = `.hack h1:after { animation: processing ${animationDuration}s infinite steps(${textLength}); }`;

    // Update or create stylesheet
    let styleSheet = document.getElementById('dynamic-styles');
    if (!styleSheet) {
        styleSheet = document.createElement('style');
        styleSheet.id = 'dynamic-styles';
        document.head.appendChild(styleSheet);
    }
    styleSheet.textContent = keyframes + '\n' + animationRule;
}

// Run on page load
window.onload = updateAnimation;


////////////////////////////
/// Search functionality ///
////////////////////////////
// Helper to get query parameter by name
function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search.replace('&', '?'));
    return params.get(name) || '';
}

let tagMapData = {};
const searchInput = document.getElementById('search');
// Set input value from URL if present
const urlQuery = getQueryParam('query');
if (urlQuery) {
    searchInput.value = urlQuery;
}

const baseUrl = window.location.origin;

function renderResults(query, items) {
    const mainBlock = document.getElementById('search-results');
    if (query === '' || query === null) {
        mainBlock.innerHTML = '';
        return;
    }

    mainBlock.innerHTML = '';
    items.forEach(item => {
        console.log(item)
        const div = document.createElement('div');
        div.className = 'media t-hackcss-media';
        div.innerHTML = `
                    <div class="media-body">
                        <div class="media-heading">
                            <span>▢
                                <a href="${baseUrl}/${item}">
                                    ${item}
                                </a>
                            </span>
                        </div>
                        <div class="media-content">
                            ${item || ''}
                        </div>
                    </div>
                `;
        mainBlock.appendChild(div);
    });
}

searchInput.addEventListener('input', function () {
    const rawQuery = this.value.trim();
    // Update the URL with the current query value
    const params = new URLSearchParams(window.location.search.replace('&', '?'));
    if (rawQuery) {
        params.set('query', rawQuery);
    } else {
        params.delete('query');
    }
    const newUrl = `${baseUrl}/search?${params.toString()}`;
    if (!window.location.pathname.includes('/search')) {
        window.location.href = newUrl;
        return
    } else {
        window.history.replaceState({}, '', newUrl);
    }

    let results = [];
    if (rawQuery.startsWith('#')) {
        const tag = rawQuery.slice(1).toLowerCase();
        if (tagMapData.hasOwnProperty(tag)) {
            results = tagMapData[tag];
        }
    } else {
        const query = rawQuery.toLowerCase();
        if (tagMapData.hasOwnProperty(query)) {
            results = tagMapData[query];
        } else {
            results = Object.entries(tagMapData)
                .filter(([tag]) => tag.toLowerCase().includes(query))
                .flatMap(([_, files]) => files);
        }
    }
    renderResults(rawQuery, results);
});

fetch('/assets/tag_map.json')
    .then(res => res.json())
    .then(data => {
        tagMapData = data;
        // Trigger search if value was set from URL
        if (urlQuery) {
            searchInput.dispatchEvent(new Event('input'));
        }
    })
    .catch(err => {
        console.error('Failed to load tag_map.json:', err);
    });

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes('/search')) {
        const searchInput = document.getElementById('search');
        if (searchInput) {
            searchInput.focus();
        }
    }
});
