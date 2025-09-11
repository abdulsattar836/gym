import Card from "../components/card";

const carddata = [
  {
    no: "01",
    title: "PERSONAL TRAINING",
    desc: "Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals.",
  },
  {
    no: "02",
    title: "EQUIPMENT AND FACILITIES",
    desc: "Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals.",
  },
  {
    no: "03",
    title: "NUTRITION COUNSELING",
    desc: "Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals.",
  },
  {
    no: "04",
    title: "SPECIALITY PROGRAMS",
    desc: "Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals.",
  },
];

const CardSection = () => {
  return (
    <section className="w-full mx-auto px-4 py-12 space-y-16 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Section 1 */}
        <div className="space-y-6 text-center ">
          <h2
            className="text-4xl md:text-7xl font-bold text-white "
            style={{
              fontWeight: 500,
              fontFamily: "Bebas Neue",
              letterSpacing: "1px",
            }}
          >
            WHY <span className="text-[#FF0000]">CHOOSE US</span>
          </h2>
          <p
            className=" text-white text-sm"
            style={{
              fontFamily: "Poppins",
              fontWeight: "300",
            }}
          >
            Gym workouts offer a versatile and customisable experience, allowing
            <br />
            everyone to set specific fitness goals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-8 ">
          {/* md:grid-cols-4 */}
          {carddata.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
