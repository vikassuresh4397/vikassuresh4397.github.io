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
        src="https://github-readme-stats.vercel.app/api?username=vikassuresh4397&theme=dark&hide_border=false&include_all_commits=false&count_private=false"
        alt="GitHub Stats"
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
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=vikassuresh4397&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
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