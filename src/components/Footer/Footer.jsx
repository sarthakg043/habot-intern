import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <section className="relative overflow-hidden bg-teal-blue text-white py-8">
      <div className="container relative z-10 mx-auto px-4 py-9" style={{borderTop: "1px solid rgba(255,255,255,0.2)",borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <div className="w-auto p-8">
            <Link to={'/'}>
              <div className="inline-flex items-center">
              <svg width="206" height="41" viewBox="0 0 206 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M159.188 5.49549C161.917 5.53283 164.46 5.66354 164.983 5.77558C165.507 5.90628 166.722 6.3731 167.694 6.83992C169.19 7.53081 169.694 7.90425 170.872 9.0993C171.751 9.99559 172.536 11.0226 172.966 11.8442C173.34 12.5724 173.845 13.8235 174.088 14.6451C174.48 16.0269 174.499 16.5123 174.518 20.807C174.518 24.1121 174.443 25.7926 174.256 26.5956C174.106 27.2118 173.789 28.2201 173.527 28.8363C173.284 29.4525 172.76 30.4048 172.387 30.965C172.013 31.5251 171.34 32.3654 170.872 32.8322C170.405 33.2804 169.526 33.9899 168.909 34.3821C168.292 34.7742 167.32 35.2783 166.759 35.4837C166.198 35.7078 165.058 36.0066 164.236 36.156C163.039 36.38 161.674 36.4174 157.505 36.3427C154.215 36.3053 151.99 36.1746 151.523 36.0439C151.112 35.9132 150.308 35.6331 149.747 35.4277C149.186 35.2036 148.214 34.7182 147.597 34.326C146.98 33.9526 146.045 33.187 145.541 32.6268C145.017 32.0853 144.288 31.133 143.914 30.5168C143.54 29.9006 142.998 28.7242 142.718 27.9026C142.194 26.4462 142.194 26.2968 142.119 21.5539C142.063 17.6327 142.119 16.4376 142.344 15.2986C142.512 14.533 142.923 13.3193 143.26 12.5911C143.578 11.8815 144.232 10.8172 144.699 10.2383C145.167 9.65948 145.914 8.83789 146.382 8.42709C146.849 8.01629 147.765 7.4001 148.438 7.02664C149.111 6.65319 150.158 6.22372 150.775 6.05566C151.392 5.86894 152.439 5.66354 153.112 5.57018C153.785 5.49548 156.514 5.45814 159.188 5.49549ZM152.121 11.9189C151.579 12.0683 150.756 12.5164 150.252 12.9085C149.635 13.4127 149.186 13.9915 148.756 14.8692L148.158 16.1389V25.8487C148.924 27.4358 149.523 28.2388 149.971 28.6309C150.401 29.0417 151.243 29.5832 151.803 29.8446L152.832 30.3301H163.675C165.563 29.4338 166.385 28.8923 166.741 28.5375C167.077 28.1827 167.563 27.5292 167.788 27.0624C168.031 26.5956 168.311 25.7179 168.423 25.1018C168.535 24.4856 168.629 22.637 168.629 20.9938C168.629 19.3506 168.535 17.4833 168.442 16.8298C168.33 16.1949 168.087 15.3173 167.862 14.8878C167.638 14.4397 167.152 13.7675 166.778 13.3753C166.404 12.9832 165.731 12.4604 165.264 12.2176C164.796 11.9936 163.974 11.6948 163.432 11.5828C162.852 11.4707 160.758 11.396 158.197 11.396C155.86 11.4147 153.766 11.4707 153.523 11.5267C153.299 11.5828 152.663 11.7508 152.121 11.9189ZM37.951 5.9623H43.9334V17.9128H62.0675V5.9623H68.0499V36.0252L62.161 35.9319L62.0675 23.888H43.9334V36.0252L38.0445 35.9319L37.951 5.9623ZM101.42 6.05566L102.056 6.52248C102.411 6.7839 102.823 7.26938 102.953 7.60549C103.14 8.07231 103.196 11.0413 103.196 36.0252H97.401V28.7429H79.0799V36.0252L73.191 35.9319V27.4358C73.2097 21.0871 73.2658 18.6597 73.4527 17.8194C73.5836 17.2032 73.9014 16.1202 74.1631 15.392C74.4062 14.6637 74.8362 13.7114 75.0979 13.2446C75.3783 12.7778 75.9392 11.9562 76.3505 11.396C76.7804 10.8359 77.6591 9.9209 78.3321 9.37939C79.0051 8.83789 80.0895 8.09098 80.7625 7.7362C81.4355 7.40009 82.3515 6.97062 82.8189 6.80257C83.2863 6.63452 84.2023 6.3731 84.8754 6.24239C85.7914 6.05566 87.96 5.99965 101.42 6.05566ZM84.5949 12.5351C83.978 12.7778 83.0993 13.2446 82.632 13.5434C82.1646 13.8608 81.4916 14.4957 81.1177 14.9438C80.7438 15.392 80.239 16.1389 80.0147 16.6057C79.7903 17.0725 79.4912 17.9875 79.3417 18.6597C79.2108 19.3319 79.0799 20.527 79.0799 21.3299V22.7677H97.401L97.3075 11.8442C90.0726 11.8068 87.4553 11.8629 86.8383 11.9375C86.2214 12.0309 85.2119 12.2923 84.5949 12.5351ZM110.936 5.94363L131.519 6.05566L132.548 6.52248C133.108 6.7839 133.95 7.34408 134.417 7.77355C134.884 8.18435 135.501 8.98727 135.819 9.52878C136.305 10.4251 136.38 10.7425 136.436 12.4977C136.492 13.5807 136.417 14.9999 136.305 15.6721C136.193 16.3443 135.782 17.5207 134.697 19.6867L136.025 20.9938C136.847 21.7967 137.539 22.693 137.838 23.3279C138.1 23.888 138.455 24.8964 138.605 25.5686C138.773 26.2408 138.904 27.4918 138.904 28.3695C138.904 29.2471 138.773 30.4235 138.623 30.9836C138.474 31.5438 138.137 32.3467 137.894 32.7575C137.651 33.1683 137.016 33.9152 136.455 34.4007C135.875 34.9236 135.053 35.4277 134.511 35.6144C133.669 35.8945 132.417 35.9319 110.955 35.9319L110.263 35.5211C109.871 35.2783 109.403 34.8115 109.235 34.4941C108.917 33.9152 108.898 32.9069 108.898 20.8631C108.898 7.96027 108.898 7.84824 109.291 7.3254C109.515 7.04531 109.964 6.61585 110.319 6.3731L110.936 5.94363ZM114.769 30.05C130.454 30.05 132.51 29.994 132.697 29.8073C132.828 29.6765 132.921 29.0604 132.921 28.3134C132.903 27.6039 132.791 26.7449 132.622 26.3528C132.454 25.9794 132.136 25.4565 131.912 25.2138C131.688 24.971 131.164 24.5976 130.753 24.3735C130.042 24.0001 129.781 23.9814 123.144 23.9254L116.264 23.888V17.9128L127.762 17.8194C129.239 16.9792 129.594 16.587 129.968 15.8401C130.398 14.9999 130.491 14.5891 130.491 13.4687C130.472 12.311 130.435 12.0869 130.099 11.9375C129.874 11.8255 126.864 11.7508 122.247 11.7508H114.769V30.05ZM176.462 5.9623H206V11.7508H194.222V36.0252L188.333 35.9319L188.24 11.7508H176.462V5.9623Z" fill="white"/>
                <path d="M0 20.7135V40.6932H9.34748V0.733765H0V20.7135Z" fill="#072F57"/>
                <path d="M2.33718 40.8241C3.68322 40.8614 5.81444 40.8614 7.1044 40.8241C8.39435 40.8054 7.29135 40.7681 4.67405 40.7681C2.05675 40.7681 0.991142 40.8054 2.33718 40.8241Z" fill="#072F57"/>
                <path d="M11.5909 20.7136V40.6933H20.7514V0.733887H11.5909V20.7136Z" fill="#456381"/>
                <path d="M20.7514 20.7135V40.6932L11.4974 40.7866L20.9384 40.8799C20.9384 9.77132 20.901 0.733765 20.8449 0.733765C20.7888 0.733765 20.7514 9.7153 20.7514 20.7135Z" fill="#456381"/>
                <path d="M23.1821 20.7136V40.6933H32.3426V0.733887H23.1821V20.7136Z" fill="#8FB7E1"/>
                <path d="M32.3425 20.7135V40.6932L23.0884 40.7866L32.5294 40.8799C32.5294 9.77132 32.492 0.733765 32.4359 0.733765C32.3798 0.733765 32.3425 9.7153 32.3425 20.7135Z" fill="#8FB7E1"/>
                </svg>
              </div>
            </Link>
            <div className='pl-3 text-gray-300'>
                &copy; R Singhania
            </div>
          </div>
          <div className='relative flex flex-wrap justify-start items-start w-full md:w-1/2 lg:w-1/2 pl-4'>
            <div className="w-1/2 py-6 pl-6 md:pl-0 sm:w-1/3 md:w-2/7 xl:w-1/4 text-white">
                <div className="h-full">
                <h1 className="tracking-px mb-3  font-semibold ">
                    Company
                </h1>
                <ul className='font-light'>
                    <li className="mb-1">
                    <Link to={''} className=" text-base text-gray-400 hover:text-white" >
                        About
                    </Link>
                    </li>
                    <li className="mb-1">
                    <Link to={''} className=" text-base text-gray-400 hover:text-white">
                        FAQ
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
            <div className="w-1/2 py-6 sm:w-1/3 md:w-2/7 xl:w-1/4 text-white">
                <div className="h-full">
                <h1 className="tracking-px mb-3  font-semibold ">
                    Terms
                </h1>
                <ul className='font-light'>
                    <li className="mb-1">
                    <Link to={''} className=" text-base text-gray-400 hover:text-white" >
                        Data Privacy
                    </Link>
                    </li>
                    <li className="mb-1">
                    <Link to={''} className=" text-base text-gray-400 hover:text-white">
                        Terms
                    </Link>
                    </li>
                    <li className="mb-1">
                    <Link to={''} className=" text-base text-gray-400 hover:text-white">
                        Accessibility
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
            <div className="w-1/2 py-6 pl-6 md:pl-0 sm:w-1/3 md:w-2/7 xl:w-1/4 text-white">
                <div className="h-full">
                <h1 className="tracking-px mb-3  font-semibold ">
                    Related
                </h1>
                <ul className='font-light'>
                    <li className="mb-1">
                    <Link to={''} className=" text-base text-gray-400 hover:text-white" >
                        Find Buyer
                    </Link>
                    </li>
                    <li className="mb-1">
                    <Link to={''} className=" text-base text-gray-400 hover:text-white">
                        Feedback
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
          </div>
          <div className="w-auto p-8">
            <div className="-m-1.5 flex flex-wrap">
              <div className="w-auto p-1.5">
                <Link to={''}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <FontAwesomeIcon icon={faLinkedinIn} className='hover:text-gray-400' />
                  </div>
                </Link>
              </div>
              <div className="w-auto p-1.5">
                <Link to={''}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <FontAwesomeIcon icon={faTwitter} className='hover:text-gray-400' />
                  </div>
                </Link>
              </div>
              <div className="w-auto p-1.5">
                <Link to={''}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <FontAwesomeIcon icon={faFacebookF} className='hover:text-gray-400' />
                  </div>
                </Link>
              </div>
              <div className="w-auto p-1.5">
                <Link to={''}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <FontAwesomeIcon icon={faInstagram} className='hover:text-gray-400' />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
