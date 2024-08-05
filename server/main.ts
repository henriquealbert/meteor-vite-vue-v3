import { Meteor } from "meteor/meteor";
import LinksCollection from "../imports/api/links/links.collection";
import "../imports/api/links/links.methods";
import "../imports/api/links/server/links.publications";

Meteor.startup(async () => {
  if ((await LinksCollection.find({}).countAsync()) > 0) {
    return;
  }

  await LinksCollection.insertAsync({
    title: "Meteor.com",
    url: "https://meteor.com",
  });
});

