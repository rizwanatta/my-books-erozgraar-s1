import { useState } from 'react';
import { LogBox } from 'react-native';
import { NavContainer } from './src/services/navigation';

LogBox.ignoreAllLogs();

export default function App() {
  return <NavContainer />;
}
