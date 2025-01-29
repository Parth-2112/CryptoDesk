import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
// import { FaMoon, FaSun } from 'react-icons/fa';
import { GiMoon } from "react-icons/gi";
import { LuSunMoon } from "react-icons/lu";

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  // const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(GiMoon, LuSunMoon);

  return (
    <IconButton
      position={"fixed"}
      top={4}
      right={4}
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      zIndex={'overlay'}
      {...props}
    />
  );
};


export default ColorModeSwitcher;