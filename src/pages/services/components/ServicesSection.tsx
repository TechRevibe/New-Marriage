import img1 from "../../../assets/hero/figma-image16.png";
import img2 from "../../../assets/hero/figma-image15.png";
import img3 from "../../../assets/hero/figma-image17.png";
import img from "../../../assets/hero/figma-image21.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import BookAppointmentModal from "../../../components/global/book-appointment/BookAppointmentModal";

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Commitment Ceremonies",
      para: "It's an opportunity for couples to declare their love and commitment in front of close friends and family, without the necessity of legal documentation.It allows you to celebrate your relationship in a personal and meaningful way, creating a ceremony that truly reflects your unique story and values.",
      image: img1,
    },
    {
      title: "Wedding Ceremonies",
      para: "I want you to relax and enjoy yourself while I take care of the details the right words and the legals. Nothing makes me happier than a relaxed smiling couple having the best day of their lives. I love being part of a beautiful elopement ceremony. All we need is just you, me, two witnesses for simple ceremony but the celebration will happen upon your desire.",
      image: img2,
    },
    {
      title: "Renewal of Vows",
      para: "A renewal of vows ceremony can be held whenever you would like, significant anniversary is the perfect opportuning for renewing your vows. However, there can be many other specials times in your life that would be fitting to recommit, renew and celebration with your family and friends or simply two of you.",
      image: img3,
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full">
      {/* ================= SERVICES AREA ================= */}
      <div className="section-main bg-[var(--color-bg-soft)]">
        <div className="container-main text-center">
          {/* Heading */}
          <h2 className="heading-font heading-lg text-primary mb-4">
            Our Services
          </h2>

          <p className="text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            We don’t just plan events, we create experiences that live forever.
            <br />
            Your wedding or celebration is a chapter in your love story, and we
            ensure every detail reflects you.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className="text-center max-w-sm mx-auto">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[420px] object-cover rounded-[var(--radius-md)] shadow-md"
                />

                <h3 className="mt-6 text-lg font-semibold text-secondary">
                  {service.title}
                </h3>

                <p className="text-muted mt-3 leading-relaxed text-sm">
                  {service.para}
                </p>

                {/* Button */}
                <div className="mt-5">
                  <button onClick={() => setOpen(true)} className="btn-primary">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Note Section */}
          <div className="mt-16 flex justify-center">
            <div className="bg-[var(--color-bg-soft)] rounded-xl px-6 py-5 max-w-xl text-center shadow-sm">
              <p className="italic text-sm text-gray-600 leading-relaxed">
                Every service includes an initial consultation, planning and
                conducting of the ceremony. Additional costs may apply for
                travel and special requests.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CTA AREA ================= */}
      <div
        className="relative section-main text-center"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container-main relative z-10 flex flex-col items-center text-white">
          <h3 className="heading-font text-2xl md:text-4xl mb-4 leading-snug">
            Dreaming of a picture-perfect event?
          </h3>

          <p className="mb-8 text-white/80">We’ve got it covered.</p>

          <Link to="/contact">
            <button className="btn-primary">CONTACT NOW</button>
          </Link>
        </div>
      </div>
      <BookAppointmentModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default ServicesSection;
