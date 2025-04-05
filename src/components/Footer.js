function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-between p-4 items-center text-disabled">
      <div className="flex space-x-6">
        <a
          href="https://www.hackthenest.org"
          target="_blank"
          className="text-lg hover:underline duration-300"
        >
          built for Hack The Nest
        </a>
      </div>

      <p className="text-lg">© 2025 fitaifearless. All rights reserved.</p>
    </div>
  );
}

export default Footer;
