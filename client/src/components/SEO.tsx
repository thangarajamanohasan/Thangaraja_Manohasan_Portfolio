const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Thangaraja Manohasan",
  url: " https://thangaraja-manohasan-portfolio-y63u.vercel.app/",
  jobTitle: "Web Developer",
  description:
    "Web Developer and HNDIT undergraduate specializing in modern web development.",
  sameAs: [
    "https://github.com/thangarajamanohasan",
    "https://www.linkedin.com/in/thangaraja-manohasan-973871312/"
  ],
  knowsAbout: [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "PHP",
    "MySQL",
    "Web Development"
  ]
};

export default function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema)
      }}
    />
  );
}