import React from "react";

const ReservationSideBar = () => {
  return (
    <aside className="col-span-2 rounded-xl border border-gray-300 shadow-xl p-6 mt-6">
      <h2 className="mb-5 text-xl">
        <strong>₱10,000</strong> per night
      </h2>
      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label className="mb-2" htmlFor="guests">
          Guests
        </label>
        <select
          className="w-full text-sm focus:outline-none"
          name="guests"
          id="guests"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="w-full mb-6 py-6 text-center text-white bg-sharebnb hover:bg-sharebnb-dark rounded-xl cursor-pointer">
        Book
      </div>
      <div className="flex mb-4 justify-between align-middle">
        <span>₱10,000 x 3 nights</span>
        <span>₱30,000</span>
      </div>
      <div className="flex mb-4 justify-between align-middle">
        <span>ShareBnb fee</span>
        <span>₱500</span>
      </div>
      <hr />
      <div className="flex mt-4 justify-between align-middle">
        <span>Total</span>
        <span>₱30,500</span>
      </div>
    </aside>
  );
};

export default ReservationSideBar;
