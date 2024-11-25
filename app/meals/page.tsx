'use client'

import useSWR from 'swr'
import CardComponent from "../_components/CardComponent";

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function MealsPage() {
    const { data, error, isLoading } = useSWR<MealsResponse, Error>('api/meals', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return <>

        {data?.meals.map((meal) => {
            return <CardComponent key={meal.strMeal} name={meal.strMeal} imgSrc={meal.strMealThumb} ></CardComponent>
        })}
    </>
}