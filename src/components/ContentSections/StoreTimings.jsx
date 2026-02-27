export default function StoreTimings() {
  const stores = [
    {
      name: "NEWYORK STORE",
      address: "Brooklyn Law School. 250 Joralemon",
      hours: "Monday to Friday : 9am to 8pm",
      email: "Hello@domain.com",
    },
    {
      name: "AMSTERDAM STORE",
      address: "Roeterseiland Campus Building E, 10th Amsterdam",
      hours: "Monday to Friday : 8am to 5pm",
      email: "Hello@domain.com",
    },
    {
      name: "LONDON STORE",
      address: "15-17 Charlotte Street, London",
      hours: "Monday to Friday : 9am to 8pm",
      email: "Hello@domain.com",
    },
  ];

  return (
    <div>
      <div className="max-w-7xl my-15 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {stores.map((store, index) => (
            <div key={index} className="flex-1">
              <h2 className="text-lg font-bold mb-6 tracking-wide">
                {store.name}
              </h2>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{store.address}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{store.hours}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{store.email}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
