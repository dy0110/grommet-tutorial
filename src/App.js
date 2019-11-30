import React, { useState } from "react";
import { Grommet, Heading, Button, Box, Collapsible, ResponsiveContext, Layer } from "grommet";
import { Theme } from "./theme";
import AppBar from "./components/AppBar";
import { Menu, FormClose } from "grommet-icons";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Grommet theme={Theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar>
              <Button
                icon={<Menu />}
                onClick={() => {
                  setShowSidebar(!showSidebar);
                }}
              />
              <Heading level="3" margin="none">
                My App
              </Heading>
            </AppBar>

            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              {!showSidebar || size !== "small" ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box flex width="medium" background="light-2" elevation="small" align="center" justify="center">
                    sidebar
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box background="light-2" tag="header" justify="end" align="center" direction={"row"}>
                    <Button
                      icon={<FormClose />}
                      onClick={() => {
                        setShowSidebar(false);
                      }}
                    />
                  </Box>
                  <Box fill background="light-2" align="center" justify="center">
                    sidebar
                  </Box>
                </Layer>
              )}
              <Box flex align="center" justify="center">
                app body
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default App;
