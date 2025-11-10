// Navigation Menu Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(15, 15, 15, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 15, 15, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// Classes Data
const classesData = [
    {
        id: 1,
        name: 'Yoga Flow',
        category: 'yoga',
        time: '8:00 AM - 9:00 AM',
        instructor: 'Sarah Williams',
        description: 'Clase de yoga fluida que combina movimientos dinámicos con posturas estáticas para mejorar flexibilidad y fuerza.',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop'
    },
    {
        id: 2,
        name: 'HIIT Training',
        category: 'hiit',
        time: '9:00 AM - 10:00 AM',
        instructor: 'David Martinez',
        description: 'Entrenamiento de alta intensidad para quemar calorías y mejorar tu condición cardiovascular en poco tiempo.',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop'
    },
    {
        id: 3,
        name: 'Spin Class',
        category: 'cardio',
        time: '10:00 AM - 11:00 AM',
        instructor: 'Mike Johnson',
        description: 'Clase de ciclismo indoor con música energética. Perfecta para mejorar resistencia y quemar calorías.',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop'
    },
    {
        id: 4,
        name: 'Strength Training',
        category: 'strength',
        time: '11:00 AM - 12:00 PM',
        instructor: 'Mike Johnson',
        description: 'Entrenamiento de fuerza enfocado en construir músculo y mejorar la potencia con pesas y ejercicios funcionales.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop'
    },
    {
        id: 5,
        name: 'Pilates Core',
        category: 'yoga',
        time: '4:00 PM - 5:00 PM',
        instructor: 'Emma Thompson',
        description: 'Fortalece tu core y mejora tu postura con ejercicios de Pilates enfocados en el control y la estabilidad.',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop'
    },
    {
        id: 6,
        name: 'Zumba',
        category: 'cardio',
        time: '6:00 PM - 7:00 PM',
        instructor: 'Sarah Williams',
        description: 'Diviértete mientras quemas calorías con esta clase de baile aeróbico llena de energía y ritmo latino.',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop'
    }
];

// Schedule Data
const scheduleData = [
    { time: '8:00 AM', monday: 'Yoga Flow', tuesday: 'HIIT Training', wednesday: 'Yoga Flow', thursday: 'HIIT Training', friday: 'Yoga Flow', saturday: 'Spin Class' },
    { time: '9:00 AM', monday: 'HIIT Training', tuesday: 'Spin Class', wednesday: 'HIIT Training', thursday: 'Spin Class', friday: 'HIIT Training', saturday: 'Yoga Flow' },
    { time: '10:00 AM', monday: 'Spin Class', tuesday: 'Strength Training', wednesday: 'Spin Class', thursday: 'Strength Training', friday: 'Spin Class', saturday: 'HIIT Training' },
    { time: '11:00 AM', monday: 'Strength Training', tuesday: 'Pilates Core', wednesday: 'Strength Training', thursday: 'Pilates Core', friday: 'Strength Training', saturday: 'Zumba' },
    { time: '4:00 PM', monday: 'Pilates Core', tuesday: 'Zumba', wednesday: 'Pilates Core', thursday: 'Zumba', friday: 'Pilates Core', saturday: '' },
    { time: '6:00 PM', monday: 'Zumba', tuesday: 'Yoga Flow', wednesday: 'Zumba', thursday: 'Yoga Flow', friday: 'Zumba', saturday: '' }
];

// Render Classes
function renderClasses(category = 'all') {
    const classesGrid = document.getElementById('classesGrid');
    const filteredClasses = category === 'all' 
        ? classesData 
        : classesData.filter(cls => cls.category === category);

    classesGrid.innerHTML = filteredClasses.map(cls => `
        <div class="class-card">
            <div class="class-card-image">
                <img src="${cls.image}" alt="${cls.name}" class="class-img">
            </div>
            <div class="class-card-content">
                <h3 class="class-card-title">${cls.name}</h3>
                <p class="class-card-time">${cls.time}</p>
                <p class="class-card-description">${cls.description}</p>
                <p class="class-card-instructor">Instructor: ${cls.instructor}</p>
                <button class="class-card-btn" onclick="bookClass(${cls.id})">Book Now</button>
            </div>
        </div>
    `).join('');
}

// Render Schedule
function renderSchedule() {
    const scheduleBody = document.getElementById('scheduleBody');
    scheduleBody.innerHTML = scheduleData.map(row => `
        <tr>
            <td><strong>${row.time}</strong></td>
            <td>${row.monday ? `<span class="schedule-class">${row.monday}</span>` : ''}</td>
            <td>${row.tuesday ? `<span class="schedule-class">${row.tuesday}</span>` : ''}</td>
            <td>${row.wednesday ? `<span class="schedule-class">${row.wednesday}</span>` : ''}</td>
            <td>${row.thursday ? `<span class="schedule-class">${row.thursday}</span>` : ''}</td>
            <td>${row.friday ? `<span class="schedule-class">${row.friday}</span>` : ''}</td>
            <td>${row.saturday ? `<span class="schedule-class">${row.saturday}</span>` : ''}</td>
        </tr>
    `).join('');
}

// Filter Classes
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.getAttribute('data-filter');
        renderClasses(category);
    });
});

// Book Class Function
function bookClass(classId) {
    const classItem = classesData.find(c => c.id === classId);
    if (classItem) {
        alert(`¡Perfecto! Estás a punto de reservar: ${classItem.name}\n\nHorario: ${classItem.time}\nInstructor: ${classItem.instructor}\n\nPor favor, inicia sesión o crea una cuenta para completar la reserva.`);
        // Scroll to contact section for login/signup
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Simulate form submission
    console.log('Form submitted:', formData);
    
    alert(`¡Gracias ${formData.name}!\n\nHemos recibido tu mensaje sobre "${formData.subject}".\n\nTe contactaremos pronto en ${formData.email}.`);
    
    // Reset form
    contactForm.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Update Timings Display (dynamic)
function updateTimings() {
    const now = new Date();
    const hour = now.getHours();
    
    // All days: 6:00am - 11:00am
    const isOpen = hour >= 6 && hour < 11;
    const timingText = '6:00am - 11:00am';
    
    const timingsElement = document.getElementById('timings');
    if (timingsElement) {
        if (isOpen) {
            timingsElement.innerHTML = `${timingText} <span style="color: #4CAF50; font-weight: 700;">(OPEN NOW)</span>`;
        } else {
            timingsElement.innerHTML = `${timingText} <span style="color: #f44336; font-weight: 700;">(CLOSED)</span>`;
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderClasses();
    renderSchedule();
    updateTimings();
    
    // Update timings every minute
    setInterval(updateTimings, 60000);
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

