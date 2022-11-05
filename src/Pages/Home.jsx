import React from 'react'
import DefaultLayout from '../Components/DefaultLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../Redux/Actions/CarsActions';
import { Button, Row, Col } from 'antd';
import Spinner from '../Components/Spinner';

const Home = () => {

  const { cars } = useSelector(state => state.CarsReducer);
  const { loading } = useSelector(state => state.AlertsReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllCars());
  }, []);

  return (
    <DefaultLayout>
      { loading && <Spinner /> }
      <Row justify='center' gutter={16} className='mt-5'>
        {/*{ cars.map((car) => {
          return (
            <Col lg={5} sm={24} xs={24}>
              <div className='car p-2 bs1'>
                <img src={car.image} className='carImg' alt='' />

                <div className='carContent d-flex align-items-center justify-content-between'>
                  <div>
                    <p>{car.name}</p>
                    <p>{car.rentPerHour} Rent Per Hour /-</p>
                  </div>

                  <div>
                    <button className='btn1 mr-2'>Book Now</button>
                  </div>
                </div>
              </div>
            </Col>
          )
        }) }*/}
      </Row>
    </DefaultLayout>
  )
}

export default Home
