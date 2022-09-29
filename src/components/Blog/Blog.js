import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h3 className='head'>Blog Section</h3>
            <div className='blogs'>
                <div className='blog'>
                    <h4>How does react works?</h4>
                    <p>React JS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.

                        It’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.

                        This article will explore React’s features, explain how it works, and go over its benefits for front-end developers. We’ll also cover the differences between ReactJS and React Native regarding their roles in the web and mobile app development industry.</p>
                </div>

                <div className='blog'>
                    <h4>What is the difference between 'props' and 'state'?</h4>
                    <h5>PROPS</h5>
                    <li>The Data is passed from one component to another.</li>
                    <li>It is Immutable (cannot be modified).</li>
                    <li>Props can be used with state and functional components.</li>
                    <li>Props are read-only.</li>

                    <h5>STATE</h5>
                    <li>The Data is passed within the component only.</li>
                    <li>It is Mutable ( can be modified).</li>
                    <li>State can be used only with the state components/class component (Before 16.0).</li>
                    <li>State is both read and write.</li>
                </div>
                <div className='blog'>
                    <h4>Have there any other use of useEffect instead of data load from API?</h4>
                    <p>Yes, we can use useEffect instead of data load from api. Some uses of useEffect are given bellow: </p>
                    <li>Running once on mount: fetch API data</li>
                    <li>Running on state change: validating input field</li>
                    <li>Running on state change: live filtering</li>
                    <li>Running on state change: trigger animation on new array value</li>
                    <li>Running on props change: update paragraph list on fetched API data update</li>
                    <li>Running on props change: updating fetched API data to get BTC updated price</li>
                </div>
            </div>
        </div>
    );
};

export default Blog;