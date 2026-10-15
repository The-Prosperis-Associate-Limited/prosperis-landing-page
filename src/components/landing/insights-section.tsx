import { ArrowRight } from "lucide-react";
import { faqs, posts } from "./data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function InsightsSection() {
  return (
    <>
      <section className="section insights" id="insights">
        <div className="shell">
          <Reveal>
            <div className="insights__heading">
              <SectionHeading
                eyebrow="Ideas & updates"
                title="Thinking out loud."
                description="A home for practical perspectives, company news, and useful lessons from the work."
              />
              <a className="text-link" href="#newsletter">
                Get new stories by email <ArrowRight size={17} />
              </a>
            </div>
          </Reveal>

          <div className="post-grid">
            {posts.map((post, index) => (
              <Reveal key={post.title} delay={index * 0.07}>
                <article className="post-card">
                  <div className={`post-card__visual post-visual-${index + 1}`}>
                    <span>{post.category}</span>
                    <div aria-hidden="true" />
                  </div>
                  <div className="post-card__body">
                    <p>
                      {post.date} <span>·</span> {post.category}
                    </p>
                    <h3>{post.title}</h3>
                    <p>{post.summary}</p>
                    <a href="#newsletter">
                      Read preview <ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="shell faq__grid">
          <Reveal>
            <SectionHeading
              eyebrow="Frequently asked"
              title="A few useful answers."
              description="Everything here is starter content and can be updated once the final organization details are ready."
            />
          </Reveal>

          <Reveal className="faq__list" delay={0.08}>
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>0{index + 1}</span>
                  {faq.question}
                  <i aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
