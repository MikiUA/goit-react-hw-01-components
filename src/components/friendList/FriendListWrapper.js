import React from 'react'
import FriendList from './FriendList'

import friends from './friends.json'

export default function FriendListWrapper() {
  return (
    <div className='task-wrapper'>
        <FriendList friends={friends}/>
    </div>
  )
}
