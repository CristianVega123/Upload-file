export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0D1229] h-[100vh] text-[#E1E8F5] ">
      <main className="flex justify-center items-center h-[100vh] min-[320px] w-[80%] m-auto flex-col">{children}</main>
    </div>
  );
}
