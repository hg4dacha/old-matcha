import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaChevronRight } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";
import { MdSend } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RiDeleteBin5Line } from "react-icons/ri";
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
    
    // CHAT MESSAGES ↓↓↓
    const [chatMessages, setChatMessages] = useState(allChat)
    

    // WRITTEN MESSAGE ↓↓↓
    const [theMessage, setTheMessage] = useState('')

    const newMessage = (e) => {
        setTheMessage(e.target.value)
    }
    
    
    // SEND MESSAGE ↓↓↓
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
    

    // SEND MSG WITH ENTER KEY ↓↓↓
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            handleAddNewMsg(e);
        }
    }


    // SEND BUTTON STYLE ↓↓↓
    const sendCursor = theMessage === '' ? 'initial' : 'pointer' ;
    const sendColor = theMessage === '' ? '#8FA3AD' : '#A159F5' ;


    // SCROLL IN BOTTOM ↓↓↓
    useEffect( () => {
        const scrollChat = document.querySelector('.discussion')
        scrollChat.scrollTop = scrollChat.scrollHeight
    }, [chatMessages])
    
    
    // DELETE DISCUSSION ↓↓↓
    const onConfirmDeleteDiscussion = () => {
        setChatMessages([]);
        props.onDeleteDiscussionConfirmation();
    }

    const deleteDiscussion = {
        act: "Supprimer la discussion",
        quest: "supprimer le contenu de la discussion",
        onConfirm: onConfirmDeleteDiscussion
    }

    const handleDeleteDiscussion = () => {
        chatMessages.length !== 0 &&
        props.onDeleteDiscussion(deleteDiscussion);
        
    }

    const emptyChat = chatMessages.length === 0 ?
                      <div className='empty-chat'>La discussion est vide.</div> :
                      null;

    
    return (
        <div className='chat'>
            <div className='iconChatDrawerDiv centerElementsInPage' onClick={moveChatDrawer}>
                <span className='nb-notif-chat-drawer'>3</span>
                {theChatDrawer}
            </div>
            <div className={chatContent}>
                <div className='discussionContainer'>
                    <div className='interlocutor'>
                        <div className='centerElementsInPage' style={{width: '60%', height: '100%'}}>
                            <img src={UserImage} alt='interlocutor' className='interlocutor-image'/>
                            <span className='interlocutor-name'>username-269428</span>
                        </div>
                        <IoMdHeart size='23' color='#010103' />
                        <NavDropdown title={<BsThreeDots size='27' color='#010103' className='dlt-disc-icon' />} id="dropdown-delete-link" className='dropdown-delete-discussion-div'>
                            <NavDropdown.Item className='dropdown-delete-discussion' onClick={handleDeleteDiscussion} >
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
                        {emptyChat}
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
                    <button type='submit'className='send-button' style={{cursor: `${sendCursor}` }} >
                        <MdSend className='send-icon' color={sendColor} />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Chat;