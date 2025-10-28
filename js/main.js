// ===== DATA LOADING AND INITIALIZATION =====
let causesData = [];
let teamData = [];
let testimonialsData = [];
let currentTestimonialIndex = 0;

// Load all data when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    // Hide preloader
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('hidden');
    }, 1500);

    // Load data
    await loadData();
    
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initStatsCounter();
    initTestimonialsSlider();
    initContactForm();
    initDonationForm();
    initScrollToTop();
});

// ===== LOAD JSON DATA =====
async function loadData() {
    try {
        const response = await fetch('data/content.json');
        const data = await response.json();
        
        causesData = data.causes;
        teamData = data.team;
        testimonialsData = data.testimonials;
        
        renderCauses();
        renderTeam();
        renderTestimonials();
    } catch (error) {
        console.error('Error loading data:', error);
        // Fallback to default content if JSON fails
        loadFallbackContent();
    }
}

// ===== RENDER CAUSES =====
function renderCauses() {
    const causesGrid = document.getElementById('causesGrid');
    if (!causesGrid) return;
    
    causesGrid.innerHTML = causesData.map(cause => `
        <div class="cause-card fade-in-up">
            <div class="cause-image">
                <img src="${cause.image}" alt="${cause.title}">
                <span class="cause-badge">${cause.category}</span>
            </div>
            <div class="cause-content">
                <h3 class="cause-title">${cause.title}</h3>
                <p class="cause-description">${cause.description}</p>
                <div class="cause-progress">
                    <div class="progress-info">
                        <span class="progress-raised">Raised: ₹${cause.raised.toLocaleString()}</span>
                        <span class="progress-goal">Goal: ₹${cause.goal.toLocaleString()}</span>
                    </div>
                    <div class="progress-bar-container">
                        <div class="progress-bar" data-progress="${(cause.raised / cause.goal * 100)}"></div>
                    </div>
                </div>
                <a href="#donate" class="btn btn-primary">
                    <span>Donate Now</span>
                    <i class="fas fa-heart"></i>
                </a>
            </div>
        </div>
    `).join('');
    
    // Animate progress bars
    setTimeout(() => {
        animateProgressBars();
    }, 300);
}

// ===== RENDER TEAM =====
function renderTeam() {
    const teamGrid = document.getElementById('teamGrid');
    if (!teamGrid) return;
    
    teamGrid.innerHTML = teamData.map(member => `
        <div class="team-card fade-in-up">
            <div class="team-image">
                <img src="${member.image}" alt="${member.name}">
                <div class="team-social">
                    <a href="${member.social.facebook}" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="${member.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="${member.social.linkedin}" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="team-info">
                <h3 class="team-name">${member.name}</h3>
                <p class="team-role">${member.role}</p>
            </div>
        </div>
    `).join('');
}

// ===== RENDER TESTIMONIALS =====
function renderTestimonials() {
    const testimonialsSlider = document.getElementById('testimonialsSlider');
    if (!testimonialsSlider) return;
    
    testimonialsSlider.innerHTML = testimonialsData.map((testimonial, index) => `
        <div class="testimonial-item ${index === 0 ? 'active' : ''}">
            <div class="testimonial-image">
                <img src="${testimonial.image}" alt="${testimonial.name}">
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <h4 class="testimonial-author">${testimonial.name}</h4>
            <p class="testimonial-position">${testimonial.position}</p>
        </div>
    `).join('');
}

// ===== NAVIGATION FUNCTIONALITY =====
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Smooth scroll and active link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
            
            // Close mobile menu
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    const fadeInElements = document.querySelectorAll('.fade-in-up');
    fadeInElements.forEach(element => observer.observe(element));
}

// ===== STATS COUNTER ANIMATION =====
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    let animated = false;
    
    const animateStats = () => {
        if (animated) return;
        
        const statsSection = document.querySelector('.stats');
        const sectionTop = statsSection.offsetTop - window.innerHeight + 200;
        
        if (window.scrollY > sectionTop) {
            animated = true;
            
            stats.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        stat.textContent = Math.floor(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        stat.textContent = target.toLocaleString() + '+';
                    }
                };
                
                updateCounter();
            });
        }
    };
    
    window.addEventListener('scroll', animateStats);
    animateStats(); // Check on load
}

// ===== ANIMATE PROGRESS BARS =====
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const progress = progressBar.getAttribute('data-progress');
                progressBar.style.width = progress + '%';
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => observer.observe(bar));
}

// ===== TESTIMONIALS SLIDER =====
function initTestimonialsSlider() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    
    if (!prevBtn || !nextBtn || testimonialItems.length === 0) return;
    
    function showTestimonial(index) {
        testimonialItems.forEach(item => item.classList.remove('active'));
        testimonialItems[index].classList.add('active');
    }
    
    prevBtn.addEventListener('click', () => {
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialItems.length) % testimonialItems.length;
        showTestimonial(currentTestimonialIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialItems.length;
        showTestimonial(currentTestimonialIndex);
    });
    
    // Auto-play slider
    setInterval(() => {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialItems.length;
        showTestimonial(currentTestimonialIndex);
    }, 5000);
}

// ===== CONTACT FORM =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };
        
        // Simulate form submission
        console.log('Contact Form Submitted:', formData);
        
        // Show success message
        contactForm.style.display = 'none';
        formSuccess.classList.add('show');
        
        // Reset form after 3 seconds
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'block';
            formSuccess.classList.remove('show');
        }, 3000);
    });
}

// ===== DONATION FORM =====
function initDonationForm() {
    const amountButtons = document.querySelectorAll('.amount-btn');
    const donateAmountInput = document.getElementById('donateAmount');
    const donateButton = document.querySelector('.btn-donate-large');
    
    if (!donateAmountInput) return;
    
    // Handle preset amount buttons
    amountButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            amountButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const amount = btn.getAttribute('data-amount');
            if (amount !== 'custom') {
                donateAmountInput.value = amount;
            } else {
                donateAmountInput.value = '';
                donateAmountInput.focus();
            }
        });
    });
    
    // Handle custom amount input
    donateAmountInput.addEventListener('input', () => {
        amountButtons.forEach(b => b.classList.remove('active'));
        const customBtn = document.querySelector('[data-amount="custom"]');
        if (customBtn) customBtn.classList.add('active');
    });
    
    // Handle donation button click
    if (donateButton) {
        donateButton.addEventListener('click', () => {
            const amount = donateAmountInput.value;
            if (amount && amount > 0) {
                alert(`Thank you for your generous donation of ₹${amount}! This is a demo - in production, this would redirect to a secure payment gateway.`);
                console.log('Donation amount:', amount);
            } else {
                alert('Please enter a valid donation amount.');
            }
        });
    }
}

// ===== SCROLL TO TOP =====
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (!scrollTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== FALLBACK CONTENT =====
function loadFallbackContent() {
    // Fallback causes data
    causesData = [
        {
            title: "Education for All",
            description: "Providing quality education and learning materials to underprivileged children in rural areas.",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
            category: "Education",
            raised: 450000,
            goal: 1000000
        },
        {
            title: "Healthcare Access",
            description: "Building mobile health clinics and providing essential medical care to remote communities.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
            category: "Healthcare",
            raised: 680000,
            goal: 1500000
        },
        {
            title: "Clean Water Initiative",
            description: "Installing water purification systems and wells in communities lacking clean drinking water.",
            image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800&q=80",
            category: "Infrastructure",
            raised: 320000,
            goal: 800000
        },
        {
            title: "Women Empowerment",
            description: "Skill development programs and vocational training for women to achieve financial independence.",
            image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
            category: "Empowerment",
            raised: 560000,
            goal: 1200000
        },
        {
            title: "Child Nutrition",
            description: "Ensuring proper nutrition and regular meals for malnourished children in underserved areas.",
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
            category: "Nutrition",
            raised: 890000,
            goal: 2000000
        },
        {
            title: "Disaster Relief",
            description: "Emergency support and rehabilitation for communities affected by natural disasters.",
            image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
            category: "Emergency",
            raised: 1250000,
            goal: 2500000
        }
    ];
    
    // Fallback team data
    teamData = [
        {
            name: "Dr. Rajesh Kumar",
            role: "Founder & Director",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
            social: {
                facebook: "#",
                twitter: "#",
                linkedin: "#"
            }
        },
        {
            name: "Priya Sharma",
            role: "Program Manager",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
            social: {
                facebook: "#",
                twitter: "#",
                linkedin: "#"
            }
        },
        {
            name: "Amit Patel",
            role: "Healthcare Coordinator",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
            social: {
                facebook: "#",
                twitter: "#",
                linkedin: "#"
            }
        },
        {
            name: "Sneha Reddy",
            role: "Education Lead",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
            social: {
                facebook: "#",
                twitter: "#",
                linkedin: "#"
            }
        }
    ];
    
    // Fallback testimonials data
    testimonialsData = [
        {
            name: "Ramesh Verma",
            position: "Community Leader, Village Panchayat",
            text: "Ketma Welfare Foundation has transformed our village. Their education program has given our children hope for a better future. We are forever grateful for their dedication and support.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
        },
        {
            name: "Meera Devi",
            position: "Beneficiary, Women Empowerment Program",
            text: "Thanks to the vocational training, I now run my own tailoring business and support my family. This organization changed my life and gave me independence I never imagined possible.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
        },
        {
            name: "Dr. Suresh Nair",
            position: "Healthcare Partner",
            text: "Working with Ketma Welfare Foundation has been incredibly rewarding. Their commitment to providing healthcare in remote areas is unmatched. They truly care about making a difference.",
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80"
        }
    ];
    
    // Render fallback content
    renderCauses();
    renderTeam();
    renderTestimonials();
}

// ===== SMOOTH SCROLL POLYFILL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#donate') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
