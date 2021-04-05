import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { v4 as uuid } from "uuid";
import { Button, Header, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ValidationErrors from "../../errors/ValidationErrors";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from '../../../app/common/form/MyTextArea';
import MySelectInput from '../../../app/common/form/MySelectInput';
import { categoryOptions } from '../../../app/common/options/categoryOptions'
import * as Yup from "yup";
import MyDateTimeInput from "../../../app/common/form/MyDateTimeInput";
import { ActivityFormValues } from "../../../app/models/activity";

export default observer(function ActivityForm() {
  const history = useHistory();
  const [errors, setErrors] = useState(null);
  const { activityStore } = useStore();
  const {
    createActivity,
    updateActivity,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams<{ id: string }>();
  const [activity, setActivity] = useState<ActivityFormValues>(new ActivityFormValues());

  const validationSchema = Yup.object({
    title: Yup.string().required(),
    description: Yup.string().required(),
    categoty: Yup.string().required(),
    date: Yup.date().required().nullable(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
  });

  useEffect(() => {
    if (id) loadActivity(id).then((activity) => setActivity(new ActivityFormValues(activity!)));
  }, [id, loadActivity]);

  function handleFormSubmit(activity: ActivityFormValues) {
    if (!activity.id) {
      let newActivity = {
        ...activity,
        id: uuid(),
      };
      createActivity(newActivity)
        .then(() => {
          history.push(`/activities/${newActivity.id}`);
        })
        .catch((err) => setErrors(err));
    } else {
      updateActivity(activity)
        .then(() => {
          history.push(`/activities/${activity.id}`);
        })
        .catch((err) => setErrors(err));
    }
  }

  if (loadingInitial)
    return <LoadingComponent content={"Loading activity..."} />;

  return (
    <Segment clearing>
      <Header content='Activity Detail' sub color='teal' />
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={activity}
        onSubmit={(values) => {
          handleFormSubmit(values);
        }}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
            <MyTextInput name="title" placeholder="Title" />
            <MyTextArea name="description" placeholder="Description" rows={4} />
            <MySelectInput options={categoryOptions} name="category" placeholder="Category" />
            <MyDateTimeInput 
              name="date" 
              placeholderText="Date" 
              showTimeSelect 
              timeCaption='time'
              dateFormat='d MMMM yyyy hh:mm'
              />
            <Header content='Location Details' sub color='teal' />
            <MyTextInput name="city" placeholder="City"/>
            <MyTextInput name="venue" placeholder="Venue" />
            <Button
              disabled={isSubmitting || !dirty || !isValid}
              loading={isSubmitting}
              floated="right"
              positive
              type="submit"
              content="Save"
            />
            <Button
              as={Link}
              to="/activities"
              floated="right"
              type="button"
              content="Cancel"
            />
          </Form>
        )}
      </Formik>
      {errors && <ValidationErrors errors={errors} />}
    </Segment>
  );
});
