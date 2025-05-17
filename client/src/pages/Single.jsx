import React from 'react';
import Edit from '../imgs/edit.png';
import Delete from '../imgs/delete.png';
import { Link } from 'react-router-dom';
import User from '../imgs/user.png';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src="https://images.pexels.com/photos/1147544/pexels-photo-1147544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='user'>
          <img src={User} alt="" />
          <div className='info'>
            <span>Prashant Singh</span>
            <p> Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to='/write?edit=1'>
              <img src={Edit} alt="" />
            </Link>
            <Link to='#'>
              <img src={Delete} alt="" />
            </Link>
          </div>
        </div>

        <h1> Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis! Ut aut voluptas, suscipit necessitatibus laboriosam sequi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, perferendis soluta. Nesciunt, commodi! Distinctio assumenda nemo voluptate, optio quas quaerat, fuga eveniet deserunt laborum veniam nihil natus doloremque. Commodi, provident! Nulla facere quod molestiae voluptatem, alias quae autem! Praesentium nemo laudantium deserunt nihil? Non repellat rem incidunt, unde dolorum obcaecati odit quo voluptatem aperiam, quos iure, laborum porro harum temporibus autem!</p>
      </div>
      <Menu />
    </div>
  );
}

export default Single;