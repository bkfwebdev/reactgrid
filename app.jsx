 
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <TheGrid/>
            <GridControl/>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Thermodynamic Heat Grid Simulator</h1>
         </div>
      );
   }
}
class TheGrid extends React.Component {
   render() {
      return (
         <div>
            <ul>
            <li> grid stuff goes here </li>
            </ul> 
         </div>
      );
   }
}

class GridControl extends React.Component {
      render() {
         return (
            <div>
               <form>
               <p>
                select grid size
               </p>
               <input type="radio" name = "gridsize" value = "3"/>3x3 grid<br />
               <input type="radio" name = "gridsize" value = "5"/>5x5 grid<br />
               <input type="radio" name = "gridsize" value = "7"/>7x7 grid<br />
               <input type="radio" name = "gridsize" value = "11"/>11x11 grid<br />
               <input type="radio" name = "gridsize" value = "13"/>13x13 grid<br />
               <button>Decrease Cycle Delay
               </button>
               <button>
               Increase Cycle Delay
               </button>
               </form>
           <p>choose a grid size and then click a grid element to begin adding heat</p>
            </div>
         );
      }
   }
   export default App;