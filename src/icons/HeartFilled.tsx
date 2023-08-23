interface HeartFilledProps {
  className?: string;
}

const HeartFilled = ({ className, ...props }: HeartFilledProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <path
        d="M23.9151 8.18707C21.7916 6.37739 18.6334 6.7029 16.6842 8.71409L15.9208 9.50074L15.1574 8.71409C13.2121 6.7029 10.05 6.37739 7.92641 8.18707C5.49284 10.2641 5.36496 13.992 7.54277 16.2434L15.0411 23.9859C15.5255 24.4858 16.3122 24.4858 16.7965 23.9859L24.2949 16.2434C26.4766 13.992 26.3487 10.2641 23.9151 8.18707Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HeartFilled;
