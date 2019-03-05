// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('nav')[0]

// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
sideBar = document.getElementById('sidebar-left')

// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementsByClassName('pages')[0]
document.getElementsByClassName('groups')[0]

// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
text = "Least Favs"
favorites = sideBar.getElementsByTagName('div')[0].getElementsByTagName('h5')[0]
favorites.innerText = text

// Exercise 5): Find the first of the ads in the sidebar and hide it.
firstAd = document.getElementsByClassName('ad-slot')[0]
firstAd.style.visibility = 'hidden'

// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
firstAd.style.visibility = 'visible'

// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
firstImage = firstAd.getElementsByTagName('img')[0]
firstImage.setAttribute('src', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')

// Exercise 8): Find Sam's post and change its text to something incredible.
text = "The longest recorded flight of a chicken is 13 seconds."
samTaggartWords = document.getElementsByClassName('media-body')[4].getElementsByTagName('p')[0]
samTaggartWords.innerText = text

// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.
firstEntry = document.getElementById('list-of-posts').getElementsByTagName('li')[0]
firstEntry.className = firstEntry.className + ' post-liked'

// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Shared to watch it turn red.
ericKellyShare = document.getElementsByClassName('post-actions')[1].getElementsByTagName('li')[2]
ericKellyShare.classList = ericKellyShare.classList + 'post-shared'
