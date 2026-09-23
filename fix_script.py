with open('public/scene-2.html', 'r') as f:
    content = f.read()

# Fix the broken JS syntax from the previous regex replace
content = content.replace('.to(["#unified-badge", "#master-blur-overlay"], { autoAlpha: 0, scale: 0.8, duration: 0.5, ease: "power2.in" }, "inboxAliases+=5.5");', '')
content = content.replace('// Fade out Unified Badge and Blur;', '.to("#unified-badge", { autoAlpha: 0, scale: 0.8, duration: 0.5, ease: "power2.in" }, "inboxAliases+=5.5");')

content = content.replace('.to(["#edge-container", "#master-blur-overlay"], { autoAlpha: 0, scale: 0.8, duration: 0.5, ease: "power2.in" }, "edgeNet+=4.5");', '')
content = content.replace('// Fade out Edge and Blur;', '.to("#edge-container", { autoAlpha: 0, scale: 0.8, duration: 0.5, ease: "power2.in" }, "edgeNet+=4.5");')

content = content.replace('.to(["#search-bar", "#search-doc", "#virtual-cursor", "#master-blur-overlay"], {', '.to(["#search-bar", "#search-doc", "#virtual-cursor"], {')

with open('public/scene-2.html', 'w') as f:
    f.write(content)
