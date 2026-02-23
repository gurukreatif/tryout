// types/sync-manager.d.ts
// Type declarations for Background Sync API (not yet in TypeScript standard lib)

interface SyncManager {
  register(tag: string): Promise<void>;
  getTags(): Promise<string[]>;
}

interface ServiceWorkerRegistration {
  readonly sync: SyncManager;
}

interface Window {
  SyncManager: SyncManager;
}
