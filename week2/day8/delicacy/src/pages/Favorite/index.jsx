import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Title from '../../components/Title'
import CardMoreRecipies from '../../components/CardMoreRecipies'
import CardFavorite from './components/Card'

import { callAPI } from '../../domain/api'
import { callAPIJSON } from '../../domain/api_json'

import classes from './style.module.scss'

export default function Favorite() {

  const location = useLocation()
  const navigate = useNavigate()

  const [category, setCategory] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("Beef")
  const [favoriteData, setFavoriteData] = useState([])

  let getData = async () => {
    try {
      const { categories } = await callAPI(`/categories.php`, 'GET');
      const modifiedResponse = categories?.map((category, index) => {
        return {
          idCategory: category.idCategory,
          strCategory: category.strCategory
        }
      })
      setCategory(modifiedResponse.slice(0, 6))
    } catch (error) {

    }
  }

  let getFavoriteData = async () => {
    try {
      const response = await callAPIJSON('/favorite', 'GET')
      setFavoriteData(response)
    } catch (error) {

    }
  }

  useEffect(() => {
    getData()
    getFavoriteData()
    if (location.pathname === '/favorite') {

    }
  }, [])

  let deleteFavorite = async (data) => {
    try {
      const response = await callAPIJSON(`/favorite/${data.id}`, 'DELETE')
      alert(`Remove favorite success ${data.id}`)
      getFavoriteData()
    } catch (error) {

      alert('Remove favorite failed')
    }
  }

  const backToHome = () => {
    navigate('/')
  }

  return (
    <div className={classes.container}>
      <Title onClick={() => backToHome()} />
      <div className={classes.content}>
        <div className={classes.tabs}>
          {
            category?.map((category, index) => {
              return (
                <button onClick={() => { setSelectedCategory(category.strCategory); navigate('/') }} key={index}>
                  {category.strCategory}
                </button>
              )
            })
          }
          <button>
            Favorite
          </button>
        </div>

        <div className={classes.favorites}>
          {
            favoriteData?.map((data, index) => {
              return (
                <CardFavorite key={index} data={data} func={() => deleteFavorite(data)} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
