import React from 'react'
export default class GifList extends React.Component {
  // get data from gif list
  // render data
  constructor(props){
    super(props)
  }

  render(){

    const gifs = this.props.gifs.map(gif => <li><img src={gif.images.fixed_height.url}/></li>)

    return (
      <div className = 'col-md-8'>
        <ul>
         {gifs}
       </ul>
      </div>
    )
  }
}
