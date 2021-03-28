import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import ActivityList from "./ActivityList";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityFilter from "./ActivityFilter";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadingInitial, activityRegistry, loadActivities } = activityStore;

  useEffect(() => {
    if(activityRegistry.size <= 0) loadActivities(); 
  }, [activityRegistry.size, loadActivities]);

  if (loadingInitial) return <LoadingComponent content="Loading activities..." />;

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width="6">
       <ActivityFilter />
      </Grid.Column>
    </Grid>
  );
});
