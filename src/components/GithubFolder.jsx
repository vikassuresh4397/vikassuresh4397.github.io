import React from 'react'
import GithubCalendar from "react-github-calendar"
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
        src="https://github-readme-streak-stats.herokuapp.com/?user=vikassuresh4397&theme=dark&hide_border=false"
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
        <div id="calendarnow1" ><GithubCalendar id="calendarnow2" className='react-activity-calendar'  username='vikassuresh4397' /></div>
        <br />
    
    
    </div>
    </div>
  )
}

export default GithubFolder