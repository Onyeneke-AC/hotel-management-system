import { HiOutlineBanknotes } from "react-icons/hi2";
import Stat from "./Stat";
import { useSummary } from "./useSummary";
import Spinner from "../../ui/Spinner";
import { formatCurrency } from "../../utils/helpers";
import { useUserDetails } from "../../context/UserDetailsContext";
import { useDateFilterBookings } from "../../context/DateFilterBookings";

function SalesStats() {
  const { userDetails } = useUserDetails();
  const { startDate, endDate } = useDateFilterBookings();

  const { isAdmin } = userDetails;

  const { summary, isLoadingSummary } = useSummary(startDate, endDate);

  if (isLoadingSummary) return <Spinner />;

  const { sumAmountCash, sumAmountPos, sumAmountTransfer } = summary || {};

  return (
    isAdmin && (
      <>
        <Stat
          title="Sales made by cash"
          color="yellow"
          icon={<HiOutlineBanknotes />}
          value={formatCurrency(sumAmountCash || 0)}
        />
        <Stat
          title="Sales made by credit card (pos)"
          color="blue"
          icon={<HiOutlineBanknotes />}
          value={formatCurrency(sumAmountPos || 0)}
        />
        <Stat
          title="Sales made by transfer"
          color="indigo"
          icon={<HiOutlineBanknotes />}
          value={formatCurrency(sumAmountTransfer || 0)}
        />
      </>
    )
  );
}

export default SalesStats;
