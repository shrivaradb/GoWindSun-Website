import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-slate-900">
      <Container className="text-center space-y-6">
        <h1 className="text-6xl font-extrabold text-slate-900">404</h1>
        <h2 className="text-2xl font-bold text-slate-700">Page Not Found</h2>
        <p className="text-slate-600 max-w-md mx-auto">
          The requested page could not be located on GoWindSun India Private Limited.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-full bg-[#059669] text-white font-semibold shadow-md hover:bg-[#047857] transition-colors"
        >
          Return to Homepage
        </Link>
      </Container>
    </div>
  );
}
