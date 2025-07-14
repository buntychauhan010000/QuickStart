{
  faqs.map((faq, index) => {
    const isActive = activeIndex === index;
    return (
      <div
        key={index}
        className={`border border-gray-300 rounded-md mb-3 overflow-hidden transition-all duration-300 ${
          isActive ? "bg-blue-50" : "bg-white"
        }`}
      >
        <button
          onClick={() => toggle(index)}
          className={`w-full flex justify-between items-center font-semibold font-nunito text-left px-4 py-3 focus:outline-none transition-all duration-500 ${
            isActive ? "text-primary font-semibold" : "text-secondary"
          }`}
        >
          <span>{faq.question}</span>
          <GoChevronRight
            className={`w-5 h-5 ms-2 transform transition-transform duration-300 ${
              isActive ? "rotate-90 text-primary" : "rotate-0"
            }`}
          />
        </button>

        {/* Answer content (animated height) */}
        <div
          className={`px-4 text-gray-700 transition-all duration-1000 ease-in-out overflow-hidden ${
            isActive ? "max-h-40 pb-4" : "max-h-0"
          }`}
        >
          <div className="py-2">{faq.answer}</div>
        </div>
      </div>
    );
  });
}
