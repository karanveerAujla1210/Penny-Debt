import React from 'react';
import Tasks from '../Shared/Tasks.jsx';

export default function AdminTasks(props) {
  return <Tasks role={"Admin"} {...props} />;
}
