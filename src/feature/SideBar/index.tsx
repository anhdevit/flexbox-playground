/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import TabEditor from '@router/TabEditor';
export interface Props {
}

const SideBar: React.FC<Props> = (props) => {
  return (
    <TabEditor />
  );
}

export default SideBar;