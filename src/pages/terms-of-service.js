import React from "react";
import Layout from "../components/layout/Layout";
import backgroundImage from "../images/125189448_-113758903875472-_3951410496181531443_n.jpg";

const termsOfService = () => {
  return (
    <Layout>
      {/* header */}
      <section>
        <div
          className="flex flex-col justify-items-center justify-center w-full"
          style={{ position: `relative` }}
        >
          <div
            className="w-screen bg-cover"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: `bottom`,
              backgroundRepeat: `no-repeat`,
              minWidth: `100%`,
              backgroundSize: `cover`,
              minHeight: `300px`,
              opacity: `75%`,
            }}
          ></div>
          <div
            className="w-full justify-items-center align-items-center text-center"
            style={{ position: `absolute`, width: `100vw` }}
          >
            <h1 className="text-4xl text-white font-bold">
              Terms of Service & Policies
            </h1>
          </div>
        </div>
      </section>

      {/* body */}
      <section className="w-full">
        <div className="flex flex-col justify-center items-center bg-white">
          <div className="w-screen p-6 md:w-1/2">
            
            <div className="pt-6">
              <h4 className="text-xl font-semibold">
                Appointments & Hours of Operation
              </h4>
              <p className="text-lg text-black">
                <ul className="list-disc p-4">
                  <li>
                    Wilson & Farr Cleaning Solutions is open 9:00 am - 6:00 pm,
                    7 days a week for inquiries. Service times may extend beyond
                    this time frame.
                  </li>
                  <li>
                    If you are inquiring about a cleaning service by form
                    submission, please allow a minimum of 24 hours for us to
                    review your request and prepare your estimate.
                  </li>
                  <li>
                    Given the nature of our services, an exact arrival time
                    cannot be guaranteed. Please note that cleaning
                    professionals may arrive one hour before or after your
                    appointment time.
                  </li>
                </ul>
              </p>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-semibold">Cancellation Policy</h4>
              <p className="text-lg text-black">
                <ul className="list-disc">
                  <li>
                    In the event that we are not able to access your property
                    when we arrive to complete your service, you may be subject
                    to a charge of up to 50% of your total service estimate.
                  </li>
                  <li>
                    If you wish to reschedule or cancel your appointment, please
                    provide us with a minimum of 48 hours to accommodate your
                    request. Should your cancellation or adjustment fall within
                    48 hours, you may be subject to a charge of up to 50% of
                    your total service estimate.
                  </li>
                </ul>
              </p>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-semibold">
                Confidentiality & Client Privacy
              </h4>
              <p className="text-lg text-black">
                <ul className="list-disc">
                  <li>
                    Wilson & Farr Cleaning Solutions will not share details of
                    your home, service, or other sensitive information.
                  </li>
                </ul>
              </p>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-semibold">
                Disclaimers & Service Limitations
              </h4>
              <p className="text-lg text-black">
                <ul className="list-disc">
                  <li>
                    We reserve the right to refuse service to anyone for any
                    reason at any time.
                  </li>
                  <li>
                    The safety of our cleaning team and our clients is
                    paramount. We will not complete a task that we do not deem
                    safe for ourselves or others.
                  </li>
                  <li>
                    For our safety, we do not clean human or animal urine,
                    feces, blood, vomit, or other bodily fluids.
                  </li>
                  <li>
                    For your safety, we request that clients not be present in
                    our workspace to avoid any trips, slips, or falls (this
                    includes wet floors, vacuum cleaners, extensions cords,
                    ladders, etc.).
                  </li>
                  <li>
                    Wilson & Farr Cleaning Solutions provides all cleaning
                    supplies and equipment to complete your service. Please note
                    that we do not use chemicals or equipment provided by
                    clients. Should you have a sensitivity to scents, please
                    advise us and we will make the appropriate accommodations.
                  </li>
                  <li>
                    We cannot be responsible for pets that "escape" when our
                    personnel are entering/exiting your home. If your pet will
                    be "roaming free" during the clean, please let us know in
                    advance, so the personnel can be on alert when they open
                    doors. Our personnel are trained to close doors as soon as
                    they enter and exit your home and will not leave doors open
                    for long periods.
                  </li>
                  <li>
                    Reasonable effort will be made to not break items, but
                    accidents can happen. Our personnel are instructed to
                    immediately inform our office if anything is broken and to
                    leave you a note advising of the accident. In the event an
                    item is damaged Wilson & Farr Cleaning Solutions reserves
                    the right to replace or repair the item. Further
                    compensation options may be attempted but are not
                    guaranteed. Damage must be reported within 24 hours of
                    service after which the client assumes liability.
                  </li>
                  <li>
                    Wilson and Farr Cleaning Solutions assumes that all surfaces
                    (including but not limited to flooring, countertops,
                    cupboards, etc.) are sealed properly and ready to be
                    cleaned.
                  </li>
                  <li>
                    Wilson & Farr Cleaning Solutions does provide cleaning
                    services to areas where mold, insect and rodent activity
                    occur. We will only provide service to the area if we deem
                    it safe to do so. Additional fees will apply.
                  </li>
                  <li>
                    Wilson & Farr Cleaning Solutions are happy to provide
                    clients with our window cleaning service, provided they are
                    vinyl, in reasonable condition (free of cracks, adhesive
                    glue, or decal related markings or silicone caulking), and
                    safe to access.
                  </li>
                  <li>
                    Wilson & Farr Cleaning Solutions does not clean unfinished
                    areas in your home or office. Furthermore, heavily damaged
                    or deteriorated surfaces will not be addressed during your
                    service (for example water-damaged surfaces under sinks,
                    chipped paint, or finish on windowsills or cupboards).
                  </li>
                  <li>
                    Regarding our Move in/Move out cleaning services, we can
                    collect and organize items left behind by the previous
                    homeowner. We do not remove garbage or items from the
                    property. Additional fees may apply.
                  </li>
                  <li>
                    Wilson & Farr Cleaning Solutions reserves the right to amend
                    the initial quotation, should the Client's original
                    requirements change.
                  </li>
                  <li>
                    Wilson & Farr Cleaning Solutions reserves the right to
                    update company policies and adjust cleaning rates at any
                    time. By accepting our estimate and booking an appointment,
                    you agree to our Terms of Service and Policies.
                  </li>
                </ul>
              </p>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-semibold">
                Payment Policy & Billing
              </h4>
              <p className="text-lg text-black">
                <ul className="list-disc">
                  <li>
                    To secure your appointment time with Wilson & Farr Cleaning
                    Solutions, all clients will complete and return the Credit
                    Card Authorization form provided.
                  </li>
                  <li>
                    Wilson & Farr Cleaning Solutions accepts the following
                    methods of payment: EMT, cash, cheque, and credit card
                    (excluding American Express).
                  </li>
                  <li>
                    Invoices will be sent via email to clients after the service
                    is complete. Payment is due on receipt. Clients have 24
                    hours to pay with their preferred method of payment. After
                    24 hours of receiving your invoice, we will charge your
                    credit card on file where applicable.
                  </li>
                  <li>
                    Accounts overdue past 30 days will be charged 2.5% interest
                    monthly.
                  </li>
                  <li>
                    Where payment has not been received, we reserve the right to
                    withhold services, documents, and information, and have the
                    right to cease to work on your account and terminate the
                    engagement if payments are unduly delayed.
                  </li>
                </ul>
              </p>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-semibold">Release of Liability</h4>
              <p className="text-lg text-black">
                <ul className="list-disc">
                  <li>
                    Please note that valuable items such as sentimental pieces
                    and those of substantial monetary value are expected to be
                    placed in a safe location on the day of your appointment and
                    should be cleaned by the homeowner. If you request us to
                    service items of this nature, this will release Wilson &
                    Farr Cleaning Solutions of liability should anything be in
                    need of repair or replacement.
                  </li>
                  <li>
                    Wilson & Farr Cleaning Solutions is not liable for any
                    pre-existing damages such as scratches, stains and general
                    wear and tear.
                  </li>
                  <li>
                    Wilson & Farr Cleaning Solutions is not liable for any
                    household decor or items that are not securely mounted. This
                    includes but is not limited to: mirrors, pictures, artwork,
                    light fixtures, shelving units and planters.
                  </li>
                  <li>
                    Wilson & Farr Cleaning Solutions shall not be liable under
                    any circumstances for any loss, expense, damage, delay,
                    costs, or compensation (whether direct, indirect or
                    consequential) which may be suffered or incurred by the
                    Client arising from or in any way connected with a late
                    arrival of personnel at the service address.
                  </li>
                  <li>
                    The Company shall not be liable under any circumstances for
                    any loss, expense, damage, delay, costs, or compensation
                    (whether direct, indirect or consequential) which may be
                    suffered or incurred by the Client arising from or in any
                    way connected with: i) Cleaning job not complete due to the
                    lack of hot water or electricity. ii) Any existing damage to
                    Clients property in the form of old stains/burns/spillages,
                    etc. which cannot be cleaned/removed completely by the
                    cleaning operative.
                  </li>
                </ul>
              </p>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-semibold">Our Expectations</h4>
              <p className="text-lg text-black">
                <ul className="list-disc" >
                  <li>
                    In order to get the most out of your service, we ask that
                    our workspace be free of as many distractions as possible.{" "}
                    <span className="font-bold">
                      Please ensure your property is vacant for the duration of
                      your service.
                    </span>
                  </li>
                  <li>
                    To utilize our service and expertise, please take a moment
                    to declutter and lift items off the floor prior to your
                    appointment.
                  </li>
                  <li>
                    We would like you to be satisfied with your service every
                    time. In the event that you feel we have overlooked an area,
                    we expect you to communicate this within 24 hours of your
                    appointment.
                  </li>
                  <li>
                    We expect you to manage your expectations when hiring our
                    service to clean older properties and century homes. We may
                    not be able to remove certain build-up during the first
                    appointment or in some circumstances, not at all.
                  </li>
                </ul>
              </p>
            </div>

            <div className="py-6">
              <p className="text-lg text-black font-semibold">
                Wilson & Farr Cleaning Solutions reserves the right to make
                amendments to these conditions without giving prior notice. By
                requesting Wilson & Farr Cleaning Solutions to provide service
                by any means including telephone, email, fax, booking form, and
                or direct conversation - the client accepts that these terms and
                conditions are binding.
              </p>
              <br />
              <p className="pt-6 text-xl text-black font-semibold text-center">
                Thank you for reviewing our Terms of Service and Policies.
                <br />
                We are looking forward to making your space sparkle!
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default termsOfService;
