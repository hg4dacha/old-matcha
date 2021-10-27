import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";
import { MdSend } from "react-icons/md";


const Chat = () => {

    const [chatDrawer, setChatDrawer] = useState(false)

    const moveChatDrawer = e => {
        e.preventDefault();
        
        let chatElement = document.querySelector('.chat');
        
        chatElement.classList.contains('chatOpen') ?
        chatElement.classList.remove('chatOpen') :
        chatElement.classList.add('chatOpen');
        
        setChatDrawer(!chatDrawer)
        console.log(chatDrawer)
    }

    const theChatDrawer = chatDrawer ?
                          <FaChevronRight className='FaChevron' onClick={moveChatDrawer} /> :
                          <IoChatbubblesSharp className='FaChevron' onClick={moveChatDrawer} />;


    return (
        <div className='chat'>
            <div className='FaChevronContainer'>
                <div>
                {theChatDrawer}
                </div>
            </div>
            <div className='text-to-send'>
                <textarea className='chat-textarea' autoComplete='off' placeholder='Message' minLength='1' maxLength='255' autoCapitalize='on'></textarea>
                <MdSend className='send-icone'/>
            </div>
        </div>
    )
}

export default Chat;