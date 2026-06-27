import { getHighlights, getProfile } from "@/lib/db";

export default function Home() {
  const profile = getProfile();
  const highlights = getHighlights();

  return (
    <main className="min-h-screen bg-[url('/images/star-trails.svg')] bg-cover bg-center px-6 py-10 text-slate-900">
      {/* 자기소개 전체 화면: 학생들이 이름, 소속, 설명을 바꿔보는 첫 실습 영역 */}
      <section className="mx-auto max-w-4xl rounded-lg bg-white/85 p-8 shadow-sm backdrop-blur-sm">
        <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-center">
          {/* 프로필 사진 영역: public/images/clover-field.svg 파일을 화면에 보여줌 */}
          <img
            src={profile.image_path}
            alt={`${profile.name} 프로필 사진`}
            className="h-72 w-full rounded-lg object-cover shadow-sm"
          />

          <div>
            <p className="text-sm font-bold text-blue-600">Profile</p>
            <h1 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">{profile.name}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-700">{profile.tagline}</p>
          </div>
        </div>

        {/* 기본 정보 카드: 바이브 코딩으로 가장 바꾸기 쉬운 데이터 영역 */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-blue-50 p-5">
            <p className="text-sm font-bold text-slate-500">이름</p>
            <p className="mt-2 text-xl font-black text-slate-950">{profile.name}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-blue-50 p-5">
            <p className="text-sm font-bold text-slate-500">소속</p>
            <p className="mt-2 text-xl font-black text-slate-950">{profile.team}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-blue-50 p-5">
            <p className="text-sm font-bold text-slate-500">포지션</p>
            <p className="mt-2 text-xl font-black text-slate-950">{profile.position}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-blue-50 p-5">
            <p className="text-sm font-bold text-slate-500">프로젝트에 임하는 자세</p>
            <p className="mt-2 text-xl font-black text-slate-950">{profile.comment}</p>
          </div>
        </div>

        {/* 소개 문장 영역: 학생들이 문구와 스타일을 바꾸는 연습용 섹션 */}
        <div className="mt-8 rounded-lg border border-slate-200 p-6">
          <h2 className="text-2xl font-black text-slate-950">자기소개</h2>
          <p className="mt-4 leading-8 text-slate-700">{profile.introduction}</p>
        </div>

        {/* 좋아하는 것 목록: 항목 추가/삭제 실습에 쓰기 좋은 영역 */}
        <div className="mt-8">
          <h2 className="text-2xl font-black text-slate-950">특징</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {highlights.map((highlight) => (
              <div key={highlight.id} className="rounded-lg bg-slate-100 px-4 py-3 text-center font-bold text-slate-700">
                {highlight.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
