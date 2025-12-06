import React from 'react';
import Tasks from '../Shared/Tasks.jsx';

export default function ChatTasks(props) {
  return <Tasks role={"Chat"} {...props} />;
}
