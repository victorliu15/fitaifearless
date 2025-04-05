function ProgressBar({ percentage = 0 }) {
  const barColor = percentage > 100 ? "bg-red-600" : "bg-blue-600";
  return (
    <div className="w-full bg-gray-200 rounded-full">
      <div
        className={`${barColor} text-xl font-medium text-blue-100 text-center p-1 leading-none rounded-full`}
        style={{ width: `${Math.min(percentage, 100)}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
}

export default ProgressBar;
