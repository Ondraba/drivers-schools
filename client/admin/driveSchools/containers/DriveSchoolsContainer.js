import React, { Component } from "react";
import { graphql } from "react-apollo";
import DriveSchoolsList from "../components/DriveSchoolsList";
import fetchDriveSchools from "../../../../client/queries/fetchDriveSchools";
import gql from "graphql-tag";

const DriveSchoolsContainer = graphql(fetchDriveSchools)(DriveSchoolsList);

export default DriveSchoolsContainer;
