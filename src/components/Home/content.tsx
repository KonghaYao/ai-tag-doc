import { Show, createSelector, createSignal } from "solid-js";
import { EditorInfo, GalleryInfo } from "./EditorInfo";

export const Content = () => {
    const [site, setSite] = createSignal("gallery");
    const isSite = createSelector(site);
    return (
        <>
            <aside class="mx-[10vw] h-80 overflow-visible relative w-[50rem]">
                <Show when={isSite("editor")}>
                    <EditorInfo></EditorInfo>
                </Show>
                <Show when={isSite("gallery")}>
                    <GalleryInfo></GalleryInfo>
                </Show>
            </aside>
            <div class="flex gap-2 flex-row-reverse">
                <button
                    class="ring-1 ring-slate-600 rounded px-4 text-xl"
                    classList={{
                        "bg-green-600 text-white": isSite("editor"),
                    }}
                    onclick={() => setSite("editor")}>
                    主页
                </button>
                <button
                    class="ring-1 ring-slate-600 rounded px-4 text-xl"
                    classList={{
                        "bg-green-600 text-white": isSite("gallery"),
                    }}
                    onclick={() => setSite("gallery")}>
                    图库
                </button>
                <a
                    href="/zh_cn/introduction"
                    class="ring-1 ring-slate-600 bg-blue-600 text-white rounded px-4 text-xl"
                    onclick={() => setSite("gallery")}>
                    开始阅读
                </a>
            </div>
        </>
    );
};
