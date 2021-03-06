import React from 'react';
import './App.css';

import IdCard from './component/IdCard';
import './component/IdCard.css';
import Greetings from './component/Greetings';
import './component/Greetings.css';
import Random from './component/Random';
import './component/Random.css';
import BoxColor from './component/BoxColor';
import './component/BoxColor.css';
import CreditCard from './component/CreditCard';
import './component/CreditCard.css';
import DriverCard from './component/DriverCard';
import './component/DriverCard.css';
import LikeButton from './component/LikeButton';
import './component/LikeButton.css';
import ClickablePicture from './component/ClickablePicture';
import './component/ClickablePicture.css';
import Dice from './component/Dice';
import './component/Dice.css';

const App = () => {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <div className="Greetings">
        <Greetings lang="de">Ludwig</Greetings>
        <br />
        <Greetings lang="fr">François</Greetings>
      </div>
      <div className="Random">
        <Random min={1} max={6} />
        <br />
        <Random min={1} max={100} />
      </div>
      <div className="BoxColor">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div className="CreditCard">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <div className="DriverCard">
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </div>
      <div className="LikeButton">
        <LikeButton /> <LikeButton />
      </div>
      <div className="ClickablePicture">
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />
      </div>
      <div className="Dice">
        <Dice />
      </div>
    </div>
  );
};

export default App;
