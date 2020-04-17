/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/


/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


const followersArray = [
  'guivecchi12',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];


let gitHub = (string)=>{ 
  axios.get(`https://api.github.com/users/${string}`)
    .then(function (response) {
      let cards = document.querySelector(".cards");
      cards.appendChild(compCreator(response));
    })
    .catch(console.log); 
  };

  followersArray.forEach((user)=>{
    gitHub(user);
  });

function compCreator(obj){

  // Card Div
  let card = document.createElement('div');
  card.classList.add('card');

  // Card Child
  let img = document.createElement('img');
  img.src = obj.data.avatar_url;
  let cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  card.appendChild(img);
  card.appendChild(cardInfo);

  // Card Info Child
  let name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = obj.data.name;

  let username = document.createElement('p');
  username.classList.add('username');
  username.textContent = obj.data.login;

  let location = document.createElement('p');
  location.textContent = "Location: ",obj.data.location;

  let profile = document.createElement('p');
  profile.textContent = "Profile: "
  let a = document.createElement('a');
  a.href = obj.data.html_url;
  a.textContent = obj.data.html_url;
  profile.appendChild(a);

  let followers = document.createElement('p');
  followers.textContent = "Followers: ", obj.data.followers;

  let following = document.createElement('p');
  following.textContent = "Following: ", obj.data.following;

  let bio = document.createElement('p');
  bio.textContent = "Bio: ", obj.data.bio;

  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);


  console.log(obj);
  console.log(card);

  return card;
};




/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
