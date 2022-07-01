import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Table = () => {
const [users, setUsers] = useState([]);



 useEffect(() => {
fetch("http://localhost:3500/api/users")
 .then((response) => 
response.json()
)
  .then((data) => (
    setUsers(data.allUsers)
   //console.log(data.allUsers)
    
  )
  )
 }, [])
 




  return (
    <main>
        <section className="collection">
            <div className="container">
                <div className="section-header">
                    <div className="collection__heading">
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
                    <div className="collection__content">
                        <div className="collection__content-wrapper bg-color-secondary collection__content-wrapper--height">
                            <p className="font-medium font-weight-bold">Username</p>
                            <div className="collection__content-order  font-medium font-weight-bold">
                               Gender
                                <div className="collection__content-order-image">
                                    <img src="../assets/arrow-up.png" alt=""  className='arrow-up' srcSet=""/>
                                    <img src="../assets/arrow-down.png" alt="" className='arrow-down'  srcSet=""/>
                                </div>
                            </div>
                            <div className="collection__content-order  font-medium font-weight-bold">
                               Country
                                <div className="collection__content-order-image">
                                    <img src="../assets/arrow-up.png" alt=""  className='arrow-up' srcSet=""/>
                                    <img src="../assets/arrow-down.png" alt="" className='arrow-down'  srcSet=""/>
                                </div>
                            </div>
                            <p  className="font-medium font-weight-bold">Device</p>
                            <div className="collection__content-order font-medium font-weight-bold collection__content-order2">
                               Usage Time in hours
                                <div className="collection__content-order-image">
                                <img src="../assets/arrow-up.png" alt="" className='arrow-up-sales'  srcSet=""/>
                            <img src="../assets/arrow-down.png" alt="" className='arrow-down-sales' srcSet=""/>
                                </div>
                            </div>
                        </div>
                        <div className="collectionss__contents">
                      {
                        //console.log(users)
                      users.map((user) => {
                        const { username,gender,country,device  } = user
                        return  <div class="collection__content-wrapper bg-color-secondary">
                        <div class="collection__image">
                   <p class="font-weight-medium">{username}</p>
                      </div>
                      <div class="collection__price">
                      <p>{gender}</p>
                      </div>
                  <div class="collection__price">
                  <p>{country}</p>
                  </div>
                  <p>{device}</p>
                  <p>usage time</p>
                  </div>
                     })
                      }
                        </div>
                    </div>
                </div>
                
                <div className="btn-container"></div>
            </div>
        </section>
    </main>
  )
}

export default Table
