import cn from "classnames";
import { Card, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconTrophy } from "@tabler/icons-react";

import styles from "./AchievementBox.module.css";

const AchievementBox = ({
  icon = <IconTrophy />,
  label,
  className,
}: {
  icon?: React.ReactNode;
  label: string;
  className?: string;
}) => {
  return (
    <Card
      className={cn(styles.container, className)}
      padding="xs"
      radius="md"
      h="100%"
      withBorder
    >
      <Stack gap="xs" justify="flex-start" align="flex-start">
        {icon && (
          <ThemeIcon variant="transparent" color="white" size="sm">
            {icon}
          </ThemeIcon>
        )}
        <Text size="sm" fw="bold" ta="left">
          {label}
        </Text>
      </Stack>
    </Card>
  );
};

export default AchievementBox;
