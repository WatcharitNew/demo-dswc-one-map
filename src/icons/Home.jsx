import { clsx } from "clsx";

export const Home = ({ className }) => {
  return (
    <svg
      className={clsx({ "size-6": !className }, className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4" fill="white" />
      <path
        d="M19.7135 13.2857V19.7143C19.7135 19.9464 19.6287 20.1473 19.4591 20.317C19.2894 20.4866 19.0885 20.5714 18.8564 20.5714H13.7135V15.4286H10.285V20.5714H5.14211C4.90997 20.5714 4.70908 20.4866 4.53943 20.317C4.36979 20.1473 4.28497 19.9464 4.28497 19.7143V13.2857C4.28497 13.2768 4.2872 13.2634 4.29167 13.2455C4.29613 13.2277 4.29836 13.2143 4.29836 13.2054L11.9993 6.85715L19.7001 13.2054C19.7091 13.2232 19.7135 13.25 19.7135 13.2857ZM22.7001 12.3616L21.8698 13.3527C21.7984 13.433 21.7046 13.4821 21.5885 13.5H21.5484C21.4323 13.5 21.3385 13.4688 21.2671 13.4063L11.9993 5.67858L2.7314 13.4063C2.62426 13.4777 2.51711 13.5089 2.40997 13.5C2.2939 13.4821 2.20015 13.433 2.12872 13.3527L1.29836 12.3616C1.22693 12.2723 1.19568 12.1674 1.20461 12.0469C1.21354 11.9263 1.26265 11.8304 1.35193 11.7589L10.9814 3.73661C11.2671 3.50447 11.6064 3.3884 11.9993 3.3884C12.3921 3.3884 12.7314 3.50447 13.0171 3.73661L16.285 6.46875V3.85715C16.285 3.73215 16.3251 3.62947 16.4055 3.54911C16.4859 3.46875 16.5885 3.42858 16.7135 3.42858H19.285C19.41 3.42858 19.5126 3.46875 19.593 3.54911C19.6734 3.62947 19.7135 3.73215 19.7135 3.85715V9.32143L22.6466 11.7589C22.7359 11.8304 22.785 11.9263 22.7939 12.0469C22.8028 12.1674 22.7716 12.2723 22.7001 12.3616Z"
        fill="currentColor"
      />
    </svg>
  );
};
