import React from 'react'

const UserTable = ({ data }) => {
    return (
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>D-O-B</td>
                        <td>Address</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((userdata) => (
                            <tr key={userdata.id}>
                                <td>{userdata.id}</td>
                                <td>{userdata.name}</td>
                                <td>{userdata.dob}</td>
                                <td>{userdata.address}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserTable