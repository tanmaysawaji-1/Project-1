export default function Header() {
    return (
        <header className="bg-[#ff5200] p-4 font-serif ">
            <div className="flex justify-between container mx-auto py-8  px-15">
                <img
                    className="w-40 h-12"
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
                    alt="Swiggy Logo"
                />
                <div className=" text-white text-base font-bold flex gap-10 items-center">
                    <a href="https://www.swiggy.com/corporate/" target="_blank" >Swiggy Corporate</a>
                    <a href="https://partner.swiggy.com/login#/swiggy" target="_blank" >Partner with us</a>
                    <a className="border border-white py-3 px-4 rounded-2xl">Get the App</a>
                    <a className="border border-black py-3 px-4 bg-black rounded-2xl">Sign in</a>
                </div>
            </div>
            <div className="pt-16 pb-8 ">

                <img className="h-110 w-70 absolute top-30 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className=" h-110 w-60 absolute top-32 right-0"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>

                <div className="max-w-[60%] text-5xl text-white font-bold container mx-auto text-center">
                    Order Food and groceries. Discover best restaurants. Swiggy it!
                </div>
                <div className="max-w-[60%] container mx-auto flex gap-5 mt-10">
                    <input className="bg-white w-[27%] text-base py-4 px-6 rounded-2xl" placeholder="Delhi, India"></input>
                    <input className="bg-white w-[45%] text-base py-4 px-6 rounded-2xl " placeholder="Search for restaurant and items for more "></input>
                </div>
            </div>
            <div className="max-w-[80%] container mx-auto ">
                <div className="flex">
               <a href="https://www.swiggy.com/restaurants">
                 <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
               </a>

               <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                 <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
               </a>

               <a href="https://www.swiggy.com/dineout">
                 <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
               </a>
               </div>
               <div className="w-[100%] bg-white h-4 flex"></div>
            </div>

        </header>
    );
}
