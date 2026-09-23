with open('public/scene-2.html', 'r') as f:
    content = f.read()

# Make the cards look identical to the screenshot
content = content.replace('padding: 2.5rem; width: 32%', 'padding: 2.5rem; width: 32%; text-align: left;')
content = content.replace('justify-content: center; margin-bottom: 1.5rem;', 'justify-content: center; margin-bottom: 1.5rem; display: inline-flex;')

with open('public/scene-2.html', 'w') as f:
    f.write(content)
