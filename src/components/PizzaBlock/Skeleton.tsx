import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="130" r="125" />
    <rect x="0" y="267" rx="10" ry="10" width="280" height="26" />
    <rect x="0" y="312" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="417" rx="10" ry="10" width="95" height="30" />
    <rect x="126" y="410" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
);
