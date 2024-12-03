import { Text, Title, Stack, Avatar, ActionIcon, Group } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

export type UserInfoSectionProps = {
  profileImage?: string | null;
  fullName: string;
  userName: string;
  githubProfileUrl?: string;
  linkedInProfileUrl?: string;
  twitterProfileUrl?: string;
};

const UserInfoSection = ({
  profileImage = null,
  fullName,
  userName,
  githubProfileUrl,
  linkedInProfileUrl,
  twitterProfileUrl,
}: UserInfoSectionProps) => {
  const fullNameInitials = fullName
    ?.split(" ")
    ?.map((name) => name?.[0])
    ?.join("");

  const hasSocialLinks =
    githubProfileUrl || linkedInProfileUrl || twitterProfileUrl;

  return (
    <Stack gap="md" justify="center" align="center" w={"100%"}>
      <Avatar src={profileImage} size="xl" alt={fullName}>
        {fullNameInitials}
      </Avatar>
      <Stack gap="4" align="center">
        <Title order={4} ta="center">
          {fullName}
        </Title>
        <Text size="md" ta="center">{`@${userName}`}</Text>
        {hasSocialLinks && (
          <Group>
            {githubProfileUrl && (
              <ActionIcon
                variant="transparent"
                color="white"
                size="sm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github profile"
                component="a"
                href={githubProfileUrl}
              >
                <IconBrandGithub />
              </ActionIcon>
            )}
            {linkedInProfileUrl && (
              <ActionIcon
                variant="transparent"
                color="white"
                size="sm"
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                href={linkedInProfileUrl}
              >
                <IconBrandLinkedin />
              </ActionIcon>
            )}
            {twitterProfileUrl && (
              <ActionIcon
                variant="transparent"
                color="white"
                size="sm"
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter profile"
                href={twitterProfileUrl}
              >
                <IconBrandX />
              </ActionIcon>
            )}
          </Group>
        )}
      </Stack>
    </Stack>
  );
};

export default UserInfoSection;
