import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import OliveOil from '../../assets/images/olive-oil.svg'
import Ingredient from '../Ingredient'
import ButtonFav from '../ButtonFav'
import ButtonRemoveFav from '../ButtonRemoveFav'

import classes from './style.module.scss'
import { useState } from 'react'
import { callAPIJSON } from '../../domain/api_json'

export default function CardMenu({ onClick, checkPathname, meals, addToFavorite, deleteFavorite }) {

    const navigate = useNavigate()
    const { state } = useLocation()

    const [dataFavorites, setDataFavorites] = useState([])

    const checkFavorites = dataFavorites.some((val) => val.id === meals?.idMeal)
    
    let getFavorites = async () => {
        try {
            const response = await callAPIJSON('/favorite', 'GET')
            setDataFavorites(response)
            
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getFavorites()
    }, [])

    return (
        <div className={classes.container}>
            <div className={classes.cardMenuContent}>
                <h3>
                    {
                        state?.data ?
                            state?.data.strMeal
                            :
                            meals?.strMeal
                    }
                </h3>

                <div className={classes.contentMenu}>
                    <div className={classes.contentLeft}>
                        <p>
                            {
                                state?.data ?
                                    state?.data.strInstructions
                                    :
                                    meals?.strInstructions
                            }
                        </p>
                        <h4>
                            Ingredients
                        </h4>
                        <div className={classes.ingredients}>
                            <div className={classes.ingredient}>
                                <div className={classes.cardImage}>
                                    <img src={OliveOil} alt="Olive Oil" />
                                </div>
                                <div className={classes.desc}>
                                    <p className={classes.name}>
                                        {
                                            state?.data ?
                                                state?.data.strIngredient1
                                                :
                                                meals?.strIngredient1
                                        }
                                    </p>
                                    <p className={classes.dose}>
                                        {
                                            state?.data ?
                                                state?.data.strMeasure1
                                                :
                                                meals?.strMeasure1
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className={classes.ingredient}>
                                <div className={classes.cardImage}>
                                    <img src={OliveOil} alt="Olive Oil" />
                                </div>
                                <div className={classes.desc}>
                                    <p className={classes.name}>
                                        {
                                            state?.data ?
                                                state?.data.strIngredient2
                                                :
                                                meals?.strIngredient2
                                        }
                                    </p>
                                    <p className={classes.dose}>
                                        {
                                            state?.data ?
                                                state?.data.strMeasure2
                                                :
                                                meals?.strMeasure2
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className={classes.ingredient}>
                                <div className={classes.cardImage}>
                                    <img src={OliveOil} alt="Olive Oil" />
                                </div>
                                <div className={classes.desc}>
                                    <p className={classes.name}>
                                        {
                                            state?.data ?
                                                state?.data.strIngredient3
                                                :
                                                meals?.strIngredient3
                                        }
                                    </p>
                                    <p className={classes.dose}>
                                        {
                                            state?.data ?
                                                state?.data.strMeasure3
                                                :
                                                meals?.strMeasure3
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className={classes.ingredient}>
                                <div className={classes.cardImage}>
                                    <img src={OliveOil} alt="Olive Oil" />
                                </div>
                                <div className={classes.desc}>
                                    <p className={classes.name}>
                                        {
                                            state?.data ?
                                                state?.data.strIngredient4
                                                :
                                                meals?.strIngredient4
                                        }
                                    </p>
                                    <p className={classes.dose}>
                                        {
                                            state?.data ?
                                                state?.data.strMeasure4
                                                :
                                                meals?.strMeasure4
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.buttons}>
                            {
                                checkPathname ?
                                    null
                                    :
                                    <button onClick={onClick}>
                                        Detail
                                    </button>
                            }
                            {
                                checkFavorites ?
                                    <ButtonRemoveFav func={deleteFavorite} />
                                    :
                                    <ButtonFav addToFavorite={addToFavorite} checkPathname={checkPathname} />
                            }
                        </div>
                    </div>
                    <img className={classes.thumbImage} src={state?.data ? state?.data.strMealThumb : meals?.strMealThumb} alt="Meal Image" />
                </div>

            </div>
        </div>
    )
}
