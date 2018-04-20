import React from "react";
import withData from "../lib/withData";
import CreateDriveSchoolForm from "../universal/components/composed/createDriveSchoolForm";
import FullPageTemplate from "../universal/components/layout/fullPageTemplate";

export default withData(props => (
  <FullPageTemplate>
    <CreateDriveSchoolForm />
  </FullPageTemplate>
));
