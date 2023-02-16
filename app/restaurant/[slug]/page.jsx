import DetailsCard from "./components/DetailsCard";

async function getRestaurantInfo(restoId) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${process.env.API_KEY}`,
            'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
        }
    };

    const res = await fetch(`https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/get-info?restaurantId=${restoId}`, options)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    };

    return res.json();
}

export default async function Overview({ params }) {
    const restoDetails = await getRestaurantInfo(params.slug)
    // console.log(restoDetails)
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                {/* NAVBAR */}
                <nav className="bg-white p-2 flex justify-between">
                    <a href="" className="font-bold text-gray-700 text-2xl">
                        {" "} OpenTable{" "}
                    </a>
                    <div>
                        <div className="flex">
                            <button
                                className="bg-blue-400 text-white border p-1 px-4 rounded mr-3"
                            >
                                Sign in
                            </button>
                            <button className="border p-1 px-4 rounded">Sign up</button>
                        </div>
                    </div>
                </nav>
                {/* NAVBAR */} {/* HEADER */}
                <div className="h-96 overflow-hidden">
                    <div
                        className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center"
                    >
                        <h1 className="text-7xl text-white captitalize text-shadow text-center">
                            {restoDetails.data.restaurant.name}
                        </h1>
                    </div>
                </div>
                <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">

                    <DetailsCard
                        name={restoDetails.data.restaurant.name}
                        photos={restoDetails.data.restaurant.photos}
                        ratings={restoDetails.data.restaurant.aggregateRatings}
                    />
                    <div className="w-[27%] relative text-reg">
                        {/* RESERVATION */}
                        <div className="fixed w-[15%] bg-white rounded p-3 shadow">
                            <div className="text-center border-b pb-2 font-bold">
                                <h4 className="mr-7 text-lg">Make a Reservation</h4>
                            </div>
                            <div className="my-3 flex flex-col">
                                <label htmlFor="">Party size</label>
                                <select name="" className="py-3 border-b font-light" id="">
                                    <option value="">1 person</option>
                                    <option value="">2 people</option>
                                </select>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col w-[48%]">
                                    <label htmlFor="">Date</label>
                                    <input type="text" className="py-3 border-b font-light w-28" />
                                </div>
                                <div className="flex flex-col w-[48%]">
                                    <label htmlFor="">Time</label>
                                    <select name="" id="" className="py-3 border-b font-light">
                                        <option value="">7:30 AM</option>
                                        <option value="">9:30 AM</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-5">
                                <button
                                    className="bg-red-600 rounded w-full px-4 text-white font-bold h-16"
                                >
                                    Find a Time
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </main>

    )
}
