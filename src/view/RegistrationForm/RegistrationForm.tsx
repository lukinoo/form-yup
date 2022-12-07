import { SButton } from "../../components/SButton";
import { SInput } from "../../components/SInput";
import { SLabel } from "../../components/SLabel";
import { SForm } from "./RegistrationForm.styled";

export const RegistrationForm = () => {
  return (
    <SForm>
      <div>
        <SLabel htmlFor="name">Name: </SLabel>
        <SInput placeholder="Name" id="name" type="text" />
        <svg
          width="50"
          height="50"
          viewBox="0 0 943 1144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M923.996 371.514C902.97 266.373 846.122 171.783 763.146 103.874C736.632 82.2791 705.121 67.6862 671.502 61.4331C637.883 55.1799 603.232 57.4668 570.726 68.0839C565.141 69.9014 559.179 70.2301 553.428 69.0375C547.677 67.845 542.338 65.1724 537.936 61.2839C512.317 38.6392 481.426 22.7833 448.092 15.1679C414.759 7.55256 380.047 8.42104 347.136 17.6939C266.01 40.5321 192.727 85.2394 135.301 146.926C77.8756 208.613 38.519 284.904 21.5361 367.454L19.7261 376.184C-4.73421 493.067 17.4233 614.881 81.4761 715.664C84.1162 719.822 85.8099 724.51 86.4372 729.395C87.0645 734.28 86.61 739.244 85.1061 743.934C83.7461 748.184 82.4361 752.414 81.1061 756.864C63.0386 817.291 66.0461 882.064 89.635 940.556C113.224 999.049 155.993 1047.79 210.926 1078.77C216.486 1081.91 222.216 1084.89 227.976 1087.62C262.237 1103.86 298.321 1115.93 335.456 1123.56L335.806 1123.63C360.871 1128.84 386.312 1132.04 411.886 1133.19C424.216 1133.74 436.626 1133.79 448.766 1133.36C515.085 1130.94 578.355 1104.89 627.169 1059.94C675.983 1014.98 707.131 954.06 714.996 888.164C715.596 883.164 716.116 878.374 716.596 873.514C717.059 868.628 718.589 863.904 721.077 859.674C723.565 855.445 726.951 851.812 730.996 849.034C829.121 781.96 897.323 679.362 921.186 562.924L922.996 554.194C935.619 493.988 935.959 431.854 923.996 371.514ZM837.196 536.424L835.386 545.154C825.57 593.114 806.347 638.653 778.828 679.14C751.309 719.627 716.039 754.258 675.056 781.034C661.2 790.135 646.758 798.312 631.826 805.514C632.11 829.618 630.83 853.715 627.996 877.654C623.737 913.469 609.42 947.344 586.703 975.358C563.986 1003.37 533.798 1024.38 499.636 1035.94L495.536 1046.5C492.656 1053.84 489.816 1061.38 487.066 1068.67C485.693 1072.31 484.319 1075.95 482.946 1079.58L477.996 1092.81C477.806 1093.33 477.626 1093.81 477.416 1094.35V1094.47L476.956 1095.54C476.882 1095.72 476.795 1095.89 476.696 1096.05L476.006 1097.24C473.595 1101 469.813 1103.66 465.466 1104.66C464.038 1105 462.574 1105.18 461.106 1105.17C458.095 1105.16 455.121 1104.51 452.386 1103.24C430.386 1093.24 406.656 1082.75 379.846 1071.24C364.566 1064.64 349.076 1058.1 334.086 1051.77C325.466 1048.13 316.866 1044.49 308.286 1040.84L298.616 1036.71C290.216 1033.13 281.526 1029.42 273.036 1025.71L255.606 1018.13L232.206 1007.69C228.536 1006.06 224.756 1004.38 221.036 1002.69L212.476 998.784C207.651 996.559 203.669 992.843 201.116 988.184C198.592 983.616 197.753 978.307 198.746 973.184C198.741 973.127 198.741 973.07 198.746 973.014L198.806 972.714C198.916 972.264 199.026 971.814 199.146 971.374C199.173 971.275 199.207 971.178 199.246 971.084L199.726 969.724C199.757 969.628 199.793 969.535 199.836 969.444L202.386 963.444L203.386 961.064C182.481 936.794 168.015 907.655 161.321 876.33C154.626 845.005 155.918 812.499 165.076 781.804C171.886 759.007 180.153 736.671 189.826 714.934C178.643 702.046 168.343 688.419 158.996 674.144C132.013 633.29 113.398 587.492 104.227 539.399C95.0557 491.305 95.5109 441.87 105.566 393.954L107.366 385.224C121.281 318.457 153.204 256.771 199.675 206.852C246.146 156.932 305.394 120.684 370.996 102.034C400.17 93.8283 431.393 97.297 458.055 111.706C484.716 126.115 504.725 150.333 513.846 179.234L523.546 209.994C523.582 210.128 523.655 210.248 523.758 210.341C523.861 210.433 523.989 210.493 524.126 210.514C524.26 210.547 524.401 210.54 524.532 210.496C524.663 210.452 524.779 210.371 524.866 210.264L545.996 185.864C565.842 162.957 593.824 148.674 624.018 146.04C654.211 143.406 684.244 152.629 707.756 171.754C760.711 214.814 800.798 271.612 823.63 335.932C846.462 400.252 851.159 469.613 837.206 536.424H837.196Z"
            fill="#F9F4DA"
          />
          <path
            d="M933.816 369.564C912.335 262.142 854.248 165.5 769.466 96.1239C741.655 73.4665 708.599 58.1551 673.332 51.5944C638.065 45.0336 601.715 47.4335 567.616 58.5739C563.698 59.844 559.517 60.0722 555.484 59.2358C551.451 58.3994 547.706 56.5274 544.616 53.8039C517.738 30.0348 485.325 13.3897 450.346 5.39335C415.368 -2.60304 378.943 -1.69514 344.406 8.03388C261.518 31.3766 186.645 77.062 127.974 140.094C69.3039 203.126 29.0954 281.078 11.7461 365.424L9.93607 374.154C-15.0727 493.58 7.55511 618.051 72.9961 721.034C74.8507 723.955 76.0396 727.249 76.4786 730.681C76.9176 734.113 76.5958 737.6 75.5361 740.894C74.1561 745.214 72.8361 749.514 71.5361 754.024C52.8247 816.617 55.9401 883.711 80.3715 944.3C104.803 1004.89 149.1 1055.38 205.996 1087.48C211.756 1090.73 217.696 1093.82 223.656 1096.65C258.644 1113.23 295.494 1125.55 333.416 1133.35L333.776 1133.42C359.359 1138.74 385.324 1142 411.426 1143.18C418.426 1143.49 425.526 1143.65 432.546 1143.65C438.096 1143.65 443.626 1143.55 449.106 1143.36C517.797 1140.83 583.326 1113.85 633.884 1067.28C684.442 1020.71 716.704 957.616 724.856 889.364C725.466 884.284 725.996 879.424 726.476 874.474C726.808 871.035 727.89 867.712 729.645 864.736C731.4 861.761 733.787 859.207 736.636 857.254C836.893 788.727 906.587 683.914 930.996 564.954L932.796 556.224C945.694 494.707 946.041 431.219 933.816 369.564ZM921.186 562.924C897.323 679.362 829.121 781.96 730.996 849.034C726.938 851.808 723.539 855.441 721.04 859.675C718.541 863.909 717.003 868.64 716.536 873.534C716.056 878.394 715.536 883.184 714.936 888.184C707.072 954.071 675.932 1014.98 627.128 1059.94C578.324 1104.9 515.066 1130.94 448.756 1133.38C436.616 1133.81 424.206 1133.76 411.876 1133.21C386.302 1132.06 360.861 1128.86 335.796 1123.65L335.446 1123.58C298.32 1115.94 262.246 1103.86 227.996 1087.62C222.236 1084.89 216.506 1081.91 210.946 1078.77C156.05 1047.75 113.312 999.007 89.7269 940.527C66.1414 882.047 63.1055 817.294 81.1161 756.864C82.4361 752.414 83.7461 748.184 85.1161 743.934C86.62 739.244 87.0745 734.28 86.4472 729.395C85.8199 724.51 84.1262 719.822 81.4861 715.664C17.4299 614.883 -4.73126 493.068 19.7261 376.184L21.5361 367.454C38.6919 284.979 78.1082 208.777 135.508 147.118C192.907 85.4597 266.098 40.6991 347.136 17.6939C380.046 8.40716 414.761 7.53163 448.097 15.1476C481.433 22.7636 512.324 38.6272 537.936 61.2839C542.338 65.1724 547.677 67.845 553.428 69.0375C559.179 70.2301 565.141 69.9014 570.726 68.0839C603.232 57.4668 637.883 55.1799 671.502 61.4331C705.121 67.6862 736.632 82.2791 763.146 103.874C828.519 157.063 878.007 227.203 906.2 306.625C934.392 386.047 940.203 471.692 922.996 554.194L921.186 562.924Z"
            fill="#231F20"
          />
          <path
            d="M438.696 332.644C425.881 322.841 412.436 313.892 398.446 305.854C393.536 303.104 383.036 299.854 369.066 297.714L357.066 355.844C355.27 364.209 355.147 372.846 356.704 381.259C358.261 389.672 361.468 397.693 366.139 404.861C370.809 412.029 376.853 418.202 383.92 423.024C390.987 427.846 398.938 431.223 407.316 432.958C415.694 434.694 424.332 434.754 432.733 433.137C441.134 431.519 449.132 428.255 456.267 423.533C463.401 418.81 469.53 412.723 474.301 405.621C479.072 398.519 482.391 390.544 484.066 382.154L489.656 355.034L486.906 354.464C469.428 350.822 452.967 343.371 438.696 332.644Z"
            fill="#F9F4DA"
          />
          <path
            d="M270.196 305.574C251.729 311.881 235.766 320.764 222.306 332.224C223.95 347.597 231.031 361.877 242.273 372.49C253.515 383.104 268.178 389.353 283.62 390.11C299.062 390.868 314.267 386.084 326.494 376.622C338.721 367.16 347.165 353.642 350.306 338.504L358.996 296.414C334.266 293.814 301.776 294.784 270.196 305.574Z"
            fill="#F9F4DA"
          />
          <path
            d="M601.576 347.934C585.544 349.751 569.65 352.624 553.996 356.534C536.637 360.706 518.573 361.003 501.086 357.404L499.526 357.074L493.906 384.204C490.554 400.991 493.976 418.422 503.425 432.697C512.874 446.971 527.583 456.93 544.346 460.403C561.108 463.875 578.564 460.579 592.906 451.234C607.248 441.888 617.313 427.251 620.906 410.514L623.906 395.894C623.906 395.664 623.976 395.444 624.026 395.214L632.886 352.444C618.706 348.644 607.336 347.344 601.576 347.934Z"
            fill="#F9F4DA"
          />
          <path
            d="M719.386 398.624C695.056 376.514 666.136 362.794 642.556 355.264L633.856 397.264C630.73 412.319 633.055 427.994 640.416 441.494C647.777 454.993 659.695 465.438 674.043 470.965C688.391 476.491 704.237 476.74 718.751 471.666C733.266 466.592 745.505 456.526 753.286 443.264C745.479 426.977 734.179 412.097 719.386 398.624Z"
            fill="#F9F4DA"
          />
          <path
            d="M828.256 390.514C811.645 307.633 766.825 233.069 701.426 179.514C679.928 162.033 652.47 153.604 624.866 156.014C597.263 158.424 571.68 171.482 553.536 192.424L532.436 216.784C531.18 218.236 529.559 219.326 527.74 219.942C525.921 220.558 523.971 220.677 522.091 220.286C520.211 219.896 518.469 219.01 517.046 217.721C515.623 216.432 514.57 214.786 513.996 212.954L504.296 182.204C495.958 155.782 477.668 133.641 453.295 120.466C428.921 107.291 400.378 104.117 373.706 111.614C292.419 134.79 221.673 185.414 173.506 254.874C145.996 294.757 126.82 339.783 117.126 387.254L115.316 396.034C105.53 442.665 105.087 490.773 114.012 537.576C122.938 584.379 141.055 628.948 167.316 668.704C175.572 681.27 184.589 693.319 194.316 704.784C204.646 681.134 213.566 659.954 220.176 626.464C220.436 625.144 220.746 623.834 221.086 622.534C198.366 597.274 182.086 565.744 172.666 528.534C163.326 491.734 162.666 457.414 163.836 435.114C164.716 415.768 169.016 396.73 176.536 378.884C193.636 338.674 224.076 310.884 266.986 296.194C322.616 277.194 384.396 286.604 403.356 297.194C417.748 305.442 431.572 314.642 444.736 324.734C457.831 334.563 472.928 341.391 488.956 344.734L503.136 347.664C519.171 350.969 535.737 350.699 551.656 346.874C567.742 342.846 584.078 339.892 600.556 338.034C622.176 335.834 682.606 351.734 726.106 391.274C759.666 421.774 776.536 459.394 776.266 503.094C776.073 522.46 772.454 541.639 765.576 559.744C757.756 580.664 743.576 611.904 720.366 641.974C697.156 672.044 670.366 694.154 640.066 708.344C639.826 709.994 639.546 711.634 639.186 713.264C632.026 746.264 631.726 769.054 631.796 794.484C644.805 787.99 657.417 780.731 669.566 772.744C709.448 746.684 743.769 712.978 770.546 673.574C797.322 634.17 816.022 589.849 825.566 543.174L827.366 534.444C837.348 487.016 837.651 438.061 828.256 390.514Z"
            fill="#ED203D"
          />
          <path
            d="M783.776 256.234C762.902 224.361 737.272 195.871 707.776 171.754C684.263 152.623 654.226 143.397 624.027 146.031C593.829 148.664 565.842 162.951 545.996 185.864L524.886 210.224C524.799 210.331 524.683 210.412 524.552 210.456C524.421 210.5 524.28 210.507 524.146 210.474C524.009 210.453 523.881 210.393 523.778 210.301C523.675 210.208 523.602 210.088 523.566 209.954L513.866 179.194C504.737 150.296 484.722 126.083 458.056 111.682C431.391 97.2808 400.168 93.8206 370.996 102.034C305.298 120.509 245.949 156.702 199.444 206.65C152.939 256.598 121.07 318.376 107.326 385.224L105.526 393.954C95.4767 441.873 95.028 491.309 104.206 539.403C113.384 587.496 132.006 633.293 158.996 674.144C168.37 688.411 178.697 702.029 189.906 714.904C180.233 736.641 171.966 758.977 165.156 781.774C155.992 812.466 154.695 844.97 161.382 876.295C168.07 907.62 182.528 936.76 203.426 961.034L202.426 963.414L199.876 969.414C199.833 969.505 199.797 969.598 199.766 969.694L199.286 971.054C199.247 971.148 199.213 971.245 199.186 971.344C199.066 971.784 198.956 972.234 198.846 972.684L198.786 972.984C198.781 973.04 198.781 973.097 198.786 973.154C197.793 978.277 198.632 983.586 201.156 988.154C203.709 992.813 207.691 996.529 212.516 998.754L221.076 1002.66C224.796 1004.37 228.576 1006.05 232.246 1007.66L255.646 1018.1L273.076 1025.68C281.566 1029.41 290.256 1033.12 298.656 1036.68L308.326 1040.81C316.906 1044.47 325.506 1048.11 334.126 1051.74C349.126 1058.07 364.606 1064.61 379.886 1071.21C406.696 1082.74 430.416 1093.21 452.426 1103.21C455.161 1104.48 458.135 1105.13 461.146 1105.14C462.614 1105.15 464.078 1104.97 465.506 1104.63C469.853 1103.63 473.635 1100.97 476.046 1097.21L476.736 1096.02C476.835 1095.86 476.922 1095.69 476.996 1095.51L477.456 1094.44V1094.32C477.666 1093.81 477.846 1093.32 478.036 1092.78L482.916 1079.55C484.296 1075.91 485.669 1072.28 487.036 1068.64C489.786 1061.35 492.626 1053.81 495.506 1046.47L499.606 1035.91C533.77 1024.35 563.961 1003.36 586.683 975.347C609.405 947.338 623.729 913.467 627.996 877.654C630.84 853.723 632.129 829.632 631.856 805.534C646.779 798.325 661.21 790.14 675.056 781.034C716.041 754.259 751.312 719.628 778.833 679.141C806.355 638.654 825.579 593.115 835.396 545.154L837.206 536.424C847.255 488.507 847.706 439.074 838.536 390.981C829.365 342.888 810.753 297.09 783.776 256.234ZM825.606 543.124C816.062 589.799 797.362 634.12 770.586 673.524C743.809 712.928 709.488 746.634 669.606 772.694C657.444 780.682 644.818 787.941 631.796 794.434C631.726 769.004 632.026 746.174 639.186 713.214C639.546 711.584 639.826 709.944 640.066 708.294C670.346 694.104 697.286 671.854 720.366 641.924C743.446 611.994 757.756 580.614 765.576 559.694C772.455 541.586 776.075 522.403 776.266 503.034C776.536 459.334 759.666 421.714 726.106 391.214C682.606 351.674 622.176 335.774 600.556 337.974C584.072 339.828 567.729 342.778 551.636 346.804C535.717 350.629 519.151 350.899 503.116 347.594L488.936 344.664C472.908 341.321 457.811 334.493 444.716 324.664C431.552 314.572 417.728 305.372 403.336 297.124C384.336 286.524 322.596 277.124 266.966 296.124C224.056 310.784 193.616 338.604 176.516 378.814C168.997 396.657 164.697 415.691 163.816 435.034C162.686 457.334 163.306 491.654 172.646 528.454C182.086 565.694 198.346 597.224 221.066 622.454C220.726 623.754 220.416 625.064 220.156 626.384C213.546 659.874 204.626 681.054 194.296 704.704C184.569 693.239 175.552 681.19 167.296 668.624C141.035 628.868 122.918 584.299 113.992 537.496C105.067 490.693 105.51 442.585 115.296 395.954L117.106 387.224C126.646 340.546 145.346 296.223 172.122 256.816C198.899 217.41 233.222 183.703 273.106 157.644C304.081 137.253 337.994 121.72 373.666 111.584C400.339 104.084 428.883 107.258 453.256 120.433C477.63 133.608 495.921 155.751 504.256 182.174L513.956 212.924C514.533 214.751 515.587 216.392 517.009 217.676C518.431 218.961 520.17 219.843 522.047 220.232C523.923 220.622 525.869 220.504 527.685 219.89C529.5 219.277 531.12 218.191 532.376 216.744L553.476 192.384C571.62 171.442 597.203 158.384 624.806 155.974C652.41 153.564 679.868 161.993 701.366 179.474C752.906 221.375 791.924 276.649 814.148 339.244C836.372 401.84 840.945 469.343 827.366 534.364L825.606 543.124ZM618.046 876.454C614.177 908.944 601.572 939.778 581.574 965.675C561.576 991.572 534.932 1011.56 504.476 1023.52L520.996 981.704C522.143 978.777 523.296 975.851 524.456 972.924C527.456 965.344 530.546 957.504 533.456 949.784L539.576 933.894L545.496 918.094C549.286 908.094 552.996 897.894 556.586 888.094L568.476 855.534C569.706 852.194 570.896 848.844 572.086 845.534C572.736 843.714 573.376 841.884 574.036 840.064L576.116 834.214C576.147 834.125 576.174 834.035 576.196 833.944L576.606 832.564C576.606 832.454 576.666 832.354 576.686 832.244C576.796 831.764 576.876 831.244 576.956 830.784V830.544C576.956 830.484 576.956 830.434 576.956 830.384C577.58 825.077 576.278 819.722 573.286 815.294C570.279 810.712 565.967 807.138 560.906 805.034L534.486 794.404L465.046 766.674C444.466 758.444 422.636 749.734 400.886 741.194C408.293 707.807 417.329 674.824 427.996 642.244L460.316 544.034C463.301 544.219 466.296 543.963 469.206 543.274C507.786 534.064 540.436 538.614 566.206 556.804C582.286 568.144 620.736 604.034 630.356 692.334C631.04 698.587 630.702 704.909 629.356 711.054C621.556 746.934 621.656 772.054 621.746 798.744C621.886 820.974 621.996 843.934 618.046 876.454ZM468.206 1090.56L467.876 1091.31L467.506 1091.96C466.477 1093.48 464.917 1094.55 463.136 1094.96C460.901 1095.42 458.578 1095.14 456.516 1094.16C434.446 1084.16 410.656 1073.61 383.796 1062.05C368.486 1055.45 352.966 1048.89 337.966 1042.56C329.353 1038.92 320.766 1035.29 312.206 1031.65L302.526 1027.51C294.146 1023.94 285.526 1020.24 277.026 1016.51L259.626 1008.93L236.256 998.514C232.616 996.904 228.856 995.224 225.186 993.514L216.646 989.614C213.787 988.28 211.424 986.074 209.896 983.314C208.519 980.824 208.035 977.937 208.526 975.134L208.586 974.894C208.586 974.654 208.696 974.414 208.756 974.174L209.126 973.174L218.326 951.644L231.886 920.534L245.436 889.804L258.826 859.354L271.826 829.124C280.826 807.684 288.906 788.124 296.476 769.254L302.476 754.424L312.846 727.964C312.966 727.644 313.086 727.334 313.236 726.964L313.576 726.224L313.976 725.574C315.176 723.935 316.914 722.77 318.886 722.284C321.313 721.704 323.859 721.889 326.176 722.814L349.176 731.734C363.606 737.314 378.516 743.084 393.236 748.874C416.296 757.874 439.546 767.184 461.386 775.874L548.356 810.604L557.176 814.184C560.38 815.498 563.122 817.732 565.056 820.604C566.706 823.014 567.457 825.927 567.176 828.834V829.014C567.126 829.274 567.096 829.524 567.036 829.774L566.726 830.854L564.726 836.534C564.059 838.361 563.393 840.194 562.726 842.034C561.556 845.344 560.376 848.654 559.156 851.974L547.256 884.544C543.686 894.364 539.986 904.544 536.206 914.494L530.296 930.264L524.186 946.134C521.266 953.804 518.186 961.614 515.186 969.134C514.026 972.061 512.869 974.991 511.716 977.924L492.586 1026.39L486.236 1042.75C483.326 1050.14 480.476 1057.75 477.716 1065.04C476.356 1068.66 474.986 1072.29 473.596 1075.96L468.666 1089.3C468.496 1089.8 468.356 1090.18 468.206 1090.56ZM174.706 784.614C184.026 753.204 193.216 732.174 202.106 711.834C212.786 687.424 222.866 664.364 229.966 628.344C231.178 622.173 233.384 616.239 236.496 610.774C280.406 533.564 329.946 515.894 349.216 511.884C355.71 510.542 362.325 509.872 368.956 509.884C393.576 509.884 418.606 519.314 443.636 538.064C445.757 539.634 448.069 540.928 450.516 541.914L418.516 639.164C407.889 671.511 398.866 704.294 391.446 737.514C378.446 732.424 365.446 727.364 352.716 722.454L329.716 713.544C325.432 711.848 320.724 711.541 316.256 712.664C311.887 713.759 308.07 716.416 305.526 720.134L305.406 720.324L304.796 721.324C304.706 721.474 304.616 721.644 304.536 721.804L303.986 722.994C303.776 723.494 303.596 723.934 303.426 724.394L293.086 750.764L287.156 765.564C279.606 784.354 271.566 803.884 262.576 825.244L249.636 855.394L222.706 916.554L209.126 947.714L207.816 950.774C197.633 938.294 189.171 924.505 182.656 909.774C165.244 870.318 162.427 825.956 174.706 784.614ZM697.386 475.264C687.755 475.257 678.247 473.107 669.55 468.97C660.853 464.833 653.186 458.813 647.104 451.346C641.022 443.879 636.678 435.152 634.386 425.798C632.095 416.443 631.914 406.697 633.856 397.264L642.556 355.264C666.136 362.794 695.056 376.514 719.386 398.624C734.166 412.064 745.466 426.931 753.286 443.224C747.552 452.958 739.382 461.03 729.58 466.648C719.779 472.266 708.683 475.235 697.386 475.264ZM624.066 395.214C624.016 395.444 623.986 395.664 623.946 395.894L620.946 410.514C617.353 427.251 607.288 441.888 592.946 451.234C578.604 460.579 561.148 463.875 544.386 460.403C527.623 456.93 512.914 446.971 503.465 432.697C494.016 418.422 490.594 400.991 493.946 384.204L499.526 357.034L501.086 357.364C518.57 360.976 536.634 360.692 553.996 356.534C569.65 352.624 585.544 349.751 601.576 347.934C607.336 347.344 618.706 348.644 632.926 352.444L624.066 395.214ZM483.996 382.154C482.321 390.544 479.002 398.519 474.231 405.621C469.46 412.723 463.331 418.81 456.197 423.533C449.062 428.255 441.064 431.519 432.663 433.137C424.262 434.754 415.624 434.694 407.246 432.958C398.868 431.223 390.917 427.846 383.85 423.024C376.783 418.202 370.74 412.029 366.069 404.861C361.398 397.693 358.191 389.672 356.634 381.259C355.077 372.846 355.2 364.209 356.996 355.844L368.996 297.714C382.996 299.884 393.466 303.104 398.376 305.854C412.366 313.892 425.811 322.841 438.626 332.644C452.897 343.371 469.358 350.822 486.836 354.464L489.586 355.034L483.996 382.154ZM350.316 338.504C347.162 353.631 338.713 367.135 326.488 376.586C314.263 386.036 299.066 390.813 283.633 390.056C268.199 389.299 253.543 383.057 242.302 372.455C231.061 361.853 223.974 347.587 222.316 332.224C235.749 320.764 251.709 311.881 270.196 305.574C301.776 294.784 334.266 293.814 359.036 296.414L350.316 338.504Z"
            fill="#231F20"
          />
          <path
            d="M209.146 947.674L222.726 916.514L249.656 855.354L262.596 825.204C271.596 803.844 279.596 784.314 287.176 765.524L293.106 750.724L303.446 724.354C303.616 723.894 303.796 723.454 304.006 722.954L304.556 721.764C304.636 721.604 304.726 721.434 304.816 721.284L305.426 720.284L305.546 720.094C308.09 716.376 311.907 713.719 316.276 712.624C320.744 711.501 325.452 711.808 329.736 713.504L352.736 722.414C365.426 727.324 378.486 732.414 391.466 737.474C398.873 704.301 407.896 671.517 418.536 639.124L450.536 541.874C448.089 540.888 445.777 539.594 443.656 538.024C418.656 519.274 393.596 509.844 368.976 509.844C362.345 509.832 355.73 510.502 349.236 511.844C329.966 515.844 280.426 533.524 236.516 610.734C233.403 616.212 231.201 622.159 229.996 628.344C222.896 664.344 212.816 687.424 202.136 711.834C193.246 732.174 184.056 753.204 174.736 784.614C162.485 825.947 165.32 870.288 182.736 909.724C189.251 924.455 197.713 938.244 207.896 950.724L209.146 947.674Z"
            fill="#F38BA3"
          />
          <path
            d="M621.806 798.784C621.716 772.134 621.616 746.974 629.416 711.094C630.762 704.949 631.1 698.627 630.416 692.374C620.796 604.074 582.346 568.184 566.266 556.844C540.456 538.654 507.806 534.104 469.266 543.314C466.356 544.003 463.361 544.259 460.376 544.074L427.996 642.244C417.329 674.771 408.293 707.744 400.886 741.164C422.636 749.704 444.466 758.414 465.046 766.644L534.486 794.374L560.906 805.034C565.988 807.108 570.329 810.662 573.366 815.234C576.337 819.659 577.625 825.001 576.996 830.294C576.996 830.294 576.996 830.394 576.996 830.454V830.694C576.916 831.184 576.836 831.694 576.726 832.154C576.726 832.264 576.676 832.364 576.646 832.474L576.236 833.854C576.214 833.945 576.187 834.035 576.156 834.124L574.076 839.974C573.416 841.794 572.776 843.624 572.126 845.444C570.936 848.794 569.746 852.144 568.516 855.444L556.606 888.034C553.016 897.874 549.306 908.034 545.516 918.034L539.596 933.834L533.476 949.724C530.536 957.444 527.476 965.284 524.476 972.864C523.316 975.784 522.163 978.711 521.016 981.644L504.506 1023.46C534.948 1011.5 561.58 991.52 581.573 965.634C601.565 939.749 614.169 908.93 618.046 876.454C621.996 843.934 621.886 820.974 621.806 798.784Z"
            fill="#F38BA3"
          />
          <path
            d="M477.676 1065.15C480.436 1057.82 483.286 1050.25 486.196 1042.86L492.546 1026.5L511.676 978.034C512.829 975.107 513.986 972.177 515.146 969.244C518.146 961.694 521.216 953.884 524.146 946.244L530.256 930.374L536.166 914.604C539.946 904.604 543.646 894.474 547.216 884.654L559.106 852.034C560.326 848.714 561.506 845.404 562.676 842.094C563.343 840.254 564.009 838.421 564.676 836.594L566.676 830.914L566.986 829.834C567.046 829.584 567.076 829.334 567.126 829.074V828.894C567.407 825.987 566.656 823.074 565.006 820.664C563.072 817.792 560.33 815.558 557.126 814.244L548.306 810.664L461.336 775.934C439.496 767.204 416.246 757.934 393.186 748.934C378.466 743.144 363.556 737.374 349.126 731.794L326.126 722.874C323.809 721.949 321.263 721.764 318.836 722.344C316.864 722.83 315.126 723.995 313.926 725.634L313.526 726.284L313.186 727.024C313.036 727.374 312.916 727.684 312.796 728.024L302.426 754.484L296.426 769.314C288.856 788.164 280.796 807.744 271.776 829.184L258.776 859.414L245.386 889.864L231.836 920.594L218.326 951.634L209.126 973.164L208.756 974.164C208.696 974.404 208.636 974.644 208.586 974.884L208.526 975.124C208.035 977.927 208.519 980.814 209.896 983.304C211.424 986.064 213.787 988.27 216.646 989.604L225.186 993.504C228.856 995.184 232.616 996.864 236.256 998.504L259.626 1008.92L277.026 1016.5C285.486 1020.21 294.146 1023.91 302.526 1027.5L312.206 1031.64C320.753 1035.28 329.339 1038.92 337.966 1042.55C352.966 1048.88 368.486 1055.44 383.796 1062.04C410.656 1073.6 434.446 1084.11 456.516 1094.15C458.578 1095.13 460.901 1095.41 463.136 1094.95C464.917 1094.54 466.477 1093.47 467.506 1091.95L467.876 1091.3L468.206 1090.55C468.356 1090.17 468.496 1089.79 468.626 1089.4L473.556 1076.06C474.996 1072.4 476.316 1068.77 477.676 1065.15ZM317.826 955.034C319.049 955.642 320.385 955.987 321.749 956.047C323.113 956.108 324.475 955.882 325.746 955.384C328.476 954.264 330.666 951.754 332.076 948.154L375.736 838.034C375.964 837.46 376.307 836.938 376.744 836.501C377.18 836.065 377.702 835.722 378.276 835.494C379.116 835.17 380.011 835.016 380.91 835.04C381.809 835.064 382.695 835.266 383.516 835.634L396.096 840.974C399.416 842.374 401.316 845.914 400.246 848.694L355.046 964.194C353.566 968.064 351.317 971.594 348.434 974.571C345.552 977.548 342.096 979.909 338.276 981.514C329.276 985.244 318.706 984.624 307.726 979.724C305.266 978.634 297.816 973.874 292.946 965.134C287.896 956.084 286.866 945.334 289.886 933.204C290.044 932.559 290.34 931.957 290.755 931.439C291.169 930.921 291.692 930.499 292.286 930.204C293.275 929.703 294.381 929.482 295.486 929.564C296.219 929.618 296.94 929.78 297.626 930.044L305.476 933.044C308.366 934.164 310.336 936.904 310.156 939.574C309.456 949.764 314.656 953.624 317.826 955.034ZM442.436 930.924C441.474 930.454 440.42 930.204 439.35 930.19C438.28 930.176 437.22 930.399 436.246 930.844C434.303 931.772 432.792 933.412 432.026 935.424C429.486 941.794 433.826 951.894 441.136 967.884C448.616 983.644 449.676 993.284 445.186 1004.72C443.126 1009.95 438.336 1019.35 429.316 1023.42C422.116 1026.67 413.486 1025.92 403.856 1021.21C383.726 1011.37 384.716 991.894 389.096 977.294C389.428 976.156 390.198 975.196 391.236 974.624C391.989 974.217 392.842 974.029 393.696 974.084C394.218 974.123 394.73 974.241 395.216 974.434L403.716 977.894C404.81 978.35 405.722 979.153 406.314 980.18C406.905 981.206 407.141 982.399 406.986 983.574C405.806 993.154 410.316 996.444 412.306 997.414C413.239 997.892 414.267 998.156 415.315 998.189C416.363 998.222 417.405 998.022 418.366 997.604C420.313 996.664 421.814 994.998 422.546 992.964C424.916 986.964 422.146 977.394 412.286 957.574C408.806 950.894 403.916 937.354 410.236 921.694C411.596 918.164 413.698 914.967 416.4 912.319C419.101 909.671 422.34 907.633 425.896 906.344C433.402 903.826 441.6 904.383 448.696 907.894C471.916 918.794 469.696 940.364 467.616 949.134C467.491 949.708 467.249 950.251 466.905 950.728C466.561 951.204 466.122 951.605 465.616 951.904C464.989 952.265 464.287 952.475 463.565 952.519C462.844 952.562 462.121 952.437 461.456 952.154L450.786 947.814C449.689 947.376 448.768 946.587 448.167 945.57C447.567 944.553 447.32 943.366 447.466 942.194C448.456 935.304 445.276 932.254 442.436 930.904V930.924Z"
            fill="#FCBA28"
          />
          <path
            d="M305.476 933.034L297.626 930.034C296.94 929.77 296.219 929.608 295.486 929.554C294.381 929.472 293.274 929.693 292.286 930.194C291.692 930.489 291.169 930.911 290.755 931.429C290.34 931.947 290.044 932.549 289.886 933.194C286.886 945.324 287.886 956.074 292.946 965.124C297.816 973.864 305.266 978.624 307.726 979.714C318.726 984.614 329.266 985.234 338.276 981.504C342.096 979.899 345.552 977.538 348.434 974.561C351.317 971.584 353.566 968.054 355.046 964.184L400.246 848.684C401.316 845.904 399.416 842.364 396.096 840.964L383.516 835.624C382.695 835.256 381.809 835.054 380.91 835.03C380.011 835.006 379.116 835.16 378.276 835.484C377.702 835.712 377.18 836.055 376.744 836.491C376.307 836.928 375.964 837.45 375.736 838.024L332.076 948.134C330.666 951.734 328.476 954.244 325.746 955.364C324.475 955.862 323.113 956.088 321.749 956.027C320.385 955.967 319.049 955.622 317.826 955.014C314.656 953.624 309.456 949.764 310.156 939.594C310.336 936.924 308.366 934.184 305.476 933.034Z"
            fill="#231F20"
          />
          <path
            d="M450.776 947.794L461.446 952.134C462.112 952.417 462.834 952.542 463.556 952.499C464.277 952.455 464.979 952.245 465.606 951.884C466.112 951.585 466.551 951.184 466.895 950.708C467.239 950.231 467.481 949.688 467.606 949.114C469.656 940.344 471.906 918.774 448.686 907.874C441.59 904.363 433.392 903.806 425.886 906.324C422.33 907.613 419.091 909.651 416.39 912.299C413.688 914.947 411.586 918.144 410.226 921.674C403.906 937.334 408.796 950.874 412.276 957.554C422.136 977.374 424.906 986.954 422.536 992.944C421.804 994.978 420.303 996.644 418.356 997.584C417.395 998.002 416.353 998.202 415.305 998.169C414.257 998.136 413.229 997.872 412.296 997.394C410.296 996.394 405.796 993.134 406.976 983.554C407.131 982.379 406.895 981.187 406.304 980.16C405.712 979.133 404.8 978.33 403.706 977.874L395.206 974.414C394.72 974.221 394.208 974.103 393.686 974.064C392.832 974.009 391.979 974.197 391.226 974.604C390.188 975.176 389.418 976.136 389.086 977.274C384.706 991.874 383.716 1011.35 403.846 1021.19C413.476 1025.9 422.106 1026.65 429.306 1023.4C438.306 1019.33 443.116 1009.93 445.176 1004.7C449.666 993.264 448.606 983.624 441.126 967.864C433.816 951.864 429.476 941.774 432.016 935.404C432.782 933.392 434.293 931.752 436.236 930.824C437.21 930.379 438.27 930.156 439.34 930.17C440.41 930.184 441.464 930.434 442.426 930.904C445.266 932.254 448.426 935.304 447.426 942.174C447.282 943.35 447.533 944.54 448.14 945.557C448.746 946.574 449.674 947.361 450.776 947.794Z"
            fill="#231F20"
          />
        </svg>
      </div>
      <div>
        <SLabel htmlFor="lastname">Lastname: </SLabel>
        <SInput placeholder="Lastname" id="lastname" type="text" />
      </div>
      <div>
        <SLabel htmlFor="email">Email: </SLabel>
        <SInput placeholder="Email" id="email" type="email" />
      </div>
      <div>
        <SLabel htmlFor="password">Password: </SLabel>
        <SInput placeholder="Password" id="password" type="password" />
      </div>
      <SButton>
        Registration
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </SButton>
    </SForm>
  );
};
