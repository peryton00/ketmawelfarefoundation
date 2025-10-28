# Quick Start Guide - Ketma Welfare Foundation Website

## 🚀 Getting Started

### Option 1: Open Locally
1. Open `index.html` in any modern web browser
2. That's it! The website is fully functional

### Option 2: Deploy to Web
To make your website live and accessible online:
1. Go to the **Publish tab** in your project
2. Click the publish button
3. You'll receive a live URL to share

## 📱 Testing the Website

### Features to Test:

1. **Navigation**
   - Click on menu items to scroll to different sections
   - Test the mobile menu (resize browser window)
   - Scroll down to see the navbar background change

2. **Animations**
   - Watch the preloader heart animation (loads for 1.5 seconds)
   - Scroll down to see fade-in animations
   - Hover over cards to see effects

3. **Statistics Counter**
   - Scroll to the stats section
   - Watch numbers count up automatically

4. **Causes Section**
   - See progress bars animate
   - Hover over cause cards
   - Click "Donate Now" buttons

5. **Team Section**
   - Hover over team member photos
   - Watch social media icons appear

6. **Testimonials**
   - Auto-plays every 5 seconds
   - Click prev/next buttons to navigate manually

7. **Contact Form**
   - Fill out the form
   - Submit to see success message
   - Watch form reset after 3 seconds

8. **Donation Section**
   - Click preset amount buttons
   - Enter custom amount
   - Click "Donate Now" to see confirmation

9. **Scroll to Top**
   - Scroll down the page
   - See the button appear in bottom-right
   - Click to smoothly scroll to top

## 🎨 Customization

### Change Colors
Open `css/style.css` and modify the `:root` variables at the top:
```css
:root {
    --primary-color: #ff6b6b;    /* Change main color */
    --secondary-color: #4ecdc4;   /* Change secondary color */
    --accent-orange: #ffa62b;     /* Change accent color */
}
```

### Update Content
Open `data/content.json` and modify:
- **Causes**: Add/edit fundraising campaigns
- **Team**: Add/edit team members
- **Testimonials**: Add/edit client testimonials

### Change Contact Info
Open `index.html` and find the Contact Section:
- Update address, phone numbers, email
- Change social media links

### Modify Text
All main text is in `index.html`:
- Hero section titles
- About us content
- Impact section details
- Footer information

## 📋 Content Management

### Adding a New Cause
1. Open `data/content.json`
2. Add to the `causes` array:
```json
{
  "title": "Your New Cause",
  "description": "Description here",
  "image": "https://your-image-url.jpg",
  "category": "Category Name",
  "raised": 0,
  "goal": 1000000
}
```

### Adding a Team Member
1. Open `data/content.json`
2. Add to the `team` array:
```json
{
  "name": "Person Name",
  "role": "Their Role",
  "image": "https://profile-photo-url.jpg",
  "social": {
    "facebook": "https://facebook.com/...",
    "twitter": "https://twitter.com/...",
    "linkedin": "https://linkedin.com/..."
  }
}
```

### Adding a Testimonial
1. Open `data/content.json`
2. Add to the `testimonials` array:
```json
{
  "name": "Client Name",
  "position": "Their Position/Role",
  "text": "Their testimonial quote here",
  "image": "https://photo-url.jpg"
}
```

## 🔧 Common Modifications

### Change Organization Name
Search and replace "Ketma Welfare Foundation" in:
- `index.html` (title, logo, footer)
- `README.md` (documentation)

### Update Statistics
In `index.html`, find the stats section and modify `data-target` values:
```html
<h3 class="stat-number" data-target="50000">0</h3>
```

### Change Donation Currency
Find all `₹` symbols in `index.html` and replace with your currency symbol.

### Add More Sections
1. Add HTML in `index.html`
2. Add styles in `css/style.css`
3. Add functionality in `js/main.js` if needed

## 🐛 Troubleshooting

### JSON Not Loading?
- Check browser console for errors (F12)
- Verify `data/content.json` is valid JSON
- The website has fallback content built-in

### Animations Not Working?
- Ensure JavaScript is enabled
- Try hard refresh (Ctrl+F5 or Cmd+Shift+R)
- Check browser console for errors

### Images Not Showing?
- Verify image URLs are accessible
- Check internet connection
- Use high-quality, properly sized images

### Mobile Menu Not Working?
- Clear browser cache
- Ensure JavaScript is enabled
- Test in different browsers

## 📱 Mobile Testing

1. Use browser DevTools (F12)
2. Click device toolbar icon
3. Test different screen sizes:
   - iPhone: 375px
   - iPad: 768px
   - Desktop: 1200px+

## 🌟 Best Practices

1. **Images**: Use optimized images (WebP format, compressed)
2. **Content**: Keep descriptions concise and impactful
3. **Updates**: Regularly update causes and testimonials
4. **Testing**: Test on multiple devices and browsers
5. **Backup**: Keep backups of your JSON data

---

**Happy fundraising! 🚀❤️**
