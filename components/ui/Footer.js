const Footer = ({
  bgColor = "bg-theme-100",
  borderColor = "border-t-theme-200",
  textColor = "text-black",
}) => (
  <div
    className={
      "z-10 relative flex py-8 justify-center text-xs md:text-md border-t-[1px] border-t-solid " +
      bgColor +
      " " +
      borderColor +
      " " +
      textColor
    }
  >
    <span>© 2022 Exquisite Wood Floors NY. |</span>
    <a href="https://blockhead.digital/" target="_blank" rel="noreferrer">
      &nbsp;Website by Blockhead Digital
    </a>
  </div>
);

export default Footer;
