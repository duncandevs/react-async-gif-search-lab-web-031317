import React from 'react'
export default class GifSearch extends React.Component {
  // render search bar
  // form
  constructor(props){
    super(props)
    console.log(this.props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.submit = this.submit.bind(this)
    this.state = {
      content: ''
    }
  }

  submit(event){
    event.preventDefault()
    this.props.callback(this.state.content)
  }

  handleInputChange(event){
    this.setState({
      content: event.target.value
    })
    console.log("search input updated: ", this.state.content)
  }

  render(){
    return(
    <div className='col-md-4'>
      <form onSubmit={this.submit}>
        <label>Enter Search Term:</label>&nbsp;&nbsp;<br/>
        <input type="test" value={this.state.content} onChange={this.handleInputChange}/><br/><br/>
        <button className="btn">submit</button>
      </form>
    </div>
    )
  }
}
