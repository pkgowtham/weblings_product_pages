import re

with open('public/scene-2.html', 'r') as f:
    content = f.read()

# Remove #master-blur-overlay HTML
content = re.sub(r'<div id="master-blur-overlay" style=".*?"></div>\n', '', content)

# Remove master-blur-overlay from GSAP timeline
content = re.sub(r'\s*\.\w+\(\s*\[?.*?master-blur-overlay.*?\]?,\s*\{.*?\}\s*(,\s*".*?")?\s*\)', '', content)

# Write back
with open('public/scene-2.html', 'w') as f:
    f.write(content)
