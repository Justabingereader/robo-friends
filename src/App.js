import { useState } from "react";
import './App.css';
import Searchimage from "./components/Searchimage";
import Imagelist from "./components/Imagelist";
import pic1 from './images/pic1.png';
import pic2 from './images/pic2.png';
import pic3 from './images/pic3.png';
import pic4 from './images/pic4.png';
import pic5 from './images/pic5.png';
import pic6 from './images/pic6.png';
import pic7 from './images/pic7.png';
import pic8 from './images/pic8.png';
import pic9 from './images/pic9.png';
import pic10 from './images/pic10.png';
function App(){
    const imageObjects = [
        {
            url: pic1,
            name: 'Leanne Graham',
            email: 'Sincere@april.biz'
        },
        {
            url: pic2,
            name: 'Ervin Howell',
            email: 'Shanna@melissa.tv'
        },
        {
            url: pic3,
            name: 'Clementine Bauch',
            email: 'Nathan@yesenia.net'
        },
        {
            url: pic4,
            name: 'Patricia Lebsack',
            email: 'Julianne.OConner@kory.org'
        },
        {
            url: pic5,
            name: 'Chelsey Dietrich',
            email: 'Lucio_Hettinger@annie.ca'
        },
        {
            url: pic6,
            name: 'Mrs. Dennis Schulist',
            email: 'Karley_Dach@jasper.info'
        },
        {
            url: pic7,
            name: 'Kurtis Weissnat',
            email: 'Telly.Hoeger@billy.biz'
        },
        {
            url: pic8,
            name: 'Nicholas Runolfsdottir V',
            email: 'Sherwood@rosamond.me'
        },
        {
            url: pic9,
            name: 'Glenna Reichert',
            email: 'Chaim_McDermott@dana.io'
        },
        {
            url: pic10,
            name: 'Clementina DuBuque',
            email: 'Rey.Padberg@karina.biz'
        }
    ]
    const [searchQuery, setSearchQuery] = useState('');
     return (
        <div className="content-header"> 
            <h1>Robo Friends</h1>
            <Searchimage searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <Imagelist searchQuery={searchQuery} images={imageObjects}/>
        </div>
     );
};

export default App;