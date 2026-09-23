with open('public/scene-2.html', 'r') as f:
    content = f.read()

# Make sure scene-2.html is valid html and js syntax is completely correct
# Looks good, but we should make sure the UI is nicely formatted
content = content.replace('.to("#edge-container", { autoAlpha: 0, scale: 0.8, duration: 0.5, ease: "power2.in" }, "edgeNet+=4.5");', '.to("#edge-container", { autoAlpha: 0, scale: 0.8, duration: 0.5, ease: "power2.in" }, "edgeNet+=4.5")')
content = content.replace('.to("#unified-badge", { autoAlpha: 0, scale: 0.8, duration: 0.5, ease: "power2.in" }, "inboxAliases+=5.5");', '.to("#unified-badge", { autoAlpha: 0, scale: 0.8, duration: 0.5, ease: "power2.in" }, "inboxAliases+=5.5")')

# I also noticed we need to remove the blur fading from Beat 1 and 4 in the javascript where there's trailing comments
# they actually don't have semi colons right now so they are chaining correctly except the semi colons I just removed.

with open('public/scene-2.html', 'w') as f:
    f.write(content)
