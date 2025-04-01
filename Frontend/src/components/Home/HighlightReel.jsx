import ScrollVelocityCarousel from "../Animations/scrollVelocityCarousel";

const HighlightReel = ({ reelImg, angle, baseVelocity, classes }) => {
  return (
    <div className={classes}>
      <ScrollVelocityCarousel baseVelocity={baseVelocity} angle={angle}>
        <div className="flex gap-8 p-8">
          {reelImg.map((img, idx) => {
            return (
              <div
                className="h-[6.9rem] w-48 sm:h-44 sm:w-60 md:h-52 md:w-72 lg:h-[45vh] lg:w-[32vw] relative "
                key={idx}
              >
                <img
                  src={img.src}
                  // fill
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

export default HighlightReel;
