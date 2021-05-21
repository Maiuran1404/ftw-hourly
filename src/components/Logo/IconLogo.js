import React from 'react';
import PropTypes from 'prop-types';

const IconLogo = props => {
  const { className, format, ...rest } = props;

  if (format === 'desktop') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="35"
        fill="none"
        viewBox="0 0 174 95"
      >
        <path
          fill="#000"
          d="M24.836 60.754c-.553.465-1.229 1.04-2.025 1.727a21.642 21.642 0 01-2.657 1.925A17.46 17.46 0 0116.934 66c-1.151.443-2.38.664-3.686.664a9.818 9.818 0 01-3.453-.63A8.615 8.615 0 016.84 64.24c-.863-.819-1.56-1.826-2.092-3.021-.51-1.196-.764-2.568-.764-4.117 0-.952.111-1.915.332-2.89a9.658 9.658 0 011.196-2.788c.553-.908 1.273-1.749 2.158-2.524.907-.797 2.014-1.483 3.32-2.058 1.328-.598 2.889-1.063 4.682-1.395 1.793-.332 3.851-.498 6.176-.498h2.988v-3.054c0-1.019-.177-1.937-.531-2.756a5.933 5.933 0 00-1.494-2.092c-.62-.598-1.373-1.052-2.258-1.361-.864-.333-1.826-.498-2.889-.498-.797 0-1.649.088-2.557.265-.885.177-1.781.432-2.689.764a20.52 20.52 0 00-2.557 1.162c-.819.443-1.538.93-2.158 1.46l-.598-.331-1.328-4.848a27.512 27.512 0 013.72-1.726 27.566 27.566 0 013.419-1.096 21.848 21.848 0 013.154-.531c.996-.111 1.948-.166 2.856-.166 4.14 0 7.205.863 9.197 2.59 2.014 1.704 3.021 4.272 3.021 7.703v17.332c0 .287.023.642.067 1.062.044.399.144.786.299 1.162.177.377.42.697.73.963.332.266.775.399 1.328.399.31 0 .72-.045 1.229-.133a6.97 6.97 0 001.527-.532v3.52A18.68 18.68 0 0133.104 66c-1.063.443-2.092.664-3.088.664-.908 0-1.66-.188-2.258-.564a4.868 4.868 0 01-1.461-1.395 7.832 7.832 0 01-.897-1.892 29.011 29.011 0 01-.564-2.06zm0-11.953h-2.523c-2.59 0-4.66.188-6.21.564-1.527.354-2.7.841-3.519 1.461-.797.598-1.328 1.295-1.594 2.092a8.473 8.473 0 00-.365 2.49c0 .93.133 1.76.398 2.49.266.73.631 1.362 1.096 1.893.487.51 1.063.897 1.727 1.162a5.757 5.757 0 002.158.399c.598 0 1.206-.067 1.826-.2a9.596 9.596 0 002.026-.763c.73-.377 1.494-.875 2.29-1.495.82-.62 1.716-1.416 2.69-2.39V48.8zM38.78 30.805h7.106l7.836 24.37 1.46 5.778h.665l1.394-5.777 7.902-24.371h6.508L58.437 66H51.93L38.78 30.805zm40.674 0h6.309V66h-6.309V30.805zm3.188-7.637a4.08 4.08 0 01-1.561-.299 3.795 3.795 0 01-1.262-.83 3.886 3.886 0 01-.83-1.229 4.17 4.17 0 01-.299-1.593c0-.576.111-1.118.332-1.627.222-.51.51-.952.864-1.328a3.909 3.909 0 011.295-.864 3.957 3.957 0 011.593-.332c.532 0 1.03.111 1.494.332.487.2.908.487 1.262.864.354.376.631.819.83 1.328.2.487.3 1.007.3 1.56 0 .598-.112 1.151-.333 1.66-.221.488-.52.908-.896 1.262a4.083 4.083 0 01-1.262.797c-.487.2-.996.299-1.527.299zm17.996 12.684h-7.106l.531-3.254c1.727-.355 3.11-.797 4.15-1.328 1.041-.554 1.893-1.24 2.557-2.06.687-.818 1.251-1.803 1.694-2.954.465-1.173.985-2.568 1.56-4.184h2.922v8.733h12.75l-1.328 5.047h-11.422v19.656c0 1.062.155 1.97.465 2.722.332.73.786 1.329 1.361 1.793.576.465 1.273.808 2.092 1.03.819.199 1.727.299 2.723.299 1.018 0 2.025-.089 3.021-.266 1.019-.2 1.981-.465 2.889-.797v3.586a17.893 17.893 0 01-4.416 2.092 15.993 15.993 0 01-4.682.697c-1.483 0-2.822-.21-4.017-.63-1.195-.421-2.225-1.03-3.088-1.827-.841-.797-1.494-1.782-1.959-2.955-.465-1.195-.697-2.557-.697-4.084V35.852zm47.58 24.902c-.554.465-1.229 1.04-2.026 1.727a21.593 21.593 0 01-2.656 1.925A17.438 17.438 0 01140.316 66a10.175 10.175 0 01-3.685.664 9.819 9.819 0 01-3.453-.63 8.61 8.61 0 01-2.955-1.794c-.864-.819-1.561-1.826-2.092-3.021-.509-1.196-.764-2.568-.764-4.117 0-.952.111-1.915.332-2.89a9.657 9.657 0 011.196-2.788c.553-.908 1.272-1.749 2.158-2.524.907-.797 2.014-1.483 3.32-2.058 1.328-.598 2.889-1.063 4.682-1.395 1.793-.332 3.851-.498 6.175-.498h2.989v-3.054c0-1.019-.177-1.937-.531-2.756a5.945 5.945 0 00-1.495-2.092c-.619-.598-1.372-1.052-2.257-1.361-.864-.333-1.827-.498-2.889-.498-.797 0-1.649.088-2.557.265-.885.177-1.782.432-2.689.764-.886.332-1.738.72-2.557 1.162-.819.443-1.538.93-2.158 1.46l-.598-.331-1.328-4.848a27.54 27.54 0 013.719-1.726 27.53 27.53 0 013.42-1.096 21.85 21.85 0 013.154-.531 25.91 25.91 0 012.856-.166c4.139 0 7.205.863 9.197 2.59 2.014 1.704 3.021 4.272 3.021 7.703v17.332c0 .287.022.642.067 1.062.044.399.144.786.299 1.162.177.377.42.697.73.963.332.266.775.399 1.328.399.31 0 .72-.045 1.229-.133a6.968 6.968 0 001.527-.532v3.52A18.652 18.652 0 01156.486 66c-1.062.443-2.091.664-3.088.664-.907 0-1.66-.188-2.257-.564a4.858 4.858 0 01-1.461-1.395 7.833 7.833 0 01-.897-1.892 29.215 29.215 0 01-.564-2.06zm0-11.953h-2.524c-2.59 0-4.659.188-6.209.564-1.527.354-2.7.841-3.519 1.461-.797.598-1.328 1.295-1.594 2.092a8.49 8.49 0 00-.365 2.49c0 .93.133 1.76.398 2.49.266.73.631 1.362 1.096 1.893.487.51 1.062.897 1.727 1.162a5.754 5.754 0 002.158.399c.597 0 1.206-.067 1.826-.2a9.583 9.583 0 002.025-.763c.731-.377 1.494-.875 2.291-1.495.819-.62 1.716-1.416 2.69-2.39V48.8z"
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
