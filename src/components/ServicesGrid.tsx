import type { Service } from "@/lib/services";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";

export default function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <section id="hizmetler" className="container-x py-20 lg:py-28">
      <SectionHeading
        center
        eyebrow="Hizmetlerimiz"
        title="Her taşıma ihtiyacınıza tek çatı altında çözüm"
        description="Evden eve nakliyattan şehirler arası yük taşımacılığına, paketlemeden depolamaya kadar her adımda yanınızdayız."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 60} className="h-full">
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
