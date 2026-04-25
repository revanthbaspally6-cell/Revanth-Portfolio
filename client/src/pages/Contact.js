import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", mobile: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="contact-container">
      <h2>Get In Touch</h2>
      {submitted && (
        <div style={{background: "#d4edda", color: "#155724", padding: "1rem", borderRadius: "5px", marginBottom: "1rem"}}>
          ✅ Message Sent Successfully!
        </div>
      )}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={e => setForm({...form, name: e.target.value})}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={e => setForm({...form, email: e.target.value})}
        />
        <input
          type="tel"
          placeholder="Mobile (10 digits)"
          required
          value={form.mobile}
          onChange={e => setForm({...form, mobile: e.target.value})}
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={e => setForm({...form, message: e.target.value})}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
