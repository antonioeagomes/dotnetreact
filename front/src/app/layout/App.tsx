import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from '../models/activity';
import { Header, Icon, List } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    });
  }, []);

  return (
    <div>
      <Header as='h2'>
        <Icon name='users' />
        <Header.Content>Activities</Header.Content>
      </Header>
        <List>
          {
            activities.map((activity: Activity) => (
              <List.Item key={activity.id}>
                {`${activity.city} ${activity.venue}`}
              </List.Item>)
          )}
        </List>
      
    </div>
  );
}

export default App;
