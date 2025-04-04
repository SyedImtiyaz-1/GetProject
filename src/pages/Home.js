import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    FaPhoneAlt, FaEnvelope, FaWhatsapp, FaLaptopCode, FaRocket,
    FaGraduationCap, FaBrain, FaChartBar, FaCode, FaStar, FaCheck
} from 'react-icons/fa';
import './Home.css';
import Modal from '../components/Modal';

const Typewriter = ({ words = [], speed = 100 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(speed);

    useEffect(() => {
        if (!words.length) return;

        const currentWord = words[wordIndex];

        const timer = setTimeout(() => {
            // Typing
            if (!isDeleting && currentIndex < currentWord.length) {
                setDisplayText(prev => prev + currentWord[currentIndex]);
                setCurrentIndex(prev => prev + 1);
                setTypingSpeed(speed);
            }
            // Pause after typing complete
            else if (!isDeleting && currentIndex >= currentWord.length) {
                setTimeout(() => setIsDeleting(true), 2000);
            }
            // Deleting
            else if (isDeleting && displayText.length > 0) {
                setDisplayText(prev => prev.slice(0, -1));
                setTypingSpeed(speed / 2);
            }
            // Move to next word
            else if (isDeleting && displayText.length === 0) {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
                setCurrentIndex(0);
                setTypingSpeed(speed);
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [currentIndex, isDeleting, wordIndex, words, speed, displayText, typingSpeed]);

    return (
        <span className="typewriter">
            {displayText}
            <span className="cursor"></span>
        </span>
    );
};

// Rest of your Home component code remains the same
const projects = [
    {
        title: "Final Year Project",
        description: "A comprehensive project that helps you achieve your academic goals, complete with a thesis and synopsis.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=300&h=200",
    },
    {
        title: "Startup Project",
        description: "Innovative ideas and implementations ready for the entrepreneurial spirit, designed to kickstart your journey.",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=300&h=200",
    },
    {
        title: "Web Development",
        description: "Full-stack web applications built using modern technologies to meet industry standards and innovative projects.",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=300&h=200",
    },
    {
        title: "AI & ML Project",
        description: "Projects focused on artificial intelligence and machine learning algorithms, aimed at solving real-world problems.",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=300&h=200",
    },
    {
        title: "Data Science Project",
        description: "Insights and data-driven decision-making tools developed with data analysis techniques and visualization.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=300&h=200",
    },
    {
        title: "Programming Project",
        description: "Diverse programming challenges and implementations across various languages to enhance your coding skills.",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=300&h=200",
    },
];

const testimonials = [
    {
        name: "Rohan Deskmukh",
        role: "Student",
        content: "The final year project I purchased is really perfect I got full marks in my project submission. Great support by Founder!",
        rating: 5
    },
    {
        name: "Kunal Verma",
        role: "Entrepreneur",
        content: "Founder really helped me to start my Start-Up software and website from scratch & Saved my months of work.",
        rating: 5
    },
    {
        name: "Anjali Mathur",
        role: "Developer",
        content: "High-quality project and excellent documentation. Worth every single ruppee!",
        rating: 5
    }
];

const features = [
    {
        icon: <FaCheck />,
        title: "Proper A-to-Z Guidance",
        description: "All projects undergo testing and quality checks"
    },
    {
        icon: <FaCheck />,
        title: "Thesis & Synopsis",
        description: "Comprehensive documentation and setup guides included"
    },
    {
        icon: <FaCheck />,
        title: "Support",
        description: "Dedicated support by foudner to help you with implementation"
    },
    {
        icon: <FaCheck />,
        title: "Updates",
        description: "Regular updates and maintenance support"
    }
];

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const typewriterWords = [
        "Final Year Engineering Projects",
        "Academic Minor/Major Projects",
        "Projects Related To Start-Ups",
        "AI/ML Projects",
        "Web Dev. Projects",
        "Software Projects",
        "Data Science Projects",
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.feature-card, .category-card, .project-card, .testimonial-card')
            .forEach(card => observer.observe(card));

        document.querySelectorAll('.features-section, .categories-section, .showcase, .testimonials-section')
            .forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <div className="home-container">
            <section className="hero">
                <div className="hero-content">
                    <h1>
                        <Typewriter words={typewriterWords} speed={75} />
                    </h1>
                    <p>University Approved Projects for ⬇️ <br/> <code> BE, BTech, BCA, BSC-IT, MCA, MTech, MSc, etc.. </code></p>
                    <div className="hero-cta">
                        <Link to="/projects" className="cta-button primary">Browse Projects</Link>
                        {/* <Link to="/contact" className="cta-button secondary">Get Started</Link> */}
                    </div>

                    <div className="contact-details">
                        <h3>Contact Us</h3>
                        <div className="contact-grid">
                            <div className="contact-item">
                                <FaPhoneAlt />
                                <a href="tel:7218404903"><span>7218404903</span></a>
                            </div>
                            <div className="contact-item">
                                <FaWhatsapp />
                                <a href="tel:7218404903"><span>7218404903</span></a>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope />
                                <a href="mailto:gettechthings@gmail.com"><span>gettechthings@gmail.com</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <h2>Why Choose Us</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card animate-on-scroll" key={index}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="categories-section">
                <h2>Project Categories</h2>
                <div className="categories-grid">
                    <div className="category-card animate-on-scroll">
                        <FaGraduationCap className="category-icon" />
                        <h3>Final Year Projects</h3>
                        <p>Complete academic solutions with documentation</p>
                    </div>
                    <div className="category-card animate-on-scroll">
                        <FaRocket className="category-icon" />
                        <h3>Startup Projects</h3>
                        <p>Ready-to-launch business solutions</p>
                    </div>
                    <div className="category-card animate-on-scroll">
                        <FaLaptopCode className="category-icon" />
                        <h3>Web Development</h3>
                        <p>Modern web applications and services</p>
                    </div>
                    <div className="category-card animate-on-scroll">
                        <FaBrain className="category-icon" />
                        <h3>AI & ML Projects</h3>
                        <p>Intelligent solutions and algorithms</p>
                    </div>
                    <div className="category-card animate-on-scroll">
                        <FaChartBar className="category-icon" />
                        <h3>Data Science</h3>
                        <p>Data analysis and visualization projects</p>
                    </div>
                    <div className="category-card animate-on-scroll">
                        <FaCode className="category-icon" />
                        <h3>Programming</h3>
                        <p>Various programming implementations</p>
                    </div>
                </div>
            </section>

            <section className="showcase">
                <h2>Featured Projects</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div className="project-card animate-on-scroll" key={index} onClick={() => handleOpenModal(project)}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <button className="view-details">View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="testimonials-section">
                <h2>What Our Clients Say</h2>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial-card animate-on-scroll" key={index}>
                            <div className="testimonial-rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} className="star-icon" />
                                ))}
                            </div>
                            <p className="testimonial-content">{testimonial.content}</p>
                            <div className="testimonial-author">
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {modalOpen && selectedProject && (
                <Modal project={selectedProject} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default Home;
