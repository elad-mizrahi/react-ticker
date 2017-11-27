import React, {PropTypes} from 'react';
import InputMessagesPage from './input/InputMessagesPage';
import PreviewPage from './preview/PreviewPage';
import moment from 'moment';
 
class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        messages: [
            {imageUrl: 'http://via.placeholder.com/50x50', name: '1mayer', date:'20/11/2017', time:'22:30',  text: 'butT h isTh isTss sssss sssssss sssssss ssssssssss ssss sss ssssss ssss ssshhisThhi sThhisThhis Thhi sThhisThhisThhi sThisThisT hisTh isThi sThisTh sThisThis hisThisThisThisT isT is a text ex ample'},
            {imageUrl: 'http://via.placeholder.com/50x50', name: '2Jeff-Bezos', date:'20/11/2017', time:'22:30', text: 'Some more text'},
            {imageUrl: 'http://via.placeholder.com/50x50', name: '3Sundar Pichai', date:'20/11/2017', time:'22:30', text: 'Extra text on the side'},
            {imageUrl: 'http://via.placeholder.com/50x50', name: '4Rick Sanchez', date:'20/11/2017', time:'22:30', text: 'Extra text on the side'},
            {imageUrl: 'http://via.placeholder.com/50x50', name: '5Morty Smith', date:'20/11/2017', time:'22:30', text: 'Extra text on the side'},
            {imageUrl: 'http://via.placeholder.com/50x50', name: '6Summer Smith', date:'20/11/2017', time:'22:30', text: 'Extra text on the side'},
            {imageUrl: 'http://via.placeholder.com/50x50', name: '7Beth Sanchez', date:'20/11/2017', time:'22:30', text: 'Extra text on the side'},
            {imageUrl: 'http://via.placeholder.com/50x50', name: '8Miki Haymoviz', date:'20/11/2017', time:'22:30', text: 'Extra text on the side'},
            {imageUrl: 'http://via.placeholder.com/50x50', name: '9Yoram Arbel', date:'20/11/2017', time:'22:30', text: 'Extra text on the side'},
            {imageUrl: 'http://via.placeholder.com/50x50', name: '10Abu Gosh', date:'20/11/2017', time:'22:30', text: 'Extra text on the side'}
        ],
      currentlyDisplayed: [],
      lastIndex: 2
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loopMessages = this.loopMessages.bind(this);
  }

  componentWillMount() {
    const messages = this.state.messages;
    let currentlyDisplayed = [];
    for(let i = 0; i < 3; ++i ){
      currentlyDisplayed.unshift(messages[i]);
    }
    this.setState({currentlyDisplayed});
  
  } 

  componentDidMount(){
    setInterval(this.loopMessages, 3000);
  }

  componentWillUnmount(){
    clearInterval(this.loopMessages());
  }
  
  loopMessages(){
  
    let messages = this.state.messages;
    let lastIndex = this.state.lastIndex;
    let currentlyDisplayed = this.state.currentlyDisplayed;

    currentlyDisplayed.pop();
    currentlyDisplayed.unshift(messages[(lastIndex + 1) % messages.length]);
    lastIndex +=1;
    this.setState({currentlyDisplayed, lastIndex});
   }
  
  //Adding a message to the queue.
  handleSubmit(data){
    let allMessages = this.state.messages;
    let inputData = {imageUrl: 'http://via.placeholder.com/50x50', name: 'User', date: moment().format('DD/MM/YYYY'), time: moment().format('HH:mm'), text: data, visable: false};
    allMessages.push(inputData);
    this.setState({messages: allMessages});
  }
  
  render() {
    return (
        <div className="main-ticker-container">
          <InputMessagesPage onInputSubmit={this.handleSubmit} />
          <PreviewPage data={this.state.currentlyDisplayed} />
         </div>
    );
  }
}

export default App;
