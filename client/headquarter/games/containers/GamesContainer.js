import React, { Component } from "react";
import { graphql } from "react-apollo";
import GamesList from "../components/GamesList";
import fetchEdeeSourceData from "../../../../client/queries/fetchEdeeSourceData";
import gql from "graphql-tag";

const GamesContainer = graphql(fetchEdeeSourceData)(GamesList);

export default GamesContainer;
