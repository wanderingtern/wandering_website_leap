export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              Wandering Tern Energy Consulting
            </h3>
            <p className="text-sm">
              Alaska's trusted independent energy rating professional
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">
              © {new Date().getFullYear()} Wandering Tern Energy Consulting.
              All rights reserved.
            </p>
            <p className="text-sm mt-1">
              AHFC Certified Energy Rater
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
