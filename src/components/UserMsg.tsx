import React, { useEffect } from 'react';

type UserMsgProps = {
    userMessage: string;
    setUserMessage: React.Dispatch<React.SetStateAction<string>>;
};

const UserMsg: React.FC<UserMsgProps> = ({ userMessage, setUserMessage }) => {

    useEffect(() => {
        if (!userMessage) return

        const timeoutId = setTimeout(() => {
            setUserMessage('');
        }, 1500);
        return () => clearTimeout(timeoutId);

    }, [userMessage]);

    return (
        <>
            {!!userMessage.length &&
                <div className="user-message">{userMessage}</div>
            }
        </>
    );
};

export default UserMsg;
