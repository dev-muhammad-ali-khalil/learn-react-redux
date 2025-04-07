import React from 'react'
import UserTable from './UserTable'

const UserData = () => {
    const data = [
        {
            id: 1,
            name: 'Muhammad Ali Khalil',
            dob: '07-06-2000',
            address: 'Shad Bagh Amir Road, Lahore'
        },
        {
            id: 2,
            name: 'Nouman Khalil',
            dob: '27-06-2005',
            address: 'Shad Bagh Amir Road, Lahore'
        },
        {
            id: 3,
            name: 'Muhammad Asad',
            dob: '--------------',
            address: 'Malik Park, Lahore'
        },
        {
            id: 4,
            name: 'Asadullah',
            dob: '--------------',
            address: 'Iqbal Town, Lahore'
        },
        {
            id: 5,
            name: 'Muhammad Bilal',
            dob: '--------------',
            address: 'Yateem Khana, Lahore'
        }
    ]

    return (
        <div>
            <h1>User Data</h1>
            <UserTable data={data} />
        </div>
    )
}

export default UserData