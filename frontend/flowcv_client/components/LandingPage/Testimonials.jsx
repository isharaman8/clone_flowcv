"use client";

import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Smith",
      content: "Praesent ac lorem ac justo euismod rutrum.",
    },
    {
      name: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Smith",
      content: "Praesent ac lorem ac justo euismod rutrum.",
    },
    {
      name: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Smith",
      content: "Praesent ac lorem ac justo euismod rutrum.",
    },
    {
      name: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Smith",
      content: "Praesent ac lorem ac justo euismod rutrum.",
    },
  ];

  return (
    <div className="bg-[#F9F5EB]">
      <section className="pt-4 md:pt-8 pb-12 lg:pt-28 lg:pb-28 flex flex-col justify-center items-center overflow-hidden">
        <h2 className="text-3xl xl:text-4xl font-extrabold">
          Don’t just take our word for it
        </h2>
        <p className="mt-4 leading-relaxed md:text-xl text-gray-500">
          We are happy when our users are happy
        </p>
        <div className="pt-[4rem]">
          <Marquee loop={100} speed={100}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className=" bg-white mx-4 px-5 py-6 rounded-md shadow-lg w-[18rem]"
              >
                <p className="text-gray-600">{testimonial.content}</p>
                <h3 className="text-lg font-bold mb-2 mt-8">
                  {testimonial.name}
                </h3>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
