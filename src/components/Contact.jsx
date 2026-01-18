import {Send} from "lucide-react";
import {useState} from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isVisible, setIsVisible] = useState(false);
    const [error, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsVisible(false);
        const validationErrors = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (formData.name.trim() === '') {
            validationErrors.name = 'Name is required';
        }
        if (formData.email === '') {
            validationErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            validationErrors.emailFormat = 'Email is in invalid format';
        }
        if (formData.message.trim() === '') {
            validationErrors.message = 'Message is required';
        }

        if (Object.keys(validationErrors).length === 0) {
            setIsVisible(true);
            setFormData({
                name: '',
                email: '',
                message: '',
            })
            setErrors({})
        } else {
            setErrors(validationErrors);
        }
    }

    return (
        <div className="contact-content">
            <h2>Get In Touch</h2>
            <p>Have a question or suggestion? We'd love to hear from you.</p>

            <form className="contact-form" noValidate onSubmit={handleSubmit}>
                <div className={`form-group ${error.name ? 'error' : ''}`}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange}/>
                    <span className={`error-message ${error.name && 'visible'}`}>{error.name}</span>
                </div>

                <div className={`form-group ${error.email || error.emailFormat ? 'error' : ''}`}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange}/>
                    <span className={`error-message ${error.email && 'visible'}`}>{error.email}</span>
                    <span className={`error-message ${error.emailFormat && 'visible'}`}>{error.emailFormat}</span>
                </div>

                <div className={`form-group ${error.message ? 'error' : ''}`}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" placeholder="How can we help?" value={formData.message} onChange={handleChange}></textarea>
                    <span className={`error-message ${error.message && 'visible'}`}>{error.message}</span>
                </div>

                <button type="submit" className="submit-btn">
                    Send Message
                    <Send className="button-icon" />
                </button>

                <p className={`form-success ${isVisible ? 'visible' : ''}`}>Thanks for reaching out! We'll get back to you soon.</p>
            </form>
        </div>
    )
}

export default Contact;