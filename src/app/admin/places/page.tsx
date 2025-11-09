import PlacesClient from "./PlacesClient";
import { fetchPlaces } from "./actions";

export default async function AdminPlacesPage() {
  let initialPlaces = [];
  let initialError: string | null = null;

  try {
    initialPlaces = await fetchPlaces();
  } catch (error) {
    initialError =
      error instanceof Error ? error.message : "Failed to load places";
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <p className="text-sm text-slate-400 uppercase tracking-wide mb-2">
            Admin
          </p>
          <h1 className="text-3xl font-bold text-white">Places</h1>
          <p className="text-sm text-slate-400">
            Create, edit, or archive destinations that power the app.
          </p>
        </div>

        <PlacesClient initialPlaces={initialPlaces} initialError={initialError} />
      </div>
    </div>
  );
}
