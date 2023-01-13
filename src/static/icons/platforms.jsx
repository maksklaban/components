import React from 'react'

export const platforms = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general: { light },
      primary: { dark, main, lighter },
    },
  },
  wrapperColor,
}) => (
  <svg width={width || 22} height={height || 22} viewBox="0 0 22 22">
    <rect
      opacity={fill === light ? '0.5' : undefined}
      x="7"
      y="1"
      width="14"
      height="16"
      rx="1"
      fill={(fill === main && lighter) || (fill === light && light) || fill}
    />
    <rect
      opacity={fill === light ? '0.5' : undefined}
      x="4"
      y="3"
      width="15"
      height="16"
      rx="1"
      fill={(fill === main && dark) || (fill === light && light) || fill}
    />
    <rect
      x="1"
      y="5"
      width="16"
      height="16"
      rx="1"
      fill={(fill === main && main) || (fill === light && light) || fill}
    />
    <path
      d="M12.1297 12.1675L12.1428 12.2161L12.1653 12.2611C12.2363 12.4031 12.4123 12.625 12.7375 12.625H13.5V13.375H12.75C12.4968 13.375 12.2203 13.5325 12.1415 13.8351C12.0666 14.1124 11.9595 14.3604 11.8147 14.6165L11.8085 14.6275L11.8028 14.6389C11.6765 14.8914 11.7399 15.1845 11.9214 15.3661L12.4554 15.9L11.925 16.4304L11.7864 16.2918L11.3911 15.8964C11.1463 15.6517 10.8261 15.7092 10.6639 15.7903L10.6525 15.796L10.6415 15.8022C10.3891 15.9449 10.1279 16.0535 9.84501 16.1297L9.79641 16.1428L9.75139 16.1653C9.62505 16.2285 9.375 16.4127 9.375 16.75V17.5H8.625V16.75C8.625 16.6586 8.60775 16.5475 8.55346 16.4389C8.49939 16.3308 8.38375 16.183 8.17761 16.1291C7.89559 16.0529 7.63521 15.9445 7.38353 15.8022L7.37247 15.796L7.36111 15.7903C7.10857 15.664 6.81553 15.7274 6.63395 15.9089L6.1 16.4429L5.56961 15.9125L5.70824 15.7739L6.10355 15.3786C6.34827 15.1338 6.29084 14.8136 6.20971 14.6514L6.20403 14.64L6.19778 14.629C6.05513 14.3766 5.94648 14.1154 5.87031 13.8325L5.85722 13.7839L5.83471 13.7389C5.7637 13.5969 5.58767 13.375 5.2625 13.375H4.5V12.625H5.2625C5.5157 12.625 5.79225 12.4675 5.87103 12.1648C5.94717 11.8829 6.05558 11.6226 6.19778 11.371L6.20403 11.36L6.20971 11.3486C6.33598 11.0961 6.27264 10.803 6.09105 10.6214L5.55869 10.0891L6.08593 9.56804L6.22613 9.70824L6.62145 10.1036C6.86616 10.3483 7.18636 10.2908 7.34861 10.2097L7.35997 10.204L7.37103 10.1978C7.62341 10.0551 7.88455 9.94648 8.16749 9.87031L8.21609 9.85722L8.26111 9.83471C8.40313 9.7637 8.625 9.58767 8.625 9.2625V8.5H9.375V9.2625C9.375 9.5157 9.53251 9.79225 9.83519 9.87103C10.1171 9.94717 10.3774 10.0556 10.629 10.1978L10.64 10.204L10.6514 10.2097C10.9039 10.336 11.197 10.2726 11.3786 10.0911L11.9109 9.55869L12.432 10.0859L11.8964 10.6214C11.6517 10.8662 11.7092 11.1864 11.7903 11.3486L11.796 11.36L11.8022 11.371C11.9449 11.6234 12.0535 11.8846 12.1297 12.1675ZM6.25 13C6.25 14.5136 7.48636 15.75 9 15.75C10.5136 15.75 11.75 14.5136 11.75 13C11.75 11.4864 10.5136 10.25 9 10.25C7.48636 10.25 6.25 11.4864 6.25 13Z"
      fill={(fill === main && main) || (fill === light && light) || fill}
      stroke={
        (fill === main && light) ||
        (wrapperColor && wrapperColor !== main && wrapperColor) ||
        (fill === light && main) ||
        fill
      }
    />
  </svg>
)
