const WhyUsSectionItem = ({ bgColor, color, children }) => {
  return (
    <div
      className={
        "flex absolute w-full h-full justify-center items-center px-4 " +
        bgColor
      }
    >
      <p
        className={
          "text-4xl xl:text-5xl 2xl:text-7xl font-medium text-center " + color
        }
      >
        {children}
      </p>
    </div>
  );
};

export default WhyUsSectionItem;
