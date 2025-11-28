import Form from 'next/form';
import { GoodsIndexResponse } from '@shared/types/goods';

export default async function Goods() {
  const data = await fetch('http://localhost:4000/api/v1/goods');
  const { filtered, currentSeries }: GoodsIndexResponse = await data.json();
  console.log(currentSeries);

  return (
    <div>
      <main className='p-8'>
        <h1 className="text-3xl">グッズ一覧</h1>
        <Form action="/filter">
          <div className="py-3">
            <div className="my-5">
              <select className="border rounded-sm p-1" name="series">
                <option value="">シリーズを選択してください</option>
                {filtered.map((goods) => (
                  <option key={goods.id} value={goods.id}>{goods.title}</option>
                ))}
              </select>
            </div>

            <div className="my-5">
              <h3 className="text-xl mb-1">メンバー</h3>
              {currentSeries.members.map((member) => (
                <div key={member.member} className="ml-2 mb-1">
                  <input className='align-middle mr-1' type="radio" name="member" id={member.member} value={member.member} />
                  <label htmlFor={member.member}>{member.member}</label>
                </div>
              ))}
            </div>

            <div className="my-5">
              <h3 className="text-xl mb-1">ステータス</h3>
              <div className="flex">
                <div className="ml-2 mb-0.5 mr-2">
                  <input className='align-middle mr-1' type="checkbox" name="completed" id="completed" />
                  <label className="text-gray-400" htmlFor="completed">交換済</label>
                </div>
                <div className="ml-2 mb-0.5 mr-2">
                  <input className='align-middle mr-1' type="checkbox" name="negotiating" id="negotiating" />
                  <label className="text-pink-400" htmlFor="negotiating">交渉中</label>
                </div>
                <div className="ml-2 mb-0.5 mr-2">
                  <input className='align-middle mr-1' type="checkbox" name="unexchanged" id="unexchanged" />
                  <label className="text-sky-400" htmlFor="unexchanged">未交換</label>
                </div>
              </div>
            </div>

            <div className="my-5 border rounded-xl border-slate-300 p-5">
              <h2 className="text-2xl mb-1">KAI</h2>
              <span className="text-xs text-slate-500 border border-slate-300 px-1.5 py-0.5 rounded-3xl">B9 Unlimited</span>
              <div className='flex justify-between mt-4'>
                <div className="border rounded-sm p-1 grid grid-cols-2 text-center items-center w-20 h-20">
                  <div className="text-gray-400">1</div>
                  <div className="text-pink-400">2</div>
                  <div className="text-sky-400 grid col-[1/3]">3</div>
                </div>
                <div className="border rounded-sm p-1 grid grid-cols-2 text-center items-center w-20 h-20">
                  <div className="text-gray-400">2</div>
                  <div className="text-pink-400">2</div>
                  <div className="text-sky-400 grid col-[1/3]">3</div>
                </div>
                <div className="border rounded-sm p-1 grid grid-cols-2 text-center items-center w-20 h-20">
                  <div className="text-gray-400">3</div>
                  <div className="text-pink-400">2</div>
                  <div className="text-sky-400 grid col-[1/3]">3</div>
                </div>
                <div className="border rounded-sm p-1 grid grid-cols-2 text-center items-center w-20 h-20">
                  <div className="text-gray-400">1</div>
                  <div className="text-pink-400">3</div>
                  <div className="text-sky-400 grid col-[1/3]">3</div>
                </div>
                <div className="border rounded-sm p-1 grid grid-cols-2 text-center items-center w-20 h-20">
                  <div className="text-gray-400">1</div>
                  <div className="text-pink-400">2</div>
                  <div className="text-sky-400 grid col-[1/3]">2</div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </main>
    </div>
  );
}
