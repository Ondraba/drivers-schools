import React, { Component } from "react";
import { graphql } from "react-apollo";
import StageObjectList from "../components/StageObjectList";
import fetchEdeeStageObject from "../../queries/fetchEdeeStageObject";
import gql from "graphql-tag";

const StageObjectContainer = graphql(fetchEdeeStageObject)(StageObjectList);

export default StageObjectContainer;
