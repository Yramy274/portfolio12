// Initialize image comparison slider
document.addEventListener('DOMContentLoaded', () => {
    // Image comparison slider
    const slider = document.querySelector('.comparison-slider');
    const afterImage = document.querySelector('.comparison-image.after');
    const container = document.querySelector('.image-comparison');
    
    if (slider && afterImage && container) {
        let isDown = false;
        
        slider.addEventListener('mousedown', () => {
            isDown = true;
            container.style.cursor = 'ew-resize';
        });
        
        window.addEventListener('mouseup', () => {
            isDown = false;
            container.style.cursor = 'default';
        });
        
        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            
            const clampedPercentage = Math.max(0, Math.min(100, percentage));
            
            slider.style.left = `${clampedPercentage}%`;
            afterImage.style.clipPath = `polygon(${clampedPercentage}% 0, 100% 0, 100% 100%, ${clampedPercentage}% 100%)`;
        });
    }
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Project section animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.project-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
});

// Modal functions
function openModal(projectName) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    // Project details content
    const projectContent = {
        binko: `
            <h2 style="font-size: 48px; margin-bottom: 24px;">Binko</h2>
            <p style="font-size: 18px; color: #999; margin-bottom: 40px;">AI Image Generation at Scale</p>
            
            <h3 style="font-size: 24px; margin-bottom: 16px;">Overview</h3>
            <p style="margin-bottom: 24px; line-height: 1.6; color: #ccc;">
                Automated solution for generating high-quality product images using Stable Diffusion 3.5, 
                reducing costs by 93% while maintaining photorealistic standards.
            </p>
            
            <h3 style="font-size: 24px; margin-bottom: 16px;">Technical Stack</h3>
            <ul style="margin-bottom: 24px; color: #ccc;">
                <li>Stable Diffusion 3.5 Large for image generation</li>
                <li>GPT-4o Mini for prompt optimization</li>
                <li>Lightning AI for GPU infrastructure</li>
                <li>Make.com for workflow automation</li>
            </ul>
            
            <h3 style="font-size: 24px; margin-bottom: 16px;">Results</h3>
            <ul style="color: #ccc;">
                <li>93% cost reduction vs traditional methods</li>
                <li>180 images per hour capacity</li>
                <li>$0.00075 per prompt generated</li>
                <li>8.5/10 photorealism score</li>
            </ul>
        `,
        malt: `
            <h2 style="font-size: 48px; margin-bottom: 24px;">MALT</h2>
            <p style="font-size: 18px; color: #999; margin-bottom: 40px;">B2B Prospecting Automation</p>
            
            <h3 style="font-size: 24px; margin-bottom: 16px;">Overview</h3>
            <p style="margin-bottom: 24px; line-height: 1.6; color: #ccc;">
                Intelligent system for automated lead scoring and multi-channel outreach across WhatsApp, 
                email, and LinkedIn, achieving 80% engagement rates.
            </p>
            
            <h3 style="font-size: 24px; margin-bottom: 16px;">Technical Stack</h3>
            <ul style="margin-bottom: 24px; color: #ccc;">
                <li>Mistral AI for prospect analysis</li>
                <li>Make.com for automation</li>
                <li>N8N for complex workflows</li>
                <li>MCP for AI integration</li>
            </ul>
            
            <h3 style="font-size: 24px; margin-bottom: 16px;">Results</h3>
            <ul style="color: #ccc;">
                <li>80% engagement rate on WhatsApp</li>
                <li>70% reduction in manual work</li>
                <li>Automated lead scoring system</li>
                <li>Real-time LinkedIn analysis</li>
            </ul>
        `,
        gofusion: `
            <h2 style="font-size: 48px; margin-bottom: 24px;">Go Fusion</h2>
            <p style="font-size: 18px; color: #999; margin-bottom: 40px;">Green SEO Automation</p>
            
            <h3 style="font-size: 24px; margin-bottom: 16px;">Overview</h3>
            <p style="margin-bottom: 24px; line-height: 1.6; color: #ccc;">
                Eco-conscious SEO strategy using automated content generation and RSS feeds 
                while minimizing environmental impact.
            </p>
            
            <h3 style="font-size: 24px; margin-bottom: 16px;">Technical Stack</h3>
            <ul style="margin-bottom: 24px; color: #ccc;">
                <li>Claude AI for content strategy</li>
                <li>DataforSEO for keyword research</li>
                <li>Make.com for content automation</li>
                <li>Semrush for SEO analysis</li>
            </ul>
            
            <h3 style="font-size: 24px; margin-bottom: 16px;">Environmental Impact</h3>
            <ul style="color: #ccc;">
                <li>4.32g CO2 per blog post</li>
                <li>0.14L water consumption per blog</li>
                <li>€0.10 cost per blog</li>
                <li>Sustainable content creation</li>
            </ul>
        `
    };
    
    modalBody.innerHTML = projectContent[projectName] || '<p>Project details not found.</p>';
    modal.style.display = 'block';
    
    // Smooth show animation
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        closeModal();
    }
}