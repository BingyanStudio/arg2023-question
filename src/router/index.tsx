import { createHashRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";

const lazyLoad = (Component: React.LazyExoticComponent<() => JSX.Element>) => {
  return (
    <Suspense fallback={null}>
      <Component></Component>
    </Suspense>
  );
};

const Home = lazy(() => import("@pages/home"));
const Question = lazy(() => import("@pages/question"));
const Result = lazy(() => import("@pages/result"));
const Contact = lazy(() => import("@pages/contact"));
const About = lazy(() => import("@pages/about"));

const router = createHashRouter([
  {
    path: "/",
    element: lazyLoad(Home),
  },
  {
    path: "/question",
    element: lazyLoad(Question),
  },
  {
    path: "/result",
    element: lazyLoad(Result),
  },
  {
    path: "/contact",
    element: lazyLoad(Contact),
  },
  {
    path: "/about",
    element: lazyLoad(About),
  },
]);

export default router;
