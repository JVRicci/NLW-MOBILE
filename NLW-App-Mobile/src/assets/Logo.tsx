import * as React from 'react';
import Svg, { Circle, Rect, Path } from 'react-native-svg';

export default function Logo() {
  return (
    <Svg width="113" height="42" viewBox="0 0 452 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect width="52" height="45" rx="7" fill="#D9D9D9"/>
        <Rect x="264" width="52" height="45" rx="7" fill="#6B546A"/>
        <Rect x="198" width="52" height="45" rx="7" fill="#9A7699"/>
        <Rect x="132" width="52" height="45" rx="7" fill="#B88AB6"/>
        <Rect x="66" width="52" height="45" rx="7" fill="#CEA6CD"/>
        <Path d="M7.37571 160V62.5455H30.9304V101.661H69.3317V62.5455H92.8388V160H69.3317V120.837H30.9304V160H7.37571ZM128.218 161.237C123.555 161.237 119.415 160.46 115.799 158.906C112.214 157.319 109.375 154.94 107.281 151.768C105.219 148.564 104.188 144.551 104.188 139.729C104.188 135.668 104.902 132.242 106.329 129.45C107.757 126.659 109.724 124.39 112.23 122.646C114.736 120.901 117.623 119.584 120.89 118.696C124.158 117.776 127.647 117.157 131.359 116.84C135.515 116.46 138.862 116.063 141.4 115.651C143.937 115.206 145.777 114.588 146.919 113.795C148.093 112.97 148.68 111.812 148.68 110.321V110.083C148.68 107.64 147.839 105.753 146.158 104.42C144.477 103.088 142.208 102.422 139.353 102.422C136.276 102.422 133.802 103.088 131.93 104.42C130.058 105.753 128.869 107.593 128.361 109.94L106.9 109.179C107.535 104.738 109.168 100.772 111.801 97.2827C114.466 93.7614 118.114 91.0014 122.746 89.0028C127.409 86.9725 133.009 85.9574 139.544 85.9574C144.207 85.9574 148.506 86.5125 152.439 87.6229C156.373 88.7015 159.799 90.2876 162.718 92.3814C165.636 94.4434 167.889 96.9813 169.475 99.995C171.093 103.009 171.902 106.451 171.902 110.321V160H150.012V149.817H149.441C148.141 152.291 146.475 154.385 144.445 156.098C142.446 157.811 140.083 159.096 137.355 159.952C134.658 160.809 131.613 161.237 128.218 161.237ZM135.404 146.01C137.91 146.01 140.162 145.502 142.161 144.487C144.191 143.472 145.809 142.076 147.015 140.3C148.22 138.491 148.823 136.398 148.823 134.018V127.071C148.157 127.42 147.348 127.737 146.396 128.023C145.476 128.308 144.461 128.578 143.35 128.832C142.24 129.085 141.098 129.308 139.924 129.498C138.751 129.688 137.624 129.863 136.546 130.021C134.357 130.37 132.485 130.91 130.931 131.639C129.408 132.369 128.234 133.321 127.409 134.494C126.616 135.636 126.22 137 126.22 138.587C126.22 140.998 127.076 142.838 128.789 144.107C130.534 145.375 132.739 146.01 135.404 146.01ZM186.13 160V62.5455H209.399V99.424H209.875C210.826 97.2034 212.175 95.062 213.919 93C215.696 90.938 217.948 89.2566 220.676 87.956C223.436 86.6236 226.736 85.9574 230.574 85.9574C235.65 85.9574 240.393 87.2898 244.802 89.9545C249.243 92.6193 252.828 96.7275 255.556 102.279C258.285 107.831 259.649 114.905 259.649 123.502C259.649 131.782 258.332 138.714 255.699 144.297C253.098 149.88 249.577 154.068 245.135 156.859C240.726 159.651 235.824 161.047 230.431 161.047C226.752 161.047 223.563 160.444 220.867 159.239C218.17 158.033 215.902 156.447 214.062 154.48C212.254 152.513 210.858 150.404 209.875 148.151H209.161V160H186.13ZM208.923 123.455C208.923 127.388 209.446 130.814 210.493 133.733C211.572 136.652 213.11 138.92 215.109 140.538C217.139 142.124 219.566 142.917 222.39 142.917C225.245 142.917 227.672 142.124 229.67 140.538C231.669 138.92 233.176 136.652 234.191 133.733C235.238 130.814 235.761 127.388 235.761 123.455C235.761 119.521 235.238 116.111 234.191 113.224C233.176 110.337 231.669 108.1 229.67 106.514C227.703 104.928 225.276 104.135 222.39 104.135C219.534 104.135 217.108 104.912 215.109 106.467C213.11 108.021 211.572 110.242 210.493 113.129C209.446 116.015 208.923 119.457 208.923 123.455ZM271.843 160V86.9091H295.112V160H271.843ZM283.501 78.3913C280.233 78.3913 277.426 77.3127 275.078 75.1555C272.731 72.9666 271.557 70.3336 271.557 67.2564C271.557 64.2109 272.731 61.6096 275.078 59.4524C277.426 57.2635 280.233 56.169 283.501 56.169C286.8 56.169 289.608 57.2635 291.923 59.4524C294.271 61.6096 295.445 64.2109 295.445 67.2564C295.445 70.3336 294.271 72.9666 291.923 75.1555C289.608 77.3127 286.8 78.3913 283.501 78.3913ZM351.179 86.9091V104.04H305.069V86.9091H351.179ZM314.729 69.3977H337.998V137.016C337.998 138.444 338.22 139.602 338.664 140.49C339.14 141.347 339.822 141.965 340.71 142.346C341.598 142.695 342.661 142.869 343.898 142.869C344.787 142.869 345.723 142.79 346.706 142.631C347.721 142.441 348.482 142.282 348.99 142.156L352.511 158.953C351.401 159.27 349.831 159.667 347.8 160.143C345.802 160.619 343.407 160.92 340.615 161.047C335.159 161.301 330.479 160.666 326.577 159.143C322.707 157.589 319.741 155.178 317.679 151.911C315.649 148.643 314.665 144.535 314.729 139.586V69.3977ZM425.947 109.227L404.582 109.798C404.359 108.275 403.757 106.927 402.773 105.753C401.79 104.547 400.505 103.612 398.919 102.945C397.364 102.247 395.556 101.898 393.494 101.898C390.798 101.898 388.498 102.438 386.594 103.516C384.723 104.595 383.803 106.054 383.834 107.894C383.803 109.322 384.374 110.559 385.547 111.606C386.753 112.653 388.894 113.493 391.971 114.128L406.057 116.793C413.353 118.188 418.778 120.504 422.331 123.74C425.916 126.976 427.724 131.259 427.756 136.588C427.724 141.6 426.233 145.962 423.282 149.674C420.364 153.386 416.367 156.272 411.291 158.335C406.215 160.365 400.41 161.38 393.875 161.38C383.438 161.38 375.206 159.239 369.178 154.956C363.182 150.642 359.756 144.868 358.9 137.635L381.883 137.064C382.391 139.729 383.707 141.759 385.833 143.155C387.958 144.551 390.671 145.249 393.97 145.249C396.952 145.249 399.379 144.693 401.251 143.583C403.122 142.473 404.074 140.998 404.106 139.158C404.074 137.508 403.344 136.192 401.917 135.208C400.489 134.193 398.253 133.4 395.207 132.829L382.454 130.402C375.126 129.07 369.67 126.611 366.085 123.026C362.5 119.41 360.724 114.81 360.756 109.227C360.724 104.341 362.024 100.17 364.657 96.7116C367.291 93.2221 371.034 90.5573 375.888 88.7173C380.741 86.8774 386.467 85.9574 393.066 85.9574C402.964 85.9574 410.768 88.0353 416.478 92.1911C422.188 96.3151 425.345 101.994 425.947 109.227Z" fill="white"/>
    </Svg>
  );
}