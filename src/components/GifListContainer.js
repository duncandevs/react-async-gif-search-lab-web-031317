import React from 'react'
import GifSearch from './GifSearch'
import GifList from './GifList'


export default class GifListContainer extends React.Component {
  constructor(){
    super()
    this.url = "http://api.giphy.com/v1/gifs/search?q=YOURQUERYHERE&api_key=dc6zaTOxFJmzC"
    this.getGifs = this.getGifs.bind(this)
    this.state = {
      gifs: []
    }
  }

  getGifs(searchTerm){
    let apiData = this.fetchData(searchTerm).then(function(data){ return data})
    apiData.then( data => {
      this.setState({
         gifs: data
      })
    })
    console.log("gifs: ", this.state.gifs);
  }



  fetchData(searchTerm){
    let url =  `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=3`
    return fetch(url).then(function(res){
      return res.json().then(function(result){ return result.data})
    })
  }


  render(){
    return(
      <div className='row'>
        <GifList  gifs={this.state.gifs}/>
        <GifSearch callback={this.getGifs} />
      </div>
    )
  }

  componentDidUpdate(){
    //make the api request
  }
}
