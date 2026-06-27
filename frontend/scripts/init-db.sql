DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS highlights;

CREATE TABLE profile (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  team TEXT NOT NULL,
  position TEXT NOT NULL,
  uniform_number TEXT NOT NULL,
  tagline TEXT NOT NULL,
  introduction TEXT NOT NULL,
  image_path TEXT NOT NULL
);

CREATE TABLE highlights (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  label TEXT NOT NULL
);

INSERT INTO profile (
  name,
  team,
  position,
  uniform_number,
  tagline,
  introduction,
  image_path
) VALUES (
  '오혜진',
  '구직자',
  '기획자',
  '완성까지 화이팅',
  '경남에 서식하는 기획자입니다. 재미추구인간.',
  '안녕하세요. 저는 오혜진입니다. 현재 구직 중이며, 프로젝트의 질을 올리는 데에 최선을 다하겠습니다.',
  '/images/clover-field.svg'
);

INSERT INTO highlights (label) VALUES
  ('사례연구'),
  ('사용자조사'),
  ('정리');
