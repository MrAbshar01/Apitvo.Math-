# Aptivo — Math Adventure: Money Matters

<<<<<<< HEAD
=======
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Year 3 Curriculum](https://img.shields.io/badge/Curriculum-Year%203%20Mathematics-orange.svg)]()
[![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS-brightgreen.svg)]()

>>>>>>> 6318466a2ab70ea43f95f37598b366e6f7c8bd4a
**Aptivo: Money Matters** is an interactive, web-based educational platform designed to help Year 3 elementary students master money addition, place-value alignment, regrouping, and real-world currency calculations (RM / Ringgit Malaysia). 

The platform combines dynamic hands-on tools with embedded interactive educational modules (Google Slides, Genially detective games, Canva interactive missions, and Wayground assessment quizzes).

---

<<<<<<< HEAD
## <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sparkles.svg" width="20" height="20" alt="Sparkles" /> Key Features
=======
## 🌟 Key Features
>>>>>>> 6318466a2ab70ea43f95f37598b366e6f7c8bd4a

* **Adaptive Shell & Responsive Layout:**
  * **Mobile:** Bottom navigation tab bar with smooth drawer transitions.
  * **Tablet:** Collapsible navigation rail.
  * **Desktop:** Expandable sidebar navigation with persistent state (`localStorage`).
<<<<<<< HEAD
* **Personalized Student Profile & Experience:** Dedicated Profile page (`#profile`) and live bidirectional student name synchronization across the topbar greeting, sidebar badge, and profile editor with local persistence (`localStorage`).
* **4 Core Learning Stations & Profile:**
  1. <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/book-open.svg" width="16" height="16" alt="Book" /> **Learn It (Understand):** Step-by-step place-value addition guides, column alignment techniques, expandable answer drawers, and embedded interactive Google Slides presentation.
  2. <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/compass.svg" width="16" height="16" alt="Compass" /> **Money Lab (Explore):** Dual interactive range sliders (`RM0` to `RM5,000`) providing real-time calculation feedback, equation formatting, limit notifications ($\le\text{RM}10,000$), and a 3-part interactive *Treasure Hunt* mission.
  3. <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/shopping-bag.svg" width="16" height="16" alt="Shopping Bag" /> **Shop & Solve (Apply):** Everyday commerce scenarios focusing on multi-item totals and change calculation, integrated with Canva learning materials.
  4. <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/trophy.svg" width="16" height="16" alt="Trophy" /> **Quiz Quest (Check):** Knowledge evaluation station linking directly to the official Wayground Challenge quiz to earn the *Money Master* certificate.
=======
* **Personalized Student Experience:** Live student name synchronization (`userNameInput`) across all header elements with local persistence.
* **4 Core Learning Stations:**
  1. 📖 **Learn It (Understand):** Step-by-step place-value addition guides, column alignment techniques, expandable answer drawers, and embedded interactive Google Slides presentation.
  2. 🧪 **Money Lab (Explore):** Dual interactive range sliders (`RM0` to `RM5,000`) providing real-time calculation feedback, equation formatting, limit notifications ($\le\text{RM}10,000$), and a 3-part interactive *Treasure Hunt* mission.
  3. 🛒 **Shop & Solve (Apply):** Everyday commerce scenarios focusing on multi-item totals and change calculation, integrated with Canva learning materials.
  4. 🏆 **Quiz Quest (Check):** Knowledge evaluation station linking directly to the official Wayground Challenge quiz to earn the *Money Master* certificate.
>>>>>>> 6318466a2ab70ea43f95f37598b366e6f7c8bd4a
* **Pure SVG & Design System:** Custom-built 2px vector icon sprite system and Petal mascot components (`#petal-mascot` and `#petal-eyes`) with zero external image dependencies.
* **Accessibility First:** Optimized touch target sizes ($\ge 48\text{px}$), screen-reader friendly attributes, clear semantic landmarks, and full `prefers-reduced-motion` support.

---

<<<<<<< HEAD
## <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/folder-tree.svg" width="20" height="20" alt="Folder" /> Project Structure
=======
## 📂 Project Structure
>>>>>>> 6318466a2ab70ea43f95f37598b366e6f7c8bd4a

```text
├── index.html       # Semantic HTML layout, page sections, SVG sprites, & embedded modules
├── style.css        # Aptivo Design Tokens, fluid typography clamp(), responsive grid, & animations
└── script.js        # Page routing, sidebar state persistence, interactive lab logic, & treasure hunt score tracker
```

---

<<<<<<< HEAD
## <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/play.svg" width="20" height="20" alt="Play" /> Quick Start
=======
## 🚀 Quick Start
>>>>>>> 6318466a2ab70ea43f95f37598b366e6f7c8bd4a

Since **Aptivo** is built using standard web technologies with zero external framework dependencies or build steps, running it locally is simple:

### Option 1: Direct File Access
1. Clone or download the repository:
   ```bash
   git clone https://github.com/your-username/aptivo-money-matters.git
   cd aptivo-money-matters
   ```
2. Double-click or open `index.html` in any web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local Web Server (Recommended)
Using Python or Node.js to serve the static files:

* **Python 3:**
  ```bash
  python -m http.server 8000
  ```
* **Node.js (`npx`):**
  ```bash
  npx serve .
  ```
Then visit `http://localhost:8000` in your browser.

---

<<<<<<< HEAD
## <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/globe.svg" width="20" height="20" alt="Globe" /> Deploying to GitHub Pages
=======
## 🌐 Deploying to GitHub Pages
>>>>>>> 6318466a2ab70ea43f95f37598b366e6f7c8bd4a

1. Push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Initial commit for Aptivo Money Matters"
   git push origin main
   ```
2. Navigate to your repository on GitHub.
3. Click **Settings** $\rightarrow$ **Pages** (under Code and automation).
4. Under **Build and deployment**, set the Source to **Deploy from a branch**.
5. Select `main` branch and `/ (root)` folder, then click **Save**.
6. Your app will be live at `https://<your-username>.github.io/<repository-name>/`.

---

<<<<<<< HEAD
## <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/layers.svg" width="20" height="20" alt="Layers" /> Built With
=======
## 🛠️ Built With
>>>>>>> 6318466a2ab70ea43f95f37598b366e6f7c8bd4a

* **HTML5** — Semantic page architecture, custom SVG symbols, accessible `aria-*` tags.
* **CSS3** — Custom CSS Variables (Design Tokens), Flexbox, CSS Grid, media queries, keyframe transitions.
* **JavaScript (ES6+)** — DOM manipulation, state persistence using `localStorage`, real-time numeric calculations.
* **Google Fonts** — Rubik font family.

---

<<<<<<< HEAD
## <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/file-text.svg" width="20" height="20" alt="Document" /> License
=======
## 📄 License
>>>>>>> 6318466a2ab70ea43f95f37598b366e6f7c8bd4a

This project is open-source and available under the [MIT License](LICENSE).
