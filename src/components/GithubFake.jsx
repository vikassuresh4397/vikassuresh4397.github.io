import React from 'react';
import GithubCalendar from "react-github-calendar";

const GithubFolder = () => {
  return (
    <div id="githubeverything" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', color: 'black', marginBottom: "20px", textAlign: 'center' }}>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <button style={{
          background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)',
          color: "white",
          textAlign: 'center',
          width: "80%",
          maxWidth: "300px",
          padding: "15px",
          fontSize: "1rem",
          borderRadius: "50px",
          border: "none",
          cursor: "pointer"
        }}>
          <h1 style={{ margin: "0" }} className='git'>Github-INFO</h1>
        </button>
        <br />
        <button style={{
          background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)',
          color: "white",
          textAlign: 'center',
          width: "80%",
          maxWidth: "300px",
          padding: "15px",
          fontSize: "1rem",
          borderRadius: "50px",
          border: "none",
          cursor: "pointer"
        }}>
          <h1 style={{ margin: "0" }} className='git'>Github Stats</h1>
        </button>

     
        <img
          id="github-stats-card"
          src="https://camo.githubusercontent.com/669962083b6a8c9caf54fcbb2a8b6ea750e704d6267aadbd88298d4812a1bfc8/68747470733a2f2f6769746875622d726561646d652d73746174732d7369676d612d666976652e76657263656c2e6170702f6170693f757365726e616d653d76696b617373757265736834333937267468656d653d676f7468616d26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d66616c736526636f756e745f707269766174653d74727565"
          style={{ maxWidth: '80%', height: 'auto', margin: '0 auto' }} // Adjusted inline style
        />
      

       


        <br />
        <button style={{
          background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)',
          color: "white",
          textAlign: 'center',
          width: "80%",
          maxWidth: "300px",
          padding: "15px",
          fontSize: "1rem",
          borderRadius: "50px",
          border: "none",
          cursor: "pointer"
        }}>
       
          <h1 style={{ margin: "0" }} className='git'>Github Streak</h1>

        </button>
      
        <img
          id="github-streak-stats"
          src="https://github-readme-streak-stats.herokuapp.com/?user=vikassuresh4397&theme=dark"
          alt="GitHub Streak Stats"
          style={{ maxWidth: '80%', height: 'auto', margin: '1px auto' }} // Adjusted inline style
        />
        <br />
     
        <button style={{
          background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)',
          color: "white",
          textAlign: 'center',
          width: "80%",
          maxWidth: "300px",
          padding: "15px",
          fontSize: "1rem",
          borderRadius: "50px",
          border: "none",
          cursor: "pointer"
        }}>
          <h1 style={{ margin: "0" }} className='git'>Github Languages</h1>
        </button>
       
        <img
          id="github-top-langs"
          src="https://camo.githubusercontent.com/5075836741dd98aeeb986ec1aa09136b9c070fc204b20bfcb1bde0ba343d6da8/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d76696b617373757265736834333937267468656d653d6461726b26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d66616c736526636f756e745f707269766174653d66616c7365266c61796f75743d636f6d70616374"
          alt="Top Languages"
          style={{ maxWidth: '80%', height: 'auto', margin: '0 auto' }} // Adjusted inline style
        />
        <br />
        <button style={{
          background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)',
          color: "white",
          textAlign: 'center',
          width: "80%",
          maxWidth: "300px",
          padding: "15px",
          fontSize: "1rem",
          borderRadius: "50px",
          border: "none",
          cursor: "pointer"
        }}>
          <h1 style={{ margin: "0" }} className='git'>Github Calendar</h1>
        </button>

        <div id="calendarnow1" style={{ maxWidth: '80%', margin: '0 auto', overflow: 'hidden' }}> {/* Adjusted inline style */}
          <div></div>
          <GithubCalendar
            id="calendarnow2"
            className='react-activity-calendar'
            username="grubersjoe"
            style={{ width: '100%', height: '100%' }} // Adjusted inline style
          />
        </div>
        <br />
      </div>
    </div>
  );
};

export default GithubFolder;
