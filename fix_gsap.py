with open('public/scene-2.html', 'r') as f:
    content = f.read()

# Update Beat 1 GSAP
content = content.replace('.set("#unified-badge", { display: "block" }, "inboxAliases+=4.2")', '.set("#unified-container", { display: "block" }, "inboxAliases+=4.2")')
content = content.replace('.to("#unified-badge", {', '.to("#unified-container", {')
content = content.replace('.to("#unified-badge", { autoAlpha: 0, scale: 0.8, duration: 0.5, ease: "power2.in" }, "inboxAliases+=5.5")', '.to("#unified-container", { autoAlpha: 0, scale: 0.8, duration: 0.5, ease: "power2.in" }, "inboxAliases+=5.5")')

# Update Beat 5 GSAP
content = content.replace('.to("#search-bar", {\n                  opacity: 1, scale: 1, duration: 1.0, ease: "back.out(1.5)"\n              }, "semanticSearch+=1.5")', '.to("#search-container", {\n                  opacity: 1, scale: 1, duration: 1.0, ease: "back.out(1.5)"\n              }, "semanticSearch+=1.5")')
# The doc snaps out inside the container now, so we need to animate its y position slightly differently
content = content.replace('.to("#search-doc", {\n                  opacity: 1, y: 0, scale: 1.1, z: 200, duration: 1.0, ease: "elastic.out(1, 0.6)"\n              }, "semanticSearch+=4.8")', '.to("#search-doc", {\n                  opacity: 1, y: 50, scale: 1.0, z: 200, duration: 1.0, ease: "elastic.out(1, 0.6)"\n              }, "semanticSearch+=4.8")')

content = content.replace('.to(["#search-bar", "#search-doc", "#virtual-cursor"], {\n                  autoAlpha: 0, scale: 0.8, duration: 0.5, ease: "power2.in"\n              }, "semanticSearch+=5.5")', '.to(["#search-container", "#virtual-cursor"], {\n                  autoAlpha: 0, scale: 0.8, duration: 0.5, ease: "power2.in"\n              }, "semanticSearch+=5.5")')


with open('public/scene-2.html', 'w') as f:
    f.write(content)
