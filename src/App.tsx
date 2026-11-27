import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Check,
  ChevronDown,
  Command,
  Eye,
  Fingerprint,
  Layers3,
  Menu,
  Network,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Target,
  X,
} from "lucide-react";

const navItems = [
  { label: "The intelligence", href: "#intelligence" },
  { label: "How it works", href: "#process" },
  { label: "Who it's for", href: "#audience" },
  { label: "FAQs", href: "#faq" },
];

const questions = [
  {
    question: "What is MYRQUEN?",
    answer:
      "MYRQUEN is a contextual intelligence system for commercial work. It helps freelancers and agencies examine an opportunity, interpret the client's requirements and decision signals, and develop a more relevant response. It is not simply a proposal-writing tool.",
  },
  {
    question: "Is MYRQUEN a standalone platform?",
    answer:
      "The current product is supplied as a downloadable package for use with a compatible ChatGPT setup. The exact installation route and available capabilities depend on the ChatGPT plan and the package configuration.",
  },
  {
    question: "Will it guarantee more replies or clients?",
    answer:
      "No tool can guarantee a response or a contract. MYRQUEN is designed to improve the quality of opportunity analysis and commercial communication. Outcomes still depend on your profile, experience, pricing, opportunity fit and execution.",
  },
  {
    question: "Can an agency use it?",
    answer:
      "Yes. The workflow is relevant to agencies assessing inbound briefs, qualifying opportunities and preparing considered responses. Team licensing and multi-user arrangements will be confirmed before purchase.",
  },
  {
    question: "How do I get access?",
    answer:
      "Request access or book a demonstration. We will confirm the current package, compatibility, licence, pricing and delivery arrangements before taking payment.",
  },
];

function GlassMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span className="brand-mark-core" />
    </span>
  );
}

function SignalOrb() {
  return (
    <div className="orb-scene" aria-label="Abstract sculptural crimson glass form">
      <div className="orb-grid" />
      <div className="orb-halo orb-halo-one" />
      <div className="orb-halo orb-halo-two" />
      <div className="glass-orb">
        <div className="orb-surface orb-surface-a" />
        <div className="orb-surface orb-surface-b" />
        <div className="orb-highlight" />
        <div className="orb-core" />
      </div>
      <div className="orb-ring orb-ring-one" />
      <div className="orb-ring orb-ring-two" />
      <div className="orb-particle particle-a" />
      <div className="orb-particle particle-b" />
      <div className="orb-particle particle-c" />
      <div className="orb-caption caption-top">
        <span className="caption-pulse" />
        SIGNAL DETECTED
      </div>
      <div className="orb-caption caption-bottom">01 / CONTEXTUAL INTELLIGENCE</div>
      <div className="orb-coordinate coordinate-one">51°30'26.4"N</div>
      <div className="orb-coordinate coordinate-two">01 / 04</div>
    </div>
  );
}

function AnalysisCard() {
  return (
    <div className="analysis-card glass-panel">
      <div className="analysis-card-top">
        <div className="analysis-label">
          <span className="tiny-pulse" />
          OPPORTUNITY ANALYSIS
        </div>
        <span className="analysis-index">MX / 001</span>
      </div>
      <div className="analysis-heading">The brief is only the beginning.</div>
      <div className="analysis-subheading">
        A clearer picture of what the client is actually asking for.
      </div>
      <div className="analysis-divider" />
      <div className="signal-row">
        <div className="signal-icon"><Target size={15} /></div>
        <div className="signal-copy">
          <strong>Core requirement</strong>
          <span>What needs to be solved</span>
        </div>
        <span className="signal-status">IDENTIFIED</span>
      </div>
      <div className="signal-row">
        <div className="signal-icon"><Eye size={15} /></div>
        <div className="signal-copy">
          <strong>Decision signals</strong>
          <span>What may influence the choice</span>
        </div>
        <span className="signal-status">MAPPED</span>
      </div>
      <div className="signal-row">
        <div className="signal-icon"><Network size={15} /></div>
        <div className="signal-copy">
          <strong>Commercial approach</strong>
          <span>How to respond with relevance</span>
        </div>
        <span className="signal-status">IN VIEW</span>
      </div>
      <div className="analysis-card-footer">
        <span>CONTEXT RECONSTRUCTED</span>
        <span className="footer-points"><i /><i /><i /></span>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [requestType, setRequestType] = useState("Request a demonstration");
  const [submitted, setSubmitted] = useState(false);

  const openEnquiry = (type: string) => {
    setRequestType(type);
    setSubmitted(false);
    setModalOpen(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="MYRQUEN home">
          <GlassMark />
          <span>MYRQUEN</span>
        </a>

        <nav className={`desktop-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <button className="mobile-cta" onClick={() => openEnquiry("Get MYRQUEN")}>Get access <ArrowUpRight size={15} /></button>
        </nav>

        <div className="header-actions">
          <button className="button button-small button-outline" onClick={() => openEnquiry("Get MYRQUEN")}>
            Get MYRQUEN <ArrowUpRight size={15} />
          </button>
          <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> INTELLIGENCE FOR THE WORK BEHIND THE WIN</div>
          <h1>See beyond<br />the <span className="serif-word">brief.</span></h1>
          <p className="hero-description">
            Better commercial decisions begin with a better understanding.
            MYRQUEN helps you read the opportunity, recognise what matters
            and shape a response with intent.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => openEnquiry("Get MYRQUEN")}>
              Explore MYRQUEN <ArrowUpRight size={17} />
            </button>
            <a className="text-link" href="#intelligence">
              Discover the intelligence <ArrowDownRight size={16} />
            </a>
          </div>
          <div className="hero-proof">
            <div className="proof-symbol"><Fingerprint size={17} /></div>
            <div>
              <strong>Context before copy.</strong>
              <span>Understand the opportunity before you answer it.</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <SignalOrb />
          <AnalysisCard />
          <div className="visual-side-note"><span>FIG. 01</span> THE SIGNAL BENEATH THE SURFACE</div>
        </div>
        <div className="hero-bottom">
          <span>01 — A DIFFERENT WAY TO APPROACH OPPORTUNITY</span>
          <a href="#intelligence" aria-label="Scroll to intelligence"><ChevronDown size={18} /></a>
          <span>BUILT FOR FREELANCERS & AGENCIES</span>
        </div>
      </section>

      <section className="intro-section section-shell" id="intelligence">
        <div className="section-kicker">01 / THE REAL WORK</div>
        <div className="intro-grid">
          <h2>A proposal is<br />the <span className="serif-word">output.</span><br />Understanding is<br />the advantage.</h2>
          <div className="intro-copy">
            <p className="intro-lead">Clients rarely choose on words alone.</p>
            <p>They are weighing confidence, relevance, experience, risk, timing and the feeling that someone has genuinely understood the problem.</p>
            <p>MYRQUEN helps you examine the context behind a brief before you decide what to say. It brings requirements, implied needs, decision signals and commercial considerations into one structured view.</p>
            <a href="#process" className="inline-link">Understand the process <ArrowRight size={16} /></a>
          </div>
        </div>
        <div className="thin-rule" />
        <div className="principles">
          <div className="principle">
            <span className="principle-number">01</span>
            <div className="principle-icon"><ScanSearch size={18} /></div>
            <h3>Read the context</h3>
            <p>Look beyond the surface wording to understand the actual problem and the conditions around it.</p>
          </div>
          <div className="principle">
            <span className="principle-number">02</span>
            <div className="principle-icon"><AudioLines size={18} /></div>
            <h3>Recognise the signals</h3>
            <p>Identify priorities, concerns, constraints and decision cues that deserve attention.</p>
          </div>
          <div className="principle">
            <span className="principle-number">03</span>
            <div className="principle-icon"><Command size={18} /></div>
            <h3>Respond with intent</h3>
            <p>Shape a relevant commercial response grounded in the opportunity, not a generic template.</p>
          </div>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="section-shell">
          <div className="process-heading">
            <div>
              <div className="section-kicker">02 / THE METHOD</div>
              <h2>From scattered signals<br />to <span className="serif-word">clear direction.</span></h2>
            </div>
            <p>Four connected stages. One considered view of the opportunity.</p>
          </div>
          <div className="process-track">
            <div className="process-line" />
            {[
              { n: "01", title: "Examine", copy: "Bring the brief, client context and available information into view.", icon: <Eye size={20} /> },
              { n: "02", title: "Interpret", copy: "Separate stated requirements from implied needs, risks and buying signals.", icon: <ScanSearch size={20} /> },
              { n: "03", title: "Strategise", copy: "Decide what to address, what to clarify and how to position the response.", icon: <Target size={20} /> },
              { n: "04", title: "Respond", copy: "Create a more relevant proposal with a clear commercial point of view.", icon: <ArrowUpRight size={20} /> },
            ].map((step) => (
              <div className="process-step" key={step.n}>
                <div className="step-top"><span>{step.n}</span><div className="step-icon">{step.icon}</div></div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
          <div className="process-note">
            <Sparkles size={16} />
            <span>Not another template generator. A more considered way to approach the work.</span>
          </div>
        </div>
      </section>

      <section className="audience-section section-shell" id="audience">
        <div className="section-kicker">03 / WHO IT'S FOR</div>
        <div className="audience-heading">
          <h2>Good work deserves<br />to be <span className="serif-word">understood.</span></h2>
          <p>Whether you work independently or lead a delivery team, the commercial challenge is familiar: understand what matters before you make your case.</p>
        </div>
        <div className="audience-cards">
          <article className="audience-card freelancer-card">
            <div className="audience-card-top"><span>01 / INDEPENDENT</span><div className="audience-icon"><Fingerprint size={19} /></div></div>
            <h3>For freelancers.</h3>
            <p>Spend less effort guessing what a client wants. Assess the brief, understand the fit and make your expertise relevant to the decision in front of you.</p>
            <ul>
              <li><Check size={14} /> Assess opportunity fit</li>
              <li><Check size={14} /> Identify client priorities</li>
              <li><Check size={14} /> Build a more considered response</li>
            </ul>
            <button className="card-link" onClick={() => openEnquiry("MYRQUEN for freelancers")}>Explore for freelancers <ArrowUpRight size={16} /></button>
          </article>
          <article className="audience-card agency-card">
            <div className="audience-card-top"><span>02 / DELIVERY TEAMS</span><div className="audience-icon"><Layers3 size={19} /></div></div>
            <h3>For agencies.</h3>
            <p>Bring a more structured approach to opportunity assessment. Help business development teams connect client requirements with the right delivery capability.</p>
            <ul>
              <li><Check size={14} /> Qualify incoming opportunities</li>
              <li><Check size={14} /> Surface scope and delivery risks</li>
              <li><Check size={14} /> Align the response with capability</li>
            </ul>
            <button className="card-link" onClick={() => openEnquiry("MYRQUEN for agencies")}>Explore for agencies <ArrowUpRight size={16} /></button>
          </article>
        </div>
      </section>

      <section className="statement-section">
        <div className="statement-orb" />
        <div className="statement-content">
          <div className="section-kicker">THE MYRQUEN PRINCIPLE</div>
          <p>Don't just answer<br />what was <span className="serif-word">written.</span></p>
          <p className="statement-secondary">Understand what needs to be solved.</p>
          <button className="button button-primary" onClick={() => openEnquiry("Request a demonstration")}>See MYRQUEN in action <ArrowUpRight size={16} /></button>
        </div>
      </section>

      <section className="faq-section section-shell" id="faq">
        <div className="faq-intro">
          <div className="section-kicker">04 / QUESTIONS, ANSWERED</div>
          <h2>Before you<br /><span className="serif-word">begin.</span></h2>
          <p>A few useful details about the product, the current package and getting started.</p>
          <button className="inline-link faq-contact" onClick={() => openEnquiry("Ask a question")}>Ask us something <ArrowUpRight size={15} /></button>
        </div>
        <div className="faq-list">
          {questions.map((item, index) => (
            <div className={`faq-item ${openFaq === index ? "faq-active" : ""}`} key={item.question}>
              <button className="faq-question" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <span>{item.question}</span>
                <span className="faq-toggle">{openFaq === index ? <X size={15} /> : <ArrowUpRight size={15} />}</span>
              </button>
              {openFaq === index && <div className="faq-answer"><p>{item.answer}</p></div>}
            </div>
          ))}
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-glow" />
        <div className="closing-content">
          <div className="section-kicker">THE NEXT MOVE IS YOURS</div>
          <h2>Make the next<br />opportunity <span className="serif-word">count.</span></h2>
          <p>See what MYRQUEN can bring to the way you assess, position and pursue work.</p>
          <div className="closing-actions">
            <button className="button button-primary" onClick={() => openEnquiry("Get MYRQUEN")}>Get MYRQUEN <ArrowUpRight size={17} /></button>
            <button className="button button-quiet" onClick={() => openEnquiry("Request a demonstration")}>Request a demonstration</button>
          </div>
          <div className="closing-footnote"><ShieldCheck size={14} /> No commitment. We’ll walk you through the current package first.</div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <a className="wordmark" href="#top"><GlassMark /><span>MYRQUEN</span></a>
          <p>Contextual intelligence<br />for commercial decisions.</p>
          <div className="footer-links">
            <a href="#intelligence">Intelligence</a>
            <a href="#process">How it works</a>
            <a href="#audience">For agencies</a>
            <button onClick={() => openEnquiry("Contact MYRQUEN")}>Contact</button>
          </div>
          <button className="footer-cta" onClick={() => openEnquiry("Get MYRQUEN")}>Start a conversation <ArrowUpRight size={15} /></button>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} MYRQUEN. All rights reserved.</span>
          <span>BUILT AROUND BETTER UNDERSTANDING.</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>

      {modalOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setModalOpen(false); }}>
          <div className="enquiry-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className="modal-close" aria-label="Close enquiry" onClick={() => setModalOpen(false)}><X size={19} /></button>
            {!submitted ? (
              <>
                <div className="section-kicker">A CONVERSATION, NOT A COMMITMENT</div>
                <h2 id="modal-title">Let's understand<br /><span className="serif-word">your context.</span></h2>
                <p className="modal-intro">Tell us a little about what you're looking for. We'll come back with the relevant details.</p>
                <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
                  <label>
                    Your name
                    <input required name="name" placeholder="How should we address you?" />
                  </label>
                  <label>
                    Work email
                    <input required type="email" name="email" placeholder="you@company.com" />
                  </label>
                  <label>
                    I'm enquiring as
                    <select name="audience" defaultValue="Freelancer">
                      <option>Freelancer</option>
                      <option>Agency / studio</option>
                      <option>Business development professional</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label>
                    What would you like to know?
                    <select value={requestType} onChange={(event) => setRequestType(event.target.value)}>
                      <option>Get MYRQUEN</option>
                      <option>Request a demonstration</option>
                      <option>Ask a question</option>
                      <option>MYRQUEN for freelancers</option>
                      <option>MYRQUEN for agencies</option>
                      <option>Contact MYRQUEN</option>
                    </select>
                  </label>
                  <label>
                    A little more context <span className="optional">(optional)</span>
                    <textarea name="message" rows={3} placeholder="Tell us what you're looking to improve..." />
                  </label>
                  <button className="button button-primary modal-submit" type="submit">Send enquiry <ArrowUpRight size={16} /></button>
                  <p className="form-note">Your details are used only to respond to this enquiry. The form is a demonstration interface until connected to a delivery endpoint.</p>
                </form>
              </>
            ) : (
              <div className="success-state">
                <div className="success-icon"><Check size={23} /></div>
                <div className="section-kicker">ENQUIRY PREPARED</div>
                <h2 id="modal-title">One step<br /><span className="serif-word">closer.</span></h2>
                <p>The form is currently a front-end preview and has not sent your details. We’ll connect the enquiry to your preferred email or CRM before launch.</p>
                <button className="button button-primary" onClick={() => setModalOpen(false)}>Understood <Check size={16} /></button>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="site-grain" aria-hidden="true" />
    </main>
  );
}

export default App;
