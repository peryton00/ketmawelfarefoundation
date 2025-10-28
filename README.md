# Ketma Welfare Foundation - Official Website

A professional, modern, and fully animated website for Ketma Welfare Foundation NGO, built with HTML, CSS, JavaScript, and JSON for dynamic content management.

## 🌟 Project Overview

**Ketma Welfare Foundation** is a non-profit organization dedicated to empowering communities through education, healthcare, and sustainable development programs. This website showcases their mission, impact, team, and ongoing initiatives while providing an engaging platform for donations and community engagement.

## ✅ Completed Features

### 1. **Home Section**
- Hero section with animated text and gradient overlay
- Eye-catching call-to-action buttons
- Smooth scroll indicator animation
- Responsive background image with parallax effect

### 2. **Statistics Counter**
- Animated number counters that activate on scroll
- Real-time statistics display:
  - 50,000+ Lives Impacted
  - 150+ Active Projects
  - 25+ Communities Served
  - 5,000+ Volunteers
- Interactive cards with hover effects

### 3. **About Us Section**
- Engaging grid layout with image and content
- Video play button with pulse animation
- Establishment year badge
- Feature highlights with icons
- Hover effects on images

### 4. **Our Causes Section**
- Dynamic cause cards loaded from JSON
- Progress bars showing funding status
- Category badges for each cause
- Animated progress on scroll
- Individual donation buttons
- 6 active causes:
  - Education for All
  - Healthcare Access
  - Clean Water Initiative
  - Women Empowerment
  - Child Nutrition
  - Disaster Relief

### 5. **Impact Section**
- Three main impact areas with detailed metrics
- Icon-based visual hierarchy
- Checkmark lists showing achievements
- Gradient backgrounds for visual appeal
- Categories: Education, Healthcare, Community Development

### 6. **Team Section**
- Team member cards with professional photos
- Social media links (Facebook, Twitter, LinkedIn)
- Hover effects revealing social icons
- Role and position display
- 4 team members featured

### 7. **Testimonials Section**
- Automated slider with manual controls
- Client photos and quotes
- Smooth fade animations
- Previous/Next navigation buttons
- Auto-play functionality (5-second intervals)
- 3 testimonials from beneficiaries and partners

### 8. **Contact Section**
- Two-column layout (info + form)
- Animated contact form with floating labels
- Form validation and success message
- Contact information cards:
  - Location with address
  - Phone numbers
  - Email addresses
- Social media links
- Form submission handling

### 9. **Donation Section**
- Preset donation amount buttons
- Custom amount input field
- Secure payment indication
- Tax deduction information (80G)
- Call-to-action with heart icon
- Indian Rupee (₹) currency support

### 10. **Navigation & UI Elements**
- Fixed navbar with scroll effect
- Transparent to solid background transition
- Active link highlighting
- Mobile-responsive hamburger menu
- Smooth scroll navigation
- Scroll-to-top button with fade-in effect

### 11. **Animations & Effects**
- Preloader with heart pulse animation
- Fade-in-up animations on scroll
- Hover effects on cards and buttons
- Progress bar animations
- Ripple effects on buttons
- Smooth transitions throughout
- Parallax scrolling effects

### 12. **Footer**
- Multi-column layout with links
- Newsletter subscription form
- Social media icons
- Quick links navigation
- Privacy policy and terms links
- Copyright information
- Responsive grid layout

## 📁 Project Structure

```
ketma-welfare-foundation/
├── index.html              # Main HTML file with semantic structure
├── css/
│   └── style.css          # All styles, animations, and responsive design
├── js/
│   └── main.js            # JavaScript functionality and interactions
├── data/
│   └── content.json       # Dynamic content data (causes, team, testimonials)
└── README.md              # Project documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary Color**: #ff6b6b (Coral Red)
- **Secondary Color**: #4ecdc4 (Turquoise)
- **Accent Color**: #ffa62b (Orange)
- **Dark**: #1a1a2e (Navy Blue)
- **Light**: #ffffff (White)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Visual Elements
- Gradient backgrounds and overlays
- Box shadows for depth
- Border radius for modern look
- Icon integration (Font Awesome 6.4.0)
- High-quality images from Unsplash

## 🚀 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox, grid, animations
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **JSON**: Dynamic content management
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Poppins)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px+ (Full experience)
- **Tablet**: 768px - 1199px (Adjusted layouts)
- **Mobile**: 320px - 767px (Stacked layouts, hamburger menu)

### Responsive Features
- Flexible grid layouts
- Mobile hamburger menu
- Touch-friendly buttons and links
- Optimized images
- Readable font sizes across devices

## 🎯 Interactive Features

### Navigation
- Smooth scrolling to sections
- Active link highlighting based on scroll position
- Mobile menu toggle
- Sticky navbar with background change on scroll

### Dynamic Content
- JSON-based content loading
- Fallback content if JSON fails to load
- Automated testimonial slider
- Progress bar animations on scroll
- Counter animations for statistics

### Forms
- Contact form with validation
- Floating label animations
- Success message display
- Donation amount selection
- Newsletter subscription

## 📊 Data Management

The website uses a JSON file (`data/content.json`) to manage dynamic content:

### Content Structure
```json
{
  "causes": [...],      // Fundraising campaigns
  "team": [...],        // Team member information
  "testimonials": [...] // Client testimonials
}
```

### Benefits
- Easy content updates without code changes
- Centralized data management
- Scalable content structure
- Fallback content built into JavaScript

## 🔧 Customization Guide

### Adding New Causes
Edit `data/content.json` and add a new cause object:
```json
{
  "title": "Your Cause Title",
  "description": "Description of the cause",
  "image": "image-url",
  "category": "Category Name",
  "raised": 100000,
  "goal": 500000
}
```

### Adding Team Members
Add team member to `data/content.json`:
```json
{
  "name": "Member Name",
  "role": "Member Role",
  "image": "profile-image-url",
  "social": {
    "facebook": "fb-url",
    "twitter": "twitter-url",
    "linkedin": "linkedin-url"
  }
}
```

### Changing Colors
Update CSS variables in `css/style.css`:
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --accent-orange: #your-color;
}
```

## 🌐 Functional Entry Points

### Main Sections (URL Anchors)
- `/` or `/#home` - Homepage with hero section
- `/#about` - About Us section
- `/#causes` - Our Causes section
- `/#impact` - Impact section
- `/#team` - Team section
- `/#contact` - Contact section
- `/#donate` - Donation section

### Interactive Elements
- Contact form submission (console.log for demo)
- Donation amount selection
- Newsletter subscription
- Social media links
- Navigation menu

## 📈 Performance Optimizations

- CSS animations using transform and opacity
- Intersection Observer for scroll animations
- Lazy loading for images
- Optimized event listeners
- Debounced scroll events
- Minimal external dependencies

## 🔮 Future Enhancements

### Recommended Next Steps

1. **Backend Integration**
   - Connect contact form to email service
   - Integrate payment gateway for donations
   - Add database for newsletter subscriptions

2. **Content Management**
   - Admin panel for content updates
   - Blog section for news and updates
   - Photo gallery for events

3. **Enhanced Features**
   - Multi-language support
   - Volunteer registration system
   - Event calendar and registration
   - Annual report downloads
   - Live donation tracker

4. **SEO & Marketing**
   - Meta tags optimization
   - Open Graph tags for social sharing
   - Schema.org markup for NGO
   - Google Analytics integration
   - Social media feed integration

5. **Accessibility**
   - ARIA labels enhancement
   - Keyboard navigation improvements
   - Screen reader optimization
   - High contrast mode

6. **Additional Sections**
   - Success stories page
   - Partner organizations showcase
   - Volunteer opportunities page
   - FAQ section
   - Resources and downloads

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

To contribute to this project:
1. Update content in `data/content.json`
2. Modify styles in `css/style.css`
3. Add functionality in `js/main.js`
4. Test across different devices and browsers
5. Update this README with new features

## 📄 License

This project is created for Ketma Welfare Foundation. All rights reserved.

## 📞 Contact Information

- **Email**: info@ketmawelfare.org, support@ketmawelfare.org
- **Phone**: +91 12345 67890, +91 98765 43210
- **Address**: 123 Welfare Street, Community Center, New Delhi, India - 110001

## 🙏 Acknowledgments

- Images: Unsplash
- Icons: Font Awesome
- Fonts: Google Fonts (Poppins)
- Design Inspiration: Modern NGO websites

---

**Built with ❤️ for Ketma Welfare Foundation**

*Making a difference, one life at a time.*
