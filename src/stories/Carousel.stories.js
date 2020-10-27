import React from "react";
import Carousel from "../components/Carousel/Carousel";

// NOTE: It seems storybook has changed quite a lot since I last used it.
// So I am just using whatever the default template is here rather than reading the documentation which might take a long time.
// The usage of storybook is irrelevent anyway, it's mostly as a visual testing tool and an easier way for me to demonstrate my approach to component design.
const CarouselStory = {
  title: "UI/Carousel",
  component: Carousel,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

export default CarouselStory;

const Template = () => (
  <Carousel>
    <div style={{ marginRight: "6px", border: "4px solid #ccc" }}><img src="https://picsum.photos/200?1" style={{ display: "block" }} alt="Pic 1" /></div>
    <div style={{ marginRight: "6px", border: "4px solid #ccc" }}><img src="https://picsum.photos/200?2" style={{ display: "block" }} alt="Pic 2" /></div>
    <div style={{ marginRight: "6px", border: "4px solid #ccc" }}><img src="https://picsum.photos/200?3" style={{ display: "block" }} alt="Pic 3" /></div>
    <div style={{ marginRight: "6px", border: "4px solid #ccc" }}><img src="https://picsum.photos/200?4" style={{ display: "block" }} alt="Pic 4" /></div>
    <div style={{ marginRight: "6px", border: "4px solid #ccc" }}><img src="https://picsum.photos/200?5" style={{ display: "block" }} alt="Pic 5" /></div>
    <div style={{ marginRight: "6px", border: "4px solid #ccc" }}><img src="https://picsum.photos/200?6" style={{ display: "block" }} alt="Pic 6" /></div>
    <div style={{ marginRight: "6px", border: "4px solid #ccc" }}><img src="https://picsum.photos/200?7" style={{ display: "block" }} alt="Pic 7" /></div>
    <div style={{ marginRight: "6px", border: "4px solid #ccc" }}><img src="https://picsum.photos/200?8" style={{ display: "block" }} alt="Pic 8" /></div>
    <div style={{ marginRight: "6px", border: "4px solid #ccc" }}><img src="https://picsum.photos/200?9" style={{ display: "block" }} alt="Pic 9" /></div>
    <div style={{ marginRight: "0px", border: "4px solid #ccc" }}><img src="https://picsum.photos/200?10" style={{ display: "block" }} alt="Pic 10" /></div>
  </Carousel>
);

export const Primary = Template.bind({});
