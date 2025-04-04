import ScrollVelocityCarousel from "../Animations/scrollVelocityCarousel";

const Reel = ({ reelImg, angle, baseVelocity, classes }) => {
  return (
    <div className={classes}>
      <ScrollVelocityCarousel baseVelocity={baseVelocity} angle={angle}>
        <div className="flex gap-2 bg-gray-600/80 p-2">
          {reelImg.map((img, idx) => {
            return (
              <div
                className="h-[6.9rem] w-48 sm:h-44 sm:w-60 md:h-52 md:w-72 lg:h-[31vh] lg:w-96 relative "
                key={idx}
              >
                <img
                  src={img.src}
                  fill
                  className="object-cover object-center rounded-md"
                  alt={`reel-image-${idx}`}
                />
              </div>
            );
          })}
        </div>
      </ScrollVelocityCarousel>
    </div>
  );
};

export default Reel;
