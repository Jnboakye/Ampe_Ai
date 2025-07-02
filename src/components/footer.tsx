// components/Footer.js

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-90 py-8 text-center text-gray-400 text-sm">
      <p>© {new Date().getFullYear()} Ampe Ai. All rights reserved.</p>
      <p className="mt-2">
        Built with ❤️ by Jeffrey Boakye
      </p>
    </footer>
  );
}
