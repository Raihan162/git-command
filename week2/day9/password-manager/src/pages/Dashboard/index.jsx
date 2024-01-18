import React, { useEffect, useState } from 'react'

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import classes from './style.module.scss'
import { callAPIJSON } from '../../domain/api_json';
import ModalDelete from '../../components/ModalDelete';

export default function Dashboard() {

    const [dataUsers, setDataUsers] = useState([])
    const [showModalDelete, setShowModalDelete] = useState(false)

    const getDataPassword = async () => {
        try {
            let response = await callAPIJSON(`/password`, 'GET')
            console.log(response)
            setDataUsers(response)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteUser = async(id) =>{
        try {
            let response = await callAPIJSON(`/password/${id}`, 'DELETE')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDataPassword()
    }, [])
    return (
        <>
            <div className={classes.container}>
                <div className={classes.addData}>
                    <button>Add account</button>
                </div>
                <table className={classes.tableData}>
                    <thead>
                        <tr>
                            <th>Website Name</th>
                            <th>Email</th>
                            <th>Account Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataUsers ?
                                dataUsers.map((user, index) => {
                                    return (
                                        <tr>
                                            <td>{user.provider}</td>
                                            <td>{user.email}</td>
                                            <td>{user.category}</td>
                                            <td className={classes.buttons}>
                                                <button onClick={() => console.log('test')}>
                                                    <EditIcon fontSize='small' />
                                                </button>
                                                <button onClick={() => {
                                                    setShowModalDelete(!showModalDelete);
                                                    }}>
                                                    <DeleteIcon fontSize='small' />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <tr>
                                    <td>Data tidak ada.</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div >
            {
                showModalDelete ?
                    <ModalDelete func={{ deleteUser }} data={{ setShowModalDelete }} />
                    :
                    null
            }
        </>
    )
}
