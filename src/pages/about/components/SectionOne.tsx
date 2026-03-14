import img from "../../../assets/hero/newlyweds.jpg";
import ContentWrapper from "../../../components/global/ContentWrapper";

const SectionOne: React.FC = () => {
  return (
    <section
  className="section-main relative flex items-center justify-center text-center min-h-screen"
  style={{
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  <ContentWrapper>
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">
      <h2 className="text-4xl font-bold mb-4">About Us</h2>
      <p className="max-w-3xl">
        Nirava Wedding and Event Management, your partners in crafting
        unforgettable moments. Welcome to Nirava Wedding and Event
        Management, where dreams come alive and memories are meticulously
        crafted.
        <br />
        <br />
        With expertise, we have successfully orchestrated 20+ events.
        Trust us to transform your vision into an extraordinary reality.
      </p>
    </div>
  </ContentWrapper>
</section>
  );
};

export default SectionOne;
