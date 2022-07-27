import DiziFilm from "../../Movie.json"
export default function Main() {
    let veri=DiziFilm;
    return (
        
        <div className="flex flex-wrap mt-10 xs:justify-start justify-center">
            <div className="flex flex-col items-center mb-10 xs:ml-10 ">
                
                    <a href=""><img className="h-60 w-60 rounded-2xl" src={veri.entries[98].images["Poster Art"].url}></img></a>
                
                <p className="text-2xl font-normal mt-4">Film</p>
            </div>
            <div className="flex flex-col items-center xs:ml-10">
                
                <a href=""><img className="h-60 w-60 rounded-2xl" src={veri.entries[0].images["Poster Art"].url}></img></a>
                
                <p className="text-2xl font-normal mt-4">Dizi</p>
            </div>
        </div>
    );
}