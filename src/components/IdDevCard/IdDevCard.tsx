import cn from "classnames";

import { Container, Flex } from "@mantine/core";
import OverviewSection, {
  OverviewSectionProps,
} from "./OverviewSection/OverviewSection";
import UserInfoSection, {
  UserInfoSectionProps,
} from "./UserInfoSection/UserInfoSection";
import AchievementsSection, {
  AchievementsSectionProps,
} from "./AchievementsSection/AchievementsSection";

import styles from "./IdDevCard.module.css";

const IdDevCard = ({
  userInfoData,
  overviewData,
  achievementsData,
  className,
}: {
  userInfoData: UserInfoSectionProps;
  overviewData: OverviewSectionProps;
  achievementsData: AchievementsSectionProps;
  className?: string;
}) => {
  return (
    <Container className={cn(styles.animatedContainer, className)} p="0">
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
