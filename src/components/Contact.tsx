import { useState, type FormEvent } from "react";
import { person } from "../data/site";
import { FitText } from "./FitText";

type Status = "idle" | "sending" | "sent" | "error";

// Messages are delivered to your inbox by FormSubmit (free, no account).
// The very first message triggers a one-time "activate this form" email — click it once.
const ENDPOINT = `https://formsubmit.co/ajax/${person.email}`;

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data._honey) return; // spam bot
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `Portfolio message from ${data.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="contact invert">
      <div className="wrap">
        <span className="label reveal">(05) Contact</span>
        <h2 className="contact__title reveal">
          Let's build <em>something</em> useful.
        </h2>

        <div className="contact__grid">
          <div className="contact__side reveal">
            <p>
              Looking for internships and collaborations in software, AI and sustainability. If
              you're building tech for good, I'd love to hear about it.
            </p>
            <a className="contact__mail" href={`mailto:${person.email}`}>
              {person.email}
            </a>
            <ul className="contact__links">
              <li>
                <a className="link-line" href={person.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a className="link-line" href={person.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
              </li>
              {person.resumeUrl && (
                <li>
                  <a className="link-line" href={person.resumeUrl} target="_blank" rel="noreferrer">
                    Résumé ↗
                  </a>
                </li>
              )}
            </ul>
          </div>

          <form className="form reveal" onSubmit={onSubmit}>
            <label className="field">
              <span className="label">Name</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label className="field">
              <span className="label">Email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="field">
              <span className="label">Message</span>
              <textarea name="message" rows={4} required />
            </label>
            <input
              className="form__honey"
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="form__foot">
              <button className="btn btn--solid" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"} <span aria-hidden="true">→</span>
              </button>
              <p className="form__status mono" role="status">
                {status === "sent" && "Thanks — I'll get back to you soon."}
                {status === "error" && (
                  <>
                    Something went wrong. Email me at{" "}
                    <a href={`mailto:${person.email}`}>{person.email}</a>.
                  </>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>

      <footer className="footer">
        <div className="footer__mark" aria-hidden="true">
          <FitText>{person.lastName}</FitText>
        </div>
        <div className="footer__bar wrap mono">
          <span>© {new Date().getFullYear()} {person.firstName} {person.lastName}</span>
          <span>Built with React</span>
          <a className="link-line" href="#top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </section>
  );
}
