import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo'


export const AllCoins = new Mongo.Collection('allcoins');
export const Githubitems = new Mongo.Collection('githubitems');
export const Githubcount = new Mongo.Collection('githubcount');
export const GitToken = new Mongo.Collection('gitToken');


if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('githubitems', (date) => {
    return Githubitems.find({repoUpdatedAt: date},{sort: {stargazers_count: -1}, limit: 100});
  });
  Meteor.publish('githubcount', () => {
    return Githubcount.find();
  });
  Meteor.publish('allcoins', () => {
    return AllCoins.find();
  });
  Meteor.publish('gitToken', () => {
    return GitToken.findOne();
  });
}