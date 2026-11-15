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
      {/* 6 sütunlu ızgara, kart başına 2 sütun: kart sayısı 3'e bölünmezse son satır ortalanır. */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {services.map((service, i) => (
          <Reveal
            key={service.slug}
            delay={i * 60}
            className={`h-full lg:col-span-2${
              services.length % 3 === 2 && i === services.length - 2 ? " lg:col-start-2" : ""
            }`}
          >
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
