import * as React from 'react';
// import Emojify from 'react-emojione';
import Nickname from '../Nickname/Nickname';
import Timestamp from '../Timestamp/Timestamp';
// import MicrolinkCard from '@microlink/react';
import Linkify from 'linkify-react';
import * as getUrls from 'get-urls';

// export interface IMessage {
//     from: string;
//     content: string;
//     time: string;
//     type: string;
// }

// class Message extends React.Component<{ message: IMessage }> {
class Message extends React.Component {
  public render() {
    // const { message } = this.props;
    var today = new Date(),
      hours = today.getHours() < 10 ? '0' + today.getHours() : today.getHours(),
      mins = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes(),
      mins2 = '55',
      time = hours + ':' + mins,
      time2 = hours + ':' + mins2;

    return (
      <React.Fragment>
        {/* <div id='nickname-container'>
                    {message.type === 'received' && <Nickname value={message.from} />}
                    <Timestamp value={message.time} floatToRight={message.type === 'sent'} />
                    <Timestamp value={time} floatToRight={true} />
                </div> */}
        {/* if({message.type == 'sent'}){
                    <div className='messageLayoutSender1'>
                        <Linkify>{message.content} {this.parseURLs(message.content)}</Linkify>
                    </div>
                } else{
                    <div className='messageLayoutSender2'>
                        <Linkify>{message.content} {this.parseURLs(message.content)}</Linkify>
                    </div>
                } */}
        <div className="messageLayoutSender1">
          <Timestamp value={time} floatToRight={true} />
          <Linkify> {this.parseURLs("Hello sir. I have uploaded last week's homework.")}</Linkify>
        </div>
        <div className="messageLayoutSender2">
          <Timestamp value={time2} floatToRight={true} />
          <Linkify> {this.parseURLs('Noted')}</Linkify>
        </div>
        {/* <div className='messageLayoutSender1'>
                    <Timestamp value={time2} floatToRight={true} />
                    <Linkify> {this.parseURLs("Hii")}</Linkify>
                </div>
                <div className='messageLayoutSender2'>
                    <Timestamp value={time2} floatToRight={true} />
                    <Linkify> {this.parseURLs("Hello")}</Linkify>
                </div> */}
      </React.Fragment>
    );
  }

  private parseURLs = (text: string) => {
    const urls = text;
    // const urls = getUrls(text);
    // if (!urls.size) {
    if (!urls.length) {
      return;
    }

    // const parsedUrls = Array.from(urls).map((url: string, idx: number) =>
    // (
    //     <MicrolinkCard url={url} key={idx} />
    // )
    // );
    return (
      <React.Fragment>
        {/* {parsedUrls} */}
        {urls}
      </React.Fragment>
    );
  };
}

export default Message;
