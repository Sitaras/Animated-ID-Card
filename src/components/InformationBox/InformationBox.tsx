import cn from "classnames";
import { Card, Stack, Text } from "@mantine/core";

import styles from "./InformationBox.module.css";

const InformationBox = ({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) => {
  return (
    <Card
      className={cn(styles.container, className)}
      padding="xs"
      radius="md"
    >
      <Stack gap="xs" justify="flex-start" align="flex-start">
        <Text size="md" ta="left">
          {label}
        </Text>
        <Text size="md" fw="bold">
          {value}
        </Text>
      </Stack>
    </Card>
  );
};

export default InformationBox;
