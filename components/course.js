import React from 'react'


export default function course() {

    const links = [
        { name: 'Beginner', href: '#' },
        { name: 'Intermediate', href: '#' },
        { name: 'Projects', href: '#' },
        { name: 'Job Placement', href: '#' },
    ]

    // const stats = [
    //     { name: 'Offices worldwide', value: '12' },
    //     { name: 'Full-time colleagues', value: '300+' },
    //     { name: 'Hours per week', value: '40' },
    //     { name: 'Paid time off', value: 'Unlimited' },
    // ]

    const people = [
        {
          name: 'Leslie Alexander',
          email: 'leslie.alexander@example.com',
          role: 'Co-Founder / CEO',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: '3h ago',
          lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Michael Foster',
          email: 'michael.foster@example.com',
          role: 'Co-Founder / CTO',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: '3h ago',
          lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Dries Vincent',
          email: 'dries.vincent@example.com',
          role: 'Business Relations',
          imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: null,
        },
        {
          name: 'Lindsay Walton',
          email: 'lindsay.walton@example.com',
          role: 'Front-end Developer',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: '3h ago',
          lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Courtney Henry',
          email: 'courtney.henry@example.com',
          role: 'Designer',
          imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: '3h ago',
          lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Tom Cook',
          email: 'tom.cook@example.com',
          role: 'Director of Product',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: null,
        },
      ]
      
          
  return (
    <div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            {/* <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            /> */}
            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
            >
                <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                />
            </div>
            <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
            >
                <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Learn</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                Gain the skills you need to get high paying tech roles.
                </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                    {links.map((link) => (
                    <a key={link.name} href={link.href}>
                        {link.name} <span aria-hidden="true">&rarr;</span>
                    </a>
                    ))}
                </div>
                {/* <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                    <div key={stat.name} className="flex flex-col-reverse">
                        <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                        <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                    </div>
                    ))}
                </dl> */}
                </div>
            </div>
            </div>
            
            
            {/* <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center h-screen mt-5 "> {/* Adjusted margin top */}
                {/*<div className="mx-auto max-w-2xl lg:mx-0 text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-navy sm:text-6xl">Courses</h2>
                    <p className="mt-3 text-lg leading-8 text-navy-300">
                    Gain the skills you need to get high paying tech roles.
                    </p>
                </div>
            </div>*/}
            

        <div className="bg-gray-100 p-10">
  <h2 className="text-4xl font-extrabold mb-10">Courses</h2>
  <p className="leading-8 text-navy-300">
 Gain the skills you need to get high paying tech roles.</p>
  <div className="grid grid-cols-3 gap-4"> {/* Adjusted grid-cols and removed gap-2 */}
    <a href="#" className="block bg-white rounded p-10 hover:bg-gray-200"> {/* Added anchor tag and hover effect */}
      <div className="h-12 w-12 bg-blue-800 flex items-center justify-center rounded-md shadow-xl">
      <svg className="h-6 w-6 text-blue-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      </div>
      <h3 className="text-sm font-bold mt-4">AI Engineering</h3>
    </a>
    {/* Repeat the same structure for other boxes */}
    <a href="/data" className="block bg-white rounded p-10 hover:bg-gray-200">
      <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center rounded shadow-xl">
        <svg className="h-6 w-6 text-blue-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
        </svg>
      </div>
      <h3 className="text-sm font-bold mt-4">Data Analytics</h3>
    </a>
    <a href="#" className="block bg-white rounded p-10 hover:bg-gray-200">
      <div className="h-12 w-12 bg-gradient-to-r from-red-500 to-yellow-600 flex items-center justify-center rounded shadow-xl">
        <svg className="h-6 w-6 text-red-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
      <h3 className="text-sm font-bold mt-4">Front End Engineer</h3>
    </a>

    <a href="#" className="block bg-white rounded p-10 hover:bg-gray-200"> {/* Added anchor tag and hover effect */}
      <div className="h-12 w-12 bg-blue-800 flex items-center justify-center rounded-md shadow-xl">
        <svg className="h-6 w-6 text-blue-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      </div>
      <h3 className="text-sm font-bold mt-4">Back Engineer</h3>
    </a>
    {/* Repeat the same structure for other boxes */}
    <a href="#" className="block bg-white rounded p-10 hover:bg-gray-200">
      <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center rounded shadow-xl">
        <svg className="h-6 w-6 text-blue-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
        </svg>
      </div>
      <h3 className="text-sm font-bold mt-4">Cyber Security</h3>
    </a>
    <a href="#" className="block bg-white rounded p-10 hover:bg-gray-200">
      <div className="h-12 w-12 bg-gradient-to-r from-red-500 to-yellow-600 flex items-center justify-center rounded shadow-xl">
        <svg className="h-6 w-6 text-red-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
      <h3 className="text-sm font-bold mt-4">Business Analytics</h3>
    </a>
    

    {/* Repeat the same structure for other boxes */}
    {/* Add more boxes here */}
  </div>
</div>









           

         




    </div>    
  )
}
