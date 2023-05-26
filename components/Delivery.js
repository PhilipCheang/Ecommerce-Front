import React, { useState } from "react";
import Center from "./Center";

function Delivery() {
  const [zipcode, setZipcode] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryArea, setDeliveryArea] = useState(true);

  const pickupDays = {
    Monday: ["77338", "77347", "77396", "77044", "77346"],
    Tuesday: ["77325", "77339", "77345", "77365", "77357"],
    Wednesday: ["77354", "77375", "77380", "77381", "77382", "77384", "77385", "77387", "77389", "77393"],
    Thursday: ["77338", "77347", "77396", "77044", "77346"],
    Friday: ["77325", "77339", "77345", "77365", "77357"],
    Saturday: ["77354", "77375", "77380", "77381", "77382", "77384", "77385", "77387", "77389", "77393"]
  };

  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };

  const handlePickupDate = (event) => {
    event.preventDefault();
    let foundMatch = false;

    Object.entries(pickupDays).forEach(([day, zipcodes]) => {
      if (zipcodes.includes(zipcode)) {
        setPickupDate(day);

        if (day === "Saturday") {
          setDeliveryDate("Wednesday");
        } else {
          const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          const pickupDayIndex = daysOfWeek.indexOf(day);
          const deliveryDayIndex = pickupDayIndex + 2 > 5 ? pickupDayIndex - 4 : pickupDayIndex + 2;
          setDeliveryDate(daysOfWeek[deliveryDayIndex]);
        }

        foundMatch = true;
      }
    });

    if (!foundMatch) {
      setDeliveryArea(false);
    } else {
      setDeliveryArea(true);
    }
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
    </div>
    <Center>
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pickup & Delivery</h2>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <label>
          Zip Code:
          <input type="text" value={zipcode} onChange={handleZipcodeChange} />
        </label>
        <button onClick={handlePickupDate} type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Get Pickup Date</button>
        {!deliveryArea && (
          <p>We&apos;re currently not delivering in this area.</p>
        )}
        {deliveryArea && pickupDate && (
          <div>
            <p>Your pickup day is {pickupDate} and your delivery day is {deliveryDate}. We will text you when your clothes are on the way, which is approximately 3 days.</p>
            {pickupDays[pickupDate].includes(zipcode) && <button>Sign Up for Delivery</button>}
          </div>
        )}
      </form>
    </div>
    </Center>
  </div>  
  );
}

export default Delivery;  
