import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-[#221F1A]">
        <div
          className="flex flex-col md:flex-row items-center space-x-8 text-white w-full sm:container p-6 mt-24 md:mb-20 mb-16 sm:mb-16 lg:mb-20 xl:mb-20"
        >
          <div>
            <img
              src="../images/ineuronLogo.png"
              alt="ineuron"
              className="pl-4 md:pl-0"
            />
          </div>
          <div
            className="flex flex-col md:flex-row pt-6 text-center md:pt-0 text-white text-xs xl:text-sm items-center justify-center md:justify-between w-full"
          >
            <div className="pb-2 md:pb-0">
              <p className="sm:text-center sm:text-start md:text-left">
                <a href="https://ineuron.ai/terms.html" target="_blank"
                  >Terms of Use 
                </a>
                
                <a href="https://ineuron.ai/policy.html" target="_blank"
                  > | Privacy Policy</a
                >
              </p>
              <p className="pt-1 text-darkgrey sm:px-48 md:px-0">
                © iNeuron Intelligence Pvt. Ltd. 2022. All Rights Reserved.
              </p>
            </div>
            <div className="flex space-x-6 h-4 pt-4 md:pt-0 pb-6 md:pb-0">
              <a
                href="https://www.youtube.com/channel/UCb1GdqUqArXMQ3RS86lqqOw"
                target="_blank"
                ><img src="../images/youtube-nav.png" alt="linkdin" className="w-6"
              /></a>
              <a href="https://twitter.com/iNeuronAi" target="_blank"
                ><img
                  src="../images/twitter-nav.png"
                  alt="you-tube"
                  className="w-5"
              /></a>
              <a
                href="https://www.linkedin.com/company/ineuron-ai/"
                target="_blank"
                ><img
                  src="../images/linkdin-nav.png"
                  alt="facebook"
                  className="w-4"
              /></a>
              <a href="https://www.facebook.com/ineuronai" target="_blank"
                ><img src="../images/fb-nav.png" alt="twitter" className="w-2"
              /></a>
            </div>
          </div>
        </div>
      </footer>

  )
}
