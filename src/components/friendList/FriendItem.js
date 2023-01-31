import React from 'react'
import PropTypes from 'prop-types'
import styles from './FriendItem.module.css'

function FriendItem({item:{avatar,name,isOnline}}) {
  return (
    <div className={styles['friend-item']} >
      <span style={{ color:(isOnline)?'green':'red'}}>
          *
      </span>

      <img 
      className={styles['avatar-image']}
       src={avatar}  alt="User avatar"/>
      
      {name}
        
    </div>
  )
}

FriendItem.propTypes = {
  item:PropTypes.shape({
    id: PropTypes.any,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
  })
}

export default FriendItem
