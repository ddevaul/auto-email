import React from "react";
import Nav from "../components/nav"
import styles from "../styles/Prettify.module.css";

class Prettify extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  handleSubmit = async () => {
    // console.log(this.state);
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({state: this.state})
    };
    let response = await fetch("https://auto-email-desi.herokuapp.com/prettify", requestOptions);
    response = await response.json();
    // console.log(response);
    this.setState({response});
  }
  
  onChange = (e) => {
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  render() {
    
    return (
      <div> 
        <Nav></Nav>
        <div className="mainpage">
          {this.state.response ? <div>
            <div>Response: </div>
              <pre className={styles.responsepre}>{this.state.response}</pre>
            </div> : <div className={styles.formLayout}>
            <div>
              <label>
                Input the recipients name:  
              </label>
              <input type="text" name="recipient" onChange={this.onChange}/>
            </div>
            <div>
              <label>
                Input your name:  
              </label>
              <input type="text" name="sender" onChange={this.onChange}/>
            </div>
            <div>
            {/* <pre className={styles.mainpagepre}>as;dlfkjasd;lfkjasd;lfkjasd;lfkjas;dlkfjas;dlkfja;sldkfja;slkdfja;sldkfja;sldkfja;sldkfja;lskdjfa;lksdf</pre> */}
              <label>
                Input the gist of what you want sent as casually as you want:  
              </label>
              <textarea name="casual" onChange={this.onChange}/>
            </div>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>}
        </div>
      </div>
    )
  }
}

export default Prettify;