import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../greeting/Greeting";
import Skills from "../skills/Skills";
import StackProgress from "../skillProgress/skillProgress";
import Projects from "../projects/Projects";
import StartupProject from "../StartupProjects/StartupProject";
import Contact from "../contact/Contact";
import Footer from "../../components/footer/Footer";
import Top from "../topbutton/Top";
import Cards from '../card/Cards'
import "./Main.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default class Main extends Component {
  render() {
    return (
      <div className="background">
        <Header />
        <Greeting />
        <Projects />
        <Cards /> 
        <StartupProject />
        <Skills />
        <StackProgress />
        <Contact />
        <Footer />
        <Top />
      </div>
    );
  }
}
