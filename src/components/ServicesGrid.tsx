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
        description="Evden eve nakliyattan şehirler arası yük taşımacılığına, paketlemeden kuruluma kadar taşınmanın her adımını üstleniyoruz."
      />
      {/* Esnek satırlar: masaüstünde 3, tablette 2 kart; eksik kalan son satır ortalanır. */}
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {services.map((service, i) => (
          <Reveal
            key={service.slug}
            delay={i * 60}
            className="h-full w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
          >
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
