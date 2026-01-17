import {Send} from "lucide-react";

function About() {
    return (
        <div className="contact-content">
            <h2>Get In Touch</h2>
            <p>Have a question or suggestion? We'd love to hear from you.</p>

            <form className="contact-form" noValidate>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name"/>
                    <span className="error-message"></span>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="you@example.com"/>
                    <span className="error-message"></span>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" placeholder="How can we help?"></textarea>
                    <span className="error-message"></span>
                </div>

                <button type="submit" className="submit-btn">
                    Send Message
                    <Send className="button-icon" />
                </button>

                <p className="form-success">Thanks for reaching out! We'll get back to you soon.</p>
            </form>
        </div>
    )
}

export default About;