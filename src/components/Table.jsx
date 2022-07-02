import React, { useState, useEffect } from 'react';
import { arrowUp, arrowDown } from '../assets/index'
import paginate from './Pagination';



const Table = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    fetch("http://localhost:3500/api/users")
      .then((response) =>
        response.json()
      )
      .then((data) => {
        let newData = data.allUsers;


        newData = newData.sort(function (x, y) {
          // console.log(x.usageTime)
          return y.usageTime - x.usageTime;
        });
        return setLoading(true), setUsers(paginate(newData)), setLoading(false)


      }
      )
  }, [loading, page])




  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > users.length - 1) {
        nextPage = 0
      }
      return nextPage
    })

  }
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = users.length - 1
      }
      return prevPage
    })

  }

  const handlePage = (index) => {
    setPage(index)
  }


  const sortElement = document.getElementById('select');
  var usageTime = 0;
  const toggleUsageTimeArrow = document.querySelector('.users__content-order2');

  //console.log(users)


  return (
    <main>
      <section className="users">
        <div className="container">
          <div className="section-header">
            <div className="users__heading">
              <h1>Trending Users <span>🔥</span></h1>
              <p>Users data for real time dashboard showcasing Users segmentation (by country, gender, devices), top 15 users by usage time.
              </p>
            </div>
            <div className="sort__bar">
              <div className="direction">
                <label name="direction" id="select">

                </label>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="users__content">
              <div className="users__content-wrapper bg-color-secondary users__content-wrapper--height">
                <p className="font-medium font-weight-bold users__content-order">Username</p>
                <div className="users__content-order  font-medium font-weight-bold">
                  Gender
                  <div className="users__content-order-image">
                    <img src={arrowUp} alt="" className='arrow-up' />
                    <img src={arrowDown} alt="" className='arrow-down' />
                  </div>
                </div>
                <div className="users__content-order  font-medium font-weight-bold">
                  Country
                  <div className="users__content-order-image">
                    <img src={arrowUp} alt="" className='arrow-up' srcSet="" />
                    <img src={arrowDown} alt="" className='arrow-down' srcSet="" />
                  </div>
                </div>
                <div className="font-medium font-weight-bold users__content-order2">
                  Divice
                  <div className="users__content-order-image">
                    <img src={arrowUp} alt="" className='arrow-up-devices' srcSet="" />
                    <img src={arrowDown} alt="" className='arrow-down-devices' srcSet="" />
                  </div>
                </div>
                <div className="users__content-order font-medium font-weight-bold users__content-order2">
                  Usage Time in hours
                  <div className="users__content-order-image">
                    <img src={arrowUp} alt="" className='arrow-up-time' srcSet="" />
                    <img src={arrowDown} alt="" className='arrow-down-time' srcSet="" />
                  </div>
                </div>
              </div>
              <div className="usersss__contents">
                {
                  //console.log(users[page])
                  users.length < 1 ? <div className="users__price">
                    <br />
                    <p>Either you have no internet  connnection, Or there are no current Users</p>
                  </div> :
                    users[page].map((user, index) => {
                      const { username, gender, country, device, usageTime } = user
                      return <div className="users__content-wrapper bg-color-secondary" key={index}>
                        <div className="users__image">
                          <p className="font-weight-medium">{username}</p>
                        </div>
                        <div className="users__price">
                          <p>{gender}</p>
                        </div>
                        <div className="users__price">
                          <p>{country}</p>
                        </div>
                        <p>{device}</p>
                        <p>{usageTime}hrs</p>
                      </div>
                    })
                }
              </div>
            </div>
          </div>
          {!loading && (
            <div className='btn-container'>
              <button className='prev-btn' onClick={prevPage}>
                prev
              </button>
              {users.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`page-btn ${index === page ? 'active-btn' : null}`}
                    onClick={() => handlePage(index)}
                  >
                    {index + 1}
                  </button>
                )
              })}
              <button className='next-btn' onClick={nextPage}>
                next
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default Table
