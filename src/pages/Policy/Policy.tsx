import React from "react";
import ContentWrapper from "../../components/global/ContentWrapper";

const Policy = () => {
  return (
    <ContentWrapper>
   <div className="section-main bg-[var(--color-bg-soft)] mt-24 py-12 px-6 sm:px-8 md:px-8 lg:px-16">
  <div className="max-w-5xl mx-auto">

    <h1 className="text-2xl sm:text-3xl font-bold mb-6">
      Terms and Conditions
    </h1>

    <p className="mb-6 text-gray-700 text-sm sm:text-base leading-relaxed">
      Welcome to our website. These Terms and Conditions outline the rules
      and regulations for using our services and website. By accessing this
      website or booking a service, you agree to comply with these terms.
    </p>

    <section className="mb-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">1. Services</h2>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        Our celebrant services are designed to create meaningful and
        personalised ceremonies. Services may include wedding ceremonies,
        vow renewals, naming ceremonies, memorials, and other life events.
        All services will be discussed and agreed upon prior to the ceremony.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">2. Bookings</h2>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        A booking is confirmed once both parties agree to the service and any
        required deposit has been received. We recommend booking well in
        advance to secure your preferred date.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">3. Payments</h2>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        Payment terms will be communicated at the time of booking. The final
        balance must be paid prior to the ceremony date unless otherwise
        agreed. Failure to complete payment may result in cancellation of the
        service.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">4. Cancellations</h2>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        If you need to cancel or reschedule your ceremony, please notify us as
        soon as possible. Cancellation policies, including refunds, may vary
        depending on the timing of the cancellation and the work already
        completed.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">
        5. Client Responsibilities
      </h2>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        Clients are responsible for providing accurate information required
        for the ceremony. Any legal requirements related to marriage or other
        ceremonies must be completed in accordance with applicable laws.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">
        6. Changes to Services
      </h2>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        We reserve the right to make reasonable adjustments to services when
        necessary. Any significant changes will be communicated to the client
        in advance.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">7. Liability</h2>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        While we make every effort to ensure a smooth and meaningful ceremony,
        we are not responsible for circumstances beyond our control, including
        venue issues, weather conditions, or third-party services.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">8. Privacy</h2>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        Personal information collected during bookings will only be used to
        provide and manage our services. We respect your privacy and will not
        share your information with third parties without consent unless
        required by law.
      </p>
    </section>

    <section>
      <h2 className="text-lg sm:text-xl font-semibold mb-2">9. Contact</h2>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        If you have any questions about these Terms and Conditions, please
        contact us through our website contact form.
      </p>
    </section>

  </div>
</div>

    </ContentWrapper>
  );
};

export default Policy;