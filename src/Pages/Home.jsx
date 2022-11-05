import React from 'react'
import DefaultLayout from '../Components/DefaultLayout';
import { useSelector } from 'react-redux';

const Home = () => {

  const { cars } = useSelector(state => state.CarsReducer);

  return (
    <DefaultLayout>
      <h1>Home</h1>
      <h1>the length of cars is: {cars.length}</h1>
    </DefaultLayout>
  )
}

export default Home
