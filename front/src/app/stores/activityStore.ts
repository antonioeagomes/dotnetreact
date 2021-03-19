import { makeAutoObservable, runInAction } from "mobx";
import { v4 as uuid } from "uuid";

import { Activity } from "../models/activity";
import agent from "../api/agent";

export default class ActivityStore {
  activityRegistry = new Map<string, Activity>();
  selectedActivity: Activity | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = true;

  constructor() {
    makeAutoObservable(this);
  }

  get activitiesByDate() {
      return Array.from(this.activityRegistry.values()).sort(
        (a, b) => Date.parse(a.date) - Date.parse(b.date)
      );
  }

  loadActivities = async () => {
    try {
      const activities = await agent.Activities.list();

      activities.forEach((a) => {
        a.date = a.date.split("T")[0];
        this.activityRegistry.set(a.id, a);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  setLoading = (state: boolean) => {
    this.loading = state;
  };

  selectActivity = (id: string) => {
    this.selectedActivity = this.activityRegistry.get(id);
  };

  cancelSelectActivity = () => {
    this.selectedActivity = undefined;
  };

  openForm = (id?: string) => {
    id ? this.selectActivity(id) : this.cancelSelectActivity();
    this.setEditMode(true);
  };

  setEditMode = (state: boolean) => {
    this.editMode = state;
  };

  closeForm = () => {
    this.setEditMode(false);
  };

  createActivity = async (activity: Activity) => {
    this.setLoading(true);
    activity.id = uuid();

    try {
      await agent.Activities.create(activity);
      runInAction(() => {
        this.activityRegistry.set(activity.id, activity);
        this.selectedActivity = activity;
      });
      this.setEditMode(false);
      this.setLoading(false);
    } catch (error) {
      console.log(error);
      this.setEditMode(false);
      this.setLoading(false);
    }
  };

  updateActivity = async (activity: Activity) => {
    this.setLoading(true);
    try {
      await agent.Activities.update(activity);
      runInAction(() => {
        this.activityRegistry.set(activity.id, activity);
        this.selectedActivity = activity;
      });
      this.setEditMode(false);
      this.setLoading(false);
    } catch (error) {
      console.log(error);
      this.setEditMode(false);
      this.setLoading(false);
    }
  };

  deleteActivity = async (id: string) => {
      this.setLoading(true);

      try {
          await agent.Activities.delete(id);
          runInAction(() => {
            this.activityRegistry.delete(id);
            this.selectedActivity = undefined;
          });
          this.setEditMode(false);
          this.setLoading(false);
      } catch (error) {
          console.log(error);
      }
  }
}