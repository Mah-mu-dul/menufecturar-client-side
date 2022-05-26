import React, { useEffect, useState } from "react";

const Blog = () => {
  return (
    <div className="w-100 p-[20px]">
      <ul>
        <li className="border border-primary py-9 rounded px-5 my-4">
          <h2 className="text-2xl">
            <span className="text-2xl text-red-600">Q.</span> How will you
            improve the performance of a React Application?
          </h2>
          <h2 className="text-2xl ">
            <span className="text-2xl text-green-600">Ans.</span> We can improve
            the paeformance useing well structured components and maintanin the
            right way to loade data.. if you have to loade a spacial type of
            data , then you should get data by filter .
          </h2>
        </li>
        <li className="border border-primary py-9 rounded px-5 my-4">
          <h2 className="text-2xl">
            <span className="text-2xl text-red-600">Q.</span> What are the
            different ways to manage a state in a React application?
          </h2>
          <h2 className="text-2xl ">
            <span className="text-2xl text-green-600">Ans.</span>
            There are so many ways to manage a state in react application. Here
            are some of them :
            <ol className="ml-5">
              <li>1. Local state.</li>
              <li>2. Global state.</li>
              <li>3. Server state.</li>
              <li>4. URL state.</li>
            </ol>
          </h2>
        </li>
        <li className="border border-primary py-9 rounded px-5 my-4">
          <h2 className="text-2xl">
            <span className="text-2xl text-red-600">Q.</span> How does
            prototypical inheritance work?
          </h2>
          <h2 className="text-2xl ">
            <span className="text-2xl text-green-600">Ans.</span>According to
            google, Every object with its methods and properties contains an
            internal and hidden property known as [[Prototype]]. The Prototypal
            Inheritance is a feature in javascript used to add methods and
            properties in objects. It is a method by which an object can inherit
            the properties and methods of another object. Traditionally, in
            order to get and set the [[Prototype]] of an object, we use
            Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern
            language, it is being set using __proto__.
          </h2>
        </li>
        <li className="border border-primary py-9 rounded px-5 my-4">
          <h2 className="text-2xl">
            <span className="text-2xl text-red-600">Q.</span> What is a unit
            test? Why should write unit tests?
          </h2>
          <h2 className="text-2xl ">
            <span className="text-2xl text-green-600">Ans.</span>Unit tests are
            typically automated tests written and run by software developers to
            ensure that a section of an application (known as the "unit") meets
            its design and behaves as intended. In procedural programming, a
            unit could be an entire module, but it is more commonly an
            individual function or procedure.
          </h2>
        </li>
        <li className="border border-primary py-9 rounded px-5 my-4">
          <h2 className="text-2xl">
            <span className="text-2xl text-red-600">Q.</span> You have an array
            of products. Each product has a name, price, description, etc. How
            will you implement a search to find products by name?
          </h2>
          <h2 className="text-2xl ">
            <span className="text-2xl text-green-600">Ans.</span>We can do this
            four ways.
            <ul className="px-5">
              <li>1. Array.includes()</li>
              <li>2. Array.indexOf</li>
              <li>3. Array.find()</li>
              <li>4. Array.filter</li>
            </ul>
          </h2>
        </li>
      </ul>
    </div>
  );
};

export default Blog;
