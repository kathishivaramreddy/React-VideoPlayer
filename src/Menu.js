import React from 'react';

export class Menu extends React.Component{

  constructor(props){
    super(props);
    this.handleChange =this.handleChange.bind(this);  
  }
  handleChange(e){
    const name=e.target.value
    this.props.chooseVideo(name)
  }
  render(){
    return(
        <form onChange={this.handleChange}>
          <input type="radio" name="src" value="fast"/>fast
          <input type="radio" name="src" value="slow" />slow
          <input type="radio" name="src" value="cute" /> cute
          <input type="radio" name="src" value="eek" /> eek
        </form>
      );
  }
}
