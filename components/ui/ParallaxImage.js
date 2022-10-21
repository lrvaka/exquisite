import NextImage from "next/image";

const ParallaxImage = ({ src, alt, ...props }) => {
  return (
    <div className="absolute w-full h-[160%]" data-speed="auto" {...props}>
      <NextImage
        alt={alt}
        sizes="50vw"
        priority="true"
        placeholder="blur"
        layout="fill"
        objectFit="cover"
        src={src}
      />
    </div>
  );
};

export default ParallaxImage;
