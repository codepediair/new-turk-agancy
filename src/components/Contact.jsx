const Contact = () => {
  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Contact
        </span>{" "}
        With Us
      </h1>
      <p className="text-center text-gray-500 max-w-89 text-center mb-8 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quid
      </p>

      <form className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Name"
              placeholder="You'r Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="Email"
              placeholder="You'r Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Add your massage"
            required
          ></textarea>
          <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
