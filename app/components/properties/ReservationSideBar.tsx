"use client";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { PropertyType } from "./PropertiesList";
import useLoginModal from "@/app/hooks/useLoginModal";
import { Range } from "react-date-range";
import { differenceInDays, eachDayOfInterval, format } from "date-fns";
import DatePicker from "../form/DatePicker";
import apiService from "@/app/services/apiService";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
  key: "selection",
};

type ReservationType = {
  fee: string;
  nights: string;
  totalPrice: string;
  dateRange: Range;
  minDate: Date;
  guests: string;
};

type ReservationListItemType = {
  id: string;
  start_date: string;
  end_date: string;
  number_of_nights: string;
  total_price: string;
  property: PropertyType;
};

const ReservationSideBar = ({
  property,
  userId,
}: {
  property: PropertyType;
  userId: string | undefined;
}) => {
  const createGuestsOptions = () => {
    const options = [];
    for (let index = 1; index <= parseInt(property.guests); index++) {
      options.push(
        <option key={index} value={index}>
          {index}
        </option>
      );
    }
    return options;
  };
  const guestsOptions = createGuestsOptions();
  const loginModal = useLoginModal();
  const [bookedDates, setBookedDates] = useState<Date[]>([]);
  const [reservationData, setReservationData] = useState<ReservationType>({
    fee: "0",
    nights: "1",
    totalPrice: "0",
    dateRange: initialDateRange,
    minDate: new Date(),
    guests: "1",
  });

  const getReservations = useCallback(async () => {
    const reservations = await apiService.get(
      `/api/properties/${property.id}/reservations/`
    );
    let dates: Date[] = [];

    reservations.forEach((reservation: ReservationListItemType) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.start_date),
        end: new Date(reservation.end_date),
      });
      dates = [...dates, ...range];
    });

    setBookedDates(dates);
  }, [property.id]);

  const selectDateRange = (selection: any) => {
    const newStartDate = new Date(selection.startDate);
    const newEndDate = new Date(selection.endDate);

    if (newEndDate <= newStartDate) {
      newEndDate.setDate(newStartDate.getDate() + 1);
    }

    setReservationData((prev) => ({
      ...prev,
      dateRange: {
        ...prev.dateRange,
        startDate: newStartDate,
        endDate: newEndDate,
      },
    }));
  };

  const submitBooking = async () => {
    if (userId) {
      if (
        reservationData.dateRange.startDate &&
        reservationData.dateRange.endDate
      ) {
        const formData = new FormData();
        formData.append("guests", reservationData.guests);
        formData.append(
          "start_date",
          format(reservationData.dateRange.startDate, "yyyy-MM-dd")
        );
        formData.append(
          "end_date",
          format(reservationData.dateRange.endDate, "yyyy-MM-dd")
        );
        formData.append("number_of_nights", reservationData.nights);
        formData.append("total_price", reservationData.totalPrice);

        const response = await apiService.post(
          `/api/properties/${property.id}/book/`,
          formData
        );

        if (response.success) {
          console.log("Booking successful");
        } else {
          console.log("Something went wrong in booking");
        }
      }
    } else {
      loginModal.open();
    }
  };

  useEffect(() => {
    getReservations();
    if (
      reservationData.dateRange.startDate &&
      reservationData.dateRange.endDate
    ) {
      const dayCount = differenceInDays(
        reservationData.dateRange.endDate,
        reservationData.dateRange.startDate
      );

      if (dayCount && property.price_per_night) {
        const reservationFee = dayCount * property.price_per_night * 0.05;
        setReservationData((prev) => ({
          ...prev,
          fee: reservationFee.toString(),
          totalPrice: (
            property.price_per_night * dayCount +
            reservationFee
          ).toString(),
          nights: dayCount.toString(),
        }));
      } else {
        const reservationFee = property.price_per_night * 0.05;
        setReservationData((prev: ReservationType) => ({
          ...prev,
          fee: reservationFee.toString(),
          totalPrice: (property.price_per_night + reservationFee).toString(),
          nights: "1",
        }));
      }
    }
  }, [reservationData.dateRange, property.price_per_night, getReservations]);

  return (
    <aside className="col-span-2 rounded-xl border border-gray-300 shadow-xl p-6 mt-6 mx-auto">
      <h2 className="mb-5 text-xl">
        <strong>₱{property.price_per_night}</strong> per night
      </h2>
      <DatePicker
        bookedDates={bookedDates}
        value={reservationData.dateRange}
        onChange={(value) => selectDateRange(value.selection)}
      />
      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label className="mb-2" htmlFor="guests">
          Guests
        </label>
        <select
          className="w-full text-sm focus:outline-none"
          name="guests"
          id="guests"
          value={reservationData.guests}
          onChange={(e) =>
            setReservationData({ ...reservationData, guests: e.target.value })
          }
        >
          {guestsOptions.map((option: ReactNode) => option)}
        </select>
      </div>
      <div
        onClick={submitBooking}
        className="w-full mb-6 py-4 text-center text-white bg-sharebnb hover:bg-sharebnb-dark rounded-xl cursor-pointer"
      >
        Book
      </div>
      <div className="flex mb-4 justify-between align-middle">
        <span>
          ₱{property.price_per_night} x {reservationData.nights} night(s)
        </span>
        <span>
          ₱{property.price_per_night * parseInt(reservationData.nights)}
        </span>
      </div>
      <div className="flex mb-4 justify-between align-middle">
        <span>ShareBnb fee</span>
        <span>₱{reservationData.fee}</span>
      </div>
      <hr />
      <div className="flex mt-4 justify-between align-middle">
        <span>Total</span>
        <span>
          ₱
          {property.price_per_night * parseInt(reservationData.nights) +
            parseInt(reservationData.fee)}
        </span>
      </div>
    </aside>
  );
};

export default ReservationSideBar;
