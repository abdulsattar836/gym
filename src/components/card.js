// Card.jsx

const Card = ({ no, title, desc }) => {
  return (
    <div className="flex flex-col justify-between bg-[#121212] text-left p-6  h-full tracking-wider border  border-[#FF0000]">
      <div>
        <p
          className="text-2xl font-bold mb-3 text-white"
          style={{
            fontFamily: "Bebas Neue",
            fontWeight: 300,
          }}
        >
          {no}
        </p>
        <h3
          className="text-xl font-bold mb-2 text-[#FF0000]"
          style={{
            fontFamily: "Bebas Neue",
            fontWeight: 300,
          }}
        >
          {title}
        </h3>
        <p
          className="text-white"
          style={{
            fontFamily: "Poppins",
            fontWeight: "300",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Card;
