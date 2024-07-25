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
import { useUserDetails } from "../../context/UserDetailsContext";
import { useDateFilterBookings } from "../../context/DateFilterBookings";

function Stats() {
  const { userDetails } = useUserDetails();
  const { startDate, endDate } = useDateFilterBookings();

  const { isAdmin } = userDetails;

  const { summary, isLoadingSummary } = useSummary(startDate, endDate);

  if (isLoadingSummary) return <Spinner />;

  const { checkIn, checkOut, numberOfBookings, sumAmount } = summary || {};

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numberOfBookings || 0}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkIn || 0}
      />
      <Stat
        title="Check outs"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={checkOut || 0}
      />
      {isAdmin && (
        <Stat
          title="Sales made"
          color="green"
          icon={<HiOutlineBanknotes />}
          value={formatCurrency(sumAmount || 0)}
        />
      )}
    </>
  );
}

export default Stats;
