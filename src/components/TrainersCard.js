export default function TrainerCard({ img, name, role, rating }) {
  return (
    <div className="relative w-full h-80 border border-red-500 overflow-hidden shadow-lg">
      {/* Background Image */}
      <img src={img} alt={name} className="w-full h-full object-cover" />

      {/* Overlay Text */}
      <div className="absolute bottom-0 w-full h-1/3 bg-black bg-opacity-80 flex flex-col justify-center items-center p-4">
        <h3
          className="text-4xl md:text-2xl font-bold text-white mb-2"
          style={{
            fontWeight: 500,
            fontFamily: "Bebas Neue",
            letterSpacing: "1px",
          }}
        >
          {name}
        </h3>
        <p
          className=" text-white text-xs"
          style={{
            fontFamily: "Poppins",
            fontWeight: "300",
          }}
        >
          {role}
        </p>
        <div className="flex">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
