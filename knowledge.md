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

## 1.4

1. 'use client'用于实现所谓的"客户端组件"，客户端组件是仅在浏览器端运行的组件，而不是在服务端渲染(SSR)，这主要用于提高性能和优化用户体验，或者确保该组件只在客户端环境运行

2. clsx: a lib to conditionally apply class names when the link is active.

3. 'seeding' in the context of databases?   Populating the database with an initial set of data

4. API layer: APIs are an intermediary layer between application code and database. There are a few cases where you might use an API:
- Using 3rd party services that provide an API.
- when fetching data from the client, you want to have an API layer that runs on server to avoid exposing your database secrets to the client.

5. Next.js uses Server Components to fetch data
- Server Components support promises, providing a simpler solution for asynchronous tasks like data fetching.
- Server Components execute **on the server**, you can keep expensive data fetches and logic on the server and only send the result to the client.
- Since Server Components execute on the server, you can query the database directly without an additional API layer.

6. Sequential & Parallel
- Sequential: network requests depend on the completion of previous requests.
- Parallel: network requests do not depend on each other and can be executed in parallel.

7. When I want to use a waterfall pattern?
To satisfy a condition before making the next request.

8. use `Promise.all()` & `Promise.allSettled()` to initiate all promises at the same time ---- Parallel 

9. Static rendering: data fetching and rendering happens on the server at build time(when you deploy), the result can then be distributed and cached in a Content Delivery Network (CDN).

10. Static rendering is useful for UI with **no data or data that is shared across users**, such as a static blog or a product page.
