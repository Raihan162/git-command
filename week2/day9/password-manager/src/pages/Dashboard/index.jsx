import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import ModalDelete from '../../components/Modal';

import { callAPIJSON } from '../../domain/api_json';

import Panda from '../../assets/images/panda.webp'
import Pass from '../../assets/images/pass1.jpg'

import classes from './style.module.scss'

export default function Dashboard() {

    const navigate = useNavigate()
    const location = useLocation()

    const [dataUsers, setDataUsers] = useState([])
    const [selectedToDelete, setSelectedToDelete] = useState('')
    const [form, setForm] = useState({
        provider: '',
        email: '',
        password: '',
        category: ''
    })
    const [errMessage, setErrMessage] = useState({
        provider: '',
        email: '',
        password: '',
        category: ''
    })

    const [showModalDelete, setShowModalDelete] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showForm, setShowForm] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const getDataPassword = async () => {
        try {
            if (!location?.search) {
                let response = await callAPIJSON(`/password`, 'GET')
                setDataUsers(response)
            } else {
                let response = await callAPIJSON(`/password?category=${location?.search.slice(1)}`, 'GET')
                setDataUsers(response)
            }
        } catch (error) {

        }
    }

    const detailUser = (data) => {
        navigate('/detail-user', { state: { data } })
    }

    const deleteUser = async (id) => {
        try {
            let response = await callAPIJSON(`/password/${id}`, 'DELETE')
            getDataPassword()

            toast.success('Delete account success')
        } catch (error) {

        }
    }

    const addAccount = async () => {
        try {
            if (!form.provider && !form.email && !form.password && !form.category) return setErrMessage({
                provider: 'Required',
                email: 'Required',
                password: 'Required',
                category: 'Required'
            })

            if (!form.provider) return setErrMessage({ ...errMessage, provider: 'Required' })

            if (!form.email) return setErrMessage({ ...errMessage, email: 'Required' })

            if (!form.password) return setErrMessage({ ...errMessage, password: 'Required' })

            if (!form.category) return setErrMessage({ ...errMessage, category: 'Required' })


            if (form.password.length < 6) return setErrMessage({ ...errMessage, password: 'Minimum 6 character' })

            const response = await callAPIJSON('/password', 'POST', {}, {}, form)

            toast.success('Add account success!')

            setTimeout(() => {
                window.location.reload();
            }, 1000)
            // setForm({
            //     provider: '',
            //     email: '',
            //     password: '',
            //     category: ''
            // })

            // setTimeout(() => {
            //     getDataPassword()
            // }, 2000);
        } catch (error) {
            console.log(error)
        }
    }

    const selectCat = (data) => {
        navigate(`/${data}`)
    }

    useEffect(() => {
        getDataPassword()
    }, [])


    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <div className={classes.addData}>
                    <h1>Add Account</h1>
                    <div className={classes.form}>
                        <div className={classes.provider}>
                            <label htmlFor="provider">Provider</label>
                            <input required type="text" name='provider' onChange={(e) => { setForm({ ...form, provider: e.target.value }); setErrMessage({ ...errMessage, provider: '' }) }} placeholder='Please input your provider' style={{ borderColor: errMessage.provider ? "red" : null }} />
                            {
                                errMessage.provider ?
                                    <p style={{ color: "red", fontSize: "10px", fontWeight: "600", margin: "0" }}>{errMessage.provider}</p>
                                    :
                                    null
                            }
                        </div>
                        <div className={classes.email}>
                            <label htmlFor="email">Email</label>
                            <input required type="email" name='email' onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrMessage({ ...errMessage, email: '' }) }} placeholder='Please input your email' style={{ borderColor: errMessage.email ? "red" : null }} />
                            {
                                errMessage.email ?
                                    <p style={{ color: "red", fontSize: "10px", fontWeight: "600", margin: "0" }}>{errMessage.email}</p>
                                    :
                                    null
                            }
                        </div>
                        <div className={classes.password}>
                            <label htmlFor="password">Password</label>
                            <input required type="password" name='password' onChange={(e) => { setForm({ ...form, password: e.target.value }); setErrMessage({ ...errMessage, password: '' }) }} placeholder='Please input your password' style={{ borderColor: errMessage.password ? "red" : null }} />
                            {
                                errMessage.password ?
                                    <p style={{ color: "red", fontSize: "10px", fontWeight: "600", margin: "0" }}>{errMessage.password}</p>
                                    :
                                    null
                            }
                        </div>
                        <div className={classes.category}>
                            <label htmlFor="category">Category</label>
                            <select onClick={(e) => { setForm({ ...form, category: e.target.value }); setErrMessage({ ...errMessage, category: '' }) }} name="category" id="category" style={{ borderColor: errMessage.category ? "red" : null }}>
                                <option value="">--Please select category--</option>
                                <option value="work">Work</option>
                                <option value="family">Family</option>
                                <option value="personal">Personal</option>
                            </select>
                            {
                                errMessage.category ?
                                    <p style={{ color: "red", fontSize: "10px", fontWeight: "600", margin: "0" }}>{errMessage.category}</p>
                                    :
                                    null
                            }
                        </div>
                    </div>
                    <button onClick={() => addAccount()}>Add account</button>
                </div>
                <img src={Pass} alt="" />
            </div>

            <div className={classes.cat}>
                <select onChange={(e) => selectCat(e.target.value)} name="category" id="category">
                    <option value="">Select Category</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                    <option value="family">Family</option>
                </select>
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
                        dataUsers.length !== 0 ?
                            dataUsers.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{user.provider}</td>
                                        <td>{user.email}</td>
                                        <td>{user.category}</td>
                                        <td className={classes.buttons}>
                                            <button onClick={() => detailUser(user)}>
                                                <EditIcon fontSize='small' style={{ color: "#F2BE22" }} />
                                            </button>
                                            <button onClick={() => {
                                                setSelectedToDelete(user.id);
                                                setShowModalDelete(!showModalDelete);
                                                // deleteUser(user.id)
                                            }}>
                                                <DeleteIcon fontSize='small' style={{ color: "#F24C3D" }} />
                                            </button>
                                        </td>
                                        {
                                            showModalDelete ?
                                                <ModalDelete func={{ deleteUser }} data={{ setShowModalDelete, selectedToDelete }} />
                                                :
                                                null
                                        }
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
            <Toaster />
        </div >
    )
}
