const sessions = [
  {
    number: "01",
    time: "1:00 PM",
    org: "BRAINTRUST",
    title: "AI Observability & Testing",
    summary:
      "Move from manual review and “working with vibes” to a smart testing system built from real production data.",
    points: [
      "Topics compress every interaction into intent, satisfaction, and failure mode.",
      "The new CLI brings testing, SQL, and automation into developer workflows.",
      "Gateway makes model switching, failover, and production experiments routine.",
    ],
    proof: "Zapier · Dropbox · Replit",
    href: "https://notes.granola.ai/d/FB48206A-4515-4415-81C7-7AAB468D4E4C",
  },
  {
    number: "02",
    time: "1:30 PM",
    org: "NOTION",
    title: "Evals are a team sport",
    summary:
      "A three-phase operating model for turning product intent into a durable, cross-functional eval practice.",
    points: [
      "Incubate with a golden set grounded in priority users and high-impact needs.",
      "Refine through weekly demos, explicit criteria, and trace-level debug mode.",
      "Scale with daily datasets, nightly triage, and automated feedback loops.",
    ],
    proof: "Incubate → Refine → Scale",
    href: "https://notes.granola.ai/d/33B2A438-6E27-4150-BE8A-D62993E78A2D",
  },
  {
    number: "03",
    time: "2:30 PM",
    org: "DROPBOX",
    title: "Evals are the new PRDs",
    summary:
      "For AI products, evals define what “working” means before launch—and preserve that definition after launch.",
    points: [
      "Use retrieval to give models the smallest useful set of facts, not the largest context.",
      "Turn every production failure into a trace, a root cause, and a regression test.",
      "Bring PM, support, engineering, and subject-matter experts into error analysis.",
    ],
    proof: "Josh Clemm · Ameya Bhatawdekar",
    href: "https://notes.granola.ai/d/8E408CE6-C7EC-4436-963C-E58F757040B4",
  },
  {
    number: "04",
    time: "3:00 PM",
    org: "SPOTIFY × BRAINTRUST",
    title: "Building reliable agents",
    summary:
      "Make the trace the unit of truth when models, retrieval, tools, and teams can all fail independently.",
    points: [
      "Start with cheap deterministic checks, then add human review and LLM judges.",
      "Make observability the happy path through shared primitives and frictionless SDKs.",
      "Evaluate side effects inside sandboxes before agents touch production systems.",
    ],
    proof: "Abdullah Mobeen · Manu Goyal",
    href: "https://notes.granola.ai/d/7557137C-7B01-44D1-B319-377119DD6A68",
  },
];

const takeaways = [
  {
    number: "01",
    eyebrow: "DEFINE",
    title: "Evals are product specs",
    text: "They turn “good” from an opinion into a shared, testable contract for the whole team.",
  },
  {
    number: "02",
    eyebrow: "OBSERVE",
    title: "The trace is the truth",
    text: "Capture every model call, tool call, retrieval step, and decision so failure has a location.",
  },
  {
    number: "03",
    eyebrow: "DISCOVER",
    title: "Production finds the unknowns",
    text: "Real users reveal needs and failure modes no brainstorm or benchmark can predict.",
  },
  {
    number: "04",
    eyebrow: "AUTOMATE",
    title: "Start cheap, then recurse",
    text: "Schema checks first. Human labels next. LLM judges only where nuance earns the cost.",
  },
  {
    number: "05",
    eyebrow: "COLLABORATE",
    title: "Quality has many owners",
    text: "Engineering, product, support, data, and domain experts each see a different part of the system.",
  },
];

const playbook = [
  ["TRACE", "Instrument every step by default."],
  ["CLUSTER", "Turn raw failures into recurring topics."],
  ["CONFIRM", "Put a human on the ambiguous cases."],
  ["EVALUATE", "Encode the failure as a repeatable check."],
  ["SHIP", "Promote only after the regression passes."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="TRACE 2026 home">
          TRACE<span>_26</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#takeaways">Takeaways</a>
          <a href="#sessions">Sessions</a>
          <a href="#playbook">Playbook</a>
        </nav>
        <a
          className="header-link"
          href="https://braintrust.dev/trace"
          target="_blank"
          rel="noreferrer"
        >
          Event source <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker">
          <span>Conference field notes</span>
          <span>San Francisco · 2026</span>
        </div>
        <h1>
          Ship AI
          <br />
          without
          <br />
          <em>the vibes.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            A practical field guide to the hard part of AI:
            <br />
            knowing whether it actually works.
          </p>
          <dl className="event-facts">
            <div>
              <dt>Date</dt>
              <dd>FEB 25, 2026</dd>
            </div>
            <div>
              <dt>Time</dt>
              <dd>1:00—4:00 PM</dd>
            </div>
            <div>
              <dt>Place</dt>
              <dd>CAL ACADEMY OF SCIENCES</dd>
            </div>
          </dl>
        </div>
        <div className="trace-line" aria-hidden="true">
          <span className="node node-one" />
          <span className="node node-two" />
          <span className="node node-three" />
          <span className="node node-four" />
        </div>
      </section>

      <section className="manifesto">
        <p className="section-label">THE CORE SHIFT</p>
        <p className="manifesto-copy">
          Traditional software tells you when it breaks.{" "}
          <span>AI makes you define what “working” means.</span>
        </p>
        <div className="manifesto-meta">
          <span>04 sessions</span>
          <span>03 hours</span>
          <span>01 operating system</span>
        </div>
      </section>

      <section className="takeaways section-shell" id="takeaways">
        <div className="section-heading">
          <div>
            <p className="section-label">01 / SIGNALS</p>
            <h2>Five ideas worth keeping</h2>
          </div>
          <p className="section-intro">
            The throughline across Braintrust, Notion, Dropbox, and Spotify.
          </p>
        </div>
        <div className="takeaway-grid">
          {takeaways.map((item, index) => (
            <article
              className={`takeaway-card takeaway-${index + 1}`}
              key={item.number}
            >
              <div className="card-topline">
                <span>{item.number}</span>
                <span>{item.eyebrow}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-band" aria-label="Conference quote">
        <p>
          “The agent that worked yesterday
          <br />
          will regress <em>tomorrow.</em>”
        </p>
        <span>BUILDING RELIABLE AGENTS · SPOTIFY × BRAINTRUST</span>
      </section>

      <section className="sessions section-shell" id="sessions">
        <div className="section-heading">
          <div>
            <p className="section-label">02 / SESSIONS</p>
            <h2>The afternoon, traced</h2>
          </div>
          <p className="section-intro">
            Four talks. One escalating argument for eval-driven development.
          </p>
        </div>
        <div className="session-list">
          {sessions.map((session) => (
            <article className="session" key={session.number}>
              <div className="session-index">
                <span>{session.number}</span>
                <span>{session.time}</span>
              </div>
              <div className="session-main">
                <p className="session-org">{session.org}</p>
                <h3>{session.title}</h3>
                <p className="session-summary">{session.summary}</p>
                <ul>
                  {session.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="session-side">
                <span>{session.proof}</span>
                <a href={session.href} target="_blank" rel="noreferrer">
                  Read Granola notes <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-study">
        <div className="case-number">93.64%</div>
        <div className="case-arrow" aria-hidden="true">
          →
        </div>
        <div className="case-number accent">96.97%</div>
        <div className="case-copy">
          <p className="section-label">NOTION / MEMORY SCORE</p>
          <p>
            Refinement is measurable. Weekly demos, trace-level debugging, and
            explicit criteria moved a live agent in the right direction.
          </p>
        </div>
      </section>

      <section className="playbook section-shell" id="playbook">
        <div className="section-heading">
          <div>
            <p className="section-label">03 / PLAYBOOK</p>
            <h2>From failure to confidence</h2>
          </div>
          <p className="section-intro">
            A compact operating loop assembled from the day&apos;s talks.
          </p>
        </div>
        <ol className="playbook-list">
          {playbook.map(([title, text], index) => (
            <li key={title}>
              <span className="playbook-number">0{index + 1}</span>
              <strong>{title}</strong>
              <p>{text}</p>
              <span className="playbook-node" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </section>

      <section className="lesson section-shell">
        <div>
          <p className="section-label">THE EXPENSIVE LESSON</p>
          <h2>You can&apos;t predict user behavior.</h2>
        </div>
        <div className="lesson-story">
          <p>
            Dropbox built Dash for document-centric work. After launch, meeting
            prep emerged as a major use case they had never anticipated.
          </p>
          <p>
            The response is not a bigger brainstorm. It is sustained error
            analysis: inspect the logs, find the unknown unknowns, and convert
            them into tests.
          </p>
        </div>
      </section>

      <section className="source-grid section-shell" id="sources">
        <div className="source-copy">
          <p className="section-label">04 / SOURCE MATERIAL</p>
          <h2>Go deeper in the original notes.</h2>
          <p>
            This page is an independent editorial recap assembled from Granola
            notes captured at TRACE 2026.
          </p>
        </div>
        <div className="source-links">
          <a href="https://notes.granola.ai/d/FB48206A-4515-4415-81C7-7AAB468D4E4C" target="_blank" rel="noreferrer">
            Braintrust keynote <Arrow />
          </a>
          <a href="https://notes.granola.ai/d/33B2A438-6E27-4150-BE8A-D62993E78A2D" target="_blank" rel="noreferrer">
            AI evals for product managers <Arrow />
          </a>
          <a href="https://notes.granola.ai/d/8E408CE6-C7EC-4436-963C-E58F757040B4" target="_blank" rel="noreferrer">
            Production-grade evals <Arrow />
          </a>
          <a href="https://notes.granola.ai/d/7557137C-7B01-44D1-B319-377119DD6A68" target="_blank" rel="noreferrer">
            Building reliable agents <Arrow />
          </a>
          <a href="https://notes.granola.ai/d/945C04A8-99E4-489A-B39D-5FFFA530ECA2" target="_blank" rel="noreferrer">
            Complex agent systems <Arrow />
          </a>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top">
          TRACE<span>_26</span>
        </a>
        <p>AI observability &amp; testing — conference field notes.</p>
        <p>Independent recap · Not an official Braintrust event page.</p>
      </footer>
    </main>
  );
}
