import "./App.css";
import Motion from "./Motion/Motion";
import Animations from "./Animations/Animations";
import Gestures from "./Gestures/Gestures";
import Variants from "./Variants/Variants";
import ScrollTriggered from "./ScrollTriggered/ScrollTriggered";
import ServerRendering from "./ServerRendering/ServerRendering";
import MotionValues from "./MotionValues/MotionValues";
import Layout from "./Layout/Layout ";

export default function App() {
  return (
    <>
      {/* <Motion /> */}
      {/* <Animations /> */}
      {/* <Gestures /> */}
      {/* <Variants /> */}

      {/* <div style={{ overflow: "scroll" }}>
        <ScrollTriggered />
        <ScrollTriggered />
        <ScrollTriggered />
        <ScrollTriggered />
        <ScrollTriggered />
        <ScrollTriggered />
        <ScrollTriggered />
      </div> */}
      {/* <ServerRendering /> */}
      {/* <MotionValues /> */}
      <Layout />
    </>
  );
}
