export default function DetailsCard({ name, photos, ratings }) {
    const { thefork: { ratingValue, reviewCount } } = ratings
    return (
        <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* RESAURANT NAVBAR */}
            <nav className="flex text-reg border-b pb-2">
                <a href="" className="mr-7"> Overview </a>
                <a href="" className="mr-7"> Menu </a>
            </nav>
            {/* RESAURANT NAVBAR */} {/* TITLE */}
            <div className="mt-4 border-b pb-6">
                <h1 className="font-bold text-6xl">{name}</h1>
            </div>
            {/* TITLE */} {/* RATING */}
            <div className="flex items-end">
                <div className="ratings mt-2 flex items-center">
                    <p>Rating </p>
                    <p className="text-reg ml-3">{ratingValue}</p>
                </div>
                <div>
                    <p className="text-reg ml-4">{reviewCount} Reviews</p>
                </div>
            </div>
            {/* RATING */} {/* DESCRIPTION */}
            <div className="mt-4">
                <p className="text-lg font-light">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui voluptate, eius aut officiis numquam iusto aliquam dicta expedita inventore rerum sapiente fugit quas reprehenderit, nisi fugiat, velit eos similique animi!
                </p>
            </div>
            {/* DESCRIPTION */} {/* IMAGES */}
            <div>
                <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                    {photos.length} photos
                </h1>
                <div className="flex flex-wrap">
                    {

                        photos.map((img, key) => (
                            <img
                                className="w-56 h-44 mr-1 mb-1"
                                src={img.src}
                                alt=""
                                key={key}
                            />

                        ))
                    }

                </div>
            </div>
            {/* IMAGES */} {/* REVIEWS */}
            <div>
                <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
                    What 100 people are saying
                </h1>
                <div>
                    {/* REVIEW CARD */}
                    <div className="border-b pb-7 mb-7">
                        <div className="flex">
                            <div className="w-1/6 flex flex-col items-center">
                                <div
                                    className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center"
                                >
                                    <h2 className="text-white text-2xl">MJ</h2>
                                </div>
                                <p className="text-center">Micheal Jordan</p>
                            </div>
                            <div className="ml-10 w-5/6">
                                <div className="flex items-center">
                                    <div className="flex mr-5">*****</div>
                                </div>
                                <div className="mt-5">
                                    <p className="text-lg font-light">
                                        Laurie was on top of everything! Slow night due to the
                                        snow storm so it worked in our favor to have more one on
                                        one with the staff. Delicious and well worth the money.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* REVIEW CARD */}
                </div>
            </div>
            {/* REVIEWS */}
        </div>

    )
}
