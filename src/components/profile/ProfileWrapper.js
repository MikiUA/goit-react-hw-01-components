import React from 'react'
import Profile from './Profile'
import user from './user.json'

export default function ProfileWrapper() {
  return (
    <div className='task-wrapper'>
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
     />
    </div>
  )
}
