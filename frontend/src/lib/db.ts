import Database from "better-sqlite3";
import path from "node:path";

export type Profile = {
  id: number;
  name: string;
  team: string;
  position: string;
  comment: string;
  tagline: string;
  introduction: string;
  image_path: string;
};

export type Highlight = {
  id: number;
  label: string;
};

const dbPath = path.join(process.cwd(), "local.db");

const defaultProfile: Profile = {
  id: 1,
  name: "오혜진",
  team: "구직자",
  position: "기획자",
  comment: "완성까지 화이팅",
  tagline: "경남에 서식하는 기획자입니다. 재미추구인간.",
  introduction:
    "안녕하세요. 저는 오혜진입니다. 현재 구직 중이며, 프로젝트의 질을 올리는 데에 최선을 다하겠습니다.",
  image_path: "/images/clover-field.svg",
};

const defaultHighlights: Highlight[] = [
  { id: 1, label: "강한 홈런 파워" },
  { id: 2, label: "빠른 주루" },
  { id: 3, label: "이도류 플레이" },
];

function getDb() {
  const db = new Database(dbPath);

  db.exec(`
    CREATE TABLE IF NOT EXISTS profile (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      team TEXT NOT NULL,
      position TEXT NOT NULL,
      uniform_number TEXT NOT NULL,
      tagline TEXT NOT NULL,
      introduction TEXT NOT NULL,
      image_path TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS highlights (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      label TEXT NOT NULL
    );
  `);

  return db;
}

export function getProfile() {
  try {
    const profile = getDb()
      .prepare(
        "SELECT id, name, team, position, uniform_number AS comment, tagline, introduction, image_path FROM profile ORDER BY id LIMIT 1",
      )
      .get() as Profile | undefined;

    return profile ?? defaultProfile;
  } catch (error) {
    console.error(error);
    return defaultProfile;
  }
}

export function getHighlights() {
  try {
    const highlights = getDb().prepare("SELECT id, label FROM highlights ORDER BY id").all() as Highlight[];

    return highlights.length > 0 ? highlights : defaultHighlights;
  } catch (error) {
    console.error(error);
    return defaultHighlights;
  }
}
