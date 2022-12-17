import React from "react";
import Link from 'next/link'
import styles from "./Nav.module.css";

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  handleSubmit = () => {
    console.log(" this is working fine ");
  }
  

  render() {
    
    return (
      <div className={styles.navContainer}> 
            <Link href="/">Home</Link>

            <Link href="/prettify">Prettify</Link>
 
            <Link href="/fullresponse">Full Response</Link>
      </div>
    )
  }
}

export default Nav;