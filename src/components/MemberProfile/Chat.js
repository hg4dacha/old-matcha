import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaChevronRight } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";
import { MdSend } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiMessageSquareDots } from "react-icons/bi";
import MsgIn from './MsgIn';
import MsgOut from './MsgOut';

import UserImage from "../../images/user-image.jpg"


const Chat = (props) => {

    // CHAT DRAWER ↓↓↓
    const [chatDrawer, setChatDrawer] = useState(false)

    const moveChatDrawer = e => {
        e.preventDefault();
        
        let chatElement = document.querySelector('.chat');
        
        chatElement.classList.contains('chatOpen') ?
        chatElement.classList.remove('chatOpen') :
        chatElement.classList.add('chatOpen');
        
        setChatDrawer(!chatDrawer)
        props.onChatChange(!chatDrawer)
    }

    const theChatDrawer = chatDrawer ?
                          <FaChevronRight className='iconChatDrawer'/> :
                          <IoChatbubblesSharp className='iconChatDrawer'/> ;


    const chatContent = chatDrawer ?
                        'chat-content-open' :
                        'chat-content-close' ;

    
                        
    const allChat = [
        {
            msg: "Salut",
            userID: '934'
        },
        {
            msg: "Bonjour",
            userID: '000'
        },
        {
            msg: "Comment ca va ?",
            userID: '934'
        },
        {
            msg: "Ca va et toi",
            userID: '000'
        },
        {
            msg: "Oui ca va. Tu fais quoi ?",
            userID: '934'
        },
        {
            msg: "Rien de special et toi",
            userID: '000'
        },
        {
            msg: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte",
            userID: '934'
        },
        {
            msg: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. ",
            userID: '000'
        },
        {
            msg: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte",
            userID: '934'
        },
        {
            msg: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. ",
            userID: '000'
        },
        {
            msg: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte",
            userID: '934'
        },
        {
            msg: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. ",
            userID: '000'
        },
        {
            msg: "Non meme pas...",
            userID: '934'
        },
        {
            msg: "Au revoir",
            userID: '000'
        }
    ]
    
    // WRITTEN MESSAGE ↓↓↓
    const [theMessage, setTheMessage] = useState('')
    
    const newMessage = (e) => {
        setTheMessage(e.target.value)
    }

    const handleAddNewMsg = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (theMessage !== '') {
            setChatMessages(prevState => [...prevState, {
                msg: theMessage,
                userID: '000'
            }]);
            setTheMessage('');
        }
    }


    const styleIcon0 = {backgroundColor: '#8FA3AD', cursor: 'initial'}
    const styleIcon1 = {backgroundColor: '#4285F4', cursor: 'pointer'}
    const colorSendIcon = theMessage === '' ? styleIcon0 : styleIcon1 ;

    // SEND MSG WITH ENTER KEY ↓↓↓
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            handleAddNewMsg(e);
        }
        // else if (e.key === 'Enter' && e.shiftKey) {
        //     setTheMessage(prevState => prevState + '\n');
        // }
    }


    // CHAT MESSAGES ↓↓↓
    const [chatMessages, setChatMessages] = useState(allChat)
    
        
    // SCROLL IN BOTTOM ↓↓↓
    useEffect( () => {
        const scrollChat = document.querySelector('.discussion')
        scrollChat.scrollTop = scrollChat.scrollHeight
    }, [chatMessages])
    
    
    return (
        <div className='chat'>
            <div className='iconChatDrawerContainer'>
                <div className='iconChatDrawerDiv centerElementsInPage' onClick={moveChatDrawer}>
                    <span className='nb-notif-chat-drawer'>3</span>
                    {theChatDrawer}
                </div>
            </div>
            <div className={chatContent}>
                <div className='discussionContainer'>
                    <div className='interlocutor'>
                        <div className='BiMessageSquareDots'>
                            <BiMessageSquareDots size='25' color='whitesmoke' />
                        </div>
                        <div className='centerElementsInPage' style={{width: '60%', height: '100%'}}>
                            <img src={UserImage} alt='interlocutor' className='interlocutor-image'/>
                            <span className='interlocutor-name'>username-269428</span>
                        </div>
                        <NavDropdown title={<BsThreeDotsVertical size='22' color='whitesmoke'/>} id="dropdown-delete-link" className='dropdown-delete-discussion-div'>
                            <NavDropdown.Item className='dropdown-delete-discussion'>
                                <RiDeleteBin5Line className='icons-dropdown' />Suppr. discussion
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                    <div className='discussion'>
                        {chatMessages.map( msg => {
                            if (msg.userID === '000'){
                                return <MsgIn key={uuidv4()} msgContent={msg.msg} />
                            }
                            else {
                                return <MsgOut key={uuidv4()} msgContent={msg.msg} />
                            }
                        })}
                    </div>
                </div>
                <form className='text-to-send' onSubmit={handleAddNewMsg}>
                    <textarea
                        value={theMessage}
                        onChange={newMessage}
                        onKeyDown={handleKeyDown}
                        className='chat-textarea'
                        autoComplete='off'
                        placeholder='Taper un message'
                        minLength='1'
                        maxLength='255'
                        autoCapitalize='on'
                    />
                    <button type='submit'className='send-button' style={colorSendIcon} >
                        <MdSend className='send-icon' />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Chat;