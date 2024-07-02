import React from 'react';

const Footer = () => {
  return (
    <section className="pt-16 pb-7 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between pb-14 border-b border-gray-500 gap-8">
          <a href="https://pagedone.io/" className="">
            <img src="path/to/logo.png" alt="Pagedone Logo" className="w-24 h-auto" />
          </a>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" className="p-3 rounded-full bg-white text-gray-700 group transition-all duration-500 hover:bg-amber-500 hover:text-white focus:outline-none">
            </a>
            <a href="https://instagram.com" className="p-3 rounded-full bg-white text-gray-900 group transition-all duration-500 hover:bg-amber-500 hover:text-white focus:outline-none">
            </a>
            <a href="https://twitter.com" className="p-3 rounded-full bg-white text-gray-700 group transition-all duration-500 hover:bg-amber-500 hover:text-white focus:outline-none">
            </a>
            <a href="https://youtube.com" className="p-3 rounded-full bg-white text-gray-700 group transition-all duration-500 hover:bg-amber-500 hover:text-white focus:outline-none">
            </a>
          </div>
        </div>
        <div className="py-14 flex flex-col lg:flex-row justify-between gap-8 border-b border-gray-500">
          <div className="w-full max-lg:mx-auto flex flex-col sm:flex-row max-lg:items-center max-lg:justify-between gap-6 md:gap-12 lg:gap-24">
            <div className="">
              <h6 className="text-lg font-medium text-white mb-7 max-lg:text-center">Pagedone</h6>
              <ul className="flex flex-col max-lg:items-center gap-6">
                <li><a href="/home" className="text-base font-normal max-lg:text-center text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus:outline-none">Home</a></li>
                <li><a href="/about" className="text-base font-normal max-lg:text-center text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus:outline-none">About</a></li>
                <li><a href="/pricing" className="text-base font-normal max-lg:text-center text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus:outline-none">Pricing</a></li>
                <li><a href="/pro-version" className="text-base font-normal max-lg:text-center text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus:outline-none">Pro Version</a></li>
              </ul>
            </div>
            <div className="">
              <h6 className="text-lg font-medium text-white mb-7 max-lg:text-center">Products</h6>
              <ul className="flex flex-col gap-6 max-lg:items-center">
                <li><a href="/figma-ui-system" className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus:outline-none">Figma UI System</a></li>
                <li><a href="/icons-assets" className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus:outline-none">Icons Assets</a></li>
                <li><a href="/responsive-blocks" className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus:outline-none">Responsive Blocks</a></li>
                <li><a href="/components-library" className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus:outline-none">Components Library</a></li>
              </ul>
            </div>
            <div className="">
              <h6 className="text-lg font-medium text-white mb-7 max-lg:text-center">Resources</h6>
              <ul className="flex flex-col gap-6 max-lg:items-center">
                <li><a href="/faqs" className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus:outline-none">FAQs</a></li>
                <li><a href="/quick-start" className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus:outline-none">Quick Start</a></li>
                <li><a href="/documentation" className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus:outline-none">Documentation</a></li>
                <li><a href="/user-guide" className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus:outline-none">User Guide</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:max-w-md max-lg:mx-auto">
            <h6 className="text-lg font-medium text-white mb-7">Newsletter</h6>
            <div className="bg-gray-800 rounded-3xl p-5">
              <form action="#" className="flex flex-col gap-5">
                <div className="relative">
                  <label className="flex items-center mb-2 text-gray-400 text-base font-medium">Email</label>
                  <input type="email" id="email" className="block w-full px-5 py-3 text-lg font-normal shadow-xs text-white bg-transparent border border-gray-400 rounded-full placeholder-gray-400 focus:outline-none leading-relaxed focus:border-gray-300" placeholder="harsh@pagedone.com" required />
                </div>
                <div className="flex flex-col min-[540px]:flex-row items-center justify-between gap-3">
                  <div className="flex items-start">
                    <input id="privacy-policy" type="checkbox" value="" className="w-5 h-5 aspect-square appearance-none cursor-pointer border border-gray-600 bg-transparent rounded-md mr-2 hover:border-gray-400 hover:bg-gray-900 checked:bg-no-repeat checked:bg-center checked:border-gray-400 checked:bg-gray-800" required />
                    <label htmlFor="privacy-policy" className="text-sm font-normal cursor-pointer text-gray-400">
                      I agree with <a href="/privacy-policy" className="text-amber-500">Privacy Policy</a> and <a href="/terms-conditions" className="text-amber-500">Terms of Condition</a>
                    </label>
                  </div>
                  <input type="submit" value="Send" className="text-white text-base font-semibold py-3 px-7 rounded-full cursor-pointer bg-amber-500 transition-all duration-500 hover:bg-white hover:text-gray-900" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5 pt-7">
          <span className="text-sm font-normal text-gray-400">
            <a href="https://pagedone.io/" className="">©pagedone</a> 2023, All rights reserved.
          </span>
          <div className="relative text-gray-500 focus:text-gray-900">
            <div className="absolute inset-y-0 right-6 flex items-center pl-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M16.8192 5.15193L17.3925 4.59395L17.3836 4.58478L17.3743 4.5759L16.8192 5.15193ZM19.25 10.9796L20.0499 10.9904L20.0501 10.9776L20.0499 10.9648L19.25 10.9796ZM16.8481 16.8192L17.4061 17.3925L17.4152 17.3836L17.4241 17.3743L16.8481 16.8192ZM5.18083 16.8481L4.60755 17.4061L4.61641 17.4152L4.62528 17.4241L5.18083 16.8481ZM2.75 11.0204L1.95013 11.0096L1.94987 11.0224L1.95013 11.0352L2.75 11.0204ZM5.15193 5.18083L4.59395 4.60755L4.58478 4.61641L4.5759 4.62528L5.15193 5.18083ZM16.246 5.70991L18.6767 10.5376L19.8233 10.4213L17.3925 5.59395L16.246 5.70991ZM18.4501 10.9687L16.4782 16.7983L17.624 16.9117L19.5959 11.082L18.4501 10.9687ZM16.2901 16.2458L5.6228 16.8496L5.73877 18.9965L16.4061 18.3925L16.2901 16.2458ZM5.75453 16.6584L3.32384 11.8307L2.17724 11.947L4.60755 16.7747L5.75453 16.6584ZM3.54993 11.0313L5.52183 5.20175L4.37603 5.08831L2.40413 10.9179L3.54993 11.0313ZM5.70991 5.75453L16.3772 5.15074L16.2612 3.00354L5.59395 3.60755L5.70991 5.75453ZM16.8132 4.59395C16.1235 3.92526 15.1044 3.66331 14.1503 3.87706C13.1962 4.09081 12.4242 4.74441 12.1213 5.60957L18.6767 10.5376C18.663 10.5054 18.6488 10.4734 18.634 10.4417L16.8132 4.59395ZM19.25 10.9648C19.25 9.87891 18.8892 8.8225 18.2375 8.00885L12.682 12.9369C13.1373 13.5875 13.8412 14.0374 14.6463 14.2023C15.4514 14.3672 16.2838 14.2265 16.9353 13.8125L19.25 10.9648ZM17.4241 17.3743C17.707 17.6496 18.0623 17.8421 18.454 17.9284C18.8456 18.0146 19.256 17.9904 19.6362 17.8585C20.0164 17.7267 20.3506 17.4934 20.6025 17.1862C20.8544 16.8791 21.0143 16.5097 21.0636 16.1204C21.113 15.731 21.0495 15.3366 20.8792 14.9757C20.7089 14.6149 20.438 14.3011 20.0958 14.0713C19.7537 13.8414 19.3503 13.7063 18.9341 13.6834C18.5178 13.6604 18.1075 13.7502 17.7398 13.9439C17.3721 14.1376 17.0595 14.4282 16.832 14.7858C16.6045 15.1434 16.4695 15.5561 16.438 15.9815C16.4065 16.4068 16.4792 16.834 16.6481 17.2296L17.4241 17.3743ZM5.15193 16.8192L3.33104 10.9714C2.6433 11.6413 2.2813 12.6966 2.25 13.7578C2.2187 14.8191 2.52289 15.863 3.10265 16.7021L5.15193 16.8192ZM5.18083 5.15193L10.7363 10.08C11.1916 9.42939 11.8954 8.97943 12.7005 8.81455C13.5056 8.64967 14.3381 8.79043 14.9896 9.20436L17.3048 11.0511C16.9885 10.5407 16.6363 10.0784 16.2603 9.68398L12.1213 5.60957C11.728 4.81184 11.1016 4.17692 10.3295 3.7896C9.55738 3.40229 8.6833 3.28339 7.83252 3.45203C6.98173 3.62067 6.19284 4.06645 5.55952 4.73487C4.9262 5.40328 4.47515 6.26888 4.25315 7.20369L5.15193 5.15193ZM16.2901 16.2458C15.6035 15.5752 14.5597 15.2172 13.515 15.3146C12.4703 15.4119 11.5524 15.9444 11.0448 16.7388L5.6228 16.8496C6.37711 17.7806 7.45422 18.3224 8.564 18.3224C9.67378 18.3224 10.7509 17.7806 11.5052 16.8496L16.2901 16.2458ZM16.8132 16.8123C16.8036 16.8018 16.7942 16.7912 16.785 16.7806L14.9327 14.6886C14.9423 14.6991 14.9516 14.7097 14.9606 14.7204L16.8132 16.8123ZM18.4501 10.9687C18.4611 10.9518 18.472 10.9347 18.4827 10.9176L17.4061 10.9734C17.3961 10.9881 17.3862 11.0028 17.3763 11.0175L18.4501 10.9687Z" fill="#FFD700" />
              </svg>
            </div>
            <select className="block w-full pl-3 pr-10 py-3 text-base leading-normal border border-gray-600 rounded-lg bg-transparent appearance-none focus:outline-none focus:border-gray-400">
              <option className="text-black">English</option>
              <option className="text-black">Español</option>
              <option className="text-black">Français</option>
              <option className="text-black">Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
