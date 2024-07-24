<template>
  <div>
    <h2>Hello from Vue!</h2>
    <div>
      <h3>Vue links</h3>
      <ul>
        <li v-for="{ title, url } in links">
          <a :href="url">{{ title }}</a>
        </li>
      </ul>
      <form @submit.prevent="linkForm.create()">
        <label>
          Link Title
          <input v-model="linkForm.data.title" placeholder="Something important">
        </label>
        <label>
          URL
          <input v-model="linkForm.data.url" placeholder="https://example.com/...">
        </label>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import { reactive, ref } from "vue";
import LinksCollection, { type LinkDocument } from "../api/links/links.collection";

const links = ref<LinkDocument[]>([]);
const ready = ref(false);
const linkForm = reactive({
  data: {
    title: "",
    url: "",
  },
  async create() {
    await Meteor.callAsync("links.create", linkForm.data);
  },
});
Tracker.autorun(() => {
  const subscription = Meteor.subscribe("links");
  ready.value = subscription.ready();
  links.value = LinksCollection.find({}).fetch();
});
</script>