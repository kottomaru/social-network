let state = {
  profile: {
    postsData: [
      {
        id: 1,
        src: 'https://profilepicture7.com/img/img_dongman/2/1075497004.jpg',
        title: 'About my weekend',
        likes: 17
      },
      {
        id: 2,
        src: 'https://profilepicture7.com/img/img_dongman/2/1075497004.jpg',
        title: 'Some picture with my crush',
        likes: '31'
      }
    ]
  },
  messages: {
    dialogsData: [
        { id: 1, name: 'Kyong' },
        { id: 2, name: 'Daeun' },
        { id: 3, name: 'Eunji' },
        { id: 4, name: 'Jiyoung' },
        { id: 5, name: 'Sunyoung' }
    ],
    messagesData: [
      { id: 1, text: 'Hello' },
      { id: 2, text: 'How are you?' },
      { id: 3, text: 'What is your favorite pet?' }
    ]
  },
  sidebar: {
    friends: [
      { id: 1, img: 'https://avatarfiles.alphacoders.com/822/82242.png', name: 'Makoto' },
      { id: 2, img: 'https://www.elsetge.cat/myimg/f/90-907317_couple-wallpaper-matching-icons-avatar-couple-couple-glitch.jpg', name: 'Rina' },
      { id: 3, img: 'https://profilepicture7.com/img/img_dongman/2/938383067.jpg', name: 'Tsuki' }
    ]
  }
}

export default state;
