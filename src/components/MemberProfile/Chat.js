import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";
import { MdSend } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiMessageSquareDots } from "react-icons/bi";
import MsgIn from './MsgIn';
import MsgOut from './MsgOut';

import userImage from "../../images/user-image.jpg"


const Chat = () => {

    const [chatDrawer, setChatDrawer] = useState(false)

    const moveChatDrawer = e => {
        e.preventDefault();
        
        let chatElement = document.querySelector('.chat');
        
        chatElement.classList.contains('chatOpen') ?
        chatElement.classList.remove('chatOpen') :
        chatElement.classList.add('chatOpen');
        
        setChatDrawer(!chatDrawer)
    }

    const theChatDrawer = chatDrawer ?
                          <FaChevronRight className='iconChatDrawer'/> :
                          <IoChatbubblesSharp className='iconChatDrawer'/> ;


    const chatContent = chatDrawer ?
                        'chat-content-open' :
                        'chat-content-close' ;

    const msgIpsum = 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.'
    


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
                            <img src={userImage} alt='interlocutor' className='interlocutor-image'/>
                            <span className='interlocutor-name'>username-269428</span>
                        </div>
                        <NavDropdown title={<BsThreeDotsVertical size='22' color='whitesmoke'/>} id="dropdown-delete-link" className='dropdown-delete-discussion-div'>
                            <NavDropdown.Item className='dropdown-delete-discussion'>
                                <RiDeleteBin5Line className='icons-dropdown' />Suppr. discussion
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                    <div className='discussion'>
                        <MsgIn msgContent='Salut' />
                        <MsgOut msgContent='Bonjour' />
                        <MsgIn msgContent={msgIpsum} />
                        <MsgOut msgContent={msgIpsum} />
                    </div>
                </div>
                <div className='text-to-send'>
                    <textarea className='chat-textarea' autoComplete='off' placeholder='Message' minLength='1' maxLength='255' autoCapitalize='on'></textarea>
                    <MdSend className='send-icone'/>
                </div>
            </div>
        </div>
    )
}

export default Chat;