export const formatVnd = (amount) => `${String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}₫`

// A tuition figure with an optional struck published price.
export function Price({ amount, compareAt, className = '', compareClassName = '' }) {
  return (
    <>
      <div className={`font-mono ${className}`}>{formatVnd(amount)}</div>
      {compareAt && (
        <div className={`line-through ${compareClassName}`.trim()}>{formatVnd(compareAt)}</div>
      )}
    </>
  )
}
