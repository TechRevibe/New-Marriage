import { Link } from "react-router-dom";
import frame from "../../../assets/hero/rose.png";
import ContentWrapper from "../../../components/global/ContentWrapper";
import { useScrollAnimation } from "../../../components/global/animation/useScrollAnimation";

const AboutUs = () => {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="section-main bg-black justify-center relative overflow-hidden">
      <ContentWrapper>
        {/* Decorative PNG Frame */}
        <img
          src={frame}
          alt="decorative frame"
          className="absolute -bottom-5 -left-5 w-32 sm:w-40 md:w-44 lg:w-52 opacity-80 pointer-events-none select-none"
        />

        <div
          ref={ref}
          className={`relative flex flex-col md:flex-row transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* LEFT SIDE - TITLE */}
          <div className="md:w-2/3 w-full mb-10 md:mb-0 flex items-center justify-center md:justify-center text-center md:text-left">
            <h2 className="heading-font heading-lg text-white">
              About <br />
              <span className="text-primary text-5xl sm:text-6xl md:text-7xl">
                Nirava
              </span>
            </h2>
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="w-full md:pl-8 text-center md:text-left">
            <p className="text-white leading-relaxed mb-6 text-sm sm:text-base">
              Hello !  I’m Niru Chhetri KC, a Certified Celebrant with a passion
              for creating ceremonies that will remain in your heart and memory
              forever. With a thriving background in celebrancy and a deep
              commitment to personalised service, I believe every ceremony
              should be as unique as the people at its centre.
              
              <br/> <br/> Your special
              moments deserve to be celebrated in a way that truly reflects your
              story, your values, and the journey that brought you to this
              meaningful day. Whether you are celebrating love, welcoming new
              life, honouring a milestone, or saying farewell to a loved one, my
              role is to guide and support you in creating a ceremony that feels
              genuine, heartfelt, and memorable. 
              
              <br/> <br/> 
              I take the time to understand
              your vision and craft a ceremony that captures the emotions,
              traditions, and personal touches that matter most to you. My
              approach is warm, thoughtful, and professional. From our first
              conversation to the moment your ceremony begins, I work closely
              with you to ensure every detail is carefully planned and delivered
              with care and authenticity. It is truly an honour to be part of
              life’s most meaningful occasions, and I am dedicated to helping
              you create a ceremony that not only celebrates the moment but also
              becomes a cherished memory for years to come.
              </p>

            <p className="text-white leading-relaxed mb-8 text-sm sm:text-base">
              Every detail is carefully crafted to reflect your love story and
              make your celebration timeless.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link to="/contact">
                <button className="btn-primary">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default AboutUs;
