import React from "react";
import HtmlLogo from "../images/icons/html.svg";
import CSSLogo from "../images/icons/css.svg";
import JavascriptLogo from "../images/icons/javascript.svg";
import BootstrapLogo from "../images/icons/bootstrap.svg";
import HandlebarsLogo from "../images/icons/handlebars.svg";
import TailwindLogo from "../images/icons/tailwind.png";
import ExpressLogo from "../images/icons/express.svg";
import NodeLogo from "../images/icons/nodejs.svg";
import MySqlLogo from "../images/icons/mysql.svg";
import MongoDbLogo from "../images/icons/mongodb.svg";
import GithubLogo from "../images/icons/github.svg";
import SlackLogo from "../images/icons/slack.svg";

export default function TechStack() {
  return (
    <div className="bg-white grid grid-rows-3 -mt-48 mx-8 divide-y md:grid-rows-none md:grid-cols-3 md:mx-16 md:divide-x rounded-lg outline outline-sky-100">
      <div className="flex flex-col place-items-center md:justify-center md:items-center text-center h-auto py-5 px-5">
        <span
          id="stack-title-1"
          className="font-['Manrope'] font-bold text-blue-900 pb-8 text-2xl"
        >
          Front-End
        </span>
        <div
          id="stack-icons-1"
          className="grid grid-cols-2 gap-x-10 gap-y-5 md:gap-x-14 md:gap-y-5"
        >
          <img
            src={HtmlLogo}
            alt="HTML-Logo"
            className="max-h-20 md:max-h-20"
          />
          <img src={CSSLogo} alt="CSS-Logo" className="max-h-20 md:max-h-20" />
          <img
            src={JavascriptLogo}
            alt="Javascript-Logo"
            className="max-h-16 md:max-h-16"
          />
          <img
            src={BootstrapLogo}
            alt="Bootstrap-Logo"
            className="max-h-16 md:max-h-16"
          />
          <img
            src={HandlebarsLogo}
            alt="Handlebars-Logo"
            className="w-20 h-16"
          />
          <img
            src={TailwindLogo}
            alt="Tailwind-Logo"
            className="max-h-16 md:max-h-16"
          />
        </div>
      </div>

      <div className="flex flex-col place-items-center text-center h-auto px-5">
        <span
          id="stack-title-2"
          className="font-['Manrope'] font-bold text-blue-900 text-2xl pt-5 pb-10"
        >
          Back-End
        </span>
        <div
          id="stack-icons-2"
          className="grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-5"
        >
          <img
            src={ExpressLogo}
            alt="Express-Logo"
            className="h-12 w-24 md:max-w-24 md:max-h-20"
          />
          <img
            src={NodeLogo}
            alt="NodeJS-Logo"
            className="max-h-16 max-w-24 md:max-w-16 md:max-h-16"
          />
          <img
            src={MongoDbLogo}
            alt="MongoDB-Logo"
            className="max-h-16 md:max-h-20"
          />
          <img
            src={MySqlLogo}
            alt="MySQL-Logo"
            className="max-h-16 md:max-h-16"
          />
        </div>
      </div>

      <div className="flex flex-col place-items-center text-center h-auto px-5">
        <span
          id="stack-title-3"
          className="font-['Manrope'] font-bold text-blue-900 text-2xl pt-5 pb-10"
        >
          Dev Tools
        </span>
        <div id="stack-icons-3" className="grid grid-cols-2 gap-x-12 gap-y-5">
          <img
            src={GithubLogo}
            alt="Github-Logo"
            className="max-h-16 md:max-h-16"
          />
          <img
            src={SlackLogo}
            alt="Slack-Logo"
            className="max-h-16 md:max-h-16"
          />
        </div>
      </div>
    </div>
  );
}
