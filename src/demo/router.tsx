import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HackerPrank from './HackerPrank';
import RotationPrank from './RotationPrank';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/hacker-prank',
    element: <HackerPrank />,
  },
  {
    path: '/rotation-prank',
    element: <RotationPrank />,
  },
]); 