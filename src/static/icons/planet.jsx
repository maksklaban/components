import React from 'react'

export const planet = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general: { dark },
    },
  },
}) => (
  <svg width={width || 16} height={height || 16} viewBox="0 0 16 16">
    <path
      d="M8 0C3.58887 0 0 3.58887 0 8C0 12.4111 3.58887 16 8 16C12.4111 16 16 12.4111 16 8C16 3.58887 12.4111 0 8 0ZM8 14.6667C6.18388 14.6667 4.53687 13.9348 3.33334 12.753V11.6667C3.33334 11.3496 3.47528 11.1455 3.63934 10.9092C3.80828 10.666 4 10.3903 4 10C4 9.36425 3.42609 9.29981 3.1175 9.26531C2.89678 9.24056 2.68847 9.21712 2.569 9.09766C2.4785 9.00716 2.388 8.84278 2.29231 8.66894C2.10228 8.32319 1.84469 7.86597 1.35428 7.58594C1.56988 4.103 4.46366 1.33334 8 1.33334C8.18297 1.33334 8.36284 1.34628 8.54216 1.36081C8.50566 1.38478 8.46094 1.40106 8.431 1.431C8.36622 1.49578 8.33075 1.58466 8.33334 1.67644C8.33628 1.76791 8.37663 1.8545 8.445 1.91569C8.56478 2.02213 8.58791 2.07584 8.59247 2.07584C8.58497 2.09178 8.52378 2.19628 8.18262 2.36947C7.61947 2.65494 6.96909 3.23925 6.87241 3.84734C6.82812 4.12337 6.90822 4.37956 7.09766 4.56903C7.16016 4.63153 7.24478 4.66669 7.33334 4.66669C7.79625 4.66669 8.15397 4.49547 8.5 4.33009C8.85516 4.16047 9.19075 4 9.66666 4C10.9749 4 12 4.29297 12 4.66666C12 4.80369 11.9573 4.84569 11.9411 4.86131C11.7773 5.02244 11.2197 5.01203 10.7295 5.00453C10.5996 5.00225 10.4668 4.99997 10.3333 4.99997C9.88087 4.99997 9.74056 4.93387 9.57812 4.85706C9.389 4.76787 9.17481 4.66663 8.66666 4.66663C8.11719 4.66663 7.09603 4.76591 6.43097 5.43094C5.88703 5.97456 5.94462 6.62494 5.98241 7.05497C5.99119 7.15394 6 7.24769 6 7.33328C6 7.98984 6.67091 8.33328 7.33334 8.33328C8.35222 8.33328 9.23309 8.52337 9.33334 8.66663C9.33334 9.03969 9.44434 9.29456 9.53353 9.49897C9.60775 9.66988 9.66666 9.80462 9.66666 9.99994C9.66666 10.151 9.64191 10.1832 9.57519 10.2692C9.44791 10.4345 9.33331 10.6145 9.33331 10.9999C9.33331 11.7014 10.0088 12.471 10.0856 12.5566C10.1497 12.6276 10.2402 12.6666 10.3333 12.6666C10.361 12.6666 10.3887 12.6634 10.416 12.6562C10.6123 12.6058 12.3333 12.1321 12.3333 11C12.3333 10.6452 12.4437 10.5494 12.611 10.4043C12.775 10.2617 13 10.0667 13 9.66663C13 9.39937 13.4743 8.70959 13.9137 8.22359C13.9759 8.15491 14.0068 8.06313 13.9987 7.97066C13.9906 7.87822 13.9443 7.79325 13.8711 7.73659C13.612 7.53575 12.8965 6.88178 12.6569 6.24734C12.7927 6.31831 12.9626 6.43388 13.0977 6.56897C13.2087 6.68062 13.3574 6.734 13.5267 6.72719C13.7967 6.71178 14.1174 6.49847 14.4213 6.23241C14.5768 6.79634 14.6667 7.38728 14.6667 8C14.6667 11.6761 11.6761 14.6667 8 14.6667Z"
      fill={fill || dark}
    />
  </svg>
)
