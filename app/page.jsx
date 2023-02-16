
import { Inter } from '@next/font/google'
import FoodCard from './components/FoodCard'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })


async function getRestaurant() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${process.env.API_KEY}`,
      'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
    }
  };

  const data = await fetch('https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list?queryPlaceValueCityId=348156&pageSize=10&pageNumber=1', options)
  if (!data.ok) {
    throw new Error('Failed to fetch data');
  }

  return data.json();
}

export default async function Home() {
  const response = await getRestaurant()
  // console.log(response)
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            {response.data.map(resto => (
              <Link href={`/restaurant/${resto.id}`}>

                <FoodCard

                  id={resto.id}
                  name={resto.name}
                  servesCuisine={resto.servesCuisine}
                  priceRange={resto.priceRange}
                  mainPhotoSrc={resto.mainPhotoSrc}
                  location={resto.address}
                />
              </Link>
            ))}
          </div>
        </main>
      </main>
    </main>

  )
}
