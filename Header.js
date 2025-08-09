export default function Header() {
    return (
        <header className="bg-[#ff5200] p-4">
            <div className="flex">
                <img
                    className="w-40 h-12"
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
                    alt="Swiggy Logo"
                />
                <div className="font-serif text-white text-base font-bold ">
                    <a href="https://www.swiggy.com/corporate/" target="_blank" >Swiggy Corporate</a>
                    <a href="https://partner.swiggy.com/login#/swiggy" target="_blank" >Partner with us</a>
                    <a >Get the App</a>
                    <a >Sign in</a>
                </div>
            </div>
        </header>
    );
}
