import { useState, useEffect } from "react"

export default function Movies(props) {
    const [selected, setSelected] = useState("0")
    const [search, setSearch] = useState("")
    let filtermovie;

    useEffect(() => {
        let filterForm = document.forms["FilterForm"];
        let searchBox = filterForm["search"];
        if (searchBox.value == "" && selected == "") {
            setSelected("0");
        }
    })

    function handleSubmit(e) {
        e.preventDefault();
    }

    filtermovie = props.film.filter((movie) =>
        movie.title.toLocaleLowerCase().indexOf(search.length >= 3 ? search : "") !== -1);
    //console.log("Aranan Veri    Film Sayısı: " + filtermovie.length + "    Selected :" + selected);

    switch (selected) {
        case "0":
            filtermovie = props.film.map(data => data);
            filtermovie.length = 18;
            break;
        case "1":
            filtermovie.sort((a, b) => b.releaseYear - a.releaseYear)
            break;
        case "2":
            filtermovie.sort((a, b) => a.releaseYear - b.releaseYear)
            break;
        case "3":
            filtermovie.sort((a, b) => a.title.localeCompare(b.title))
            break;
        case "4":
            filtermovie.sort(function (a, b) { return 0.5 - Math.random() })
            break;
    }

    return (
        <>
            <form onSubmit={handleSubmit} name="FilterForm" className="xs:ml-20  mt-10 flex flex-wrap justify-center xs:justify-between">
                <input
                    name="search"
                    onInput={(event) => setSearch(event.target.value.toLocaleLowerCase(), setSelected(""))}
                    className="w-56 items-center xs:w-96 h-12 border-2 border-kenarlik rounded-xl pl-4 mb-5"
                    type="text"
                    placeholder="Film / Dizi / Oyuncu ara">
                </input>
                <select
                    value={selected}
                    onChange={(event) => setSelected(event.target.value)}
                    className="form-select w-40 h-12 border-2 border-kenarlik rounded-xl mr-20 ml-10 pl-2">
                    <option value="0" className="hidden">Sırala</option>
                    <option value="1">Yeniye göre sırala</option>
                    <option value="2">Eskiye göre sırala</option>
                    <option value="3">Alfabetik sırala</option>
                    <option value="4">Rastgele sırala</option>
                </select>
            </form>
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