import Head from "./Head";

const MainWrapper = ({ children, heading, styling, ...props }) => {
  return (
    <>
      <Head heading={heading} />
      <main
        className={
          " relative before:animate-grain before:overflow-hidden before:-z-10 before:opacity-50 before:fixed before:top-[-110%] before:-left-1/2 before:h-[300%] before:w-[300%] before:bg-[url(/images/noise.webp)] " +
          styling
        }
        {...props}
      >
        {children}
      </main>
    </>
  );
};

export default MainWrapper;
