import React, { useContext } from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'
import { context } from '../../context/context'

const Main = () => {
  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          {
            !showResult?
            <><div className="greet">
            <p><span>Hello. Dev..</span></p>
            <p>How can i help you today</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Current news</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Todays Quotes</p>
              <img src={assets.bulb_icon} alt="" />
            </div> <div className="card">
              <p>Tech Updates</p>
              <img src={assets.message_icon} alt="" />
            </div> <div className="card">
              <p>World is Here</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div></>
          :
          <div className='result'>
            <div className="resultTitle">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-Data">
              <img src={assets.gemini_icon} alt="" />
              {
                loading
                ?
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
                :
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
             
            </div>
          </div>

          }
          
          
          <div className="main-bottom">
            <div className="searchbox">
              <input type="text" placeholder='Enter a Prompt Here' onChange={(e)=>{setInput(e.target.value)}} value={input} />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                {
                  input?( <img src={assets.send_icon} alt="" onClick={()=>onSent()} />):null
                }
               
              </div>
              
            </div>
            
          </div>
          
        </div>
    </div>
  )
}

export default Main