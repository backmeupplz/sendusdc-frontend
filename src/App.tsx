export default function SendUSDCInfo() {
  return (
    <div className="hero min-h-screen bg-base-200 dark:bg-base-300">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-4">Send USDC</h1>
          <p className="mb-6 text-lg">
            This is the easiest way to send and receive USDC.
          </p>

          <a href="sms:+18886558732" className="btn btn-primary btn-lg">
            Text +1 888 655 8732
          </a>

          <p className="mt-4 text-sm opacity-70">
            By texting this number first, you consent to receive SMS messages
            from it.
          </p>
        </div>
      </div>
    </div>
  )
}
