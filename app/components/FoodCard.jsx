

export default function FoodCard({ id, name, servesCuisine, priceRange, mainPhotoSrc, location }) {
    const { street } = location
    // console.log(street)
    return (
        <div
            className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
            <img key={id}
                src={mainPhotoSrc}
                alt=""
                className="w-full h-36"

            />
            <div className="p-1">
                <h3 className="font-bold text-2xl mb-2">{name}</h3>
                <div className="flex text-reg font-light capitalize">
                    <p className=" mr-3">{servesCuisine}</p>
                    <p className="mr-3">${priceRange}</p>
                </div>
                <p className="mt-1 font-bold text-base" >{street}</p>
            </div>
        </div>
    )
}
