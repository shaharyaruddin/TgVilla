
export default function SectionContainer({ children, id }) {
  return <section id={id} className="container max-w-6xl mx-auto px-4 py-5 md:py-10">{children}</section>;
}

