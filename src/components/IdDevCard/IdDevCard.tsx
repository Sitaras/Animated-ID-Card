import { Container, Flex } from "@mantine/core";
import OverviewSection from "./OverviewSection/OverviewSection";
import UserInfoSection from "./UserInfoSection/UserInfoSection";
import AchievementsSection from "./AchievementsSection/AchievementsSection";
import { UserInfoSectionProps } from "./UserInfoSection/UserInfoSection";
import { OverviewSectionProps } from "./OverviewSection/OverviewSection";
import { AchievementsSectionProps } from "./AchievementsSection/AchievementsSection";

import styles from "./IdDevCard.module.css";

const IdDevCard = ({
  userInfoData,
  overviewData,
  achievementsData,
}: {
  userInfoData: UserInfoSectionProps;
  overviewData: OverviewSectionProps;
  achievementsData: AchievementsSectionProps;
}) => {
  return (
    <Container className={styles.animatedContainer} p="0">
      <Container className={styles.container}>
        <Flex
          gap="md"
          justify="flex-start"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <UserInfoSection {...userInfoData} />
          <OverviewSection {...overviewData} />
          <AchievementsSection {...achievementsData} />
        </Flex>
      </Container>
    </Container>
  );
};

export default IdDevCard;
