import * as React from 'react';
import { MessageCard } from '../../Card/StudentMessageCard';
import { AiOutlinePlus } from 'react-icons/ai';
import { usePopup } from 'react-hook-popup';
import { PopupProvider } from 'react-hook-popup';
// @ts-ignore
import swal from '@sweetalert/with-react';

export const People = () => {
  // const [showPopup, hidePopup] = usePopup('alert', () => (
  //   <div className="alert">
  //     This is an alert!
  //   </div>
  // ));

  const userLogOut = () => {
    swal(
      <div className="newChatPopup">
        <h1 className="header"> Modal Title </h1>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem, repellat quidem ut, minima
          sint vel eveniet quibusdam voluptates delectus doloremque, explicabo tempore dicta adipisci fugit amet
          dignissimos?
        </div>
      </div>
    );
  };

  return (
    <div className="displayChatters">
      <button className="addChat" onClick={() => userLogOut()}>
        <AiOutlinePlus /> New Chat
      </button>
      <div className="small-scrollbar">
        <MessageCard
          subject="Mathematics"
          image={<img src={'/Images/Teachers/mr1.jpg'} />}
          teacher="Mr. Lasitha"
          // lastmessage="Noted"
        />
        <MessageCard
          subject="Science"
          image={<img src={'/Images/Teachers/ms1.jpg'} />}
          teacher="Mrs. Nayana"
          // lastmessage="You need to cle..."
        />
        <MessageCard
          subject="History"
          image={<img src={'/Images/Teachers/mr2.jpg'} />}
          teacher="Mr. Kamal"
          // lastmessage="Thank you sir"
        />
        <MessageCard
          subject="Music"
          image={<img src={'/Images/Teachers/mr3.jpg'} />}
          teacher="Mr. Anura"
          // lastmessage="Sir can I have th..."
        />
        <MessageCard
          subject="Art"
          image={<img src={'/Images/Teachers/mrs1.jpg'} />}
          teacher="Mrs. Shiromi"
          // lastmessage="I will upload the ..."
        />
      </div>
    </div>
  );
};

export default People;
