import React, { Component } from "react";
import { graphql } from "react-apollo";
import StageList from "../components/StageList";
import fetchEdeeStageSource from "../../queries/fetchEdeeStageSource";
import gql from "graphql-tag";

const StageContainer = graphql(fetchEdeeStageSource)(StageList);

export default StageContainer;
