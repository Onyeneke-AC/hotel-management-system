import styled from "styled-components";
import Heading from "../../ui/Heading";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowUpTray } from "react-icons/hi2";
// import { useExportDate } from "../../context/ExportDate";
import { useState } from "react";
import toast from "react-hot-toast";

const ExportHeader = styled.div`
  margin-bottom: 15px;
`;

const ExportSpan = styled.div`
  position: absolute;
  top: 140px;
  left: 273px;
`;

const ExportButton = styled.div`
  position: absolute;
  top: 130px;
  left: 525px;
`;

let today = new Date();
let tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const API_URL = "http://127.0.0.1:3000/api/v1";

function ExportBooking({ onCloseModal }) {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const { control, formState, watch } = useForm();

  const { errors } = formState;

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const queryString = `summary?start=${start.toISOString()}&end=${end.toISOString()}`;

      const url = `${API_URL}/users/${queryString}`;

      const res = await fetch(url);

      if (!res.ok) throw new Error("Error exporting the bookings");

      toast.success("Bookings successfully exported");

      window.open(url, "_blank");

      setStart("");
      setEnd("");
      onCloseModal?.();
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <>
      <ExportHeader>
        <Heading as="h1">Export Booking Summary</Heading>
      </ExportHeader>
      <Form type="exportModal" onSubmit={onSubmit}>
        <FormRow
          label="Start Date"
          type="vertical"
          error={errors?.startDate?.message}
        >
          <Controller
            name="startDate"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => {
                  field.onChange(date);
                  setStart(date);
                }}
                placeholderText="Select a start date"
                maxDate={endDate ? new Date(endDate - 1) : null}
                // disabled={isWorking}
                id="startDate"
                className="custom_date"
              />
            )}
          />
        </FormRow>

        <ExportSpan> - </ExportSpan>

        <FormRow
          label="End Date"
          type="vertical"
          error={errors?.endDate?.message}
        >
          <Controller
            name="endDate"
            control={control}
            rules={{
              required: "This field is required",
              validate: (value) => {
                const start = new Date(startDate);
                const end = new Date(value);
                return end > start;
              },
            }}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => {
                  field.onChange(date);
                  setEnd(date);
                }}
                placeholderText="Select an end date"
                minDate={startDate ? new Date(startDate) : tomorrow}
                // disabled={isWorking}
                id="endDate"
                className="custom_date"
              />
            )}
          />
        </FormRow>
        <ExportButton>
          <ButtonIcon type="submit">
            <HiArrowUpTray />
          </ButtonIcon>
        </ExportButton>
      </Form>
    </>
  );
}

export default ExportBooking;
