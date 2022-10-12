var root = document.body
const html = htm.bind(m);

var count = 0 // added a variable

var Hello = {
    view: function() {
        return html`
            <main>
                <button onclick=${() => count++}>${count} clicks</button>
            </main>
        `
    }
}

m.mount(root, Hello)
