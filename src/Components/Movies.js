import { useEffect, useState } from "react"
import { veri } from "../data"
export default function Movies(props) {

    const [search, setSearch] = useState("")
    let filtermovie = props.film.filter((movie) => 
        movie.title.toLocaleLowerCase().indexOf(search.length>=3?search:"") !== -1
    )
    
    function handleSubmit(e) {
        e.preventDefault();
    }

    useEffect(() => {
        props.film.length=18;
        console.log("ilk açılış")
    },[])
    
    /*useEffect(() => {
        props.film.length=36;
        console.log("Render")
    },)*/

    return (
        <>
            <div className="flex flex-wrap xs:flex-nowrap justify-between ml-20 mt-10">
                <input onSubmit={handleSubmit}
                    onChange={(event) => setSearch(event.target.value.toLocaleLowerCase())}
                    className="w-56 items-center xs:w-96 h-12 border-2 border-kenarlik rounded-xl pl-4 mb-5"
                    type="text"
                    placeholder="Film / Dizi / Oyuncu ara">
                </input>
                <select className="form-select w-40 h-12 border-2 border-kenarlik rounded-xl mr-20 ml-10 pl-2">
                    <option >Sırala</option>
                    <option >Yeniye göre sırala</option>
                    <option >Eskiye göre sırala</option>
                    <option >Puana göre sırala</option>
                    <option >Rastgele sırala</option>
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