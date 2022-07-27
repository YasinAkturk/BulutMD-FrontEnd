import { veri } from "../data"
export default function Series() {
    return (
        <>
            <div className="flex flex-wrap xs:flex-nowrap justify-between ml-10 mt-10">
                <input className="w-56 items-center xs:w-96 h-12 border-2 border-kenarlik rounded-xl pl-4 mb-5" type="text" placeholder="Film / Dizi / Oyuncu ara"></input>
                <select className="form-select w-40 h-12 border-2 border-kenarlik rounded-xl mx-10 pl-2">
                    <option >Sırala</option>
                    <option >Yeniye göre sırala</option>
                    <option >Eskiye göre sırala</option>
                    <option >Puana göre sırala</option>
                    <option >Rastgele sırala</option>
                </select>
            </div>
            <div className="flex flex-wrap mt-10 xs:ml-10 xs:justify-start justify-center">
                {
                    veri.map(imgurl => {
                        return (
                            <div className="flex flex-col items-center mb-10 xs:ml-10 ">
                                <img className="h-60 w-60 rounded-2xl " src={imgurl.images["Poster Art"].url}></img>,
                                <p className="text-2xl w-60 font-normal mt-4">{imgurl.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}