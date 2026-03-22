import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --cream: #fdf6ec;
    --brown: #3b1f0e;
    --rust: #c7522a;
    --gold: #e8a838;
    --sage: #5a7a5c;
    --light: #faf3e8;
    --card: #fff9f2;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  .bh-body {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    color: var(--brown);
  }

  /* NAV */
  .bh-nav {
    position: sticky; top: 0; z-index: 100;
    background: var(--brown);
    display: flex; justify-content: space-between; align-items: center;
    padding: 0 2.5rem; height: 64px;
  }
  .bh-logo { font-family: 'Playfair Display', serif; color: #fff; font-size: 1.5rem; font-weight: 900; letter-spacing: -0.5px; }
  .bh-logo span { color: var(--gold); }
  .bh-nav-links { display: flex; gap: 2rem; list-style: none; }
  .bh-nav-links a { color: #ddd; text-decoration: none; font-size: .9rem; font-weight: 500; letter-spacing: .05em; transition: .2s; }
  .bh-nav-links a:hover { color: var(--gold); }
  .bh-nav-cta { background: var(--rust); color: #fff; padding: .5rem 1.25rem; border-radius: 6px; font-size: .85rem; font-weight: 500; cursor: pointer; border: none; }

  /* HERO */
  .bh-hero {
    background: var(--brown);
    color: #fff;
    padding: 5rem 2.5rem 4rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .bh-hero::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 60% 40%, rgba(200,80,40,.25), transparent 70%),
                radial-gradient(ellipse at 20% 80%, rgba(232,168,56,.12), transparent 60%);
  }
  .bh-hero-tag { display: inline-block; background: var(--rust); color: #fff; font-size: .75rem; letter-spacing: .12em; text-transform: uppercase; padding: .3rem .9rem; border-radius: 20px; margin-bottom: 1.2rem; }
  .bh-hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(2.8rem, 7vw, 5rem); font-weight: 900; line-height: 1.05; position: relative; }
  .bh-hero h1 em { color: var(--gold); font-style: normal; }
  .bh-hero p { margin-top: 1.2rem; color: #bbb; max-width: 520px; margin-inline: auto; font-size: 1.05rem; line-height: 1.7; position: relative; }
  .bh-hero-btns { margin-top: 2rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; position: relative; }
  .bh-btn-primary { background: var(--rust); color: #fff; border: none; padding: .85rem 2rem; border-radius: 8px; font-size: 1rem; font-weight: 500; cursor: pointer; transition: .2s; font-family: inherit; }
  .bh-btn-primary:hover { background: #b04420; }
  .bh-btn-outline { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,.3); padding: .85rem 2rem; border-radius: 8px; font-size: 1rem; font-weight: 500; cursor: pointer; transition: .2s; font-family: inherit; }
  .bh-btn-outline:hover { border-color: var(--gold); color: var(--gold); }
  .bh-hero-stats { display: flex; gap: 3rem; justify-content: center; margin-top: 3rem; position: relative; }
  .bh-stat-val { font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 700; color: var(--gold); }
  .bh-stat-lbl { font-size: .8rem; color: #999; letter-spacing: .05em; }

  /* SECTIONS */
  .bh-section { padding: 5rem 2.5rem; }
  .bh-section-tag { display: inline-block; font-size: .72rem; letter-spacing: .14em; text-transform: uppercase; color: var(--rust); font-weight: 600; margin-bottom: .6rem; }
  .bh-section-title { font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 900; line-height: 1.1; margin-bottom: .5rem; }
  .bh-section-sub { color: #777; max-width: 480px; line-height: 1.6; margin-bottom: 2.5rem; }

  /* MENU */
  .bh-menu { background: var(--light); }
  .bh-menu-tabs { display: flex; gap: .5rem; margin-bottom: 2rem; flex-wrap: wrap; }
  .bh-tab { padding: .5rem 1.2rem; border-radius: 20px; border: 2px solid #ddd; background: transparent; cursor: pointer; font-size: .88rem; font-weight: 500; color: #666; transition: .2s; font-family: inherit; }
  .bh-tab.active { background: var(--rust); border-color: var(--rust); color: #fff; }
  .bh-menu-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
  .bh-menu-card { background: var(--card); border-radius: 14px; overflow: hidden; border: 1px solid #ece4d8; transition: transform .2s, box-shadow .2s; }
  .bh-menu-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(59,31,14,.12); }
  .bh-menu-img { width: 100%; height: 190px; object-fit: cover; display: block; background: #f0e8dc; }
  .bh-menu-body { padding: 1.2rem; }
  .bh-menu-name { font-weight: 600; font-size: 1rem; margin-bottom: .3rem; }
  .bh-menu-desc { font-size: .85rem; color: #888; line-height: 1.5; margin-bottom: .8rem; }
  .bh-menu-footer { display: flex; justify-content: space-between; align-items: center; }
  .bh-menu-price { font-family: 'Playfair Display', serif; font-weight: 700; font-size: 1.15rem; color: var(--rust); }
  .bh-menu-tag { font-size: .72rem; background: #f0ebe4; color: #888; padding: .2rem .6rem; border-radius: 10px; }

  /* RESERVATIONS */
  .bh-reservations { background: var(--brown); color: #fff; }
  .bh-reservations .bh-section-title { color: #fff; }
  .bh-reservations .bh-section-sub { color: #aaa; }
  .bh-res-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
  @media(max-width: 700px) { .bh-res-grid { grid-template-columns: 1fr; } }
  .bh-res-form { display: flex; flex-direction: column; gap: 1rem; }
  .bh-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .bh-form-group { display: flex; flex-direction: column; gap: .4rem; }
  .bh-form-group label { font-size: .82rem; color: #bbb; letter-spacing: .04em; }
  .bh-form-group input,
  .bh-form-group select,
  .bh-form-group textarea {
    background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.15);
    color: #fff; padding: .75rem 1rem; border-radius: 8px; font-size: .95rem; font-family: inherit;
    outline: none; transition: .2s;
  }
  .bh-form-group input:focus,
  .bh-form-group select:focus,
  .bh-form-group textarea:focus { border-color: var(--gold); background: rgba(255,255,255,.12); }
  .bh-form-group select option { background: #3b1f0e; }
  .bh-form-group textarea { resize: vertical; min-height: 90px; }
  .bh-res-info h3 { font-family: 'Playfair Display', serif; font-size: 1.4rem; color: #fff; margin-bottom: 1.2rem; }
  .bh-res-detail { display: flex; gap: .9rem; align-items: flex-start; margin-bottom: 1.2rem; }
  .bh-res-icon { font-size: 1.4rem; }
  .bh-res-detail-text strong { display: block; font-size: .9rem; color: #fff; margin-bottom: .2rem; }
  .bh-res-detail-text span { font-size: .85rem; color: #999; }

  /* EVENTS */
  .bh-events { background: var(--cream); }
  .bh-events-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
  .bh-event-card { background: var(--card); border-radius: 14px; overflow: hidden; border: 1px solid #ece4d8; display: flex; flex-direction: column; transition: transform .2s, box-shadow .2s; }
  .bh-event-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(59,31,14,.1); }
  .bh-event-img { width: 100%; height: 180px; object-fit: cover; display: block; background: #f0e8dc; }
  .bh-event-body { padding: 1.5rem; flex: 1; }
  .bh-event-date { display: inline-block; font-size: .78rem; font-weight: 600; color: var(--rust); letter-spacing: .06em; text-transform: uppercase; margin-bottom: .6rem; }
  .bh-event-name { font-family: 'Playfair Display', serif; font-size: 1.25rem; font-weight: 700; margin-bottom: .5rem; }
  .bh-event-desc { font-size: .87rem; color: #888; line-height: 1.6; }
  .bh-event-footer { padding: 1rem 1.5rem; border-top: 1px solid #f0ebe4; display: flex; justify-content: space-between; align-items: center; }
  .bh-event-price { font-weight: 600; font-size: .9rem; color: var(--brown); }
  .bh-event-btn { background: var(--rust); color: #fff; border: none; padding: .4rem 1rem; border-radius: 6px; font-size: .82rem; cursor: pointer; font-family: inherit; }

  /* ABOUT */
  .bh-about { background: var(--light); }
  .bh-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
  @media(max-width: 700px) { .bh-about-grid { grid-template-columns: 1fr; } }
  .bh-about-visual { border-radius: 20px; height: 380px; overflow: hidden; }
  .bh-about-visual img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .bh-about-copy p { color: #666; line-height: 1.8; margin-bottom: 1rem; font-size: .97rem; }
  .bh-team-row { display: flex; gap: 1.5rem; margin-top: 2rem; flex-wrap: wrap; }
  .bh-team-card { text-align: center; }
  .bh-team-avatar { width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, var(--rust), var(--gold)); display: flex; align-items: center; justify-content: center; font-size: 1.6rem; margin: 0 auto .5rem; }
  .bh-team-name { font-weight: 600; font-size: .88rem; }
  .bh-team-role { font-size: .78rem; color: #999; }

  /* CONTACT */
  .bh-contact { background: var(--brown); color: #fff; text-align: center; padding: 4rem 2.5rem; }
  .bh-contact .bh-section-title { color: #fff; margin-bottom: 1rem; }
  .bh-contact p { color: #aaa; max-width: 460px; margin-inline: auto; line-height: 1.7; margin-bottom: 2rem; }
  .bh-contact-cards { display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; }
  .bh-contact-card { background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.12); border-radius: 12px; padding: 1.5rem 2rem; min-width: 180px; }
  .bh-contact-card .bh-icon { font-size: 1.8rem; margin-bottom: .6rem; }
  .bh-contact-card strong { display: block; font-size: .85rem; color: #fff; margin-bottom: .3rem; }
  .bh-contact-card span { font-size: .82rem; color: #999; }

  /* FOOTER */
  .bh-footer { background: #1a0a04; color: #666; text-align: center; padding: 1.5rem; font-size: .82rem; }
  .bh-footer span { color: var(--gold); }
`;

const menuItems = [
  {
    name: "Classic Smash Burger",
    desc: "Double smashed patty, cheddar, pickles, special sauce on a brioche bun.",
    price: "₹249",
    tag: "Bestseller",
    category: "Burgers",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop",
  },
  {
    name: "Spicy Chicken Wrap",
    desc: "Crispy chicken, jalapeños, sriracha mayo wrapped in a toasted tortilla.",
    price: "₹189",
    tag: "Spicy 🌶",
    category: "Wraps",
    img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&auto=format&fit=crop",
  },
  {
    name: "Cold Brew Latte",
    desc: "18-hour steeped cold brew with oat milk and a hint of caramel.",
    price: "₹149",
    tag: "New",
    category: "Beverages",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop",
  },
  {
    name: "Loaded Fries",
    desc: "Crispy fries topped with cheese sauce, jalapeños and crispy onions.",
    price: "₹129",
    tag: "Veg",
    category: "Burgers",
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop",
  },
  {
    name: "Nutella Waffle",
    desc: "Crispy Belgian waffle drizzled with Nutella, fresh bananas and cream.",
    price: "₹179",
    tag: "Dessert",
    category: "Desserts",
    img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500&auto=format&fit=crop",
  },
  {
    name: "Mango Shake",
    desc: "Thick Alphonso mango shake blended with milk and a scoop of ice cream.",
    price: "₹139",
    tag: "Summer Special",
    category: "Beverages",
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=500&auto=format&fit=crop",
  },
];

const events = [
  {
    date: "Sat, 29 Mar 2026",
    name: "Burger Battle Night",
    desc: "Vote for your favourite creation as our chefs compete in a live burger cook-off. Samples included with your entry.",
    price: "₹199 / person",
    btnLabel: "Register",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop",
  },
  {
    date: "Fri, 4 Apr 2026",
    name: "Acoustic Friday",
    desc: "Live acoustic sets by local artists every Friday evening. Enjoy your favourite drinks with good music.",
    price: "Free Entry",
    btnLabel: "RSVP",
    img: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=600&auto=format&fit=crop",
  },
  {
    date: "Sun, 13 Apr 2026",
    name: "Sunday Brunch Club",
    desc: "An all-you-can-eat brunch spread with specialty coffees, live waffles, and a bloody mary bar.",
    price: "₹399 / person",
    btnLabel: "Book Now",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop",
  },
];

const tabs = ["All", "Burgers", "Wraps", "Beverages", "Desserts"];

export default function BitehausCafe() {
  const [activeTab, setActiveTab] = useState("All");
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", guests: "2 Guests", notes: "" });

  const filteredMenu =
    activeTab === "All" ? menuItems : menuItems.filter((item) => item.category === activeTab);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    alert(`Reservation confirmed for ${form.name || "Guest"}! We'll call you shortly.`);
  };

  return (
    <div className="bh-body">
      <style>{styles}</style>

      {/* NAV */}
      <nav className="bh-nav">
        <div className="bh-logo">Bite<span>haus</span></div>
        <ul className="bh-nav-links">
          {["menu", "reservations", "events", "about", "contact"].map((s) => (
            <li key={s}><a href={`#${s}`} onClick={(e) => { e.preventDefault(); scrollTo(s); }}>{s.charAt(0).toUpperCase() + s.slice(1)}</a></li>
          ))}
        </ul>
        <button className="bh-nav-cta" onClick={() => scrollTo("reservations")}>Book a Table</button>
      </nav>

      {/* HERO */}
      <div className="bh-hero">
        <div className="bh-hero-tag">☕ Fast Food & Café Experience</div>
        <h1>Good Food,<br /><em>Great Vibes.</em></h1>
        <p>Fresh bites, bold flavours and a warm corner to call yours — every single day.</p>
        <div className="bh-hero-btns">
          <button className="bh-btn-primary" onClick={() => scrollTo("menu")}>Explore Menu</button>
          <button className="bh-btn-outline" onClick={() => scrollTo("reservations")}>Make a Reservation</button>
        </div>
        <div className="bh-hero-stats">
          <div><div className="bh-stat-val">120+</div><div className="bh-stat-lbl">Menu Items</div></div>
          <div><div className="bh-stat-val">4.8★</div><div className="bh-stat-lbl">Avg Rating</div></div>
          <div><div className="bh-stat-val">5K+</div><div className="bh-stat-lbl">Happy Guests</div></div>
        </div>
      </div>

      {/* MENU */}
      <section id="menu" className="bh-section bh-menu">
        <div className="bh-section-tag">What We Serve</div>
        <div className="bh-section-title">Our Menu</div>
        <p className="bh-section-sub">Fresh ingredients, bold recipes and café favourites made with love.</p>
        <div className="bh-menu-tabs">
          {tabs.map((tab) => (
            <button key={tab} className={`bh-tab${activeTab === tab ? " active" : ""}`} onClick={() => setActiveTab(tab)}>{tab}</button>
          ))}
        </div>
        <div className="bh-menu-grid">
          {filteredMenu.map((item) => (
            <div className="bh-menu-card" key={item.name}>
              <img className="bh-menu-img" src={item.img} alt={item.name} loading="lazy" />
              <div className="bh-menu-body">
                <div className="bh-menu-name">{item.name}</div>
                <div className="bh-menu-desc">{item.desc}</div>
                <div className="bh-menu-footer">
                  <span className="bh-menu-price">{item.price}</span>
                  <span className="bh-menu-tag">{item.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESERVATIONS */}
      <section id="reservations" className="bh-section bh-reservations">
        <div className="bh-section-tag">Book a Table</div>
        <div className="bh-section-title">Reservations</div>
        <p className="bh-section-sub">Secure your spot — we'd love to have you over.</p>
        <div className="bh-res-grid">
          <div className="bh-res-form">
            <div className="bh-form-row">
              <div className="bh-form-group">
                <label>Full Name</label>
                <input name="name" type="text" placeholder="Arjun Kumar" value={form.name} onChange={handleFormChange} />
              </div>
              <div className="bh-form-group">
                <label>Phone</label>
                <input name="phone" type="tel" placeholder="+91 9876543210" value={form.phone} onChange={handleFormChange} />
              </div>
            </div>
            <div className="bh-form-row">
              <div className="bh-form-group">
                <label>Date</label>
                <input name="date" type="date" value={form.date} onChange={handleFormChange} />
              </div>
              <div className="bh-form-group">
                <label>Time</label>
                <input name="time" type="time" value={form.time} onChange={handleFormChange} />
              </div>
            </div>
            <div className="bh-form-group">
              <label>Number of Guests</label>
              <select name="guests" value={form.guests} onChange={handleFormChange}>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3–4 Guests</option>
                <option>5–8 Guests</option>
                <option>Large Group (9+)</option>
              </select>
            </div>
            <div className="bh-form-group">
              <label>Special Requests</label>
              <textarea name="notes" placeholder="Birthday setup, allergies, dietary preferences..." value={form.notes} onChange={handleFormChange} />
            </div>
            <button className="bh-btn-primary" style={{ marginTop: ".5rem" }} onClick={handleSubmit}>Confirm Reservation</button>
          </div>
          <div className="bh-res-info">
            <h3>Plan Your Visit</h3>
            {[
              { icon: "🕐", title: "Opening Hours", detail: <>Mon–Fri: 8 AM – 11 PM<br />Sat–Sun: 9 AM – 12 AM</> },
              { icon: "📍", title: "Location", detail: "12, Brookfield Road, Coimbatore, TN 641001" },
              { icon: "📞", title: "Phone", detail: "+91 99400 12345" },
              { icon: "🎉", title: "Private Events", detail: "We host birthdays, corporate lunches & more. Call to enquire." },
            ].map(({ icon, title, detail }) => (
              <div className="bh-res-detail" key={title}>
                <div className="bh-res-icon">{icon}</div>
                <div className="bh-res-detail-text">
                  <strong>{title}</strong>
                  <span>{detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="bh-section bh-events">
        <div className="bh-section-tag">What's On</div>
        <div className="bh-section-title">Upcoming Events</div>
        <p className="bh-section-sub">Join us for themed nights, live music and exclusive tastings.</p>
        <div className="bh-events-grid">
          {events.map((ev) => (
            <div className="bh-event-card" key={ev.name}>
              <img className="bh-event-img" src={ev.img} alt={ev.name} loading="lazy" />
              <div className="bh-event-body">
                <div className="bh-event-date">📅 {ev.date}</div>
                <div className="bh-event-name">{ev.name}</div>
                <div className="bh-event-desc">{ev.desc}</div>
              </div>
              <div className="bh-event-footer">
                <span className="bh-event-price">{ev.price}</span>
                <button className="bh-event-btn">{ev.btnLabel}</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bh-section bh-about">
        <div className="bh-about-grid">
          <div className="bh-about-visual">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&auto=format&fit=crop" alt="Bitehaus Cafe Interior" loading="lazy" />
          </div>
          <div className="bh-about-copy">
            <div className="bh-section-tag">Our Story</div>
            <div className="bh-section-title">More Than Just a Café</div>
            <p>Bitehaus started as a tiny corner stall in Coimbatore in 2019. What began as a weekend experiment quickly became the neighbourhood's favourite haunt for quick bites and great conversations.</p>
            <p>We believe food should be honest — real ingredients, bold flavours and no fuss. Every item on our menu is crafted to bring comfort without compromise.</p>
            <p>Today we serve hundreds of guests daily, but we still treat every plate like it's going to an old friend.</p>
            <div className="bh-team-row">
              {[
                { avatar: "👨‍🍳", name: "Ravi Kumar", role: "Head Chef" },
                { avatar: "👩‍💼", name: "Priya S.", role: "Co-Founder" },
                { avatar: "☕", name: "Arjun M.", role: "Barista Lead" },
              ].map(({ avatar, name, role }) => (
                <div className="bh-team-card" key={name}>
                  <div className="bh-team-avatar">{avatar}</div>
                  <div className="bh-team-name">{name}</div>
                  <div className="bh-team-role">{role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bh-contact">
        <div className="bh-section-tag">Get in Touch</div>
        <div className="bh-section-title">Find Us</div>
        <p>We're always happy to hear from you — whether it's feedback, a large order or just to say hi.</p>
        <div className="bh-contact-cards">
          {[
            { icon: "📍", label: "Address", val: "12 Brookfield Rd, Coimbatore" },
            { icon: "📞", label: "Call Us", val: "+91 99400 12345" },
            { icon: "✉️", label: "Email", val: "hello@bitehaus.in" },
            { icon: "📱", label: "Follow Us", val: "@bitehausofficial" },
          ].map(({ icon, label, val }) => (
            <div className="bh-contact-card" key={label}>
              <div className="bh-icon">{icon}</div>
              <strong>{label}</strong>
              <span>{val}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bh-footer">
        © 2026 <span>Bitehaus Café</span> — Crafted with ❤️ in Coimbatore
      </footer>
    </div>
  );
}
