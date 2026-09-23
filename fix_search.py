with open('public/scene-2.html', 'r') as f:
    content = f.read()

# Fix search bar margin and size issue
old_search_css = """        /* Beat 5: Semantic Vector Search */
        .search-bar-s5 {
            position: absolute;
            top: 40%; left: 50%;
            margin-left: -400px;
            width: 800px; height: 70px;
            border-radius: 35px;
            display: flex; align-items: center; padding: 0 30px;
            font-size: 1.4rem; font-weight: 500; color: var(--text-dark);
            z-index: 40; opacity: 0; transform: scale(0.8) translateZ(100px);
        }"""
new_search_css = """        /* Beat 5: Semantic Vector Search */
        .search-bar-s5 {
            height: 70px;
            border-radius: 35px;
            display: flex; align-items: center; padding: 0 30px;
            font-size: 1.4rem; font-weight: 500; color: var(--text-dark);
            z-index: 40; opacity: 0; transform: scale(0.8) translateZ(100px);
            margin: 0;
            margin-left: 0;
            left: 0;
            top: 0;
        }"""
content = content.replace(old_search_css, new_search_css)

with open('public/scene-2.html', 'w') as f:
    f.write(content)
