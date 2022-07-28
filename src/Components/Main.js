import { Link } from "react-router-dom";
import { veri } from "../data"
export default function Main({movie=[], serie=[]}) {
    
    var imagesurl = (veri.map(data => data.images["Poster Art"].url));
    veri.forEach(show);
    function show(item){
        let a = Object.values(item);
        if (a[2]=="movie"){
            movie.push(a)
        }
        else{
            serie.push(a)
        }
        
    }
    
    return (
        <div className="flex flex-wrap mt-10 xs:justify-start justify-center">
            <div className="flex flex-col items-center mb-10 xs:ml-10 ">
                <Link to={"/Movies"}><img className="h-60 w-60 rounded-2xl bg-cyan-500" src={imagesurl[0]}></img></Link>
                <p className="text-2xl font-normal mt-4">Film</p>
            </div>
            <div className="flex flex-col items-center xs:ml-10">
                <Link to={"/Series"}><img className="h-60 w-60 rounded-2xl bg-cyan-500" src={imagesurl[98]}></img></Link>
                <p className="text-2xl font-normal mt-4">Dizi</p>
            </div>
        </div >
    );
}