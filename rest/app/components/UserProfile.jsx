export default async function UserProfile() {
  const res = await fetch("http://localhost:3000/api/user", { cache: "no-store" });
  const data = await res.json();

  return (
    <div className="p-5 bg-sky-300 text-white rounded-lg">
      {Array.isArray(data) ? (
        data.map((e) => (
          <div key={e.id} className="mb-2">
            <p className="text-gray-800 font-semibold ">{e.name} {e.email}</p>
         </div>
        ))
      ) : (
        <div>{JSON.stringify(data)}</div>
      )}
    </div>
  );
}