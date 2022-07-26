export default function Main() {
    return (
        <div className="flex flex-wrap mt-10 xs:justify-start justify-center">
            <div className="flex flex-col items-center mb-10 xs:ml-10 ">
                <div className="bg-red-400 h-60 w-60 rounded-2xl">
                    <a href=""><img></img></a>
                </div>
                <p className="text-2xl font-normal mt-4">Film</p>
            </div>
            <div className="flex flex-col items-center xs:ml-10">
                <div className="bg-gray-400 h-60 w-60 rounded-2xl">
                    <a href=""><img></img></a>
                </div>
                <p className="text-2xl font-normal mt-4">Dizi</p>
            </div>
        </div>
    );
}