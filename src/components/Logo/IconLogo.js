import React from 'react';
import PropTypes from 'prop-types';

const IconLogo = props => {
  const { className, format, ...rest } = props;

  if (format === 'desktop') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="109"
        height="37"
        fill="none"
        viewBox="0 0 109 44"
      >
        <path
          fill="#000"
          d="M1.719 29.813L9.187 19l1.532-2v-.313l-2.969.125H2.078l.625-2.375h11.735v1.188L7.061 26.219l-1.687 2.218v.313l2.75-.125h6.781L14.281 31H1.72v-1.188zm30.5-.22a7.147 7.147 0 01-1.375.75 13.172 13.172 0 01-3.266.86c-.552.073-1.068.11-1.547.11A8.673 8.673 0 0123 30.78a7.214 7.214 0 01-2.516-1.562c-.718-.688-1.291-1.537-1.718-2.547-.427-1.021-.641-2.193-.641-3.516 0-1.364.224-2.604.672-3.718.458-1.115 1.068-2.063 1.828-2.844a7.915 7.915 0 015.766-2.469c.885 0 1.708.151 2.468.453.771.292 1.438.735 2 1.328.573.594 1.021 1.339 1.344 2.235.323.885.484 1.922.484 3.109 0 .24-.01.526-.03.86a9.8 9.8 0 01-.126 1.046H21.22c0 .896.156 1.698.468 2.407.323.697.771 1.291 1.344 1.78.584.48 1.276.845 2.078 1.095.802.25 1.688.375 2.657.375.24 0 .53-.01.875-.032a11.957 11.957 0 002.344-.39 7.401 7.401 0 001.234-.485v1.688zm-2.344-8.28c0-.782-.11-1.47-.328-2.063-.219-.604-.516-1.11-.89-1.516a3.71 3.71 0 00-1.313-.922 3.989 3.989 0 00-1.578-.312c-.625 0-1.214.13-1.766.39a4.619 4.619 0 00-1.453 1.032c-.406.437-.73.948-.969 1.531a4.846 4.846 0 00-.36 1.86h8.657zm7.438-6.875h2.312l.469 2.874c.364-.343.781-.703 1.25-1.078.468-.375.974-.718 1.515-1.03a9.377 9.377 0 011.75-.767 5.851 5.851 0 011.891-.312c.76 0 1.443.146 2.047.438a4.401 4.401 0 011.562 1.234c.438.52.771 1.146 1 1.875.24.719.36 1.505.36 2.36V31H48.5V20.312c0-.604-.089-1.135-.266-1.593a3.051 3.051 0 00-.703-1.157 2.889 2.889 0 00-1.078-.703 3.84 3.84 0 00-1.36-.234c-.864 0-1.682.23-2.452.688-.771.458-1.558 1.062-2.36 1.812V31h-2.968V14.437z"
        ></path>
        <path
          fill="#4093B0"
          d="M68.563 29.594c-.646.5-1.417.911-2.313 1.234-.885.323-1.854.485-2.906.485-1.125 0-2.146-.193-3.063-.579a6.888 6.888 0 01-2.328-1.64c-.646-.698-1.146-1.532-1.5-2.5-.344-.98-.516-2.047-.516-3.203 0-1.344.23-2.584.688-3.72.458-1.134 1.083-2.114 1.875-2.937a8.565 8.565 0 012.828-1.922 8.85 8.85 0 013.484-.687c.292 0 .605.016.938.047.344.02.682.062 1.016.125.333.062.656.14.968.234.313.084.589.188.829.313l-.626 2.594-.343.156a4.704 4.704 0 00-.719-.438 5.1 5.1 0 00-.844-.343 6.266 6.266 0 00-.922-.22 4.78 4.78 0 00-2.906.328 4.658 4.658 0 00-1.625 1.204c-.469.52-.838 1.167-1.11 1.938-.27.76-.406 1.63-.406 2.609 0 1 .141 1.88.422 2.64.292.76.688 1.401 1.188 1.922.5.521 1.094.917 1.781 1.188.688.26 1.432.39 2.234.39.48 0 1.058-.057 1.735-.171.677-.125 1.39-.37 2.14-.735v1.688zm4.624-23.625h2.97v11.156c.374-.333.79-.677 1.25-1.031.458-.354.952-.677 1.484-.969a9.524 9.524 0 011.671-.719 5.89 5.89 0 011.813-.281c.75 0 1.427.146 2.031.438.615.28 1.14.682 1.578 1.203.438.51.771 1.13 1 1.859.24.719.36 1.52.36 2.406V31h-2.969V20.281c0-.604-.088-1.135-.266-1.593a3.068 3.068 0 00-.703-1.141 2.607 2.607 0 00-1.062-.688A3.795 3.795 0 0081 16.625c-.875 0-1.703.23-2.484.688-.782.458-1.568 1.062-2.36 1.812V31h-2.969V5.969zm28.594 22.562c-.26.219-.578.49-.953.813-.364.312-.781.614-1.25.906a8.21 8.21 0 01-1.516.75 4.79 4.79 0 01-3.359.016 4.055 4.055 0 01-1.39-.844 4.388 4.388 0 01-.985-1.422c-.24-.563-.36-1.208-.36-1.938 0-.447.053-.9.157-1.359.115-.458.302-.896.563-1.312.26-.427.599-.823 1.015-1.188a6.037 6.037 0 011.563-.969c.625-.28 1.359-.5 2.203-.656.844-.156 1.812-.234 2.906-.234h1.406v-1.438c0-.479-.083-.911-.25-1.297a2.784 2.784 0 00-.703-.984 2.88 2.88 0 00-1.062-.64 3.76 3.76 0 00-1.36-.235c-.375 0-.776.042-1.203.125a8.576 8.576 0 00-1.266.36 9.652 9.652 0 00-1.203.546 5.771 5.771 0 00-1.015.688l-.281-.157-.626-2.28a12.952 12.952 0 011.75-.813c.563-.219 1.1-.39 1.61-.516a10.28 10.28 0 011.484-.25A12.18 12.18 0 0199 14.125c1.948 0 3.391.406 4.328 1.219.948.802 1.422 2.01 1.422 3.625v8.156c0 .135.01.302.031.5.021.188.068.37.141.547.083.177.198.328.344.453.156.125.364.188.625.188.145 0 .338-.021.578-.063a3.3 3.3 0 00.719-.25v1.656c-.5.344-1.006.625-1.516.844-.5.208-.984.313-1.453.313-.427 0-.781-.089-1.063-.266a2.281 2.281 0 01-.687-.656 3.683 3.683 0 01-.422-.891 13.78 13.78 0 01-.266-.969zm0-5.625h-1.187c-1.219 0-2.193.089-2.922.266-.719.166-1.271.396-1.656.687-.375.282-.625.61-.75.985a3.987 3.987 0 00-.172 1.172c0 .437.062.828.187 1.172.125.343.297.64.516.89.229.24.5.422.812.547a2.71 2.71 0 001.016.188c.281 0 .568-.032.86-.094.302-.073.62-.193.953-.36a7 7 0 001.078-.703c.385-.291.807-.666 1.265-1.125v-3.625z"
        ></path>
      </svg>
    );
  }

  return (
    <svg
      className={className}
      {...rest}
      width="28"
      height="26"
      viewBox="0 0 28 26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="#0095B3"
        strokeWidth="1.5"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.0221667 14.9028333c-2.123449-1.7178872-3.3997596-4.2705084-3.5-6.99999997C10.5891066 5.44596767 11.6329727 3.11721418 13.4225 1.4325c.3334333-.32683002.8670667-.32683002 1.2005 0 1.7886677 1.68521534 2.8320183 4.01375565 2.8991667 6.47033333-.1002404 2.72949157-1.376551 5.28211277-3.5 6.99999997z" />
        <path d="M17.43 6.67783333C19.1014265 5.54101183 21.0786397 4.93849069 23.1 4.95c.4796887.00063444.8689352.3883177.8715.868.0697835 2.45026057-.8386379 4.82752063-2.5246667 6.6068333-2.0009973 1.8590387-4.7084726 2.7613887-7.4246666 2.4745M10.6166667 6.69066667C8.9359545 5.53533534 6.93938056 4.92739894 4.9 4.95c-.48033591-.0000107-.87062682.38767479-.87383333.868-.07166144 2.4509653.835542 4.82959311 2.52116666 6.6103333 2.01953017 1.8618845 4.74324717 2.7635551 7.47483337 2.4745M22.75 16.0625c0 2.4161667-3.9176667 4.375-8.75 4.375-4.83233333 0-8.75-1.9541667-8.75-4.375" />
        <path d="M26.0283333 12.559c.701412 1.0334801 1.0821012 2.2510363 1.0943334 3.5 0 4.8323333-5.8765 8.75-13.125 8.75-7.24850003 0-13.12500003-3.9141667-13.12500003-8.7465.01168117-1.248701.39154021-2.4661979 1.092-3.5" />
      </g>
    </svg>
  );
};

const { string } = PropTypes;

IconLogo.defaultProps = {
  className: null,
};

IconLogo.propTypes = {
  className: string,
};

export default IconLogo;
