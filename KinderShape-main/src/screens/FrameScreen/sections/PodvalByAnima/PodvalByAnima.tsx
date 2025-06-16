import React from "react";

export const PodvalByAnima = (): JSX.Element => {
  // Define footer navigation data for better maintainability
  const footerNavigation = [
    {
      title: "продукт",
      links: [
        "о нас",
        "ресурсы",
        "галерея",
        "что нового",
        "партнёрские отношения",
      ],
    },
    {
      title: "поддержка",
      links: ["техническая поддержка", "условия использования продукта"],
    },
    {
      title: "свяжитесь с нами",
      links: ["TG", "ВК", "Rutube", "форум"],
    },
  ];

  return (
    <footer className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 min-h-[320px] bg-gradient-to-t from-[#e17b06] via-[#f9ae33] to-[#34a465] flex flex-col items-center justify-center px-0 pt-8 pb-2">
      <div className="flex flex-col md:flex-row items-center md:items-end justify-center w-full max-w-[1200px] gap-6 md:gap-12">
        <div className="flex-shrink-0 flex items-center justify-center md:items-end md:justify-end mb-4 md:mb-0">
          <img
            className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] object-contain mb-2"
            alt="A low poly style"
            src="/a-low-poly-style-image-of-a-boy-walking--dmiev-fmqz2wigzjngkyzw-.png"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-16 w-full justify-center items-center md:items-start">
          {footerNavigation.map((category, index) => (
            <div key={index} className="flex flex-col items-center md:items-start">
              <h3 className="font-andika text-[#e84d4d] text-base text-center md:text-left mb-3">
                {category.title}
              </h3>
              <ul className="flex flex-col items-center md:items-start gap-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="font-andika text-white text-[13px] text-center md:text-left whitespace-nowrap font-normal hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full text-center mt-8 text-white text-xs font-andika opacity-80 px-2">
        © {new Date().getFullYear()} KinderShape. Все права защищены.
      </div>
    </footer>
  );
};
