## 1.3

1. 使用@作为路径开头，用于表示一个特定的路径别名，用于简化模块导入路径，在tsconfig.json的paths中配置

2. 使用CSS模块使CSS类默认作用于组件的本地范围，减少全局CSS类污染

3. Next.js downloads font files at build time and hosts them with your other static assets so that there are no additional network requests.

4. <body className={`${inter.className} antialiased`}>{children}</body> 其中antialiased的作用是抗锯齿，smooths out the font

5. 在fonts.ts中引入字体：
```ts
import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] }); 

export const lusitana = Lusitana({
    weight:['400', '700'],  // 去google fonts官网查看仅支持的 weight
    subsets:['latin'],
})
```

6. Tailwind CSS 使用一系列预定义的屏幕尺寸（如 sm、md、lg、xl），每个尺寸都对应一个媒体查询断点。这些断点用于在CSS中根据屏幕尺寸应用不同的样式。
```ts
<Image
	src="/hero-desktop.png"
	width={1000}
	height={760}
	className="hidden md:block"
	alt="Screenshots of the dashboard project showing desktop version"
/>
<Image
	src="/hero-mobile.png"
	width={560}
	height={620}
	className="block md:hidden"
	alt="Screenshots of the dashboard project showing mobile version"
/>
// 图片响应式布局示例
```
所以字体和图像应该指定尺寸来避免 layout shift (布局偏移)，否则浏览器必须下载额外的资源

7. <Link /> allows you to do client-side navigation with JS, <a> leads to a full page refresh on each page navigation.

Because splitting code by routes means that pages become isolated. If a certain page throws an error, the rest of the application will still work.

Futhermore, in production, whenever <Link /> components appear in the browser's viewport, Next.js automatically prefetches the code for the linked route in the background. By the time the user clicks the link, the code for the destination page will already be loaded in the background, and this is what makes the page transition near-instant!