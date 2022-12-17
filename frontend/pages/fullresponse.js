import React from "react";
import Nav from "../components/nav"
import styles from "../styles/Prettify.module.css";

class FullResponse extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  handleSubmit = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({state: this.state})
    };
    let response = await fetch("http://localhost:8080/fullresponse", requestOptions);
    response = await response.json();
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
                Input the recipient's name:  
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
              <label>
                Input the email you received:  
              </label>
              <textarea name="recieved" onChange={this.onChange}/>
            </div>
            <div>
              <label>
                Input the core message you want to convey:  
              </label>
              <textarea name="coremessage" onChange={this.onChange}/>
            </div>
            <div className={styles.quickSelect}>
              <label>
                Or Quick Select A Response: 
              </label>
              <button className={this.state.coremessage=="ok" ? styles.selectedResponse : null} name="coremessage" value="ok" onClick={this.onChange}>Ok</button>
              <button className={this.state.coremessage=="agree" ? styles.selectedResponse : null} name="coremessage" value="agree" onClick={this.onChange}>Agree</button>
              <button className={this.state.coremessage=="disagree" ? styles.selectedResponse : null} name="coremessage" value="disagree" onClick={this.onChange}>Disagree</button>
              <button className={this.state.coremessage=="thanks" ? styles.selectedResponse : null} name="coremessage" value="thanks" onClick={this.onChange}>Thanks</button>
              {/* <button className={this.state.coremessage=="yourewelcome" ? styles.selectedResponse : null} name="coremessage" value="yourewelcome" onChange={this.onChange}>You're welcome</button> */}
            </div>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>}
        </div>
      </div>
    )
  }
}

export default FullResponse;