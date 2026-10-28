# AXIOMIQ Digital Innovations (PTY LTD)

A cinematic, premium, multi-page website built for AXIOMIQ — a digital product studio based in Botswana. Designed with a futuristic, deep-black aesthetic featuring electric blue and neon cyan highlights, glassmorphism, and smooth scroll animations.

## 📁 Project Structure

The project is built using standard HTML5, CSS3, and Vanilla JavaScript. There are no heavy frameworks (like React or Node.js) required, ensuring blazing-fast load times and easy deployment.

```text
axiomiq/
├── index.html          # Homepage (Hero, Stats, PulaTrack Teaser)
├── services.html       # 6 Core Services (Web, Systems, POS, Branding, etc.)
├── pulatrack.html      # Dedicated page for the flagship fintech product
├── team.html           # Founders & Leadership (CEO & CTO profiles)
├── contact.html        # Contact form and business details
├── style.css           # Global design system, animations, and responsiveness
├── script.js           # Loading screen, typing effect, scroll reveals, parallax
└── README.md           # This documentation file# Using Python (recommended)
python -m http.server 8000
# Open http://localhost:8000 in your browser

# OR using Node.js
npx serve .:root {
    --bg: #0A0A0F;       /* Deep Black Background */
    --blue: #00A8FF;     /* Electric Blue */
    --cyan: #00F5FF;     /* Neon Cyan (used for glow) */
    --white: #FFFFFF;
    --font-display: 'Space Grotesk', sans-serif;
    --font-body: 'Inter', sans-serif;
}
