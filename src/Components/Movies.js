
export default function Movies() {
    return (
        <>
            <div className="flex flex-wrap xs:flex-nowrap justify-between ml-10 mt-10">
                <input className="w-56 items-center xs:w-96 h-12 border-2 border-kenarlik rounded-xl pl-4 mb-5" type="text" placeholder="Film / Dizi / Oyuncu ara"></input>
                <select className="w-40 h-12 border-2 border-kenarlik rounded-xl mx-10 pl-2">
                    <option disabled selected>Sırala</option>
                    <option >Yeniye göre sırala</option>
                    <option >Eskiye göre sırala</option>
                    <option >Puana göre sırala</option>
                    <option >Rastgele sırala</option>
                </select>
            </div>
            <div className="flex flex-wrap mt-10 xs:justify-start justify-center">

                <div className="flex flex-col items-center mb-10 xs:ml-10 ">
                    <a href=""><img className="h-60 w-60 rounded-2xl bg-slate-500" ></img></a>
                    <p className="text-2xl font-normal mt-4">Film adı</p>
                </div>
            </div>
        </>
    );
}