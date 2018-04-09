import React, { Component } from "react";
import { graphql } from "react-apollo";
import GamesList from "../components/GamesList";
import fetchGames from "../../../../client/queries/fetchGames";
import gql from "graphql-tag";

const GamesContainer = graphql(fetchGames)(GamesList);

export default GamesContainer;
