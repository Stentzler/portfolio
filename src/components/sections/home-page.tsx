import { getProfile } from "@/lib/content/profile";
import { getUiContent } from "@/lib/content/ui";
import type { Locale } from "@/lib/i18n/locales";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const profile = getProfile();
  const ui = getUiContent(locale);

  return (
    <div className="space-y-12">
      <section className="border-b border-line pb-16">
        <div className="mb-5 space-y-1">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{profile.role[locale]}</p>
          <p className="text-sm font-medium text-muted">{profile.subRole[locale]}</p>
        </div>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">{profile.name}</h1>
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_16rem] md:items-stretch">
          <div>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-muted">{profile.hero[locale]}</p>
          </div>
          <p className="mt-7 self-stretch border-l border-accent pl-5 leading-7 text-muted">{profile.availability[locale]}</p>
        </div>
      </section>

      <section aria-labelledby="capabilities-heading">
        <h2 className="section-heading" id="capabilities-heading">{ui.sections.capabilities}</h2>
        <ul className="grid gap-px border border-line bg-line sm:grid-cols-3">
          {profile.capabilities.map((capability) => <li className="bg-canvas p-6 text-lg leading-7" key={capability.en}>{capability[locale]}</li>)}
        </ul>
      </section>

      <section className="max-w-3xl" id="bio">
        <h2 className="section-heading">{ui.sections.bio}</h2>
        <div className="space-y-5 text-lg leading-8 text-muted">
          {profile.bio.map((paragraph) => <p key={paragraph.en}>{paragraph[locale]}</p>)}
        </div>
      </section>

      <div className="!mt-4 border-t border-line pt-15">
        <section aria-labelledby="timeline-heading">
          <h2 className="section-heading !mb-[0.6rem]" id="timeline-heading">{ui.sections.timeline}</h2>
          <ol>
            {profile.timeline.map((entry) => (
              <li className="grid gap-3 border-b border-line py-6 md:grid-cols-[10rem_1fr]" key={`${entry.period.en}-${entry.title.en}`}>
                <p className="text-sm font-medium text-accent">{entry.period[locale]}</p>
                <div><h3 className="text-lg font-semibold">{entry.title[locale]}</h3><p className="mt-2 leading-7 text-muted">{entry.description[locale]}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="certifications-heading" className="pt-15">
          <h2 className="section-heading !mb-[0.6rem]" id="certifications-heading">{ui.sections.certifications}</h2>
          <div>
            {profile.certifications.map((certification) => (
              <details className="border-b border-line" key={`${certification.period.en}-${certification.title.en}`}>
                <summary className="grid cursor-pointer gap-3 py-6 md:grid-cols-[10rem_1fr]">
                  <span className="text-sm font-medium text-accent">{certification.period[locale]}</span>
                  <span className="text-lg font-semibold">{certification.title[locale]}</span>
                </summary>
                <div className="space-y-2 pb-6 text-sm leading-6 text-muted md:pl-40">
                  <p>{certification.issuer[locale]}</p>
                  {certification.expires && <p>{certification.expires[locale]}</p>}
                  {certification.description && <p>{certification.description[locale]}</p>}
                  {certification.credentialUrl && <a className="font-medium underline" href={certification.credentialUrl} rel="noreferrer" target="_blank">{certification.credentialUrl}</a>}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section aria-labelledby="contact-heading" className="pt-15" id="contact">
          <h2 className="section-heading" id="contact-heading">{ui.sections.contact}</h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-lg font-semibold">
            {profile.contactLinks.map((link) => {
              const url = link.url[locale];
              const isEmailLink = url.startsWith("mailto:");

              return <li key={link.label.en}><a className="underline" href={url} rel={isEmailLink ? undefined : "noreferrer"} target={isEmailLink ? undefined : "_blank"}>{link.label[locale]}</a></li>;
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
