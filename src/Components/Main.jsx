import React from "react";
import "./Style.css";

const Main = () => {
  return (
    <div>
      <h1>
        Question 1.What is the Difference between react and react native? Which
        one is library or framework?
      </h1>

      <h4>
        React and React Native are developed by Facebook and have gained a huge
        fan base in a short time. React is known as ReactJs, which is a
        JavaScript library to build single-page web applications. Besides, React
        Native is a React JS-based framework to design mobile apps. Moreover,
        with reusable components, you can develop native mobile applications.
      </h4>
      <h1>Question 2. What is the package name you are using for routing</h1>
      <h4>
        React Router is a standard library system built on top of the React and
        used to create routing in the React application using React Router
        Package.In this Browser Router as Router, Routes and Route and NavLink
        get imported from react-router-dom. React Router DOM enables you to
        implement dynamic routing in a web app. Unlike the traditional routing
        architecture in which the routing is handled in a configuration outside
        of a running app, React Router DOM facilitates component-based routing
        according to the needs of the app and platform.
      </h4>
      <h1>Question 3. How do you pass data from parent to child</h1>
      <h4>We can pass Data from parent to child through "props"</h4>
      <h1>Question 4 . What is Lazy loading in react?</h1>
      <h4>
        In essence, lazy loading means that a component or a part of code must
        get loaded when it is required. It is also referred to as code splitting
        and data fetching . Talking about React specifically, it bundles the
        complete code and deploys all of it at the same time.
      </h4>
      <h1>Question 5.Difference b/w Stateful and stateless Component</h1>
      <h2>StateLess</h2>
      <h4>
        If the behaviour is independent of its state then it can be a stateless
        component. You can use either a function or a class for creating
        stateless components. But unless we need to use a lifecycle hook in your
        components, we should go for function components. There are a lot of
        benefits if you decide to use function components here; they are easy to
        write, understand, and test, a little faster, and you can avoid the this
        keyword altogether.
      </h4>
      <h2>StateFul</h2>
      <h4>
        If the behaviour of a component is dependent on the state of the
        component then it can be termed as stateful component. These stateful
        components are always class components and have a state that gets
        initialized in the constructor. class App extends Component{" "}
      </h4>
      <h1>
        Question 6. How do you switch one component to another, Conditional
        Rendering
      </h1>
      <h4>
        Way to Switch/Navigate from one page to another page ,Link, NavLink,
        Redirect Component ,history.push, history.replace Link Link is used to
        manage the navigation and it worked as an anchor tag. Check below code
        for the demonstration. import "Link" from 'react-router-dom'; ... ...
        About NavLink NavLink behaves the same as Link but in addition, it comes
        with a new attribute called “activeClassName” which helps us to add the
        class to the anchor tag when page url will match. import "NavLink" from
        'react-router-dom'; ... ... About
      </h4>
    </div>
  );
};

export default Main;
