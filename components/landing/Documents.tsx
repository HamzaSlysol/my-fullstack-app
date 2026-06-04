type DocumentsProps = {
  showHeading?: boolean;
};

const Documents = ({ showHeading = true }: DocumentsProps) => {
  return (
    <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      {showHeading ? (
        <h3 className="font-serif text-3xl text-[#075f42]">
          Documents Required for Umrah and Hajj
        </h3>
      ) : null}

      <div className={`${showHeading ? "mt-8" : ""} grid gap-8 md:grid-cols-2`}>
        <div>
          <h4 className="text-xl font-bold text-[#202020]">Umrah Documents</h4>

          <ul className="mt-4 list-disc space-y-3 pl-5 text-left text-[#40505a]">
            <li>Valid passport with at least 6 months validity</li>
            <li>Passport-sized photographs with white background</li>
            <li>Umrah visa or eVisa approval</li>
            <li>CNIC / National ID copy</li>
            <li>Confirmed return flight tickets</li>
            <li>Hotel booking confirmation</li>
            <li>Vaccination certificates if required</li>
            <li>Marriage or birth certificate if traveling with family</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-[#202020]">Hajj Documents</h4>

          <ul className="mt-4 list-disc space-y-3 pl-5 text-left text-[#40505a]">
            <li>Valid passport with at least 6 months validity</li>
            <li>Hajj visa approval</li>
            <li>Recent passport-sized photographs</li>
            <li>CNIC / National ID copy</li>
            <li>Completed Hajj application form</li>
            <li>Vaccination certificates</li>
            <li>Confirmed travel itinerary</li>
            <li>Accommodation and package confirmation</li>
            <li>Proof of payment</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Documents;
