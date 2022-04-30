import React from "react";
import Layout from "../components/layout/Layout";

const contact = () => {
  return (
    <Layout>
      <section>
        <div className="items-center text-center bg-white w-full h-screen">
          {/* <div className="pt-20">
            <h1 className="text-xl text-black font-bold">Contact Us</h1>
          </div> */}
          <object
            type="text/html"
            // data="https://adamcbowman.getform.com/gozlx"
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
