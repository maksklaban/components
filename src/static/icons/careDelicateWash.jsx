import React from 'react'

export const careDelicateWash = ({
  width,
  height,
  fill,
  theme: {
    color: {
      primary: { main },
    },
  },
}) => (
  <svg width={width || 22} height={height || 22} viewBox="0 0 22 22" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.0736 9.44467C19.4185 8.20659 19.8651 6.60359 20.0734 5.40217L20.065 5.39551C19.9462 5.33395 19.8269 5.26933 19.7061 5.20391C18.6139 4.61233 17.4 3.95487 15.331 4.89562C15.0133 5.04008 14.7315 5.24353 14.4317 5.46007C13.6731 6.00783 12.7985 6.63939 10.9319 6.61192C9.30223 6.58768 8.38928 5.99277 7.52774 5.43136C6.55347 4.7965 5.64496 4.20448 3.84006 4.52902C1.63276 4.92566 1.7895 5.4596 2.58537 8.17076C2.76582 8.78548 2.97913 9.51213 3.20519 10.3745C3.35756 10.9553 3.46951 11.4293 3.56081 11.8159C3.78392 12.7606 3.88372 13.1832 4.14877 13.3655C4.36325 13.5131 4.68596 13.5034 5.26979 13.4858C5.5031 13.4788 5.77812 13.4705 6.10459 13.4705H12.14C13.5064 13.4705 14.5493 13.5078 15.3521 13.5366H15.3521C16.8679 13.5909 17.5274 13.6145 17.8913 13.2981C18.1716 13.0544 18.2765 12.6091 18.4623 11.8208C18.4882 11.7109 18.5156 11.5944 18.5453 11.4709C18.722 10.7494 18.8786 10.1579 19.0736 9.44467ZM14.1616 14.7407H14.1615H14.1615C10.3075 14.7729 5.77364 14.8107 3.18019 14.6919L3.1752 14.6836C2.75301 13.9402 1.82985 10.1867 1.13836 7.37519C0.871892 6.29174 0.639826 5.34817 0.484087 4.77064C0.42219 4.54045 0.361668 4.32627 0.305537 4.12762L0.305533 4.12761C-0.100723 2.6899 -0.276922 2.06635 0.920662 2.07953C1.12585 2.37957 1.26851 2.84869 1.40076 3.28357C1.48223 3.55149 1.55976 3.80642 1.64551 4.0008C1.81111 3.94159 1.97277 3.88199 2.13165 3.82341C3.55548 3.29845 4.75648 2.85565 6.57782 3.50923C7.14356 3.7125 7.62302 4.02603 8.09942 4.33755C8.88449 4.85093 9.66122 5.35885 10.802 5.35885C12.3665 5.35885 12.6887 5.14019 13.7065 4.4495L13.7066 4.44942L13.7069 4.44921C13.8023 4.38449 13.9038 4.31563 14.013 4.24241C15.5084 3.24111 16.2792 3.24158 17.8909 3.24255L18.0471 3.24262C18.4394 3.24262 18.9896 3.45593 19.4684 3.64157C19.8641 3.79498 20.2111 3.9295 20.38 3.90915C20.551 3.67305 20.6326 3.35278 20.7104 3.04739C20.8138 2.64152 20.9105 2.26194 21.2015 2.14118C22.1113 1.76459 22.073 2.83104 21.9063 3.41092C21.7447 3.99678 21.6026 4.57996 21.4593 5.16799L21.4592 5.16808L21.4592 5.16815L21.4592 5.16828L21.4592 5.1683C21.2834 5.88973 21.1058 6.61846 20.8882 7.36843C20.5316 8.59984 20.1567 10.0945 19.8751 11.2993C19.7001 12.0425 19.5535 12.6107 19.3518 13.3422C19.3009 13.5278 19.2698 13.6982 19.242 13.8511C19.1433 14.3929 19.0846 14.7152 18.3204 14.7152C17.1593 14.7157 15.7159 14.7278 14.1619 14.7407L14.1616 14.7407ZM4.23498 20.2658C3.61344 20.2658 3.43848 19.9859 3.44681 19.3893L3.45014 19.391C3.95577 18.964 4.22776 18.9784 4.76307 19.0067C4.91931 19.015 5.09797 19.0244 5.31142 19.0244H16.3091C16.4458 19.024 16.6095 19.0132 16.7854 19.0017C17.3748 18.9629 18.1008 18.9152 18.4037 19.2194C18.9486 19.7659 18.4237 20.2658 17.6505 20.2658H4.23498ZM3.8367 16.2982C3.17017 16.6748 3.31347 17.2164 3.995 17.373L18.2287 17.3097C18.8419 17.0098 18.7286 16.3466 18.0471 16.1999C17.6238 16.1083 4.13497 16.1316 3.8367 16.2982ZM13.7558 11.3785C13.1635 11.6114 12.3931 11.688 12.3282 10.9492C12.3011 10.2634 12.3155 9.57658 12.3714 8.89254C12.8157 8.72614 13.3581 8.75776 13.8424 8.84595L13.8478 8.90581C13.9152 9.64025 14.023 10.8166 13.7558 11.3785ZM11.5744 7.68451C11.071 8.00739 11.0828 8.57623 11.096 9.21291C11.0978 9.29807 11.0996 9.38444 11.1002 9.47159C11.1029 9.85565 11.0909 10.2062 11.0801 10.5226V10.5226C11.032 11.9308 11.007 12.6624 12.4064 12.6597C12.637 12.6597 12.8612 12.6718 13.0759 12.6835C14.5756 12.7646 15.6087 12.8205 15.1036 8.53812C15.0088 7.73443 14.651 7.53975 13.7725 7.53975C13.6262 7.53975 13.4533 7.53115 13.2683 7.52196H13.2683C12.6684 7.49213 11.9414 7.45598 11.5827 7.68618L11.5744 7.68451ZM8.71451 7.74197C8.82273 7.59764 8.99259 7.5127 9.17299 7.5127H9.40885C9.72533 7.5127 9.9819 7.76926 9.9819 8.08574V10.3521C9.9819 10.4095 10.0284 10.456 10.0858 10.456H10.2089C10.4759 10.456 10.6923 10.6725 10.6923 10.9395C10.6923 11.2065 10.4759 11.4229 10.2089 11.4229H10.0858C10.0284 11.4229 9.9819 11.4695 9.9819 11.5268V12.1561C9.9819 12.4637 9.7342 12.7139 9.42661 12.717C9.11457 12.7202 8.85992 12.4681 8.85992 12.1561V11.5268C8.85992 11.4695 8.81341 11.4229 8.75603 11.4229H7.04569C6.74431 11.4229 6.5 11.1786 6.5 10.8773C6.5 10.7592 6.53828 10.6443 6.6091 10.5499L8.71451 7.74197ZM8.85992 9.20687L7.89592 10.4565L8.75593 10.4574C8.81334 10.4574 8.85992 10.4109 8.85992 10.3535V9.20687Z"
      fill={fill || main}
    />
  </svg>
)