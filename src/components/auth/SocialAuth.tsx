const providers = ["Google", "Apple"];

const SocialAuth = () => {
  return (
    <div className="mt-7">
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-border" />
        <span className="text-[10px] font-semibold tracking-wide text-muted-foreground">
          OR CONTINUE WITH
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-5">
        {providers.map((provider) => (
          <button
            key={provider}
            type="button"
            className="h-[46px] rounded-[10px] border border-border bg-card text-[13px] font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            {provider}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialAuth;
