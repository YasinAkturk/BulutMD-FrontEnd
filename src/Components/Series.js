import { useState, useEffect } from "react"

export default function Series(props) {
    const [selected, setSelected] = useState("0")
    const [search, setSearch] = useState("")
    let filtermovie;

    //data.releaseYear.sort((a ,b) => b - a)
    function handleSubmit(e) {
        e.preventDefault();
    }
    filtermovie = props.dizi.filter((serie) =>
    serie.title.toLocaleLowerCase().indexOf(search.length >= 3 ? search : "") !== -1);
    switch (selected) {
        case "0":
            filtermovie = props.dizi.map(data => data);
            filtermovie.length = 18;
            console.log("FİLTRE YOK    Film Sayısı: "+filtermovie.length+"    Selected :"+selected);
            break;
        case "1":
            console.log("Yeniden eskiye    Film Sayısı: "+filtermovie.length+"    Selected :"+selected);
            break;
        case "2":
            console.log("Eskiden Yeniye    Film Sayısı: "+filtermovie.length+"    Selected :"+selected);
            break;
        case "3":
            console.log("Puana göre    Film Sayısı: "+filtermovie.length+"    Selected :"+selected);
            break;
        case "4":
            console.log("Ortaya Karışık    Film Sayısı: "+filtermovie.length+"    Selected :"+selected);
            break;
    }

    return (
        <>
            <div className="flex flex-wrap xs:flex-nowrap justify-between ml-20 mt-10">
                <input
                    onSubmit={handleSubmit}
                    onChange={(event) => setSearch(event.target.value.toLocaleLowerCase(), setSelected())}
                    className="w-56 items-center xs:w-96 h-12 border-2 border-kenarlik rounded-xl pl-4 mb-5"
                    type="text"
                    placeholder="Film / Dizi / Oyuncu ara">
                </input>
                <select
                onChange={(event) => setSelected(event.target.value)} 
                className="form-select w-40 h-12 border-2 border-kenarlik rounded-xl mr-20 ml-10 pl-2">
                    <option value="0" className="hidden">Sırala</option>
                    <option value="1">Yeniye göre sırala</option>
                    <option value="2">Eskiye göre sırala</option>
                    <option value="3">Puana göre sırala</option>
                    <option value="4">Rastgele sırala</option>
                </select>
            </div>
            <div className="flex flex-wrap mt-10 xs:ml-10 xs:justify-start justify-center">
                {
                    filtermovie.map((series, key) => {
                        return (
                            <div key={key} className="flex flex-col items-center mb-10 xs:ml-10 ">
                                <img className="h-60 w-60 rounded-2xl " src={series.images["Poster Art"].url}></img>,
                                <p className="text-2xl w-60 font-normal mt-4">{series.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}