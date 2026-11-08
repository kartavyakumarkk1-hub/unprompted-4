export type SavedRecording = {
  id: string; title: string; createdAt: number; duration: number; mimeType: string;
  blob: Blob; topic: string; kind: 'practice' | 'debate'; notes: string;
  ratings?: Record<string, number>; weakness?: string; target?: string;
}

const DB_NAME = 'unprompted-local';
const STORE = 'recordings';
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(STORE, { keyPath: 'id' });
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
export async function getRecordings(): Promise<SavedRecording[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const req = db.transaction(STORE, 'readonly').objectStore(STORE).getAll();
    req.onsuccess = () => resolve((req.result as SavedRecording[]).sort((a,b) => b.createdAt-a.createdAt));
    req.onerror = () => reject(req.error);
  });
}
export async function saveRecording(item: SavedRecording): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const req = db.transaction(STORE, 'readwrite').objectStore(STORE).put(item);
    req.onsuccess = () => resolve(); req.onerror = () => reject(req.error);
  });
}
export async function deleteRecording(id: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const req = db.transaction(STORE, 'readwrite').objectStore(STORE).delete(id);
    req.onsuccess = () => resolve(); req.onerror = () => reject(req.error);
  });
}
