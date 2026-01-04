# 💖 Our Love Story - Romantic Website

A beautiful, premium romantic website created with love to express infinite devotion and celebrate our journey together.

## 🌹 Features

### ✨ Complete Sections
1. **Landing Page** - Stunning hero section with romantic quote and floating hearts
2. **About Her** - Polaroid-style photo with reasons why you love her
3. **Our Love Story** - Interactive timeline of your journey together
4. **Memory Gallery** - Beautiful photo gallery with categories and lightbox
5. **Love Letters** - Emotional letters that open with envelope animation
6. **Our Songs** - Playlist of songs that remind you of each other
7. **Countdown Timer** - Count down to your special day with confetti celebration
8. **Forever Promise** - Your commitment and future dreams together

### 🎨 Premium Design
- Romantic color palette (blush pink, deep red, soft cream, gold)
- Smooth animations and micro-interactions
- Glassmorphism effects
- Floating hearts animation
- Responsive design (mobile, tablet, desktop)
- Dark romantic theme sections

### 🎵 Interactive Features
- Background music control
- Smooth scroll navigation
- Gallery filtering and lightbox
- Love letter modals with handwritten style
- Countdown timer with celebration
- Secret easter egg (click the heart logo 5 times!)
- Mobile-friendly hamburger menu

## 📁 Project Structure

```
love-website/
├── index.html          # Main HTML file
├── styles.css          # Premium CSS styling
├── script.js           # Interactive JavaScript
├── README.md           # This file
└── assets/
    ├── her-photo.jpg   # Her main photo (for polaroid card)
    ├── music.mp3       # Background music (optional)
    └── gallery/
        ├── photo1.jpg  # Gallery photos
        ├── photo2.jpg
        └── photo3.jpg
```

## 🚀 Setup Instructions

### 1. Add Your Photos
- Replace `assets/her-photo.jpg` with her beautiful photo
- Add your couple photos to `assets/gallery/` folder
- Name them: photo1.jpg, photo2.jpg, photo3.jpg, etc.

### 2. Add Background Music (Optional)
- Add your romantic song as `assets/music.mp3`
- Or remove the audio element from HTML if you don't want music

### 3. Customize Content

#### Update Countdown Date
In `script.js`, line 11:
```javascript
countdownDate: new Date(2026, 5, 14).getTime(), // Change to your date (YYYY, MM-1, DD)
```

#### Customize Love Letters
In `script.js`, edit the `loveLetters` object (lines 19-106) with your own heartfelt messages.

#### Update Timeline Events
In `index.html`, edit the timeline section with your actual dates and stories.

#### Personalize Reasons
In `index.html`, edit the "Why I Love You" cards with your own reasons.

#### Add Your Songs
In `index.html`, replace the song embed placeholders with actual Spotify/YouTube embeds:
```html
<iframe src="YOUR_SPOTIFY_EMBED_LINK" width="100%" height="80" frameborder="0"></iframe>
```

### 4. Update Gallery Categories
In `index.html`, add `data-category` to each gallery item:
- `data-category="smiles"` - For happy moments
- `data-category="adventures"` - For travel/adventure photos
- `data-category="silly"` - For funny moments

### 5. Personalize Names
- Replace "Sujoy" with your name throughout the files
- Update the signature in love letters
- Customize the footer

## 🎨 Color Customization

Want different colors? Update CSS variables in `styles.css` (lines 8-14):

```css
:root {
    --primary-pink: #ff6b9d;      /* Main pink color */
    --deep-red: #c9184a;          /* Accent red */
    --soft-cream: #fff0f3;        /* Background */
    --gold: #ffd700;              /* Gold accents */
    /* ... more colors */
}
```

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Get instant HTTPS URL
4. Optional: Add custom domain

### Option 2: Vercel
1. Create account at [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

### Option 3: GitHub Pages
1. Create GitHub repository
2. Upload all files
3. Enable GitHub Pages in settings
4. Access at `username.github.io/repo-name`

### Option 4: Local Viewing
Simply open `index.html` in your browser!

## 💡 Tips for Maximum Impact

### 1. Photo Quality
- Use high-resolution photos (at least 1920x1080)
- Choose photos with good lighting
- Mix candid and posed shots
- Include variety (close-ups, full shots, activities)

### 2. Personal Touch
- Write letters from your heart
- Include inside jokes in captions
- Add specific dates and memories
- Use her favorite songs

### 3. Surprise Reveal
- Don't tell her beforehand
- Set up a romantic moment to show her
- Have tissues ready (she might cry!)
- Be there to see her reaction

### 4. Privacy
- Use password protection if needed
- Share private URL only with her
- Consider using a custom domain for extra romance

## 🎁 Bonus Ideas

### Add More Features:
1. **Video Messages** - Record yourself reading the letters
2. **Voice Notes** - Add audio messages throughout
3. **Interactive Map** - Show places you've been together
4. **Shared Bucket List** - Future adventures to plan
5. **Daily Love Notes** - Random message generator
6. **Photo Upload** - Let her add photos too
7. **Guestbook** - For anniversary messages

### Special Occasions:
- Update for birthdays
- Add proposal section (if planning!)
- Anniversary editions
- Valentine's Day special

## 🔧 Troubleshooting

### Music Won't Play
- Browsers block autoplay - user must interact first
- Check file path is correct
- Ensure music.mp3 is in assets folder

### Photos Not Showing
- Check file paths match exactly
- Ensure photos are in correct folders
- Use .jpg, .jpeg, or .png formats

### Mobile Menu Not Working
- Clear browser cache
- Check JavaScript is enabled
- Try different browser

### Countdown Not Working
- Verify date format in script.js
- Check browser console for errors
- Ensure date is in the future

## 📱 Browser Compatibility

Tested and working on:
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 💖 Final Notes

This website is more than just code - it's a digital love letter, a testament to your feelings, and a gift that will be cherished forever.

Take your time customizing it. Pour your heart into the words. Choose photos that tell your story. Make it uniquely yours.

When she sees this, she'll know just how much she means to you. ❤️

---

**Made with ❤️ by Sujoy**

*"Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day."*

---

## 📞 Need Help?

If you need assistance customizing or have questions:
- Check the code comments for guidance
- Each section is clearly labeled
- JavaScript functions are well-documented

Remember: The most important part isn't perfect code - it's the love behind it. ❤️

## 🎉 Enjoy!

Now go make her smile, cry happy tears, and fall in love with you all over again! 💕
