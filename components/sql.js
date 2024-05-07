import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { auth } from './firebase';



function analytics() {

  const router = useRouter();
  const [showLoginAlert, setShowLoginAlert] = useState(false);
    const links = [
        { name: 'Open roles', href: '#' },
        { name: 'Internship program', href: '#' },
        { name: 'Our values', href: '#' },
        { name: 'Meet our leadership', href: '#' },
    ]

    const stats = [
        { name: 'Offices worldwide', value: '12' },
        { name: 'Full-time colleagues', value: '300+' },
        { name: 'Hours per week', value: '40' },
        { name: 'Paid time off', value: 'Unlimited' },
    ]     
        
      const handleProfileClick = async (person) => {
        try {
          const user = auth.currentUser;
          console.log('Current user:', user);
    
          if (!user) {
            // Show login alert if user is not logged in
            setShowLoginAlert(true);
           // Redirect to login page and stop further navigation
            router.push('/login');
            return;
          }
    
          // User is signed in, proceed to the appropriate page
          router.push();
        } catch (error) {
          console.error('Error checking user authentication status:', error);
        }
      };

      const handleCloseAlert = () => {
        setShowLoginAlert(false);
      };
      
      const people = [
        {
          name: 'Intro to Syntax - Select',
          email: 'Learn sql for working with databases',
          role: 'Day 1',
          imageUrl: '/db.png',
          href: '/introSql', 
          
        },
        {
          name: 'Create Table, Insert Into, Update',
          email: 'Learn common syntax',
          role: 'Day 2',
          imageUrl:
            '',
          href: '/introSql2',
        },
        {
          name: 'Delete, Where, ',
          email: 'Filter Data',
          role: 'Day 3',
          imageUrl:
            '',
          href: '/introSql3',
        },
        {
          name: 'And, Or, Not',
          email: 'Filter Data',
          role: 'Day 4',
          imageUrl:
            '',
          href: '/introSql4',
        },
        {
          name: 'OrderBy, GroupBy',
          email: 'View Data',
          role: 'Day 5',
          imageUrl:
            '',
          href: '/introSql5',
        },
        {
          name: 'Max, Min, Avg, Count, Sum',
          email: 'FUnctions',
          role: 'Day 6',
          imageUrl:
            '',
          href: '/introSql6',
        },
        {
          name: 'Inner Join, Left Join, Right Join, Full Outter Join',
          email: 'Merge Tables',
          role: 'Day 7',
          imageUrl:
            '',
          href: '/introSql7',
        },
      ]
    

  return (
    <div className="max-w-screen-lg mx-auto px-4">
      {/* Login alert */}
      {showLoginAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-md">
            <p className="text-lg font-semibold mb-4">Login Required</p>
            <p className="text-sm text-gray-700 mb-4">You need to be logged in to access course details.</p>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md" onClick={handleCloseAlert}>Close</button>
          </div>
        </div>
      )}
        <ul role="list" className="divide-y divide-gray-100">
            {people.map((person) => (
            <li key={person.name} className="py-5">
                <Link href={person.href} passHref>
                <div onClick={() => handleProfileClick(person)}
                className="flex justify-between gap-x-6 items-center hover:bg-gray-100 px-4 py-2 rounded-md cursor-pointer">
                    <div className="flex min-w-0 gap-x-4">
                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                    </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                    {person.lastSeen ? (
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                        Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                        </p>
                    ) : (
                        <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-xs leading-5 text-gray-500">Online</p>
                        </div>
                    )}
                    </div>
                </div>
                </Link>
            </li>
            ))}
        </ul>
        </div>
  )
}

export default analytics