import * as React from 'react';
// import { HashRouter, Route} from 'react-router-dom';
import ChatPage from '../ChatPage/ChatPage';

export const ChatAppRouter: React.FunctionComponent = () => {
  return (
    //   <HashRouter>
    <React.Fragment>
      {/* <Switch>
            <Route exact={true} path='/' component={ChatPage} />
            <Route path='/chat' component={ChatPage} />
          </Switch> */}
      <ChatPage />
    </React.Fragment>
    //   </HashRouter>
  );
};

export default ChatAppRouter;
