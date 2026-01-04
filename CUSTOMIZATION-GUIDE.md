# 🎨 QUICK CUSTOMIZATION GUIDE

## ⚡ 5-Minute Setup

### Step 1: Add Your Photos (2 minutes)
1. Replace `assets/her-photo.jpg` with her photo
2. Add 3+ photos to `assets/gallery/` folder
3. Name them: photo1.jpg, photo2.jpg, etc.

### Step 2: Set Your Special Date (30 seconds)
Open `script.js` and change line 11:
```javascript
countdownDate: new Date(2026, 5, 14).getTime()
```
Change to your date: `new Date(YEAR, MONTH-1, DAY)`
Example for Feb 14, 2026: `new Date(2026, 1, 14)`

### Step 3: Personalize Names (1 minute)
Search and replace "Sujoy" with your name in:
- `index.html` (footer, signatures)
- `script.js` (love letters, console message)

### Step 4: Open and View! (30 seconds)
Double-click `index.html` to open in your browser!

---

## 🎯 Essential Customizations

### Update Timeline Dates
In `index.html`, find the timeline section and update:
- First Meeting date and story
- First Chat date and story
- First Date date and story
- First "I Love You" date and story

### Customize Love Letters
In `script.js`, edit the `loveLetters` object (lines 19-106):
- Letter 1: "To My Forever"
- Letter 2: "When You Miss Me"
- Letter 3: "Why I Choose You"
- Letter 4: "Our Future Together"

Write from your heart! These are the most emotional parts.

### Add Your Songs
In `index.html`, find the songs section and:
1. Get Spotify embed code:
   - Open song in Spotify
   - Click "..." → Share → Embed track
   - Copy the iframe code
2. Replace the placeholder with your iframe

Example:
```html
<div class="song-embed">
    <iframe src="https://open.spotify.com/embed/track/YOUR_TRACK_ID" 
            width="100%" height="80" frameborder="0"></iframe>
</div>
```

### Update "Why I Love You" Reasons
In `index.html`, find the reasons-grid section and edit:
- Your Smile
- Your Heart
- Your Laugh
- My Safe Place
- Your Strength
- Everything

Make them personal and specific to her!

---

## 🎨 Advanced Customizations

### Change Colors
In `styles.css`, lines 8-14, update:
```css
--primary-pink: #ff6b9d;    /* Main color */
--deep-red: #c9184a;        /* Accent */
--soft-cream: #fff0f3;      /* Background */
--gold: #ffd700;            /* Highlights */
```

### Add More Gallery Photos
1. Add photos to `assets/gallery/`
2. In `index.html`, add more gallery items:
```html
<div class="gallery-item" data-category="smiles">
    <img src="assets/gallery/photo4.jpg" alt="Description">
    <div class="gallery-overlay">
        <i class="fas fa-heart"></i>
        <p class="gallery-caption">Your caption here</p>
    </div>
</div>
```

Categories: `smiles`, `adventures`, `silly`

### Add Background Music
1. Get your romantic song as MP3
2. Save as `assets/music.mp3`
3. Music will play when user clicks the music button

### Update Future Dreams
In `index.html`, find the dreams-grid section and customize:
- Building our dream home
- Traveling the world
- Growing old together
- Creating memories

---

## 🚀 Deployment (Make it Live!)

### Easiest: Netlify (5 minutes)
1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag your entire `love-website` folder
4. Get instant URL: `yoursite.netlify.app`
5. Share with her! 💖

### Custom Domain (Optional)
1. Buy domain: `ourstory.love` or `forher.love`
2. Connect to Netlify
3. Professional touch!

---

## 💡 Pro Tips

### Before Showing Her:
✅ Test all links and buttons
✅ Check photos load correctly
✅ Read through all text for typos
✅ Test on mobile (she might view on phone!)
✅ Have tissues ready (she will cry!)

### Make it Special:
💖 Set up a romantic moment
💖 Play soft music in background
💖 Be there to see her reaction
💖 Hug her when she cries happy tears

### Privacy:
🔒 Use a unique URL
🔒 Don't share publicly
🔒 Consider password protection for extra privacy

---

## 🎁 Bonus Ideas

### Add Video Message
Record yourself reading one of the letters:
```html
<video controls style="width: 100%; border-radius: 20px;">
    <source src="assets/video-message.mp4" type="video/mp4">
</video>
```

### Add More Letters
Copy the letter structure in `script.js` and add letter 5, 6, etc.

### Create Anniversary Edition
Update it every year with new photos and memories!

---

## ❤️ Remember

The most important thing isn't perfect code or design.
It's the LOVE and THOUGHT you put into it.

Every word you write, every photo you choose, every detail you customize - 
it all shows her how much she means to you.

Take your time. Make it personal. Make it from your heart.

She's going to love it. ❤️

---

**Questions? Check README.md for detailed help!**
