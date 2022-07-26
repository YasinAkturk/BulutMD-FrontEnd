export default function Header() {
    return (
        <>
            <div className="h-auto w-full">
                <div className="bg-acikgri pb-px h-6 w-full text-white"></div>
                <div className="bg-black h-36 xs:h-14 w-full text-white flex flex-col items-center xs:flex-row">
                    <a className="text-3xl px-5 py-4 xs:py-0 xs:pl-16" href="#">BulutMD</a>
                    <div className="px-5 pr-5 right-5 xs:absolute">
                        <a className="text-xl mx-5" href="#">Giriş</a>
                        <button className="bg-red-500 h-10 w-36 font-medium">Deneme Başlat</button>
                    </div>
                </div>
                <div className="bg-yenigri h-14 w-full text-white flex justify-between items-center">
                    <p className="text-xl px-5 pl-16">Popüler Başlıklar</p>
                </div>
            </div>
        </>
    );
}