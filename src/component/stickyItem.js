import React from 'react'

export const StickyItem = () => {
  return (
    <section>
      <div className="w-full fixed bottom-0 mb-0">
        <div
          className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0"
        >
          <div
            className="md:p-6 p-4 text-center bg-green w-full hover:bg-darkgreen md:border-r-2 md:border-white border-transparent flex items-center justify-center"
          >
            <img src="../images/mike.png" alt="icon" className="md:w-10 w-8 pr-2" />
            <a href=""
              ><p className="text-white lg:text-2xl xl:text-xl text-sm">
                Request speaker
              </p></a
            >
          </div>
          <div
            className="text-center bg-green md:p-6 p-4 w-full hover:bg-darkgreen flex items-center justify-center"
          >
            <img
              src="../images/money-sack.png"
              alt="icon"
              className="md:w-10 w-8 pr-2"
            />
            <a href=""
              ><p className="text-white lg:text-2xl xl:text-xl text-sm">
                Request sponsorship
              </p></a
            >
          </div>
        </div>
      </div>
    </section>
  )
}
