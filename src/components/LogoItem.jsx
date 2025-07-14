const LogoItem = ({ item, id }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={id * 200}
      className="flex justify-center items-center grayscale brightness-110 contrast-75 opacity-60 hover:grayscale-0 hover:brightness-100 hover:contrast-100 hover:opacity-100 transition-all duration-200"
    >
      <img
        src={item.src}
        alt={`${item.name} logo`}
        className="h-9 lg:h-12 w-auto"
      />
    </div>
  );
};

export default LogoItem;
