with open('public/scene-2.html', 'r') as f:
    content = f.read()

# Make sure it uses a more appropriate scaling since the camera is pushed in deeply
content = content.replace('transform: translateZ(100px)', 'transform: translateZ(50px) scale(0.65)')

with open('public/scene-2.html', 'w') as f:
    f.write(content)
