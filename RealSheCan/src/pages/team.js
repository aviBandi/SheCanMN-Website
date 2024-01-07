import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Deepak from "../images/deepak.jpg";
import Shivani from "../images/shivani.png"
import Avi from "../images/aviBandi.jpg"
import Shophie from "../images/sophieChen.jpg"
import Rishi from "../images/rishiSultana.jpg"
const people = [
    {
        name: 'Deepak Balasubramani',
        role: 'Regional Director',
        imageUrl: Deepak
    },
    {
        name: 'Shivani Saravan',
        role: 'Regional President',
        imageUrl: Shivani
    },
    {
        name: 'Avi Bandi',
        role: 'MN Webmaster',
        imageUrl: Avi
    },
    {
        name: 'Sophie Chen',
        role: 'National Director / Founder',
        imageUrl: Shophie
    },
    {
        name: 'Rishi Sultana',
        role: 'National Director / Founder',
        imageUrl: Rishi
    },

]

export default function Example() {
    return (
        <div>
            <Nav />
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our <span className="text-purple-700">Leadership</span></h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Meet the group of dedicated high school students paving they way to her career in STEM and technology!
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full aspect-video" src={person.imageUrl} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-slate-gray">{person.role}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}
