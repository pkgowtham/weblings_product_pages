import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import About from "./pages/about/index.tsx";
import Contact from "./pages/contact/index.tsx";
import Layout from "./pages/layout/index.tsx";
import Products from "./pages/products/index.tsx";
import EofficeLayout from "./pages/products/apps/eoffice/index.tsx";
import EofficeFeature from "./pages/products/apps/eoffice/feature/index.tsx";
import EofficeComparison from "./pages/products/apps/eoffice/comparison/index.tsx";
import ConnectLayout from "./pages/products/apps/connect/index.tsx";
import ConnectFeature from "./pages/products/apps/connect/feature/index.tsx";
import ConnectComparison from "./pages/products/apps/connect/comparison/index.tsx";
import CalenderLayout from "./pages/products/apps/calender/index.tsx";
import CalenderFeature from "./pages/products/apps/calender/feature/index.tsx";
import CalenderComparison from "./pages/products/apps/calender/comparison/index.tsx";
import StreamlineLayout from "./pages/products/apps/streamline/index.tsx";
import StreamlineFeature from "./pages/products/apps/streamline/feature/index.tsx";
import StreamlineComparison from "./pages/products/apps/streamline/comparison/index.tsx";
import MailLayout from "./pages/products/apps/mail/index.tsx";
import MailFeature from "./pages/products/apps/mail/feature/index.tsx";
import MailComparison from "./pages/products/apps/mail/comparison/index.tsx";
import WorkSuiteLayout from "./pages/products/apps/workSuite/index.tsx";
import WorkSuiteFeature from "./pages/products/apps/workSuite/feature/index.tsx";
import WorkSuiteComparison from "./pages/products/apps/workSuite/comparison/index.tsx";

const RouterPath = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Navigate to="/layout/product" />} />
        <Route path="layout" element={<Layout />}>
          {/* eoffice */}
          <Route path="eoffice" element={<EofficeLayout />}>
            <Route path="feature" element={<EofficeFeature />} />
            <Route path="price" element={<About />} />
            <Route path="comparison" element={<EofficeComparison />} />
          </Route>
          {/* connect */}
          <Route path="connect" element={<ConnectLayout />}>
            <Route path="feature" element={<ConnectFeature />} />
            <Route path="price" element={<About />} />
            <Route path="comparison" element={<ConnectComparison />} />
          </Route>
          {/* calender */}
          <Route path="calender" element={<CalenderLayout />}>
            <Route path="feature" element={<CalenderFeature />} />
            <Route path="price" element={<About />} />
            <Route path="comparison" element={<CalenderComparison />} />
          </Route>
          {/* streamline */}
          <Route path="streamline" element={<StreamlineLayout />}>
            <Route path="feature" element={<StreamlineFeature />} />
            <Route path="price" element={<About />} />
            <Route path="comparison" element={<StreamlineComparison />} />
          </Route>
          {/* mail */}
          <Route path="mail" element={<MailLayout />}>
            <Route path="feature" element={<MailFeature />} />
            <Route path="price" element={<About />} />
            <Route path="comparison" element={<MailComparison />} />
          </Route>
          {/* work Suite */}
          <Route path="workSuite" element={<WorkSuiteLayout />}>
            <Route path="feature" element={<WorkSuiteFeature />} />
            <Route path="price" element={<About />} />
            <Route path="comparison" element={<WorkSuiteComparison />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="product" element={<Products />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterPath;
