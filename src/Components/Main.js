import { Link } from "react-router-dom";
import Movies from "../Components/Movies"
import Series from "../Components/Series"
import { veri } from "../data"
export default function Main() {
    var imgurl = [];
    
    
    var myObj = (veri.map(data => data.images["Poster Art"].url));
    var myJSON = JSON.stringify(myObj);
    localStorage.setItem("testJSON", myJSON);

    var text = localStorage.getItem("testJSON");
    var obj = JSON.parse(text);

    return (

        <div className="flex flex-wrap mt-10 xs:justify-start justify-center">

            <p>{imgurl}</p>

            <div className="flex flex-col items-center mb-10 xs:ml-10 ">
                <Link to={"/Movies"}><img className="h-60 w-60 rounded-2xl bg-cyan-500" src={obj[29]}></img></Link>
                <p className="text-2xl font-normal mt-4">Film</p>
            </div>
            <div className="flex flex-col items-center xs:ml-10">
                <Link to={"/Series"}><img className="h-60 w-60 rounded-2xl bg-cyan-500" src={obj[14]}></img></Link>
                <p className="text-2xl font-normal mt-4">Dizi</p>
            </div>
        </div >
    );
}