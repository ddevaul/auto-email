import React from "react";
import Link from 'next/link'
import Nav from "../components/nav"
import styles from "../styles/Home.module.css"

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
      <div> 
        <Nav></Nav>
        <div className={styles.homeBody}>
          <h1>Never Waste Time Writing Responses Again</h1>
          <h2>Use <Link href="/prettify"><u>Prettify</u></Link> To Take
          A Casual Thought and Turn It Into a Formal Email</h2>
          <h2>Use <Link href="/fullresponse"><u>Full Response</u></Link> To Draft
          A Response to an Email You Received</h2>
        </div>
      </div>
    )
  }
}

export default Home;