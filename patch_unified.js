const fs = require('fs');
let html = fs.readFileSync('public/scene-2.html', 'utf8');

// The unified-badge has too much padding causing it to overflow its container.
// Or the container needs flex-box layout.
html = html.replace(
    /<div id="unified-container".*?>/s,
    '<div id="unified-container" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0; z-index: 10; width: 600px; background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 24px; padding: 2.5rem; box-shadow: 0 20px 40px rgba(0,0,0,0.1); pointer-events: none; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; box-sizing: border-box;">'
);

fs.writeFileSync('public/scene-2.html', html);
