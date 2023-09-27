import React from 'react'
import GithubCalendar from "react-github-calendar";
import "./Navbar.css";
import "./GithubFolder.css";
const GithubFolder = () => {
  return (
    <div id="githubeverything">
       
      <div>
      {/* 💫 About Me */}

      <button><h1 className='git'>Github-INFO</h1></button>
      <br />
      <button><h1 className='git'>Github Stats</h1></button>
      <br />

      {/* 📊 GitHub Stats */}
      <img 
      id="github-stats-card"
        src="https://camo.githubusercontent.com/f4b92d4f64b38f4bc9f33f73f471c25acc3d830c51de8d17bcdef2557b8ce93d/68747470733a2f2f6769746875622d726561646d652d73746174732d7369676d612d666976652e76657263656c2e6170702f6170693f757365726e616d653d76696b617373757265736834333937267468656d653d676f7468616d26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d66616c736526636f756e745f707269766174653d74727565"
      />
      <br />
      <button><h1 className='git'>Github Streak</h1></button>
      <br />
      <img
      id="github-streak-stats"
        src="https://camo.githubusercontent.com/a374c91de53c04e249720512849619025bad963c8cc83c548305e849ddb6c6ff/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d76696b617373757265736834333937267468656d653d676f7468616d26686964655f626f726465723d66616c7365"
        alt="GitHub Streak Stats"
      />
      <br />
      <button><h1 className='git'>Github Languages</h1></button>
      <br />
      <img
      id="github-top-langs"
        src="https://camo.githubusercontent.com/a6ce942d4062d05b060dbc9f21ba90b09161ca0d8196ed15c1b006659790ffb9/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d76696b617373757265736834333937267468656d653d6461726b26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d66616c736526636f756e745f707269766174653d66616c7365266c61796f75743d636f6d70616374"
        alt="Top Languages"
      />

      {/* Other content */}
      <br />

      <button><h1 className='git'>Github Calendar</h1></button>
      <br />
        <div id="calendarnow1" ><div></div><GithubCalendar id="calendarnow2" className='react-activity-calendar'  username='vikassuresh4397' /></div>
        <br />
    
    
    </div>
    </div>
  )
}

export default GithubFolder