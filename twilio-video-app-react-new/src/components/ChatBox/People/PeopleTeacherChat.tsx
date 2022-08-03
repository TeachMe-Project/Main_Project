import * as React from 'react';
import { MessageCard } from '../../Card/TeacherMessageCard';

export const People = () => {
  return (
    <div className="displayChatters">
      <div className="small-scrollbar">
        <MessageCard
          // subject="Mathematics"
          image={<img src={'/Images/Students/st1.jpg'} />}
          student="Maneth"
          // lastmessage="Noted"
        />
        <MessageCard
          // subject="Science"
          image={<img src={'/Images/Students/st2.jpg'} />}
          student="Avishka"
          // lastmessage="You need to cle..."
        />
        <MessageCard
          // subject="History"
          image={<img src={'/Images/Students/st3.jpg'} />}
          student="Prasad"
          // lastmessage="Thank you sir"
        />
        <MessageCard
          // subject="Music"
          image={<img src={'/Images/Students/st4.jpg'} />}
          student="Bhashitha"
          // lastmessage="Sir can I have th..."
        />
      </div>
    </div>
  );
};

export default People;
