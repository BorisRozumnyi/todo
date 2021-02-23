import { useSelector } from 'react-redux';
import { RootState } from '../types';

export const ListMessages = () => {
  const { messages } = useSelector((state: RootState) => state.chat);

  return (
    <>
      {/* {messages.length && messages.map(message => <p key={message}>{message}</p>)} */}
      {messages.length}
    </>
  );
};
