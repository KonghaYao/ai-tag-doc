import { SITE } from "../../consts";

export default () => (
    <header class="flex  items-baseline  rounded-lg  bg-gradient-to-br  from-gray-700 to-gray-800 px-4 py-2 text-xl font-bold text-white m-4  ">
        <a href="/" class="text-slate-200">
            魔导绪论文档站
        </a>
        <div class="flex-1"></div>
        <div class="flex cursor-pointer  gap-2 text-center text-xs font-thin text-[#f5f3c2]">
            <a href={`${SITE.appUrl}`} target="_blank">
                魔导绪论
            </a>
            <a href={`${SITE.appUrl}/gallery.html#`} target="_blank">
                画廊
            </a>
            <a href="https://github.com/KonghaYao/ai-tag" target="_blank">
                Github
            </a>
            <a href={SITE.author.url}> {"{{ By 江夏尧 }}"}</a>
        </div>
    </header>
);
