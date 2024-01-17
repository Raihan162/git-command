import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { callAPI } from '../../domain/api';

import Title from '../../components/Title'
import CardMenu from '../../components/CardMenu'
import MoreRecipies from '../../components/MoreRecipies'

import classes from './style.module.scss'
import { callAPIJSON } from '../../domain/api_json';

export default function Home() {

  const navigate = useNavigate()

  const [category, setCategory] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("Beef")

  const [meals, setMeals] = useState([])

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

  useEffect(() => {
    getData()
  }, [])

  const getSelectedCategory = async () => {
    try {
      const responses = await callAPI(`/filter.php?c=${selectedCategory}`, 'GET')
      const modifiedResponses = responses?.meals.slice(0, 10)

      const response = modifiedResponses?.map(async (value, index) => {
        const { meals } = await callAPI(`/search.php?s=${value.strMeal}`)
        const { idMeal, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strInstructions, strMeal, strMealThumb, strMeasure1, strMeasure2, strMeasure3, strMeasure4 } = meals[0]
        return { idMeal, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strInstructions, strMeal, strMealThumb, strMeasure1, strMeasure2, strMeasure3, strMeasure4 }
      })

      const finalResponse = await Promise.all(response)

      setMeals(finalResponse)

    } catch (error) {

    }
  }

  useEffect(() => {
    getSelectedCategory()
  }, [selectedCategory])

  const toDetail = (data) => {
    navigate('/detail', { state: { data } })
  }

  const toFavorite = () => {
    navigate('/favorite')
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

  return (
    <div className={classes.container}>
      <Title />
      <div className={classes.content}>
        <div className={classes.tabs}>
          {
            category?.map((category, index) => {
              return (
                <button onClick={() => setSelectedCategory(category.strCategory)} key={index}>
                  {category.strCategory}
                </button>
              )
            })
          }
          <button onClick={() => toFavorite()}>
            Favorite
          </button>
        </div>

        <div className={classes.listMenu}>
          {
            meals?.map((data, index) => {
              return (
                <CardMenu key={index} meals={data} onClick={() => toDetail(data)} addToFavorite={() => addToFavorite(data)} />
              )
            })
          }
        </div>

        <MoreRecipies />
      </div>
    </div>
  )
}
