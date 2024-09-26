const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h1>

        <p className="text-gray-600 mb-8 text-center">
          We'd love to hear from you! Please fill out the form below or reach us
          via the information provided.
        </p>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Email:{" "}
            <span className="font-medium text-gray-800">info@company.com</span>
          </p>
          <p className="text-gray-600">
            Phone:{" "}
            <span className="font-medium text-gray-800">+1 (123) 456-7890</span>
          </p>
          <p className="text-gray-600">
            Address:{" "}
            <span className="font-medium text-gray-800">
              123 Street Name, City, Country
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
