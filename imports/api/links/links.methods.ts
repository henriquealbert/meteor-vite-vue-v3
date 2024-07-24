import { Meteor } from "meteor/meteor";
import * as Valibot from "valibot";
import LinksCollection, { LinkSchema } from "./links.collection";

Meteor.methods({
  "links.create"(request: { title: string; url: string }) {
    const link = Valibot.parse(LinkSchema, request);
    return LinksCollection.insertAsync({
      ...link,
      createdAt: new Date(),
    });
  },
});
