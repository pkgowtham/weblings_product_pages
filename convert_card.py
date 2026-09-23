with open('public/scene-2.html', 'r') as f:
    content = f.read()

card_style = "background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 24px; padding: 2.5rem; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"

# Wrap Unified Badge
unified_html = f"""
            <div id="unified-container" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0; z-index: 10; width: 500px; {card_style} pointer-events: none; text-align: center; display: none;">
                <div style="font-size: 1.25rem; font-weight: 700; color: #111827; margin-bottom: 1rem;">Unified Inbox</div>
                <p style="color: #6B7280; font-size: 0.95rem; line-height: 1.5; margin-bottom: 2rem;">Manage all your domain aliases in one centralized location with seamless routing.</p>
                <div id="unified-badge-inner" class="glass unified-badge" style="position: relative; top: auto; left: auto; transform: none; display: inline-flex; margin: 0 auto; opacity: 1;">
                    All Aliases → Unified Inbox
                </div>
            </div>
"""

content = content.replace('<div id="unified-badge" class="glass unified-badge" style="display: none;">\n                All Aliases → Unified Inbox\n            </div>', unified_html)

# Wrap Edge Container (already a container, just needs styling)
content = content.replace('<div id="edge-container" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 800px; height: 500px; opacity: 0; pointer-events: none; z-index: 10;">',
                         f'<div id="edge-container" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 800px; height: 500px; opacity: 0; pointer-events: none; z-index: 10; {card_style}">')

# Wrap Search Container
search_html = f"""
            <div id="search-container" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0; z-index: 10; width: 600px; {card_style} pointer-events: none; text-align: left;">
                <div style="width: 48px; height: 48px; border-radius: 12px; background: #efe6fd; border: 1px solid #ceb0fa; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8133f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <h3 style="font-size: 1.5rem; font-weight: 700; color: #111827; margin: 0 0 1rem 0;">Semantic Vector Search</h3>
                <p style="color: #6B7280; font-size: 0.95rem; line-height: 1.6; margin: 0 0 2rem 0;">Stop guessing exact keywords. Our built-in AI uses vector embeddings to understand the meaning and context behind your search. Ask naturally and find the exact email immediately.</p>

                <div class="glass search-bar-s5" id="search-bar" style="position: relative; width: 100%; box-sizing: border-box; transform: none; top: auto; left: auto; opacity: 1;">
                    <span class="search-icon-s5">🔍</span>
                    <span id="search-text"></span>
                    <span class="sparkle-icon" id="sparkle" style="position: absolute; right: 20px;">✨</span>
                </div>

                <div class="glass search-doc" id="search-doc" style="position: absolute; top: 80%; left: 50%; transform: translateX(-50%) scale(0.8); width: 80%; opacity: 0; z-index: 20;">
                    <div style="font-size: 2rem; color: var(--red-badge); font-weight: bold;">PDF</div>
                    <div style="overflow: hidden;">
                        <span class="search-doc-text">Colleague_Attachment.pdf</span>
                        <div style="font-size: 0.85rem; color: var(--text-gray);">Found in 0.12s</div>
                    </div>
                </div>
            </div>
"""

# replace the old search HTML
old_search_html = """
                <!-- Beat 5: Semantic Vector Search -->
                <div class="glass search-bar-s5" id="search-bar">
                    <span class="search-icon-s5">🔍</span>
                    <span id="search-text"></span>
                    <span class="sparkle-icon" id="sparkle">✨</span>
                </div>

                <div class="glass search-doc" id="search-doc">
                    <div style="font-size: 2rem; color: var(--red-badge); font-weight: bold;">PDF</div>
                    <div style="overflow: hidden;">
                        <span class="search-doc-text">Colleague_Attachment.pdf</span>
                        <div style="font-size: 0.85rem; color: var(--text-gray);">Found in 0.12s</div>
                    </div>
                </div>
"""
content = content.replace(old_search_html, search_html)

with open('public/scene-2.html', 'w') as f:
    f.write(content)
