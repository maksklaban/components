import React from 'react'

export const careIronMediumTemp = ({
  width,
  height,
  fill,
  theme: {
    color: {
      primary: { main },
    },
  },
}) => (
  <svg width={width || 28} height={height || 21} viewBox="0 0 28 21" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.21 18.8102C1.37137 18.8102 1.60207 18.0205 1.80917 17.3115L1.80917 17.3115C1.8448 17.1895 1.87973 17.07 1.9084 16.9572C3.13 12.1012 6.21764 9.20882 11.8179 9.20665C12.3201 9.20665 13.1557 9.19905 14.1676 9.18986L14.1679 9.18985H14.1679C17.6815 9.15792 23.32 9.10668 24.5026 9.28693C24.8454 9.83806 26.2385 17.9141 26.0866 18.7798L2.21868 18.8102H2.21ZM9.08413 2.04303L9.08427 2.04303C14.0617 2.01389 21.1403 1.97245 22.8883 2.13741L23.0098 2.15043C24.1077 2.31968 24.2553 7.35797 24.1945 7.60099C21.992 7.99856 19.4813 7.86537 16.9224 7.72962C11.102 7.42085 5.03243 7.09887 1.77387 12.9799C0.719345 14.8807 -0.24405 17.7232 0.0553838 20.2922L27.9982 20.3443C28.085 19.6651 25.0386 0.978735 24.9301 0.816C24.673 0.403631 15.2162 0.496488 10.5433 0.542371H10.5433C9.53638 0.552258 8.7516 0.559963 8.32886 0.559963C7.74546 0.559963 7.24094 0.549648 6.80808 0.540798H6.80806C4.60715 0.495799 4.25893 0.488679 4.81377 2.06798V2.0593C5.70607 2.0628 7.25289 2.05375 9.08413 2.04303ZM11.7223 12.6219C9.14675 13.2013 9.52863 16.9182 12.3212 16.5797C13.4061 16.4473 14.1351 15.638 13.9659 14.2884C13.8422 13.2968 12.6814 12.405 11.7223 12.6219ZM16.2682 14.6377C16.2682 17.0918 20.2628 17.3717 20.2628 14.6377C20.2628 11.7974 16.2682 12.0969 16.2682 14.6377Z"
      fill={fill || main}
    />
  </svg>
)