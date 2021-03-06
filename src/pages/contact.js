import React from "react";
import Layout from "../components/layout/Layout";
import Seo from "../components/seo";

const contact = () => {
  return (
    <Layout>
      <Seo title="Contact Us" />
      <section>
        <div className="items-center text-center bg-white w-full h-screen">
          <object
            type="text/html"
            data="https://docs.google.com/forms/d/e/1FAIpQLSeXlXZm0ueBBhrsSOUl46HSTbAMn7gmFNd2VuQZ6A9PSULoxA/viewform?embedded=true"
            style={{ width: "100%", height: "100%" }}
          >
            {" "}
          </object>
        </div>
      </section>
    </Layout>
  );
};

export default contact;
