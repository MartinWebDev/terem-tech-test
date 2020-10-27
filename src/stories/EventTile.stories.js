import React from "react";
import EventTile from "../components/Events/EventTiles/EventTile";

import "./Global.scss";

// NOTE: I discovered an issue with combining storybook with scss. Variables are not imported correctly since those stylesheets are included by higher components
// I will try to bring them in as globals, otherwise will just bodge some in for now. 
const EventStory = {
  title: "UI/Event Tile",
  component: EventTile,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

export default EventStory;

const Template = (args) => (
  <EventTile {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  eventData: {
    img: "https://placeimg.com/240/240/nature",
    location: "Jabiru NT",
    title: "Kakadu National Park"
  },
  wide: false
};
