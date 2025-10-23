import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

// Expands a path that starts with ~ to the user's home directory.
export function expandHome(filepath: string): string {
  if (!filepath) return filepath;
  if (filepath.startsWith('~')) return path.join(os.homedir(), filepath.slice(1));
  return filepath;
}

// Safely reads and parses a JSON file. Returns null if reading or parsing fails.
export function safeReadJsonSync(p: string): any | null {
  try {
    const raw = fs.readFileSync(p, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}
