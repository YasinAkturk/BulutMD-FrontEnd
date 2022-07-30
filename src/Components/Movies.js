import { useState, useEffect } from "react"

export default function Movies(props) {
    const [filterType, setFilterType] = useState("0")
    const [search, setSearch] = useState("")
    let filtermovie;
    /*sayfam her render edildiğinde arama kutusunun value değeri boşsa ve filterType yani dropdown da bir seçenek seçilmediyse 
    filterType değişkenine 0 değeri atıyoruz. 
    Bu sayfada filtreleme işlemi yapılıp yapılmadığını kontrol etmemi sağlayan kod*/
    useEffect(() => { 
        let filterForm = document.forms["FilterForm"];
        let searchBox = filterForm["search"];
        if (searchBox.value == "" && filterType == "") {
            setFilterType("0");
        }
    })
    /*normalde arama kutusu ve dropdown üzerindeyken enter tuşuna baştığımızda sayfamız yenileniyor.
    Bunun önüne geçmek için kullandığım kod*/
    function handleSubmit(e) { 
        e.preventDefault();
    }
    // Arama kutusuna 3 veri girilince tüm veri üzerinden filtreleme işlemi yapmamı sağlayan kod
    /*
    -search.length >= 3 ? search : "" ----> search değişkeninde 3'ten fazla veri varsa search değişkenini döndür yoksa boş değer döndür.
    -indexOf() ----> içerisine aranacak veri yazılır eğer aranacak veri belirtilen dizide(movie.title) varsa index numarasını döndürür yoksa -1 değeri döndürür
    -filter() ---->verilen dizi içerisinde(props.film) bulunan eleman ile işlem yapar(movie.title) ve true dönen tüm değerleri yeni dizi oluşturarak geri döndürür.
    */
    filtermovie = props.film.filter((movie) =>
        movie.title.toLocaleLowerCase().indexOf(search.length >= 3 ? search : "") !== -1);

    /*Dropdown da ki seçilen seçeneğe göre filtreleme işlemi yapmak için switch case kullandım.
    Burada if else kullanabilirdim ancak uzun ve karışık kod satırları yerine düzenli ve okunabilir kod yazmak istedim.
    switch case tek bir değişkene bağlı olarak kontrollerini sağlar.*/
    switch (filterType) {
        case "0":// Dropdown da filtreleme işlemi yapılmadığı anlamına gelir
            filtermovie = props.film.map(data => data); //Filtreleme işlemi yoksa filtermovie de ki ilk 18 veri gösteriliyor.
            filtermovie.length = 18;
            break;
        case "1":
            filtermovie.sort((a, b) => b.releaseYear - a.releaseYear)//Tarih bilgisine göre filtermovie de ki veriler yeniden eskiye sıralanıyor.
            break;
        case "2":
            filtermovie.sort((a, b) => a.releaseYear - b.releaseYear)//Tarih bilgisine göre filtermovie de ki veriler eskiden yeniye sıralanıyor.
            break;
        case "3":
            filtermovie.sort((a, b) => a.title.localeCompare(b.title))//localeCompare fonksiyonu Türkçe sıralama yapmak için kullanılır.
            break;
        case "4":
            filtermovie.sort(function (a, b) { return 0.5 - Math.random() })//filtermovie de ki verilerin rastgele sıralanması için kullandığım kod
            break;
    }

    return (
        <>
            <form onSubmit={handleSubmit} name="FilterForm" className="xs:ml-20  mt-10 flex flex-wrap justify-center xs:justify-between">
                <input
                    name="search"
                    /*Arama Kutusuna yazılanlar search'e aktarılıyor(useState kullandım).
                     toLocaleLowerCase ile yazılan veriler küçük harfe dönüştürülüyor.
                     böylelikle arama yaparken oluşan büyük küçük harf hatasını önledim */
                    onInput={(event) => setSearch(event.target.value.toLocaleLowerCase(), setFilterType(""))}
                    className="w-56 items-center xs:w-96 h-12 border-2 border-kenarlik rounded-xl pl-4 mb-5"
                    type="text"
                    placeholder="Film / Dizi / Oyuncu ara">
                </input>
                <select
                    /* onChange olayında dropdown da seçilen seçeneğin value bilgisi filterType'a aktarılıyor(useState Kullandım) */
                    value={filterType}
                    onChange={(event) => setFilterType(event.target.value)}
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
                    /* Filtermovie'den gelen her bir elemanın url ve title bilgisini yazdırıyorum.  */
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