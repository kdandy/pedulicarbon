export default function NotFound() {
  return (
    <div className="h-[calc(100vh-80px)] flex items-center justify-center flex-col gap-5">
      <p className="text-3xl font-bold">404</p>
      <p className="text-2xl font-medium">Maaf, halaman ini tidak ada</p>
      <a href="/" className="shadow-md text-xl hover:shadow-2xl px-[1.5rem] py-[1.2rem] bg-green-600 rounded-full text-white">Kembali ke halaman utama</a>
    </div>
  );
}