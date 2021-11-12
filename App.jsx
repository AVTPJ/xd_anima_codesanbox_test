import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Popup12 from "./components/Popup12";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|popup-12)">
          <Popup12 {...popup12Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const popup12Data = {
    title: "Work and finances",
    text1: "If you are worried about money, bills or making financial arrangements, talk to your nurse and look at the charities listed in this video and below. They will direct you to organisations that can help.",
    spanText: <>Kidney Cancer UK &amp; Kidney Cancer Scotland<br />Patient Support Careline: 0800 002 9002 <br /></>,
    spanText2: <><br /></>,
    spanText3: <><br />Kidney Cancer Support Network<br />Helpline: 01209 890 326</>,
    spanText4: "",
    spanText5: "www.kcsn.org.uk",
    spanText6: "",
    spanText7: "www.kcuk.org.uk",
    path24: "https://anima-uploads.s3.amazonaws.com/projects/618e43705747be681791d213/releases/618e48464d5c1662f799782f/img/path-24@1x.png",
    path25: "https://anima-uploads.s3.amazonaws.com/projects/618e43705747be681791d213/releases/618e48464d5c1662f799782f/img/path-25@1x.png",
    path26: "https://anima-uploads.s3.amazonaws.com/projects/618e43705747be681791d213/releases/618e48464d5c1662f799782f/img/path-26@1x.png",
    path27: "https://anima-uploads.s3.amazonaws.com/projects/618e43705747be681791d213/releases/618e48464d5c1662f799782f/img/path-27@1x.png",
    path28: "https://anima-uploads.s3.amazonaws.com/projects/618e43705747be681791d213/releases/618e48464d5c1662f799782f/img/path-28@1x.png",
    path29: "https://anima-uploads.s3.amazonaws.com/projects/618e43705747be681791d213/releases/618e48464d5c1662f799782f/img/path-29@1x.png",
};

