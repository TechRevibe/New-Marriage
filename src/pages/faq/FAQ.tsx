import Hero from "../../components/global/herosection/Hero1";
import FaqAccordion from "./components/FaqAccordion";
import FaqCTA from "./components/FaqCTA";
import FaqIntro from "./components/FaqIntro";
import img from "../../assets/hero/newlyweds.jpg";



const faqs = [
  {
    question: "What does a marriage celebrant do?",
    answer:
      "A marriage celebrant officiates and conducts your wedding ceremony, ensuring all legal requirements are met while creating a meaningful and personalised ceremony that reflects your relationship.",
  },
  {
    question: "How far in advance should we book our celebrant?",
    answer:
      "It is recommended to book your celebrant as early as possible, especially during popular wedding seasons. Many couples book 6–12 months in advance to secure their preferred date.",
  },
  {
    question: "Do you help with the legal paperwork?",
    answer:
      "Yes. Your celebrant will guide you through all the necessary legal documents and ensure everything is completed correctly before and after the ceremony.",
  },
  {
    question: "Can we personalise our wedding ceremony?",
    answer:
      "Absolutely. Your ceremony can be tailored to reflect your story, values, and traditions. You can include personal vows, readings, cultural rituals, or any meaningful elements.",
  },
  {
    question: "Can you perform small or elopement ceremonies?",
    answer:
      "Yes. Celebrants can conduct everything from intimate elopements with just two witnesses to larger traditional wedding ceremonies.",
  },
  {
    question: "Do you travel to different locations for ceremonies?",
    answer:
      "Yes, ceremonies can be performed at a variety of locations including beaches, parks, private venues, and homes. Travel arrangements may apply depending on the distance.",
  },
];

export default function Faq() {
  return (
    <>
      <Hero
        heading="Frequently Asked Questions"
        para="Everything you need to know about our services and process."
        bgImage={img}
      />
 
      <FaqIntro />
      <FaqAccordion faqs={faqs} />
    
      <FaqCTA />
    </>
  );
}