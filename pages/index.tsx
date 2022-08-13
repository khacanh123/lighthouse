import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="max-w-[1290px] mx-auto pt-[50px]">
        <div className="flex justify-between">
          <nav>
            <ul className="flex gap-8 font-medium">
              <li className="relative group transition p-1 ">Men</li>
              <li className="relative group transition p-1 ">Women</li>
              <li className="relative group transition p-1 ">Children</li>
              <li className="relative group transition p-1 ">Shoes</li>
              <li className="relative group transition p-1 ">Accessory</li>
            </ul>
          </nav>
          <a href="" className="text-[37px]">
            <span className="font-bold">Light</span>
            <span>house</span>
          </a>
          <div>
            <input className="py-3 px-5 border rounded-3xl" />
          </div>
        </div>
        <div className="flex items-start gap-20 mt-[70px]">
          <div className="max-w-[600px] mt-4">
            <p className="text-[#8E8E8E] tracking-wider font-semibold mb-3 text-xl flex items-center gap-1">
              TRENDING COLLECTION'S
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9z"></path>
              </svg>
            </p>
            <p className="text-[90px] font-bold tracking-tighter mb-10">
              DRESSSES TO BE NOTICED
            </p>
            <div className="flex items-center gap-5 ">
              <button className="border py-3 px-5 uppercase bg-[yellow] rounded-3xl animate-bounce text-[20px] font-medium">
                start shopping
              </button>
              <div className="flex items-center gap-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  className="text-black"
                  height="57"
                  width="57"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM641.7 520.8L442.3 677.6c-7.4 5.8-18.3.6-18.3-8.8V355.3c0-9.4 10.9-14.7 18.3-8.8l199.4 156.7a11.2 11.2 0 0 1 0 17.6z"></path>
                </svg>
                <p className="font-medium text-[20px]">What's Trending?</p>
              </div>
            </div>
          </div>
          <div className="w-[600px] h-[600px] shrink-0 overflow-x-hidden">
            <img
              src="https://lighthouse-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fguy.d4113787.jpg&w=1920&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-24">
        <div className="w-[250px] h-[250px] ml-16 shrink-0">
          <img
            src="https://lighthouse-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FquayMat.d33e111a.jpg&w=1920&q=75"
            alt=""
          />
        </div>
        <div className="flex-grow">
          <div className="flex items-center grap-4 mb-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-color">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                className="text-black"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
