import * as React from 'react';
import { MessageCard } from '../../Card/MessageCard';

export const People = () => {
  // const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   // 👇️ toggle
  //   setIsActive(current => !current);

  //   // 👇️ or set to true
  //   // setIsActive(true);
  // };

  return (
    <div className="displayChatters">
      <MessageCard
        subject="Mathematics"
        image={<img src={'/Images/Teachers/mr1.jpg'} />}
        teacher="Mr. Lasitha"
        // lastmessage="Noted"
      />
      <MessageCard
        subject="Science"
        image={<img src={'/Images/Teachers/ms1.jpg'} />}
        teacher="Mr. Nayana"
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
  );
};

export default People;
