import { SITE } from "../../consts";

export const EditorInfo = () => {
    return (
        <>
            <div class="w-80" style="aspect-ratio: 9 / 16;">
                <img
                    class="rounded-md ring-2 h-full w-full ring-slate-500 object-cover object-left"
                    src={
                        "https://ik.imagekit.io/dfidfiskkxn/docs/main_page.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675326209879"
                    }></img>
            </div>
            <span class="absolute -right-4  top-24 text-sm -rotate-12 bg-slate-800/70 py-2 w-[200%] -z-10 px-40  text-right rounded-xl ring-2 ring-slate-800">
                ◀ 这是魔导绪论 (❁´◡`❁)
            </span>
            <span class="absolute  -right-4 top-36 text-sm rotate-3  bg-slate-800/70 py-2 w-[200%] -z-10 px-8  text-right rounded-xl ring-2 ring-slate-800">
                ◀ 快快编辑你的第一条 Prompt 魔咒吧 இ௰இ
            </span>
            <span class="absolute  -right-4 top-4 text-sm rotate-6 bg-slate-800/70 py-2 w-[200%] -z-10 px-8  text-right rounded-xl ring-2 ring-slate-800">
                ◀ 我们可以先试试从图库中拖拽复制呢 ヾ(≧▽≦*)o
            </span>
        </>
    );
};
export const GalleryInfo = () => {
    return (
        <>
            <div class="w-80" style="aspect-ratio: 9 / 16;">
                <iframe
                    class="rounded-md ring-2 h-full w-full ring-slate-500"
                    src={SITE.appUrl + "/gallery.html"}></iframe>
            </div>
            <span class="absolute -right-4  top-24 text-sm -rotate-12 bg-slate-800/70 py-2 w-[200%] -z-10 px-8  text-right rounded-xl ring-2 ring-slate-800">
                ◀ 这是魔导绪论图库 (❁´◡`❁)
            </span>
            <span class="absolute  -right-4 top-36 text-sm rotate-3  bg-slate-800/70 py-2 w-[200%] -z-10 px-8  text-right rounded-xl ring-2 ring-slate-800">
                ◀ 任何人都可以上传 AI 作品哦 இ௰இ
            </span>
            <span class="absolute  -right-4 top-4 text-sm rotate-6 bg-slate-800/70 py-2 w-[200%] -z-10 px-8  text-right rounded-xl ring-2 ring-slate-800">
                ◀ 放心，我们保存了原始的制作数据 ヾ(≧▽≦*)o
            </span>
        </>
    );
};
