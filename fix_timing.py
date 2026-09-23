with open('public/scene-2.html', 'r') as f:
    content = f.read()

# Make the animation longer so we can see the end
content = content.replace('await page.waitForTimeout(30000); // 30 seconds', 'await page.waitForTimeout(35000); // 35 seconds')

with open('screenshot_test.js', 'w') as f:
    f.write(content)
