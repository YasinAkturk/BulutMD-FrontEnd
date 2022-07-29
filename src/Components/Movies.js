import { useEffect, useState } from "react"
import { veri } from "../data"
export default function Movies(props) {
    const [selected, setSelected] = useState("0")
    const [search, setSearch] = useState("")
    
    let filtermovie;
    //data.releaseYear.sort((a ,b) => b - a)
    function handleSubmit(e) {
        e.preventDefault();
    }
    filtermovie = props.film.map(data => data)
    console.log(filtermovie);
    switch (selected) {
        case "0":
            console.log("Arama Motoru")
            filtermovie = props.film.filter((movie) =>
            movie.title.toLocaleLowerCase().indexOf(search.length >= 3 ? search : "") !== -1);
            break;
        case "1":
            console.log("Yeniden eskiye");
            break;
        case "2":
            console.log("Eskiden Yeniye");
            break;
        case "3":
            console.log("Puana göre");
            break;
        case "4":
            console.log("Ortaya Karışık");
            break;
        default: break;
    }

     

    useEffect(() => {
        props.film.length = 18;
        console.log("ilk açılış")
    }, [])

    /*useEffect(() => {
        props.film.length=36;
        console.log("Render")
    },)*/

    return (
        <>
            <div className="flex flex-wrap xs:flex-nowrap justify-between ml-20 mt-10">
                <input onSubmit={handleSubmit}
                    onChange={(event) => setSearch(event.target.value.toLocaleLowerCase(), setSelected("0"))}
                    className="w-56 items-center xs:w-96 h-12 border-2 border-kenarlik rounded-xl pl-4 mb-5"
                    type="text"
                    placeholder="Film / Dizi / Oyuncu ara">
                </input>
                <select onChange={(event) => setSelected(event.target.value)} className="form-select w-40 h-12 border-2 border-kenarlik rounded-xl mr-20 ml-10 pl-2">
                    <option value="0" className="hidden">Sırala</option>
                    <option value="1">Yeniye göre sırala</option>
                    <option value="2">Eskiye göre sırala</option>
                    <option value="3">Puana göre sırala</option>
                    <option value="4">Rastgele sırala</option>
                </select>

            </div>
            <div className="flex flex-wrap mt-10 xs:ml-10 xs:justify-start justify-center">
                {
                    filtermovie.map((movies, key) => {
                        return (
                            <div key={key} className="flex flex-col items-center mb-10 xs:ml-10 ">
                                <img className="h-60 w-60 rounded-2xl " src={movies.images["Poster Art"].url}></img>,
                                <p className="text-2xl w-60 font-normal mt-4">{movies.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}