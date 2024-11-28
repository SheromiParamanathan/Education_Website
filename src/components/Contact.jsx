import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">

      <div className="text-center" data-aos="fade-down" data-aos-delay="50">
        <h2 className="text-4xl font-bold leading-tight primary-color">Contact Us</h2>
        <p className="mt-3 text-center text-gray-400">
        For any inquiries or assistance, feel free to contact us via email or phone. We're here to answer your questions 
        and support you in achieving your educational goals. We value your feedback and look forward to hearing from you.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="mt-10 bg-[#161616] rounded-xl">
          <div className="p-10">

            <form action="#" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
                <div>
                  <div className="mt-2.5 relative">
                    <input type="text" name="name" placeholder="Your Name"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border-gray-700 rounded-md focus:outline-none focus:border-pink-600" />
                  </div>
                </div>

                <div>
                  <div className="mt-2.5 relative">
                    <input type="text" name="email" placeholder="Your Email"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border-gray-700 rounded-md focus:outline-none focus:border-pink-600" />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="mt-2.5 relative">
                    <textarea name="message" placeholder="Your Message"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border-gray-700 rounded-md focus:outline-none focus:border-pink-600">
                    </textarea>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button type="submit" className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
                    Send Message
                  </button>
                </div>

              </div>
            </form>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;
