import InformationBox from "../../InformationBox/InformationBox";
import { Grid } from "@mantine/core";
import {
  formatMoneyWithCurrency,
  formatNumber,
} from "../../../utils/moneyUtils";

export type OverviewSectionProps = {
  issuesResolved: string;
  bountiesEarned: string;
  challengesWon: string;
  currency?: "€" | "$";
};

const OverviewSection = ({
  issuesResolved,
  bountiesEarned,
  challengesWon,
  currency,
}: OverviewSectionProps) => {
  const issuesResolvedFormatted = formatNumber(issuesResolved);

  const bountiesEarnedFormatted = formatMoneyWithCurrency(
    bountiesEarned,
    true,
    currency
  );

  const challengesWonFormatted = formatNumber(challengesWon);

  return (
    <Grid>
      <Grid.Col span={6}>
        <InformationBox
          label="Issues resolved"
          value={issuesResolvedFormatted}
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <InformationBox
          label="Bounties earned"
          value={bountiesEarnedFormatted}
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <InformationBox label="Challenges won" value={challengesWonFormatted} />
      </Grid.Col>
    </Grid>
  );
};

export default OverviewSection;
