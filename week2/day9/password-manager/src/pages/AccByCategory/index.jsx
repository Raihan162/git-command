import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import classes from './style.module.scss'
import { callAPIJSON } from '../../domain/api_json';
import ModalDelete from '../../components/Modal';

export default function AccByCategory() {
  const { category } = useParams()

  const location = useLocation()
  const navigate = useNavigate()

  const [dataUsers, setDataUsers] = useState([])

  const getDataPassword = async () => {
    try {
      if (!category) {
        let response = await callAPIJSON(`/password`, 'GET')
        setDataUsers(response)
      } else {
        let response = await callAPIJSON(`/password?category=${category}`, 'GET')
        setDataUsers(response)
      }
    } catch (error) {

    }
  }

  const toDashboard = () => {
    navigate('/')
  }

  useEffect(() => {
    getDataPassword()
  }, [])

  return (
    <div className={classes.container}>
      <button onClick={() => toDashboard()} className={classes.back}>
        <ArrowBackIcon />
        <p>Back</p>
      </button>
      <table className={classes.tableData}>
        <thead>
          <tr>
            <th>Website Name</th>
            <th>Email</th>
            <th>Account Category</th>
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
                    {/* <td className={classes.buttons}>
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
                      </td> */}
                    {/* {
                        showModalDelete ?
                          <ModalDelete func={{ deleteUser }} data={{ setShowModalDelete, selectedToDelete }} />
                          :
                          null
                      } */}
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
    </div>
  )
}
