export default function Loading() {
  return (
    <>
      <div className="flex justify-center pt-32 pb-32">
        <div
          style={{ borderTopColor: "transparent" }}
          className="w-32 h-32 border-4 border-red-400 border-double rounded-full animate-spin"
        ></div>
      </div>
    </>
  );
}
