import React, {useState} from 'react';
import DriverCard from './components/DriverCard';
import './App.css';

 const btnChangeColor = () => {
   const colors = ['purple','blue','green','yellow','orange','red']
   const changeColor = colors[Math.floor(Math.random()*colors.length)]}
   const LikeButton = ({initialLikes}) => {
   const [likes, setLikes] = useState(initialLikes);
   function incrementLikes() {
    setLikes(likes+1);
    }
     return (
         <button onClick={incrementLikes}>{likes} Likes</button>
     );
   };

   
function App() {
  
  return (
    <div className="App">
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
           licensePlate: "CO42DE"
        }} />
       <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
         }} />
         <div className ="Nextexercise">
         <LikeButton id="btnChangeColor" initialLikes={0}/>
         <LikeButton id="btnChangeColor" initialLikes={0}/>
         </div>
    </div>
  );
}

