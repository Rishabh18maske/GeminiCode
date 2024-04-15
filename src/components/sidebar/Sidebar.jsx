import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./sidebar.css";
import { context } from "../../context/context";
const Sidebar = () => {
  const [extend, setExtend] = useState(false);
  const {onSent,previousPrompt,setResentPrompt,newChat}=useContext(context)

  const loadPrompt=async(prompt)=>{
    setResentPrompt(prompt)
await onSent(prompt)
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=>setExtend(prev=>!prev)} src={assets.menu_icon} alt="" className="menu" />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extend ? <p>New Chats</p> : null}
        </div>
        {extend ? (
          <div className="recent">
            <p className="recent-title"><b>Recent Searches</b></p>
            {
            previousPrompt.map((item,index)=>{
            return(
            <div onClick={()=>loadPrompt(item)} className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>{item.slice(0,18)} ...</p>
            </div>
            )
            })
            }
            
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extend ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extend ? <p>Actity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extend ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
