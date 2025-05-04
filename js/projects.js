// Projects data and interactions
const projectData = {
    binko: {
        title: "Binko",
        tagline: "Automating AI Image Generation at Scale",
        description: "Revolutionary workflow combining Make.com, GPT-4o Mini, and Stable Diffusion 3.5 for automated image generation with 93% cost reduction.",
        tech: ["Stable Diffusion", "Python", "Lightning AI", "Make.com"],
        metrics: [
            { value: "93%", label: "Cost reduction" },
            { value: "180", label: "Images/hour" }
        ],
        links: {
            github: "https://github.com/SJamesss/Binko",
            demo: null
        }
    },
    malt: {
        title: "MALT",
        tagline: "B2B Prospecting Automation",
        description: "AI-powered system for automated lead scoring and multi-channel outreach on the MALT freelance platform.",
        tech: ["Mistral AI", "Make.com", "N8N", "MCP"],
        metrics: [
            { value: "80%", label: "Engagement Rate (WhatsApp)" },
            { value: "70%", label: "Time Reduction" }
        ],
        links: {
            github: "https://github.com/SJamesss/MALT",
            demo: null
        }
    },
    gofusion: {
        title: "Go Fusion",
        tagline: "Green SEO Automation",
        description: "Eco-conscious SEO strategy automation for environmental platform, minimizing carbon footprint per content piece.",
        tech: ["Claude AI", "DataforSEO", "Semrush", "Make.com"],
        metrics: [
            { value: "4.32g", label: "CO2/blog" },
            { value: "0.10€", label: "Cost/blog" }
        ],
        links: {
            github: "https://github.com/SJamesss/GoFusion",
            demo: null
        }
    },
    financegpt: {
        title: "FinanceGPT",
        tagline: "AI Banking Assistant",
        description: "Streamlit web application leveraging Claude AI for bank statement analysis, fraud detection, and personalized financial insights.",
        tech: ["Python", "Streamlit", "Claude AI", "OCR"],
        metrics: [],
        links: {
            github: "https://github.com/SJamesss/FinanceGPT",
            demo: "https://financegpt.streamlit.app"
        }
    },
    tableau: {
        title: "Tableau Dashboards",
        tagline: "Business Intelligence Visualization",
        description: "Interactive analytics dashboards for business KPI tracking, customer analysis, and data-driven decision making.",
        tech: ["Tableau", "SQL", "Excel", "DAX"],
        metrics: [],
        links: {
            github: null,
            demo: "https://public.tableau.com/app/profile/sackdiphat.sounthala/vizzes"
        }
    }
};

// Expand project card content on interaction
function initializeProjectInteractions() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add interactive elements for better UX
        const button = card.querySelector('.project-button');
        const projectKey = card.classList[1]; // e.g., 'binko', 'malt'
        
        if (button && projectData[projectKey]) {
            button.addEventListener('click', () => {
                showProjectDetails(projectKey);
            });
        }
        
        // Add hover effects for better visual feedback
        card.addEventListener('mouseenter', () => {
            const metrics = card.querySelectorAll('.metric-value');
            metrics.forEach(metric => {
                metric.style.transform = 'scale(1.1)';
            });
        });
        
        card.addEventListener('mouseleave', () => {
            const metrics = card.querySelectorAll('.metric-value');
            metrics.forEach(metric => {
                metric.style.transform = 'scale(1)';
            });
        });
    });
}

// Lazy load project images
function lazyLoadImages() {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                if (src) {
                    img.src = src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeProjectInteractions();
    lazyLoadImages();
    
    // Add smooth scrolling for project navigation
    const projectButtons = document.querySelectorAll('.project-button');
    projectButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Add loading effect
            button.innerHTML = 'Loading...';
            button.style.pointerEvents = 'none';
            
            setTimeout(() => {
                button.innerHTML = 'View Project';
                button.style.pointerEvents = 'auto';
            }, 500);
        });
    });
});