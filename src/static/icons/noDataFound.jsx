import React from 'react'

export const noDataFound = ({
  width,
  height,
  theme: {
    color: {
      primary: { dark },
    },
  },
}) => (
  <svg width={width || 240} height={height || 230} viewBox="0 0 240 230">
    <g clipPath="url(#clip0)">
      <path
        d="M125.27 15.0014L17.6438 77.1392C16.4137 77.8517 15.516 79.0223 15.1475 80.3943C14.779 81.7664 14.9697 83.2279 15.6778 84.4585L87.8222 209.416C88.5338 210.645 89.7041 211.541 91.0766 211.907C92.4491 212.274 93.9117 212.082 95.1438 211.373L202.77 149.235C204 148.523 204.897 147.352 205.266 145.98C205.634 144.608 205.444 143.147 204.736 141.916L132.591 16.9585C131.88 15.7299 130.709 14.834 129.337 14.4671C127.964 14.1002 126.502 14.2924 125.27 15.0014Z"
        fill="white"
      />
      <path
        d="M188.74 143.478L98.0392 195.845C97.4341 196.193 96.7163 196.289 96.0432 196.11C95.3702 195.932 94.7969 195.495 94.4491 194.894L32.0675 86.8458C31.7211 86.2442 31.6288 85.5289 31.811 84.8569C31.9932 84.1849 32.4349 83.611 33.0392 83.2612L123.74 30.895C124.345 30.5466 125.063 30.451 125.736 30.6292C126.409 30.8075 126.983 31.245 127.33 31.8458L189.712 139.894C190.058 140.495 190.15 141.211 189.968 141.883C189.786 142.555 189.344 143.128 188.74 143.478Z"
        fill="#F3F3F3"
      />
      <path
        d="M75.1444 43.9412L17.6438 77.1392C16.4137 77.8517 15.516 79.0223 15.1475 80.3943C14.779 81.7664 14.9697 83.2279 15.6778 84.4585L79.9146 195.72L80.3649 195.238L16.2242 84.1431C15.5991 83.0573 15.4306 81.7676 15.7558 80.557C16.081 79.3463 16.8733 78.3134 17.9588 77.6849L75.6288 44.3891L75.1444 43.9412ZM125.27 15.0014L17.6438 77.1392C16.4137 77.8517 15.516 79.0223 15.1475 80.3943C14.779 81.7664 14.9697 83.2279 15.6778 84.4585L87.8222 209.416C88.5338 210.645 89.7041 211.541 91.0766 211.907C92.4491 212.274 93.9117 212.082 95.1438 211.373L202.77 149.235C204 148.523 204.897 147.352 205.266 145.98C205.634 144.608 205.444 143.147 204.736 141.916L132.591 16.9585C131.88 15.7299 130.709 14.834 129.337 14.4671C127.964 14.1002 126.502 14.2924 125.27 15.0014ZM204.189 142.231C204.814 143.317 204.983 144.607 204.658 145.818C204.332 147.028 203.54 148.061 202.455 148.69L94.8287 210.828C93.7417 211.453 92.451 211.623 91.24 211.299C90.0289 210.976 88.9962 210.185 88.3685 209.101L16.2242 84.1431C15.5991 83.0573 15.4306 81.7676 15.7558 80.557C16.081 79.3463 16.8733 78.3134 17.9588 77.6849L125.585 15.5471C126.672 14.9212 127.962 14.7515 129.173 15.0752C130.385 15.399 131.417 16.1897 132.045 17.2739L204.189 142.231Z"
        fill="#A1A1A1"
      />
      <path
        d="M102.133 39.9064L51.6462 69.0549C50.9911 69.4322 50.2103 69.5294 49.4752 69.3254C48.7401 69.1213 48.1107 68.6326 47.7251 67.9664L40.6284 55.6744C40.2443 55.0074 40.1357 54.218 40.3265 53.4793C40.5173 52.7407 40.9919 52.1132 41.6462 51.7344L92.1329 22.5859C92.7881 22.2087 93.5688 22.1114 94.3039 22.3155C95.039 22.5195 95.6684 23.0083 96.054 23.6744L103.151 35.9664C103.535 36.6334 103.643 37.4228 103.453 38.1615C103.262 38.9001 102.787 39.5277 102.133 39.9064Z"
        fill={dark}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M70.0857 30.6962C71.7425 33.5659 70.7593 37.2355 67.8895 38.8923C65.0198 40.5492 61.3502 39.5659 59.6934 36.6962C58.0365 33.8264 59.0198 30.1569 61.8895 28.5C64.7593 26.8431 68.4288 27.8264 70.0857 30.6962ZM68.3536 31.6962C69.4582 33.6093 68.8027 36.0557 66.8895 37.1603C64.9763 38.2648 62.53 37.6093 61.4254 35.6962C60.3208 33.783 60.9763 31.3366 62.8895 30.232C64.8027 29.1275 67.249 29.783 68.3536 31.6962Z"
        fill={dark}
      />
      <path
        d="M216.344 57H92.0687C90.6472 57.002 89.2845 57.5669 88.2793 58.5709C87.2741 59.5748 86.7086 60.9359 86.7065 62.3557V206.644C86.7086 208.064 87.2741 209.425 88.2793 210.429C89.2845 211.433 90.6472 211.998 92.0687 212H216.344C217.766 211.998 219.129 211.433 220.134 210.429C221.139 209.425 221.705 208.064 221.707 206.644V62.3557C221.705 60.9359 221.139 59.5748 220.134 58.5709C219.129 57.5669 217.766 57.002 216.344 57Z"
        fill="white"
      />
      <path
        d="M207.073 200H102.34C101.642 199.999 100.973 199.723 100.479 199.232C99.9851 198.741 99.7073 198.076 99.7065 197.382V72.6185C99.7073 71.9243 99.9851 71.2587 100.479 70.7678C100.973 70.2769 101.642 70.0008 102.34 70H207.073C207.771 70.0008 208.44 70.2769 208.934 70.7678C209.428 71.2587 209.706 71.9243 209.707 72.6185V197.382C209.706 198.076 209.428 198.741 208.934 199.232C208.44 199.723 207.771 199.999 207.073 200Z"
        fill="#F3F3F3"
      />
      <path
        d="M158.465 57H92.0687C90.6472 57.002 89.2845 57.5669 88.2793 58.5709C87.2741 59.5748 86.7086 60.9359 86.7065 62.3557V190.829L87.3374 190.637V62.3557C87.3389 61.1028 87.8379 59.9018 88.7248 59.0159C89.6118 58.13 90.8143 57.6316 92.0687 57.6301H158.66L158.465 57ZM216.344 57H92.0687C90.6472 57.002 89.2845 57.5669 88.2793 58.5709C87.2741 59.5748 86.7086 60.9359 86.7065 62.3557V206.644C86.7086 208.064 87.2741 209.425 88.2793 210.429C89.2845 211.433 90.6472 211.998 92.0687 212H216.344C217.766 211.998 219.129 211.433 220.134 210.429C221.139 209.425 221.705 208.064 221.707 206.644V62.3557C221.705 60.9359 221.139 59.5748 220.134 58.5709C219.129 57.5669 217.766 57.002 216.344 57ZM221.076 206.644C221.074 207.897 220.575 209.098 219.688 209.984C218.801 210.87 217.599 211.368 216.344 211.37H92.0687C90.8143 211.368 89.6118 210.87 88.7248 209.984C87.8379 209.098 87.3389 207.897 87.3374 206.644V62.3557C87.3389 61.1028 87.8379 59.9018 88.7248 59.0159C89.6118 58.13 90.8143 57.6316 92.0687 57.6301H216.344C217.599 57.6316 218.801 58.13 219.688 59.0159C220.575 59.9018 221.074 61.1028 221.076 62.3557V206.644Z"
        fill="#A1A1A1"
      />
      <path
        d="M183.855 67H125.558C124.802 66.9991 124.077 66.693 123.543 66.1487C123.008 65.6044 122.707 64.8665 122.707 64.0968V49.9032C122.707 49.1335 123.008 48.3956 123.543 47.8513C124.077 47.307 124.802 47.0009 125.558 47H183.855C184.611 47.0009 185.336 47.307 185.87 47.8513C186.405 48.3956 186.706 49.1335 186.707 49.9032V64.0968C186.706 64.8665 186.405 65.6044 185.87 66.1487C185.336 66.693 184.611 66.9991 183.855 67Z"
        fill={dark}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M160.707 43C160.707 46.3137 158.02 49 154.707 49C151.393 49 148.707 46.3137 148.707 43C148.707 39.6863 151.393 37 154.707 37C158.02 37 160.707 39.6863 160.707 43ZM158.707 43C158.707 45.2091 156.916 47 154.707 47C152.497 47 150.707 45.2091 150.707 43C150.707 40.7909 152.497 39 154.707 39C156.916 39 158.707 40.7909 158.707 43Z"
        fill={dark}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width={width || 240} height={height || 230} fill="white" />
      </clipPath>
    </defs>
  </svg>
)
