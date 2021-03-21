import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { v4 as uuid } from "uuid";
import { Button, Segment } from "semantic-ui-react";
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

export default observer(function ActivityForm() {
  const history = useHistory();
  const [errors, setErrors] = useState(null);
  const { activityStore } = useStore();
  const {
    createActivity,
    updateActivity,
    loadActivity,
    loading,
    loadingInitial,
  } = activityStore;
  const { id } = useParams<{ id: string }>();
  const [activity, setActivity] = useState({
    id: "",
    title: "",
    date: "",
    description: "",
    category: "",
    city: "",
    venue: "",
  });

  const validationSchema = Yup.object({
    title: Yup.string().required(),
    description: Yup.string().required(),
    categoty: Yup.string().required(),
    date: Yup.string().required(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
  });

  useEffect(() => {
    if (id) loadActivity(id).then((activity) => setActivity(activity!));
  }, [id, loadActivity]);

  function handleSubmit() {
    if (activity.id.length === 0) {
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

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

  if (loadingInitial)
    return <LoadingComponent content={"Loading activity..."} />;

  return (
    <Segment clearing>
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={activity}
        onSubmit={(v) => {
          console.log(v);
        }}
      >
        {({ handleSubmit }) => (
          <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
            <MyTextInput name="title" placeholder="Title" />
            <MyTextArea name="description" placeholder="Description" rows={4} />
            <MySelectInput options={categoryOptions} name="category" placeholder="Category" />
            <MyTextInput name="date" placeholder="Date"/>
            <MyTextInput name="city" placeholder="City"/>
            <MyTextInput name="venue" placeholder="Venue" />
            <Button
              loading={loading}
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
