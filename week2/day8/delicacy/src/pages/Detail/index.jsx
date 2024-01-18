import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Title from '../../components/Title'
import CardMenu from '../../components/CardMenu'
import MoreRecipies from '../../components/MoreRecipies'
import { callAPI } from '../../domain/api'
import { callAPIJSON } from '../../domain/api_json'

import classes from './style.module.scss'

export default function Detail() {

  const location = useLocation()
  const navigate = useNavigate()

  const [checkPathname, setCheckPathname] = useState(false)
  const [randomRec, setRandomRec] = useState([])

  const backToHome = () => {
    navigate('/')
  }

  const addToFavorite = async (dataMeal) => {
    try {
      const data = { id: dataMeal?.idMeal, Meal: dataMeal?.strMeal, image: dataMeal?.strMealThumb }
      const response = await callAPIJSON('/favorite', 'POST', {}, {}, data)

      alert('Success add to favorite')
    } catch (error) {

      alert('Failed add to favorite')
    }
  }

  let randomRecipies = async () => {
    try {
      let arrRecipies = []

      for (let i = 0; i < 6; i++) {
        let { meals } = await callAPI('/random.php', 'GET')
        const { idMeal, strMeal, strMealThumb } = meals[0]
        arrRecipies.push({ idMeal, strMeal, strMealThumb })
      }
      const finalResponse = await Promise.all(arrRecipies)
      setRandomRec(finalResponse)
    } catch (error) {

    }
  }

  useEffect(() => {
    randomRecipies()
    if (location.pathname === '/detail') {
      setCheckPathname(true)
    }
  }, [])

  return (
    <div className={classes.container}>
      <Title onClick={() => backToHome()} />
      <div className={classes.content}>

        <CardMenu addToFavorite={() => addToFavorite()} checkPathname={checkPathname} />

        <MoreRecipies data={{ randomRec }} />
      </div>
    </div>
  )
}
