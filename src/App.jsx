import React from 'react';
import Header from './components/Header';
import ProfileCover from './components/ProfileCover';
import ProfileNavigation from './components/ProfileNavigation';
import Intro from './components/Intro';
import PostsSection from './components/PostsSection';
import FriendsGrid from './components/FriendsGrid';
import './App.css';

function App() {
  const userData = {
    name: 'Rin Cristobal',
    profilePicture: '/1.jpg',
    coverPhoto: '11.jpg',
    bio: 'Isaiah 60:22',
    details: [
      '❤ In a relationship with John Rotsen Arzaga',
      '📷 rinbb_',
      'Followed by 6 people',
    ],
    friends: [
      { id: 1, name: 'John Rotsen Arzaga II', avatar: '9.jpg' },
      { id: 2, name: 'Rebecca Cristobal', avatar: '3.jpg' },
      { id: 3, name: 'Merianie Raagas Padilla', avatar: '5.jpg' },
      { id: 4, name: 'Yohan Suevnch', avatar: '13.jpg' },
      { id: 5, name: 'Jhoanna Arzaga', avatar: '6.jpg' },
      { id: 6, name: 'Jona Than Raagas', avatar: '12.jpg' },
    ],
    posts: [
      {
        id: 1,
        author: 'Rin Cristobal',
        authorAvatar: '1.jpg',
        timestamp: '1 hour ago',
        image: '11.jpg'
      },

    ]
  };

  return (
    <div className="App">
      <Header userName={userData.name} profilePicture={userData.profilePicture} />
      <div className="profile-container">
        <ProfileCover coverPhoto={userData.coverPhoto} profilePicture={userData.profilePicture} userName={userData.name} />
        <ProfileNavigation />
        <div className="profile-content">
          <div className="profile-sidebar">
            <Intro bio={userData.bio} details={userData.details} />
            <FriendsGrid friends={userData.friends} />
          </div>
          <div className="profile-main-content">
            <PostsSection posts={userData.posts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;