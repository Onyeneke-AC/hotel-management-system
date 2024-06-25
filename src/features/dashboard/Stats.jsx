import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { useSummary } from "./useSummary";
import Spinner from "../../ui/Spinner";
import { formatCurrency } from "../../utils/helpers";

function Stats() {
  const { summary, isLoadingSummary } = useSummary();

  if (isLoadingSummary) return <Spinner />;

  const { checkIn, checkOut, numberOfBookings, sumAmount } = summary;

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numberOfBookings}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkIn}
      />
      <Stat
        title="Check outs"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={checkOut}
      />
      <Stat
        title="Sales made"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sumAmount)}
      />
    </>
  );
}

export default Stats;
