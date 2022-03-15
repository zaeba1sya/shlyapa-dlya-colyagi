import { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
  type: string;
}

interface IWrapperProps {
  image?: string;
  color?: string;
}

interface IMyImage {
  size?: string;
  text?: string;
  type?: string;
}

export type { ILayoutProps, IWrapperProps, IMyImage };
