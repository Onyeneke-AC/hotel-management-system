import { HiOutlineBanknotes } from "react-icons/hi2";
import Stat from "./Stat";
import { useSummary } from "./useSummary";
import Spinner from "../../ui/Spinner";
import { formatCurrency } from "../../utils/helpers";

function SalesStats() {
  const { summary, isLoadingSummary } = useSummary();

  if (isLoadingSummary) return <Spinner />;

  const { sumAmountCash, sumAmountPos, sumAmountTransfer } = summary;

  return (
    <>
      <Stat
        title="Sales made by cash"
        color="yellow"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sumAmountCash)}
      />
      <Stat
        title="Sales made by credit card (pos)"
        color="blue"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sumAmountPos)}
      />
      <Stat
        title="Sales made by transfer"
        color="indigo"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sumAmountTransfer)}
      />
    </>
  );
}

export default SalesStats;
