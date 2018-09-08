import React from 'react';

export class Menu extends React.Component{

  render(){
    return(

        <div>
          <input type="radio" name="src" value="fast"/>fast
          <input type="radio" name="src" value="slow" />slow
          <input type="radio" name="src" value="cute" /> cute
          <input type="radio" name="src" value="eek" /> eek
          </div>
      );
  }
}
