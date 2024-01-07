import React from 'react'

const Notifications = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col sm:flex-row justify-between items-center'>
                <div>
                    <h1 className='text-3xl text-center sm:text-left font-bold tracking-tight text-gray-900 sm:text-4xl font-montserrat'>
                        Never miss an <span className='text-purple-700'>Update</span> <br></br>or <span className='text-purple-700'>Notification</span>
                    </h1>
                </div>
                <div>
                    <form className="mt-6 flex flex-col sm:flex-row max-w-md gap-x-4" method="POST" action="https://formsubmit.co/shecanmn@gmail.com">
                        <input type="hidden" name="_subject" value="Someone wants to join the mailing list!" />
                        <input type="hidden" name="_captcha" value="false" />
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="min-w-0 flex-auto rounded-md border-4 border-slate-gray bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            placeholder="Enter your email"
                        />
                        <button
                            type="submit"
                            className="mt-2 sm:mt-0 flex-none rounded-md bg-purple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Join the community
                        </button>

                    </form>
                    <p className='mt-2 text-gray-400 text-xs px-1'>Note: Your data is kept confidential</p>
                </div>
            </div>
        </div>
    )
}

export default Notifications
