import GridImage from "./GridImage";

const ParallaxGridItem = ({ src, ...props }) => (
  <div className="relative overflow-hidden" {...props}>
    <div className="relative w-full h-[160%]" data-speed="auto">
      <GridImage src={src} />
    </div>
  </div>
);

export default ParallaxGridItem;
