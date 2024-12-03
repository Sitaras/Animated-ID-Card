import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { mantimeTheme } from "./theme/mantimeTheme";
import IdDevCard from "./components/IdDevCard/IdDevCard";
import { devCardSample } from "./mockData/devCardSample";

const App = () => {
  return (
    <MantineProvider theme={mantimeTheme}>
      <IdDevCard {...devCardSample} />
    </MantineProvider>
  );
};

export default App;
