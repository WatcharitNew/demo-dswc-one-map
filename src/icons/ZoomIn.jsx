import { clsx } from "clsx";

export const ZoomIn = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx({ "size-6": !className }, className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 3.75001C9.61358 3.75001 8.73583 3.9246 7.91689 4.26382C7.09794 4.60304 6.35382 5.10024 5.72703 5.72704C5.10023 6.35384 4.60303 7.09795 4.26381 7.9169C3.92459 8.73585 3.75 9.61359 3.75 10.5C3.75 11.3864 3.92459 12.2642 4.26381 13.0831C4.60303 13.9021 5.10023 14.6462 5.72703 15.273C6.35382 15.8998 7.09794 16.397 7.91689 16.7362C8.73583 17.0754 9.61358 17.25 10.5 17.25C12.2902 17.25 14.0071 16.5389 15.273 15.273C16.5388 14.0071 17.25 12.2902 17.25 10.5C17.25 8.7098 16.5388 6.99291 15.273 5.72704C14.0071 4.46117 12.2902 3.75001 10.5 3.75001ZM2.25 10.5C2.25017 9.17511 2.56944 7.86973 3.18079 6.69431C3.79214 5.51889 4.67759 4.50799 5.76224 3.74713C6.84689 2.98627 8.09883 2.49784 9.41216 2.32314C10.7255 2.14843 12.0616 2.29261 13.3074 2.74347C14.5533 3.19432 15.6722 3.9386 16.5695 4.91333C17.4669 5.88807 18.1163 7.06459 18.4628 8.34337C18.8094 9.62216 18.8428 10.9656 18.5603 12.26C18.2778 13.5545 17.6878 14.7618 16.84 15.78L21.53 20.47C21.6037 20.5387 21.6628 20.6215 21.7038 20.7135C21.7448 20.8055 21.7668 20.9048 21.7686 21.0055C21.7704 21.1062 21.7518 21.2062 21.7141 21.2996C21.6764 21.393 21.6203 21.4778 21.549 21.549C21.4778 21.6203 21.393 21.6764 21.2996 21.7141C21.2062 21.7519 21.1062 21.7704 21.0055 21.7686C20.9048 21.7668 20.8055 21.7448 20.7135 21.7038C20.6215 21.6628 20.5387 21.6037 20.47 21.53L15.78 16.84C14.5752 17.8435 13.1094 18.4829 11.5543 18.6833C9.99922 18.8837 8.41922 18.6367 6.99941 17.9714C5.5796 17.3061 4.37878 16.25 3.53763 14.9267C2.69648 13.6035 2.24983 12.068 2.25 10.5ZM10.5 6.75001C10.6989 6.75001 10.8897 6.82903 11.0303 6.96968C11.171 7.11033 11.25 7.3011 11.25 7.50001V9.75001H13.5C13.6989 9.75001 13.8897 9.82903 14.0303 9.96968C14.171 10.1103 14.25 10.3011 14.25 10.5C14.25 10.6989 14.171 10.8897 14.0303 11.0303C13.8897 11.171 13.6989 11.25 13.5 11.25H11.25V13.5C11.25 13.6989 11.171 13.8897 11.0303 14.0303C10.8897 14.171 10.6989 14.25 10.5 14.25C10.3011 14.25 10.1103 14.171 9.96967 14.0303C9.82902 13.8897 9.75 13.6989 9.75 13.5V11.25H7.5C7.30109 11.25 7.11032 11.171 6.96967 11.0303C6.82902 10.8897 6.75 10.6989 6.75 10.5C6.75 10.3011 6.82902 10.1103 6.96967 9.96968C7.11032 9.82903 7.30109 9.75001 7.5 9.75001H9.75V7.50001C9.75 7.3011 9.82902 7.11033 9.96967 6.96968C10.1103 6.82903 10.3011 6.75001 10.5 6.75001Z"
        fill="black"
      />
    </svg>
  );
};
