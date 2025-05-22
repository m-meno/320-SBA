320 SBA Requirements:
React Application 
useState (or useReducer), useEffect
3 pages  -  react-router-dom
Access a 3rd party API and display the data on the screen
Well documented ReadMe
Multiple Commits. 12-15 minimum
CSS Styling
Presentation


Avatar the Last Airbender Wiki:

Route | Page | Page description
/api/v1/characters | Home | Displays all characters 
api/v1/characters/avatar | Avatars | Displays all Avatars
api/v1/characters/:id | Character | Displays a single character with profile information

Clicking on a character's name navigates to their profile page.

Work in progress:
Dropdown menu with four options (one for each nation) that will display only characters from the selected nation.

Third party API: 
https://last-airbender-api.fly.dev/

Challenges:
I had trouble displaying the enemies and allies information on the Character Profile page. Adding a function that checked whether the properties were arrays first and then mapped over them if they were fixed that issue. I am about halfway done with building the dropdown to display characters based on nation. I ran into an issue because I tried to use routes with a query string in my path in App.jsx. 
