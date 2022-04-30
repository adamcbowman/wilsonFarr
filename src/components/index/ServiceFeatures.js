import React from 'react';
import styled from "styled-components"
import CheckMark from "../../svg/CheckMark.js"

const Checklist = styled.ul`
  list-style: none;
  `
  
const ChecklistItem = styled.li`
  padding: 0.25rem;
  padding-left: 1rem;
  `

const ListItem = ({item}) => {
  return (
    <div className='flex flex-row items-center'>
    <CheckMark/>
    <ChecklistItem>
      {item}
    </ChecklistItem>
    </div>
  )
}


const ServiceFeatures = () => {
  return (
    <section className="pt-4 bg-white">
      <div className="container mx-auto px-8 items-center">
        <div className="md:flex md:flex-row">
          <div className="w-full md:w-1/2 md:px-12 py-6">
            <p className="text-gray-700 text-xl md:text-2xl text-left">
              Wilson & Farr Cleaning Solutions provides quality cleaning services that focus on the
              fine details. We offer flexible scheduling, eco-friendly products, and effective
              cleaning procedures. We are the perfect choice for your home or business!
            </p>
          </div>
          <div className="w-full md:w-1/2 md:flex flex-row font-semibold text-gray-800">
            <div className="w-full md:w-1/2 ">
              <Checklist>
                <ListItem item="Quality-Focused Services" />
                <ListItem item="Insured" />
                <ListItem item="Vaccinated Staff" />
                <ListItem item="Move In/Move Out Services" />
                <ListItem item="Locally Owned and Operated" />
                <ListItem item="Staff Background Checks" />
                <ListItem item="Office Cleaning Service" />
              </Checklist>
            </div>
            <div className="w-full md:w-1/2">
              <Checklist>
                <ListItem item="Professional & Devoted Teams" />
                <ListItem item="Detail-Oriented" />
                <ListItem item="Sanitizing Services" />
                <ListItem item="Deep Cleaning Service" />
                <ListItem item="Interior & Exterior Window Cleaning" />
                <ListItem item="Special Requests" />
                <ListItem item="Eco-Friendly & Green Products" />
                <ListItem item="Recurring Cleaning Services" />
              </Checklist>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
