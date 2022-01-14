import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

export default function HomeTemplate(props) {
  const { Component, ...restProps } = props;

  return (
    <Fragment>
      <Route
        exact
        path={props.path}
        render={(propsRoute) => {
          // props.location, props.history, props. match
          return (
            <Fragment>
              <Header />
             
              <Component {...propsRoute} />
              <hr className="mt-5"/>
              <Footer />
            </Fragment>
          );
        }}
      />
    </Fragment>
  );
}
