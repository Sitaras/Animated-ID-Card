import { Title, Grid } from "@mantine/core";
import AchievementBox from "../../AchievementBox/AchievementBox";

export type AchievementsSectionProps = {
  sectionTitle?: string;
  achievementLabels: string[];
};

const AchievementsSection = ({
  sectionTitle = "Skills & Achievements",
  achievementLabels,
}: AchievementsSectionProps) => {
  return (
    <>
      <Title order={5}>{sectionTitle}</Title>
      <Grid style={{ height: "auto" }} w="100%">
        {achievementLabels?.map((label) => (
          <Grid.Col span={6} style={{ height: "auto" }} key={label}>
            <AchievementBox label={label} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

export default AchievementsSection;
