import Shivani from "../images/shivani.png"
import Deepak from "../images/deepak.jpg"

const posts = [
  {
    id: 1,
    title: 'Android Development with Kotlin',
    href: '#',
    description:
      'Ever want to design our own apps but don\'t know where to start. Look no further. Join us for our hands on class taught by an AP Computer Science Scholar and learn the backbone of Android devlopment with Kotlin.',
    date: 'Date TBD',
    datetime: '2020-03-16',
    category: { title: 'Programming', href: '#' },
    author: {
      name: 'Shivani Saravaran',
      role: 'Regional President',
      href: '#',
      imageUrl: Shivani
    },
  },
  {
    id: 1,
    title: 'Python Programming',
    href: '#',
    description: 'Join us for a hands on interactive class of python programming. This class is perfect for begginers and will teach you the fundamentals of algorithms and data types. At the end you will walk away with your own project.',
    date: 'Date TBD',
    datetime: '2020-03-16',
    category: { title: 'Programming', href: '#' },
    author: {
      name: 'Deepak Balasubrami',
      role: 'Regional Director',
      href: '#',
      imageUrl: Deepak
    },
  },
  {
    id: 1,
    title: 'Web Developement',
    href: '#',
    description:
      'Join us for a hands on course on the fundamentals of web design. Get taught by a professional website developer and by the end of the course you will be able to take home your own portfolio project.',
    date: 'Mar 16, 2025',
    datetime: '2020-03-16',
    category: { title: 'Design and Markup', href: '#' },
    author: {
      name: 'John Fist',
      role: 'Volunteer',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export default function Events() {
  return (
    <div className="bg-white sm:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="font-montserrat text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Upcoming <span className="text-purple-700">Workshops</span> and <span className="text-purple-700">Events</span></h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Join us for one of our informative and hands on workshops.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>

                  <h1 className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                    {post.category.title}
                  </h1>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 hover:underline">
                    

                      {/* CHANGE HREF HERE */}
                    <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdTsgKc-68naccAZ1GBGYKimHi4PKW_csRTXUZN97eH3RGwEA/viewform" className="text-purple-700">
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
          ))}
        </div>
      </div>
    </div>
  )
}
