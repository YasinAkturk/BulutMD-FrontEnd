import { Link } from "react-router-dom";
import { veri } from "../data"

export default function Main() {
    var imageurls = (veri.map(data => data.images["Poster Art"].url));
    //Map fonksiyonu ile toplu veride ki fotoğrafların url'lerini tek tek imageurls dizisine aktarıyorum.
    return (
        <div className="flex flex-wrap mt-10 xs:justify-start justify-center">
            <div className="flex flex-col items-center mb-10 xs:ml-10 ">
                {/*imageurls[0-99] kullanarak kapak fotoğrafı seçiyorum.*/}
                <Link to={"/Movies"}><img className="h-60 w-60 rounded-2xl bg-cyan-500" src={imageurls[64]}></img></Link>
                <p className="text-2xl font-normal mt-4">Film</p>
            </div>
            <div className="flex flex-col items-center xs:ml-10">
                <Link to={"/Series"}><img className="h-60 w-60 rounded-2xl bg-cyan-500" src={imageurls[15]}></img></Link>
                <p className="text-2xl font-normal mt-4">Dizi</p>
            </div>
        </div >
    );
}