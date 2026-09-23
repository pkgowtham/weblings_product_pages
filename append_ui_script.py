with open('public/scene-2.html', 'r') as f:
    content = f.read()

deliverability_html = """
                <!-- Beat 6: Deliverability Guarantee -->
                <div id="deliverability-section" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0; transform: translateZ(100px); pointer-events: none;">
                    <div style="text-align: center; margin-bottom: 3rem;">
                        <div style="color: #10B981; font-weight: 700; font-size: 0.9rem; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1rem;">THE DELIVERABILITY GUARANTEE</div>
                        <h2 style="font-size: 3rem; font-weight: 800; color: #111827; margin: 0 0 1rem 0; line-height: 1.2;">Emails that actually reach the primary<br>inbox.</h2>
                        <p style="color: #6B7280; font-size: 1.2rem; max-width: 700px; margin: 0 auto; line-height: 1.6;">A single misconfigured MX record can send a $50,000 inbound lead straight to the spam folder.<br>We engineered out the risk.</p>
                    </div>

                    <div style="display: flex; gap: 2rem; max-width: 1200px; width: 100%; justify-content: center;">
                        <!-- Card 1 -->
                        <div class="deliver-card" style="background: white; border-radius: 16px; padding: 2.5rem; width: 32%; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #E5E7EB;">
                            <div style="width: 48px; height: 48px; border-radius: 12px; background: #eaf6ec; border: 1px solid #bce4c5; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#53b96a" stroke-width="2"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>
                            </div>
                            <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin: 0 0 1rem 0;">Automated DNS Protocols</h3>
                            <p style="color: #6B7280; font-size: 0.95rem; line-height: 1.6; margin: 0;">Stop fighting with cryptic TXT records. When you link a domain, we automatically configure strict SPF, DKIM, and DMARC policies. Your domain reputation stays pristine, and Google/Microsoft instantly trust your outbound traffic.</p>
                        </div>

                        <!-- Card 2 -->
                        <div class="deliver-card" style="background: white; border-radius: 16px; padding: 2.5rem; width: 32%; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #0072C4;">
                            <div style="width: 48px; height: 48px; border-radius: 12px; background: #e6f2ff; border: 1px solid #b0d6ff; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0072C4" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                            </div>
                            <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin: 0 0 1rem 0;">Edge Spam Defense</h3>
                            <p style="color: #6B7280; font-size: 0.95rem; line-height: 1.6; margin: 0;">Malicious payloads and phishing attempts are caught and dropped at the global edge network before they ever touch our servers or your employees' inboxes. Pure, clean traffic only.</p>
                        </div>

                        <!-- Card 3 -->
                        <div class="deliver-card" style="background: white; border-radius: 16px; padding: 2.5rem; width: 32%; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #E5E7EB;">
                            <div style="width: 48px; height: 48px; border-radius: 12px; background: #fcebec; border: 1px solid #f4c0c5; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e35d6a" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                            </div>
                            <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin: 0 0 1rem 0;">Zero-Downtime Migration</h3>
                            <p style="color: #6B7280; font-size: 0.95rem; line-height: 1.6; margin: 0;">Terrified of losing historical data? Our automated IMAP migration tool ports over years of emails, folders, and attachments from Google Workspace or Office 365 in the background, with absolutely zero downtime.</p>
                        </div>
                    </div>
                </div>
"""

# Insert deliverability_html before </div> <!-- End GSAP Overlays -->
parts = content.split('            </div>\n            \n        </div>\n        \n        <!-- Virtual Cursor -->')
if len(parts) == 2:
    new_content = parts[0] + deliverability_html + '            </div>\n            \n        </div>\n        \n        <!-- Virtual Cursor -->' + parts[1]

    # Also add the animation to Beat 6
    anim_parts = new_content.split('              // Camera pushes in deeply\n              .to("#world-stage", {\n                  scale: 1.15, duration: 2.5, ease: "power2.inOut"\n              }, "finale+=0.5")')

    if len(anim_parts) == 2:
        beat6_anim = """              // Camera pushes in deeply
              .to("#world-stage", {
                  scale: 1.15, duration: 2.5, ease: "power2.inOut"
              }, "finale+=0.5")

              // Fade in Deliverability Section
              .to("#deliverability-section", {
                  opacity: 1, duration: 1.5, ease: "power2.out"
              }, "finale+=1.0")

              // Staggered pop-in for the cards
              .from(".deliver-card", {
                  y: 50, opacity: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.5)"
              }, "finale+=1.5")"""

        final_content = anim_parts[0] + beat6_anim + anim_parts[1]

        with open('public/scene-2.html', 'w') as f:
            f.write(final_content)
            print("Successfully updated scene-2.html")
    else:
        print("Failed to find animation insertion point.")
else:
    print("Failed to find HTML insertion point.")
