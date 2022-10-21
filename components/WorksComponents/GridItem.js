import GridImage from "./GridImage";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const GridItem = forwardRef(({ src, alt, className, ...props }, ref) => {
  return (
    <div
      className={className + " relative overflow-hidden"}
      {...props}
      ref={ref}
    >
      <GridImage alt={alt} src={src} />
    </div>
  );
});

export default GridItem;
