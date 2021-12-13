const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogs:
[
{id: 1, name: 'Peter'},
{id: 2, name: 'Petra'},
{id: 3, name: 'Angela'},
{id: 4, name: 'Domian'},
{id: 5, name: 'Tomas'},
{id: 6, name: 'Martin'},

],
  messages: 
  [
  {id: 1, message: 'Hallo'},
  {id: 2, message: 'Wie geht es dir?'},
  {id: 3, message: 'Ich lerne ReactJS'},
  {id: 4, message: 'Ich auch'},
  {id: 5, message: 'Ich bin kaputt'},
  {id: 6, message: 'Peter?'},
  ],
newMessageBody: ""
};
 const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
          return {
            ...state,
            newMessageBody: action.body
          };
            case SEND_MESSAGE:
              let body = state.newMessageBody;
              return { ...state.newMessageBody = '',
messages: [...state.messages, {id: 6, message: body}]
              };
            default:
                return state;
    }
  };

export const sendMessageCreator = () => ({type: SEND_MESSAGE}) 
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body });


export default dialogsReducer;